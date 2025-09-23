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
        <h1 className="text-2xl font-bold mb-4 text-[#DFFF0B] px-32"><GoPaperclip className="inline-block mr-2" />各種リンク</h1>
        <div className="bg-gray-200/30 backdrop-blur-lg rounded-md border border-[#D4CEFF] shadow-lg mx-32 mb-4">
            {ExternalLinks.map(link => (
                <a key={link.id} href={link.url} className="flex items-center p-4 hover:bg-green-400/40 rounded-md m-4" target="_blank" rel="noopener noreferrer">
                    <div className="text-[1.5rem]">{link.icon}</div>
                    <div className="ml-4">
                        <h3 className="font-bold">{link.name}</h3>
                        <p className="text-sm">{link.description}</p>
                    </div>
                </a>
            ))}
        </div>
        </>
    );
}