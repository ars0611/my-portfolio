// 活動の紹介
import { GoFileDirectory } from "react-icons/go";
import Image from "next/image";

interface Work {
    id: number;
    title: string;
    date: string;
    description: string;
    src: string;
    link?: string;
    github?: string;
}

// 活動のデータ
const works: Work[] = [
    {
        id: 1,
        title: "ポートフォリオサイト（当サイト）",
        date: "2025.09",
        description: "Next.js使用して作成したポートフォリオサイトです。自己紹介や個人ブログを掲載しています。",
        src: "/portfolio.png",
        link: "https://example.com",
        github: "https://github.com/ars0611/my-portfolio"
    },
    {
        id: 2,
        title: "AtCoder",
        date: "2025.07 - 現在",
        description: "Highest Rate：522（茶）, Perf：1018（9/27現在）主にABCにPythonで参加しています。年内に緑色への昇格を目指します。",
        src: "/AtCoder.png",
        link: "https://atcoder.jp/users/ars0611",
        github: "https://github.com/ars0611/AtCoder"
    },
];

export function Works() {
    return(
        <>
        <h1 className="mb-4 px-16"><GoFileDirectory className="icon" />活動</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {works.map(work =>
            <div className="glass mx-16 mb-8 p-4" key={work.id}>
                <div className="flex justify-center">
                    <Image src={work.src} alt={work.title} width={400} height={200} className="mb-4 rounded-lg shadow-lg w-auto h-auto" priority />
                </div>
                <h2>{work.title}</h2>
                <p className="text-sm text-gray-400">{work.date}</p>
                <p>{work.description}</p>
                {work.link && (
                    <p>
                        参照：<a href={work.link} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">{work.link}</a> {/* target=_blankを使うならrelは脆弱性対策で必須。 */}
                    </p>
                )}
                {work.github && (
                    <p>
                        GitHubリポジトリ：<a href={work.github} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">{work.github}</a>
                    </p>
                )}
            </div>
        )}
        </div>
        </>
    );
}