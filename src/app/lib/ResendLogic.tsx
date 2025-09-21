// Send email using Resend API
import 'server-only'; // サーバーサイドのみで実行
import { Resend } from 'resend';
import { MailTemplate } from './MailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY); // gitignoreに設定したAPIキーを使用
const To_Email = process.env.RESEND_TO_EMAIL as string; // 送信先メールアドレス
export async function sendMail(name: string, email: string, subject: string, message: string) {
    try{
        const { error } = await resend.emails.send({
            from: 'onboading@resend.dev', // Resendの送信元メールアドレス
            to: To_Email,
            subject: subject,
            react: <MailTemplate name={name} email={email} subject={subject} message={message} />,
        });
    if (error) {
        console.error('Failed to send email:', error);
        throw new Error('Failed to send email');
    }
    } catch (error) {
        console.error('Error occurred while sending email:', error);
        throw error;
    }
}