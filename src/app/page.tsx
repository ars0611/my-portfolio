// ウェルカムページ
'use client';
import Image from "next/image";
import { ChangingPhrase } from "./ui/ChangingPhrase";


export default function Home() {
  const greeting :string = "`Hello, ${name}!`"
  return (
    <>
      <div className="flex flex-col w-full md:flex-row h-full justify-around items-center px-4">
        <h1 className="text-[48px] text-white mb-8">
          {greeting}<br />
          <ChangingPhrase />
        </h1>
          <Image src="/ray-so-export.png" alt="Profile.tsx" width={720} height={720} className="w-[540px]" priority />
      </div>
      <div className="w-full my-8 flex justify-center">
        <s><strong className="text-center text-sm">スマホで見るとレイアウトが崩れるかもしれません。PC推奨です。</strong></s>
      </div>
    </>
  );
}
