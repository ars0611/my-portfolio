// Resendを使ってメールを送信するロジック
// APIキー叩いてるのでサーバーサイドで実行
import 'server-only'; // サーバーサイドのみで実行
import { Resend } from 'resend';
import { MailTemplate } from './MailTemplate';

interface SendMailParams {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const resend = new Resend(process.env.RESEND_API_KEY); // gitignoreに設定したAPIキーを使用
const To_Email = process.env.RESEND_TO_EMAIL as string; // 送信先メールアドレス
export async function sendMail(params: SendMailParams) {
    try{
        const { error } = await resend.emails.send({
            from: 'onboading@resend.dev', // Resendの送信元メールアドレス
            to: To_Email,
            subject: params.subject,
            react: <MailTemplate name={params.name} email={params.email} subject={params.subject} message={params.message} />,
        });
    if (error) {
        throw new Error('Failed to send email');
    }
    } catch (error) {
        throw error;
    }
}
