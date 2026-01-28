import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiPython, SiReact, SiNextdotjs, SiGit } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import { GoBook, GoRocket } from "react-icons/go";
import { VscGithubInverted } from "react-icons/vsc";
import { Work, Skill, JourneyItem, Achievement, ExternalLink, BlogPost } from "./definition";

// homeの切り替わりフレーズのデータ
export const phrases : Array<string> = [
            "エンジニア志望",
            "TypeScript入門",
            "情報科学科 1年",
            "就職活動中",
            "競プロer",
            "Pythonista"
        ];


// 活動のデータ
export const works: Work[] = [
    {
        id: 1,
        title: "ポートフォリオサイト（当サイト）",
        date: "2025.09",
        description: "Next.js使用して作成したポートフォリオサイトです。自己紹介や個人ブログを掲載しています。",
        src: "/portfolio.png",
        link: "https://kyoheiyonehama.vercel.app/",
        github: "https://github.com/ars0611/my-portfolio"
    },
    {
        id: 2,
        title: "AtCoder",
        date: "2025.07 - 現在",
        description: "主にABCにPythonで参加しています。年内に水色への昇格を目指します。",
        src: "/AtCoder.png",
        link: "https://atcoder.jp/users/ars0611",
        github: "https://github.com/ars0611/AtCoder"
    },
];

// 技術スタックのデータ
export const skills: Skill[] = [
    {
        id: 1,
        name: "HTML/CSS",
        level: 2,
        icon: <SiHtml5 className="inline-block mr-2" />,
        description: "授業で基礎を学習しました。CSSが苦手です。",
    }, 
    {
        id: 2,
        name: "JavaScript",
        level: 3,
        icon: <SiJavascript className="inline-block mr-2" />,
        description: "授業で基礎を学習しました。DOM操作やイベント処理を行えます。",
    },
    {
        id: 3,
        name: "TypeScript",
        level: 2,
        icon: <SiTypescript className="inline-block mr-2" />,
        description: "独学。調べながら簡単なコーディングが可能です。このサイトを構築できるくらいのスキルです。",
    },
    {
        id: 4,
        name: "Python",
        level: 4,
        icon: <SiPython className="inline-block mr-2" />,
        description: "独学。基本的なアルゴリズムの実装が可能です。競技プログラミングで使用しています。",
    },
    {
        id: 5,
        name: "React",
        level: 2,
        icon: <SiReact className="inline-block mr-2" />,
        description: "独学。状態管理などのフックを用いて、基本的なコンポーネントの作成が可能です。",
    },
    {
        id: 6,
        name: "Next.js",
        level: 2,
        icon: <SiNextdotjs className="inline-block mr-2" />,
        description: "独学。多機能すぎてあまり使いこなせていませんが、このサイトを構築できるくらいのスキルです。",
    },
    {
        id: 7,
        name: "Git",
        level: 1,
        icon: <SiGit className="inline-block mr-2" />,
        description: "独学。基本操作は可能です。業務やチーム開発での活用方法は未知です。",
    }
];

// 学歴・職歴のデータ
export const journey: JourneyItem[] = [
    {
        id: 1,
        period: "2020.04 - 2023.03",
        title: "神奈川県立平塚江南高等学校 普通科（卒業）",
        description: "理系クラスに所属していました。数学が得意だった半面、物理化学が大の苦手でした。",
    },
    {
        id: 2,
        period: "2023.04 - 2025.03",
        title: "東京理科大学 理学部第一部 数学科（中退）",
        description: "高校時代の数学好きが高じて数学科に進学するも、大学数学が肌に合わず挫折。2年在籍しましたが、2025年3月に中退しました。",
    },
    {
        id: 3,
        period: "2025.04 - 2027.03(予定)",
        title: "情報科学専門学校 情報処理科（在学中）",
        description: "2025年4月から2年制の専門学校に進学し、プログラミングを学んでいます。資格取得やWeb開発を中心に学習中です。",
    },
    {
        id: 4,
        period: "2027.04 - 20XX.YY ",
        title: "？？？",
        description: "現在就職活動中です。Web系企業を中心に応募しています。",
    }
];


// 実績のデータ
export const achivements: Achievement[] = [
    {
        id: 1,
        title: "基本情報技術者試験 合格",
        date: "2025.06",
        description: "4月下旬から約2か月間、通学時間を利用して書籍と過去問を用いて独学で進めつつ、学校の授業で復習をすることで効率的に学習できました。",
    }
];

// 外部リンクのデータ
export const ExternalLinks: ExternalLink[] = [
    {
    id: 1,
    name: "Twitter",
    url: "https://x.com/heigineer",
    icon: <BsTwitter />,
    description: "競技プログラミングや開発の勉強などの合間にひとりごとをつぶやいてます。",
}, {
    id: 2,
    name: "Note",
    url: "https://note.com/heigineer",
    icon: <GoBook />,
    description: "プログラミング学習で学んだことを中心に記事を書いています。"
},{
    id: 3,
    name: "Github",
    url: "https://github.com/ars0611",
    icon: <VscGithubInverted />,
    description: "私のプロジェクトやコードを公開しています。このサイトのソースコードもこちらで確認できます。",
},{
    id: 4,
    name: "AtCoder",
    url: "https://atcoder.jp/users/ars0611",
    icon: <GoRocket />,
    description: "競技プログラミングのプロフィールとコンテスト履歴はこちらで確認できます。",
}];

// ブログ記事のデータ
export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "初めてのデプロイ～Vercel編～【Next.jsポートフォリオサイト】",
        date: "2025.10.01",
        description: "Next.jsで作ったポートフォリオサイトをVercelでデプロイしました。実装時に考えていたことの備忘録も兼ねています。とんちんかんな部分もあるかもしれませんが、一読いただけると幸いです。",
        src: "/portfolio.png",
        link: "https://note.com/heigineer/n/n086399c78181"
    },
    {
        id:2,
        title:"print(\"Hello, world\")から二か月で茶色コーダーになってみた【AtCoder 入茶記事】",
        date:"2025.10.01",
        description:"Pythonの文法を学ぶところから二か月間で茶色コーダーになるまでに取り組んだことをまとめました。競プロ初心者の参考にどうぞ。",
        src:"/AtCoderRating_0929.png",
        link:"https://note.com/heigineer/n/neae6e1811986"
    }
];
