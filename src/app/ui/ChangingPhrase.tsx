'use client';
import { useEffect, useState } from "react";

export function ChangingPhrase() {
    const phrases = [
            "Web エンジニア志望",
            "TypeScript勉強中",
            "情報科学科 1年",
            "就職活動中",
            "コーヒーと競プロが好き"
        ];

    const [Index, setIndex] = useState(0); // 現在のフレーズのインデックス
    const [visible, setVisible] = useState(true); // フェードイン・アウトの状態

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
                setVisible(true);
            }, 500); // フェードアウト後にフレーズを変更
        }, 3000); // 3秒ごとに変更

        return () => clearInterval(interval); // クリーンアップ
    }, []);

    return (
        <div className="pt-16">
            <span
                key={Index}
                className={`inline-block transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`} 
            >{/* フェードイン・アウト */}
                <span className="bg-gradient-to-r from-[#FFF9B0] via-[#FFF176] to-[#FFD600] bg-clip-text text-transparent"> {/* グラデーションテキスト */}
                    {phrases[Index]}
                </span>
                
            </span>
        </div>
    );
}
