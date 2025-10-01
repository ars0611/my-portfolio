// 実績の紹介
import { GoTrophy } from "react-icons/go";
import { achivements } from "../../lib/MyData";

export function Achivement() {
    return(
        <div>
            <h1 className=" mb-4 px-16"><GoTrophy className="icon" />実績</h1>
            <div className="glass mx-16 mb-8 p-4">
                <ul className="p-4">
                    {achivements.map((item) => (
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