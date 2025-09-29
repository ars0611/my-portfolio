import Image from "next/image";

export function Article2() {
    return (
        <>
        <div className="glass p-4 mx-16 mb-8">
            <div className="flex justify-center">
            <Image src="/AtCoderRating_0929.png" alt="AtCoder Rating" width={800} height={400} className="mb-4 rounded-lg shadow-lg w-auto h-auto" priority />
            </div>
            <p className="text-sm">2025.XX.YY</p>
            <br />
            <br />
            <h2>プログラミング初心者がAtCoderを始めて2か月で茶色になった話【入茶記事】</h2>
            <p>～執筆中～</p>
            
        </div>
        </>
    );
}