// 学歴・職歴の紹介
import { GoMortarBoard } from "react-icons/go";
import { journey } from "../../lib/MyData";

export function Journey() {
    return(
        <>
        <h1 className="mb-4 px-16"><GoMortarBoard className="icon" />キャリア</h1>
        <div className="relative">
            <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 "> {/* 親。左右中央ぞろえ。 */}
                <div className="w-1 bg-green-400 h-full opacity-80" /> {/* 縦線。親の高さいっぱいまでひいちゃおう。 */}
            </div>
            {journey.map(item => 
                <div className="glass mx-16 mb-8 px-4 pt-4" key={item.id}>
                    <div key={item.id} className="mb-4">
                    <h2>{item.title}</h2>
                    <p className="text-sm text-gray-400">{item.period}</p>
                    <p>{item.description}</p>
                    </div>
                </div>
            )}
        </div>
        </>
    )
}