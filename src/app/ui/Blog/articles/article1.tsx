import Image from "next/image";

export function Article1() {
    return (
        <>
        <div className="glass p-4 mx-16 mb-8">
            <div className="flex justify-center">
            <Image src="/portfolio.png" alt="初めてのデプロイ～Vercel編～【Next.jsポートフォリオサイト】" width={800} height={400} className="mb-4 rounded-lg shadow-lg w-auto h-auto" priority />
            </div>
            <p className="text-sm">2025.XX.YY</p>
            <br />
            <br />
            <h2>初めてのデプロイ～Vercel編～【Next.jsポートフォリオサイト】</h2>
            <p>～執筆中～</p>
            
        </div>
        </>
    );
}