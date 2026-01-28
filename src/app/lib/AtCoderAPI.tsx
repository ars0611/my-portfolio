import 'server-only';
import { AtCoderHistory, HighestRecords } from "./definition";

const JST_OFFSET_MS = 9 * 60 * 60 * 1000;

// 次の月曜0時までの秒数を返す関数
function secondsUltilNextMondayJST(hour = 0, minute = 0) {
    const now = new Date(Date.now() + JST_OFFSET_MS); // JSTに寄せる
    const day = now.getUTCDay();
    const targetDay = 1; // 月曜日
    const daysUntil = (targetDay - day + 7) % 7; // 次の月曜までの日にち
    const target = new Date(Date.UTC( // 今日の0時
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        hour,
        minute,
        0
    ))
    target.setUTCDate(target.getUTCDate() + daysUntil);
    if (target.getTime() <= now.getTime()) { //　今日が月曜ですでに0時を回ってるとき翌週に飛ばす
        target.setUTCDate(target.getUTCDate() + 7);
    }
    return Math.max(60, Math.ceil((target.getTime() - now.getTime()) / 1000)); // 極端に短くなることを避けるために最低60秒に設定
}

// AtCoderの成績表をjsonで返すエンドポイントを叩く関数
async function fetchAtCoderJson(url: string): Promise<AtCoderHistory[]> {
    // レート変動は週末に行われるので月曜0時を基準にキャッシュ
    const res = await fetch(url, {
        next: {revalidate: secondsUltilNextMondayJST()},
        cache: "force-cache",
    });
    if (!res.ok) {
        throw new Error(`AtCoder fetch failed: ${res.status} ${res.statusText}`);
    }
    return res.json() as Promise<AtCoderHistory[]>;
}

// レートとパフォの最高値を返す関数
export async function getHighestRecords(userId = "ars0611"): Promise<HighestRecords> {
    const histories = await fetchAtCoderJson(`https://atcoder.jp/users/${userId}/history/json`);
    const highestRating = histories.reduce((m, x) => Math.max(m, x.NewRating), -Infinity);
    const highestPerformance = histories.reduce((m, x) => Math.max(m, x.Performance), -Infinity);
    return {
        highestRating: Number.isFinite(highestRating) ? String(highestRating) : "-",
        highestPerformance: Number.isFinite(highestPerformance) ? String(highestPerformance) : "-"
    } as HighestRecords
}
