// フォームから送られてくるメールのテンプレート
interface EmailTemplateProps {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export function MailTemplate (params: Readonly<EmailTemplateProps>) { // Readonlyで引数が変更されないようにする
    const { name, email, subject, message } = params;
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