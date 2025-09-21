'use client';
import { useFormStatus } from "react-dom";
import { sendEmailAction } from "../lib/sendMail";

export function ResendForm() {
    function SendButton() {
        const { pending } = useFormStatus();
        return <button type="submit" disabled={pending}>{pending ? "送信中..." : "送信"}</button>;
    }

    return(
        <form
            className=""
            action={async (formData) => {
                await sendEmailAction(formData);
                alert("メールを送信しました。");
            }}
        >
            <div className="text-white flex flex-col gap-2 p-4 bg-gray-200/30 backdrop-blur-lg rounded-md border border-gray-200/30 shadow-lg z-50">
                <label htmlFor="name">お名前</label>
                <input type="text" name="name" placeholder="お名前" required />
                <label htmlFor="email">メールアドレス</label>
                <input type="email" name="email" placeholder="メールアドレス" required />
                <label htmlFor="subject">件名</label>
                <input type="text" name="subject" placeholder="件名" required />
                <label htmlFor="message">お問い合わせ内容</label>
                <textarea name="message" placeholder="お問い合わせ内容" required></textarea>
                <button type="submit">送信</button>
            </div>
            <SendButton />
        </form>
    )
}