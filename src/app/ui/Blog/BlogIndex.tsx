// ブログ記事一覧
import Image from "next/image";
import { GoBook } from "react-icons/go";
import { blogPosts } from "../../lib/MyData";


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
                <p className="mt-2"><a key={post.id} href={post.link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">続きを読む</a></p>
            </div>
        )}
        </div>
        </>
    )
}