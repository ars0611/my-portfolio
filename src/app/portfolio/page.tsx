// ポートフォリオページ
import { Journey } from "../ui/Portfolio/Jouney";
import { Achivement } from "../ui/Portfolio/Achivement";
import { TechSkill } from "../ui/Portfolio/TechSkill";
import { Works } from "../ui/Portfolio/Works";

export const metadata = {
  title: "実績・スキル",
  description: "キャリア・実績・技術スタック・活動についてのページです。",
  alternates: { canonical: "/portfolio"}
}

export default function Portfolio() {
    return (
        <>
            <Journey />
            <Achivement />
            <TechSkill />
            <Works />
        </>
    );
}     
