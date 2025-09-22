// Welcome to my portfolio!
import Image from "next/image";
import { ChangingPhrase } from "./ui/ChangingPhrase";


export default function Home() {
  return (
    <>
    <div className="flex flex-col w-full md:flex-row h-full justify-around items-center">
      <h1 className="text-[48px] font-bold">
      こんにちは、<br />
      ポートフォリオサイトへようこそ！
      <ChangingPhrase />
      </h1>
      <Image src="/Profile.tsx.png" alt="Profile.tsx" width={768} height={768} />
    </div>
    <div className="w-full mt-6 flex justify-center">
      <s><strong className="text-center text-sm">デザイナー志望ではないので、配色やデザインについては大目に見てください！</strong></s>
    </div>
    </>
  );
}
