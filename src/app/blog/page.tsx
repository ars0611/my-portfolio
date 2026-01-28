// ブログ一覧ページ
import {BlogIndex} from '../ui/Blog/BlogIndex';

export const metadata = {
  title: "ブログ",
  description: "個人的に書いた記事をまとめています",
  alternates: { canonical: "/blog"}
}

export default function Blog() {
    return (
        <>
            <BlogIndex />
        </>
    );
}
