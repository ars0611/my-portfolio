// お問い合わせフォーム
// ユーザーの入力をサーバーアクションに送信するため、use client
'use client';
import { useFormStatus } from "react-dom";
import { sendEmailAction } from "../../lib/sendMail";
import { GoMail } from "react-icons/go";

export function ResendForm() {
    function SendButton() {
        const { pending } = useFormStatus();
        return <button type="submit" className="bg-green-400/40 rounded-md px-4 py-2 hover:cursor-pointer" disabled={pending}>{pending ? "送信中..." : "送信"}</button>;
    }

    return (
        <>
            <h1 className="mb-4 px-16"><GoMail className="icon" />お問い合わせ</h1>
            <form
                className="mx-16"
                action={async (formData) => {
                    await sendEmailAction(formData);
                    alert("メールを送信しました。");
                }}
            >
                {/* autoCompleteを設定するとブラウザが入力内容を記憶してくれてUXが向上するらしい。学びだ。 */}
                <div className="flex flex-col gap-2 glass p-4 mb-8 z-50">
                    <label htmlFor="name">お名前</label>
                    <input type="text" id="name" name="name" autoComplete="name" className="form-input" required />
                    <label htmlFor="email">メールアドレス</label>
                    <input type="email" id="email" name="email" autoComplete="email" className="form-input" required />
                    <label htmlFor="subject">件名</label>
                    <input type="text" id="subject" name="subject" autoComplete="off" className="form-input" required />
                    <label htmlFor="message">お問い合わせ内容</label>
                    <textarea id="message" name="message" autoComplete="off" className="form-input" required></textarea>
                    <SendButton />
                </div>

            </form>
        </>
    )
}