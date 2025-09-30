// 実績の紹介
import { GoTrophy } from "react-icons/go";

interface Achievement {
    id: number;
    title: string;
    date: string;
    description: string;
}

// 実績のデータ
// 今後増えるという願いを込めてmapで回す形にしておく
const achivements: Achievement[] = [
    {
        id: 1,
        title: "基本情報技術者試験 合格",
        date: "2025.06",
        description: "4月下旬から約2か月間、通学時間を利用して書籍と過去問を用いて独学で進めつつ、学校の授業で復習をすることで効率的に学習できました。",
    }
];

export function Achivement() {
    return(
        <div>
            <h1 className=" mb-4 px-16"><GoTrophy className="icon" />実績</h1>
            <div className="glass mx-16 mb-8 p-4">
                <ul className="p-4">
                    {achivements.map((item, index) => (
                        <li key={item.id} className="">
                            <h2>{item.title}</h2>
                            <p className="text-sm text-gray-400">{item.date}</p>
                            <p>{item.description}</p>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    )
}