'use client';
import { useFormStatus } from "react-dom";
import { sendEmailAction } from "../lib/sendMail";

export function ResendForm() {
    function SendButton() {
        const { pending } = useFormStatus();
        return <button type="submit" className="bg-green-400/40 rounded-md px-4 py-2 hover:cursor-pointer" disabled={pending}>{pending ? "送信中..." : "送信"}</button>;
    }

    return(
        <form
            className="px-32"
            action={async (formData) => {
                await sendEmailAction(formData);
                alert("メールを送信しました。");
            }}
        >
            <div className="flex flex-col gap-2 p-4 bg-gray-200/30 backdrop-blur-lg rounded-md border border-[#D4CEFF] shadow-lg z-50">
                <label htmlFor="name">お名前</label>
                <input type="text" name="name" placeholder="" className="bg-gray-300 border p-2 rounded-md text-black" required />
                <label htmlFor="email">メールアドレス</label>
                <input type="email" name="email" placeholder="" className="bg-gray-300 border p-2 rounded-md text-black" required />
                <label htmlFor="subject">件名</label>
                <input type="text" name="subject" placeholder="" className="bg-gray-300 border p-2 rounded-md text-black" required />
                <label htmlFor="message">お問い合わせ内容</label>
                <textarea name="message" placeholder="" className="bg-gray-300 border p-2 rounded-md text-black" required></textarea>
                <SendButton />
            </div>
            
        </form>
    )
}