// プロフィールページ
import { AboutMe } from "../ui/About/AboutMe";

export const metadata = {
  title: "自己紹介",
  description: "自己紹介ページです。",
  alternates: { canonical: "/about"}
}


export default function About() {
    return (
        <>
            <AboutMe />
        </>
    );
}
