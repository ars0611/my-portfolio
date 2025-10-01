// 外部リンクの紹介
import { GoPaperclip } from "react-icons/go";
import { ExternalLinks } from "../../lib/MyData";

export function ExternalLink() {
    return(
        <>
        <h1 className=" mb-4 px-16"><GoPaperclip className="icon" />各種リンク</h1>
        <div className="glass mx-16 mb-8 p-4">
            {ExternalLinks.map((link, index) => (
                <div key={link.id}> {/* <></>だとエラーで怒られる */}
                <a key={link.id} href={link.url} className="flex items-center btn" target="_blank" rel="noopener noreferrer"> {/* target=_blankを使うならrelは脆弱性対策で必須。これも初知りだ。 */}
                    <div className="text-[1.5rem]">{link.icon}</div>
                    <div className="ml-4">
                        <h3 className="font-bold">{link.name}</h3>
                        <p className="text-sm">{link.description}</p>
                    </div>
                </a>
                {index !== ExternalLinks.length - 1 && <hr className="my-2 border-t border-gray-300" />} {/* 最後の要素以外に区切り線を表示 */}
                </div>
            ))}
        </div>
        </>
    );
}