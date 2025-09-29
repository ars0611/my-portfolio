// ブログ記事一覧
import Image from "next/image";
import Link from "next/link";
import { GoBook } from "react-icons/go";

interface BlogPost {
    id: number;
    title: string;
    date: string;
    description: string;
    src: string;
    link: string;
}
// ブログ記事のデータ
const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "初めてのデプロイ～Vercel編～【Next.jsポートフォリオサイト】",
        date: "2025.XX.YY",
        description: "Next.jsで作ったポートフォリオサイトをVercelでデプロイしました。工夫や気づきを初心者なりにまとめてみました。自分が何を考えて実装したかの備忘録も兼ねています。とんちんかんな部分もあるかもしれませんが、一読いただけると幸いです。",
        src: "/portfolio.png",
        link: "/blog/article1"
    },
    {
        id:2,
        title:"プログラミング初心者がAtCoderを始めて2か月で茶色になった話【入茶記事】",
        date:"2025.NN.MM",
        description:"「プログラミング未経験、アルゴリズムミリしら、HTML/CSSしか書いたことない」そんな状態から2か月間で茶色コーダーになるまでに取り組んだことをまとめました。競プロ初心者の参考にどうぞ。",
        src:"/AtCoderRating_0929.png",
        link:"/blog/article2"
    }
];

export function BlogIndex() {
    return(
        <>
        <h1 className="mb-4 px-16"><GoBook className="icon" />ブログ記事一覧</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {blogPosts.map(post =>
            <div className="glass mx-16 mb-8 p-4" key={post.id}>
                <div className="flex justify-center">
                    <Image src={post.src} alt={post.title} width={400} height={200} className="mb-4 rounded-lg shadow-lg w-auto h-auto" priority />
                </div>
                <h2>{post.title}</h2>
                <p className="text-sm text-gray-500">{post.date}</p>
                <p className="mt-2">{post.description}</p>
                <p className="mt-2"><Link href={post.link} className="text-blue-500 hover:underline">続きを読む</Link></p>
            </div>
        )}
        </div>
        </>
    )
}