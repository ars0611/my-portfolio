// 自己紹介
// このファイルの中身のデータはあんま増えないからmapで回さない
import { GoPerson, GoUnmute, GoFlame, GoRocket, GoCrossReference } from "react-icons/go";
import { VscCoffee } from "react-icons/vsc";
import Image from "next/image";

export function AboutMe() {
    return (
        <>
        <h1 className="mb-4 px-16"><GoPerson className="icon" />自己紹介</h1>
        <div className="flex flex-col md:flex-row items-center mb-8">
            <Image src="/Me.png" alt="Me traslated by AI" width={300} height={300} className="rounded-full mx-16 mb-4" priority/>
            <div className="glass p-4 mx-16">
                <h2 className=" mb-2">米浜 匡平</h2><br />
                <p>情報科学専門学校 1年生</p><br />
                <p>高校時代、数学が好きでそのまま大学も数学科へ進むも、大学数学が肌に合わず挫折しました。2025年4月から進路を変更し、2年制の専門学校でプログラミングを学んでいます。</p><br />
                <p>Web開発に興味があり、現在はReactやNext.jsを使った開発を学んでいます。フロントエンドをメインで学んでいますが、バックエンドにも興味があるので今後はREST APIやデータベースについても学んでいきたいです。</p>
            </div>
        </div>

        <h1 className="mb-4 px-16"><GoUnmute className="icon" />好きな曲</h1>
        <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="glass p-4 mb-8 mx-16">
                <iframe width="400" height="225" src="https://www.youtube.com/embed/OwLkGMBYL7I" title="[Alexandros] - 無心拍数 (MMV)" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div className="glass p-4 mb-8 mx-16">
                <iframe width="400" height="225" src="https://www.youtube.com/embed/bCCRV3gMunY" title="ハンブレッダーズ「グー」Lyric Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>

        <h1 className="mb-4 px-16"><GoFlame className="icon" />趣味</h1>
        <div className="flex flex-col mb-8">
            <div className="glass mb-4 p-4 mx-16">
                <h2 className="mb-2"><VscCoffee className="text-[1.5rem] icon" />コーヒー</h2>
                <p>コーヒーが好きで、自宅ではハンドドリップで淹れています。帰宅後に一休みしてコーヒーを飲むことが日々の楽しみです。好きな豆はブラジルで、苦味の強いコーヒーが好みです。</p>
            </div>
            <div className="glass mb-4 p-4 mx-16">
                <h2 className="mb-2"><GoRocket className="text-[1.5rem] icon" />競技プログラミング</h2>
                <p>AtCoder(Algo)メイン。題意を理解し、自分が知っているアルゴリズムやデータ構造を駆使して解くことが、自分の好きだった高校数学に近しいものを感じて楽しいです。競技プログラミングでのコーディングが勉強の息抜きになっています。</p>
            </div>
        </div>

        <h1 className="mb-4 px-16"><GoCrossReference className="icon" />一言</h1>
        <div className="glass p-4 mb-8 mx-16">
            <p>目指すはつよつよエンジニア！技術でめんどくさいを解決したいです。</p>
        </div>
        </>

    );
}