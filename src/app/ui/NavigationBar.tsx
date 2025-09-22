'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { VscGithubInverted } from "react-icons/vsc"; 
import { GoHome, GoTools, GoPerson, GoMail, GoFileZip } from "react-icons/go";

const pages = [
    { name: "Home", path: "/", icon: <GoHome /> },
    { name: "About", path: "/about", icon: <GoPerson /> },
    { name: "Engineering", path: "/engineering", icon: <GoTools /> },
    { name: "Blog", path: "/blog", icon: <GoFileZip /> },
    { name: "Contact", path: "/contact", icon: <GoMail /> },
];

export function NavigationBar() {
    const pathname = usePathname(); // 現在のパスを取得
    return(
            <nav className="fixed top-0 left-0 w-full z-50 p-8"> {/* navigation bar を画面上部に固定 */}
                <div className = "text-white text-xl flex justify-between bg-gray-200/30 backdrop-blur-lg rounded-md border border-[#D4CEFF] shadow-lg"> {/* 背景を半透明にしてぼかし効果を追加 */}
                    <a href="https://github.com/ars0611" target="_blank" rel="noopener noreferrer" className="flex items-left gap-2 hover:bg-green-400/40 rounded-md px-4 py-2">
                        <span className="text-[1.5rem]"><VscGithubInverted /></span>
                        <span className="hidden md:block">GitHub</span> {/* md以上の画面サイズで表示 i.e. 画面が十分小さい場合アイコンのみ表示 */}
                    </a>
                    {pages.map((page) => {
                        return(
                            <div className ="flex items-center" key={page.name}>
                                <Link
                                    href={page.path}
                                    className={`flex items-center hover:bg-green-400/40 rounded-md px-4 py-2 ${pathname === page.path ? "bg-green-400/40" : ""}`} // 現在のページに対応するリンクの背景色を変更
                                >
                                    <span className="text-[1.5rem]">{page.icon}</span>
                                    <span className="hidden md:block">{page.name}</span>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </nav>
    );
}

// Ref: https://react-icons.github.io/react-icons/
// Ref: https://qiita.com/ruiiixiii/items/37fa4a6e3a7745b2437d