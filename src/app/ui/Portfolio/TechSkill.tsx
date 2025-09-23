import { GoTools } from "react-icons/go";
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiPython, SiReact, SiNextdotjs, SiGit } from "react-icons/si";

interface Skill {
    id: number;
    name: string;
    icon?: React.ReactNode;
    level: number; // 1-5
    description: string;
}

const skills: Skill[] = [
    {
        id: 1,
        name: "HTML/CSS",
        level: 2,
        icon: <SiHtml5 className="inline-block mr-2" />,
        description: "授業で基礎を学習した。CSSが苦手。",
    }, 
    {
        id: 2,
        name: "JavaScript",
        level: 3,
        icon: <SiJavascript className="inline-block mr-2" />,
        description: "授業で基礎を学習した。DOM操作やイベント処理にも対応。",
    },
    {
        id: 3,
        name: "TypeScript",
        level: 2,
        icon: <SiTypescript className="inline-block mr-2" />,
        description: "独学。調べながら簡単なコーディングが可能。このサイトを構築できるくらいのスキル。",
    },
    {
        id: 4,
        name: "Python",
        level: 4,
        icon: <SiPython className="inline-block mr-2" />,
        description: "独学。競技プログラミングで使用。基本的なアルゴリズムの実装が可能。",
    },
    {
        id: 5,
        name: "React",
        level: 2,
        icon: <SiReact className="inline-block mr-2" />,
        description: "独学。基本的なコンポーネントの作成が可能。状態管理など基本的なフックの使用が可能。",
    },
    {
        id: 6,
        name: "Next.js",
        level: 2,
        icon: <SiNextdotjs className="inline-block mr-2" />,
        description: "独学。基本的なページの作成が可能。SSRやSSGの理解は浅い。",
    },
    {
        id: 7,
        name: "Git",
        level: 1,
        icon: <SiGit className="inline-block mr-2" />,
        description: "独学。基本操作は可能。業務やチーム開発での活用方法は未知。",
    }
];


export function TechSkill() {
    return(
        <div>
            <h1 className="text-2xl font-bold mb-4 text-[#DFFF0B] px-16"><GoTools className="inline-block mr-2" />技術スタック</h1>
            <div className="bg-gray-200/30 backdrop-blur-lg rounded-md border border-[#D4CEFF] shadow-lg mx-16 mb-4 p-4">
                <ul className="list-none px-8">
                    {skills.map((item) => (
                        <li key={item.id} className="mb-4">
                            <div className="flex items-center mb-1">
                                <span className="text-[1.5rem]">{item.icon}</span>
                                <h2 className="text-xl font-bold">{item.name}</h2>
                            </div>
                            <p className="text-sm text-gray-400">レベル: {item.level}</p>
                            {/* レベルバー  Copilotによる実装*/}
                            <div className="w-full bg-gray-300/40 rounded-full h-1 overflow-hidden">
                                <div
                                    className="h-1 rounded-full"
                                    role="progressbar"
                                    aria-valuenow={item.level}
                                    aria-valuemin={1}
                                    aria-valuemax={5}
                                    style={{
                                        width: `${(item.level / 5) * 100}%`,
                                        background: "linear-gradient(90deg,#FFF9B0,#FFD600)",
                                    }}
                                />
                            </div>
                            <p>{item.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}