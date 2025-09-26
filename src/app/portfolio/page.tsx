// ポートフォリオページ
import { Journey } from "../ui/Portfolio/Jouney";
import { Achivement } from "../ui/Portfolio/Achivement";
import { TechSkill } from "../ui/Portfolio/TechSkill";
import { Works } from "../ui/Portfolio/Works";

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