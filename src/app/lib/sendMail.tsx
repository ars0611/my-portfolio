// server action to send email
'use server';
import { sendMail } from "./ResendLogic";

// 引数はinputから受けとったformData
export async function sendEmailAction(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    await sendMail({ name, email, subject, message });
}
