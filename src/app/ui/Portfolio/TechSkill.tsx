// 技術スタックの紹介
import { GoTools } from "react-icons/go";
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiPython, SiReact, SiNextdotjs, SiGit } from "react-icons/si";

interface Skill {
    id: number;
    name: string;
    icon?: React.ReactNode;
    level: number; // 1-5
    description: string;
}

// 技術スタックのデータ
const skills: Skill[] = [
    {
        id: 1,
        name: "HTML/CSS",
        level: 2,
        icon: <SiHtml5 className="inline-block mr-2" />,
        description: "授業で基礎を学習しました。CSSが苦手です。",
    }, 
    {
        id: 2,
        name: "JavaScript",
        level: 3,
        icon: <SiJavascript className="inline-block mr-2" />,
        description: "授業で基礎を学習しました。DOM操作やイベント処理を行えます。",
    },
    {
        id: 3,
        name: "TypeScript",
        level: 2,
        icon: <SiTypescript className="inline-block mr-2" />,
        description: "独学。調べながら簡単なコーディングが可能です。このサイトを構築できるくらいのスキルです。",
    },
    {
        id: 4,
        name: "Python",
        level: 4,
        icon: <SiPython className="inline-block mr-2" />,
        description: "独学。基本的なアルゴリズムの実装が可能です。競技プログラミングで使用しています。",
    },
    {
        id: 5,
        name: "React",
        level: 2,
        icon: <SiReact className="inline-block mr-2" />,
        description: "独学。状態管理などのフックを用いて、基本的なコンポーネントの作成が可能です。",
    },
    {
        id: 6,
        name: "Next.js",
        level: 2,
        icon: <SiNextdotjs className="inline-block mr-2" />,
        description: "独学。基本的なページの作成が可能です。このサイトを構築できるくらいのスキルです。",
    },
    {
        id: 7,
        name: "Git",
        level: 1,
        icon: <SiGit className="inline-block mr-2" />,
        description: "独学。基本操作は可能です。業務やチーム開発での活用方法は未知です。",
    }
];


export function TechSkill() {
    return(
        <>
            
            <h1 className="mb-4 px-16"><GoTools className="inline-block mr-2" />技術スタック</h1>
            <div className="glass mx-16 mb-8 p-4">
                <strong className="px-8 my-4">※ここでのレベルとは、僕の中での相対的なスキルの高さを示しています。</strong>
                <ul className="list-none px-8">
                    {skills.map((item) => (
                        <li key={item.id} className="mb-4">
                            <div className="flex items-center mb-1">
                                <span className="text-[1.5rem]">{item.icon}</span>
                                <h2>{item.name}</h2>
                            </div>
                            <p className="text-sm text-gray-400">レベル: {item.level}</p>
                            {/* レベルバー  */}
                            <div className="w-full bg-gray-300/40 rounded-full h-1 overflow-hidden">{/* 外枠 */}
                                <div
                                    className="h-1 rounded-full"
                                    role="progressbar"
                                    aria-valuenow={item.level}
                                    aria-valuemin={1} // 最小値
                                    aria-valuemax={5} // 最大値
                                    style={{ // 内枠
                                        width: `${(item.level / 5) * 100}%`, // レベルに応じた幅
                                        background: "linear-gradient(90deg,#FFF9B0,#FFD600)", // 黄色のグラデーション
                                    }}
                                />
                            </div>
                            <p>{item.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}