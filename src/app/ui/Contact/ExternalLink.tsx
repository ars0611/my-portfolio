// 外部リンクの紹介
import { BsTwitter } from "react-icons/bs";
import { GoPaperclip, GoRocket } from "react-icons/go";
import { VscGithubInverted } from "react-icons/vsc";

interface ExternalLink {
    id: number;
    name: string;
    url: string;
    icon: React.ReactNode;
    description: string;
}

// 外部リンクのデータ
const ExternalLinks: ExternalLink[] = [
    {
    id: 1,
    name: "Twitter",
    url: "https://x.com/heigineer",
    icon: <BsTwitter />,
    description: "競技プログラミングや開発の勉強などの合間にひとりごとをつぶやいてます。",
}, {
    id: 2,
    name: "Github",
    url: "https://github.com/ars0611",
    icon: <VscGithubInverted />,
    description: "私のプロジェクトやコードを公開しています。このサイトのソースコードもこちらで確認できます。",
},{
    id: 3,
    name: "AtCoder",
    url: "https://atcoder.jp/users/ars0611",
    icon: <GoRocket />,
    description: "競技プログラミングのプロフィールとコンテスト履歴はこちらで確認できます。",
}];


export function ExternalLink() {
    return(
        <>
        <h1 className=" mb-4 px-16"><GoPaperclip className="icon" />各種リンク</h1>
        <div className="glass mx-16 mb-8 p-4">
            {ExternalLinks.map((link, index) => (
                <div key={link.id}> {/* <></>だとエラーで怒られる */}
                <a key={link.id} href={link.url} className="flex items-center btn" target="_blank" rel="noopener noreferrer"> {/* target=_blankを使うならrelは脆弱性対策で必須。これも初知りだ。 */}
                    <div className="text-[1.5rem]">{link.icon}</div>
                    <div className="ml-4">
                        <h3 className="font-bold">{link.name}</h3>
                        <p className="text-sm">{link.description}</p>
                    </div>
                </a>
                {index !== ExternalLinks.length - 1 && <hr className="my-2 border-t border-gray-300" />} {/* 最後の要素以外に区切り線を表示 */}
                </div>
            ))}
        </div>
        </>
    );
}