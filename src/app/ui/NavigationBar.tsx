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
    const pathname = usePathname();
    return(
            <nav className="fixed top-0 left-0 w-full z-50 p-4">
                <div className = "max-w-7xl mx-auto text-white text-xl flex items-center justify-center gap-2 bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg px-2">
                    <a href="https://github.com/ars0611" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:bg-green-400/40 rounded-md px-4 py-2">
                        <span className="text-[1.5rem]"><VscGithubInverted /></span>
                        <span className="hidden md:block">GitHub</span>
                    </a>
                    {pages.map((page) => {
                        return(
                            <div className ="px-8" key={page.name}>
                                <Link
                                    href={page.path}
                                    className={`flex items-center gap-2 hover:bg-green-400/40 rounded-md px-4 py-2 ${pathname === page.path ? "bg-green-400/40" : ""}`}
                                >
                                    <span className="text-[1.5rem]">{page.icon}</span>
                                    <span className="hidden md:block">{page.name}</span>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </nav>
    );}


    {/* const pathname = usePathname();
    return(
            <nav className="p-4 m-4 flex justify-center fixed top-0 left-0 z-10">
                <div className = "text-white text-xl flex justify-center bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg">
                    {pages.map((page) => {
                        const isExternal = page.path.startsWith("http");
                        return (
                            <div className ="m-4" key={page.name}>
                            {isExternal ? (
                                    <a
                                        href={page.path}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center hover:bg-green-400/40 rounded-md p-1"
                                    >
                                        <span className="text-[1.5rem]">{page.icon}</span>
                                        <span className="hidden md:block">{page.name}</span>
                                    </a>
                                ) : (
                                    <Link
                                        href={page.path}
                                        className={`flex items-center hover:bg-green-400/40 rounded-md p-1 px-4 ${pathname === page.path ? "bg-green-400/40" : ""}`}
                                    >
                                        <span className="text-[1.5rem]">{page.icon}</span>
                                        <span className="hidden md:block">{page.name}</span>
                                    </Link>
                                )}
                            </div>
                        );
                    })}
                </div>
            </nav>
    );*/}


// Ref: https://react-icons.github.io/react-icons/
// Ref: https://qiita.com/ruiiixiii/items/37fa4a6e3a7745b2437d