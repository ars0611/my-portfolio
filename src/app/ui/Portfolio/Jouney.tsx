import { GoMortarBoard } from "react-icons/go";

interface JourneyItem {
    id: number;
    period: string;
    title: string;
    description: string;
}

const journey: JourneyItem[] = [
    {
        id: 1,
        period: "2020.04 - 2023.03",
        title: "神奈川県立平塚江南高等学校 普通科（卒業）",
        description: "理系クラスに所属。数学が得意だった半面、物理化学が大の苦手だった。",
    },
    {
        id: 2,
        period: "2023.04 - 2025.03",
        title: "東京理科大学 理学部第一部 数学科（中退）",
        description: "高校時代の数学好きが高じて数学科に進学するも、大学数学が肌に合わず挫折。二年在籍したが、2025年3月に中退。",
    },
    {
        id: 3,
        period: "2025.04 - 2027.03(予定)",
        title: "情報科学専門学校 情報処理科（在学中）",
        description: "2025年4月から2年制の専門学校に進学し、プログラミングを学ぶ。資格取得やWeb開発を中心に学習中。",
    },
];

export function Journey() {
    return(
        <div>
            <h1 className="text-2xl font-bold mb-4 text-[#DFFF0B] px-16"><GoMortarBoard className="inline-block mr-2" />キャリア</h1>
            <div className="bg-gray-200/30 backdrop-blur-lg rounded-md border border-[#D4CEFF] shadow-lg mx-16 mb-4 p-4">
                <ul className="list-disc px-8">
                    {journey.map((item) => (
                        <li key={item.id} className="mb-4">
                            <h2 className="text-xl font-bold">{item.title}</h2>
                            <p className="text-sm text-gray-400">{item.period}</p>
                            <p>{item.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
            
        </div>
    )
}