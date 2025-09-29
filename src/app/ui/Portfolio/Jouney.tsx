// 学歴・職歴の紹介
import { GoMortarBoard } from "react-icons/go";

interface JourneyItem {
    id: number;
    period: string;
    title: string;
    description: string;
}

// 学歴・職歴のデータ
const journey: JourneyItem[] = [
    {
        id: 1,
        period: "2020.04 - 2023.03",
        title: "神奈川県立平塚江南高等学校 普通科（卒業）",
        description: "理系クラスに所属していました。数学が得意だった半面、物理化学が大の苦手でした。",
    },
    {
        id: 2,
        period: "2023.04 - 2025.03",
        title: "東京理科大学 理学部第一部 数学科（中退）",
        description: "高校時代の数学好きが高じて数学科に進学するも、大学数学が肌に合わず挫折。2年在籍しましたが、2025年3月に中退しました。",
    },
    {
        id: 3,
        period: "2025.04 - 2027.03(予定)",
        title: "情報科学専門学校 情報処理科（在学中）",
        description: "2025年4月から2年制の専門学校に進学し、プログラミングを学んでいます。資格取得やWeb開発を中心に学習中です。",
    },
    {
        id: 4,
        period: "2027.04 - 20XX.YY ",
        title: "？？？",
        description: "現在就職活動中です。Web系企業を中心に応募しています。",
    }
];

export function Journey() {
    return(
        <>
        <h1 className="mb-4 px-16"><GoMortarBoard className="icon" />キャリア</h1>
        <div className="relative">
            <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 "> {/* 親。左右中央ぞろえ。 */}
                <div className="w-1 bg-green-400 h-full opacity-80" /> {/* 縦線。親の高さいっぱいまでひいちゃおう。 */}
            </div>
            {journey.map(item => 
                <div className="glass mx-16 mb-8 px-4 pt-4" key={item.id}>
                    <div key={item.id} className="mb-4">
                    <h2>{item.title}</h2>
                    <p className="text-sm text-gray-400">{item.period}</p>
                    <p>{item.description}</p>
                    </div>
                </div>
            )}
        </div>
        </>
    )
}