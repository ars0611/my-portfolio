// 活動の紹介
import { GoFileDirectory } from "react-icons/go";
import Image from "next/image";
import { works } from "../../lib/MyData"; 


export function Works() {
    return(
        <>
        <h1 className="mb-4 px-16"><GoFileDirectory className="icon" />活動</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {works.map(work =>
            <div className="glass mx-16 mb-8 p-4" key={work.id}>
                <div className="flex justify-center">
                    <Image src={work.src} alt={work.title} width={400} height={200} className="mb-4 rounded-lg shadow-lg w-auto h-auto" priority />
                </div>
                <h2>{work.title}</h2>
                <p className="text-sm text-gray-400">{work.date}</p>
                <p>{work.description}</p>
                {work.link && (
                    <p>
                        参照：<a href={work.link} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">{work.link}</a> {/* target=_blankを使うならrelは脆弱性対策で必須。 */}
                    </p>
                )}
                {work.github && (
                    <p>
                        GitHubリポジトリ：<a href={work.github} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">{work.github}</a>
                    </p>
                )}
            </div>
        )}
        </div>
        </>
    );
}