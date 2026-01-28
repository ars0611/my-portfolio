
// 活動の型
export interface Work {
    id: number;
    title: string;
    date: string;
    description: string;
    src: string;
    link?: string;
    github?: string;
}

// 技術スタックの型
export interface Skill {
    id: number;
    name: string;
    icon?: React.ReactNode;
    level: number; // 1-5
    description: string;
}

// 学歴・職歴の型
export interface JourneyItem {
    id: number;
    period: string;
    title: string;
    description: string;
}

// 実績の型
export interface Achievement {
    id: number;
    title: string;
    date: string;
    description: string;
}

// 外部リンクの型
export interface ExternalLink {
    id: number;
    name: string;
    url: string;
    icon: React.ReactNode;
    description: string;
}

// ブログ記事の型
export interface BlogPost {
    id: number;
    title: string;
    date: string;
    description: string;
    src: string;
    link: string;
}

// AtCoderのAPIレスポンスの型
export interface AtCoderHistory{
    IsRated: boolean,
    Place: number,
    OldRating: number,
    NewRating: number,
    Performance: number,
    InnerPerformance: number,
    ContestScreenName: string,
    ContestName: string,
    ContestNameEn: string,
    EndTime: string,
}
export interface HighestRecords{
    highestRating: string,
    highestPerformance: string
}
