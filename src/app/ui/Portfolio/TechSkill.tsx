// 技術スタックの紹介
import { GoTools } from "react-icons/go";
import { skills } from  "../../lib/MyData";




export function TechSkill() {
    return(
        <>
            <div className=" px-16 mb-4">
                <h1 className="mb-4"><GoTools className="inline-block mr-2" />技術スタック</h1>
                <strong>※ここでのレベルとは、僕の中での相対的なスキルの高さを示しています。</strong>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> {/* 画面幅に応じてカラム数を変更。初めてのグリッドデザイン */}
            {skills.map((item) => (
                <div key={item.id}>
                    <div className="glass mx-16 mb-8 p-4">
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
                    </div>
                </div>
            ))}
            </div>
            
        </>
    )
}