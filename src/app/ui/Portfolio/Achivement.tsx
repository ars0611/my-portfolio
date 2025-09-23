import { GoTrophy } from "react-icons/go";

interface Achievement {
    id: number;
    title: string;
    date: string;
    description: string;
}

const achivements: Achievement[] = [
    {
        id: 1,
        title: "基本情報技術者試験 合格",
        date: "2025.06",
        description: "4月下旬から約2か月間、通学時間を利用して書籍と過去問を用いて独学で進めつつ、学校の授業で復習をすることで効率的に学習できた。",
    },
    {
        id: 2,
        title: "今後の目標",
        date: "2025.XX",
        description: "外部のハッカソンに参加し、開発経験を積みつつ受賞を目指す。"
    },
];

export function Achivement() {
    return(
        <div>
            <h1 className="text-2xl font-bold mb-4 text-[#DFFF0B] px-16"><GoTrophy className="inline-block mr-2" />実績</h1>
            <div className="bg-gray-200/30 backdrop-blur-lg rounded-md border border-[#D4CEFF] shadow-lg mx-16 mb-4 p-4">
                <ul className="list-disc pl-8">
                    {achivements.map((item) => (
                        <li key={item.id} className="mb-4">
                            <h2 className="text-xl font-bold">{item.title}</h2>
                            <p className="text-sm text-gray-400">{item.date}</p>
                            <p>{item.description}</p>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    )
}