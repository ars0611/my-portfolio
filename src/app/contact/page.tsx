// Contact Page
import { ResendForm } from "../ui/ResendForm";
import { GoMail, GoPaperclip } from "react-icons/go";
import { BsTwitter } from "react-icons/bs";
import { ExternalLink } from "../ui/ExternalLink";

export default function Page() {
    return (
        <div>
            <ExternalLink />
            <h1 className="text-2xl font-bold mb-4 text-[#DFFF0B] px-32"><GoMail className="inline-block mr-2" />お問い合わせ</h1>
            <ResendForm />
        </div>
    );
}