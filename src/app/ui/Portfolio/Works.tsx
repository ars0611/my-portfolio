import { GoFileDirectory } from "react-icons/go";

interface Work {
    id: number;
    title: string;
    date: string;
    description: string;
    link?: string;
    github?: string;
}

const works: Work[] = [
    {
        id: 1,
        title: "ポートフォリオサイト",
        date: "2025.09",
        description: "Next.jsとTailwind CSSを使用して作成したポートフォリオサイト。自己紹介や個人ブログを掲載。",
        link: "https://example.com",
        github: "https://github.com/ars0611/my-portfolio"
    },
    {
        id: 2,
        title: "AtCoder",
        date: "2025.07 - 現在",
        description: "Highest Rate：455, Perf：1018（9/24現在）主にABCにPythonで参加。",
        link: "https://atcoder.jp/users/ars0611",
        github: "https://github.com/ars0611/AtCoder"
    },
];

export function Works() {
    return(
        <>
        <h1 className="text-2xl font-bold mb-4 text-[#DFFF0B] px-16"><GoFileDirectory className="inline-block mr-2" />活動</h1>
        <div className="bg-gray-200/30 backdrop-blur-lg rounded-md border border-[#D4CEFF] shadow-lg mx-16 mb-4 p-4">
            <ul className="list-disc pl-8">
                {works.map((work) => (
                    <li key={work.id} className="mb-2">
                        <h2 className="text-xl font-bold">{work.title}</h2>
                        <p className="text-sm text-gray-400">{work.date}</p>
                        <p>{work.description}</p>
                        {work.link && (
                            <p>
                                参照：<a href={work.link} className="text-blue-400 hover:underline">{work.link}</a>
                            </p>
                        )}
                        {work.github && (
                            <p>
                                GitHubリポジトリ：<a href={work.github} className="text-blue-400 hover:underline">{work.github}</a>
                            </p>
                        )}
                    </li>
                ))}
            </ul>
        </div>
        </>
    );
}