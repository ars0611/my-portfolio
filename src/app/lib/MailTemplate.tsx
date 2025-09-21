// Email template for Resend
interface EmailTemplateProps {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export function MailTemplate ({ name, email, subject, message }: Readonly<EmailTemplateProps>) {
    return(
        <div>
            <p>ポートフォリオサイトから以下のお問い合わせを受信しました。</p>
            <p>お名前: {name} 様</p>
            <p>メールアドレス: {email}</p>
            <p>件名: {subject}</p>
            <p>メッセージ: {message}</p>
        </div>
    );
}