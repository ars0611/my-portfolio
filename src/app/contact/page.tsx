// Contact Page
import { ResendForm } from "../ui/ResendForm";
import { GoMail } from "react-icons/go";


export default function Page() {
    return(
        <div>
            <h1>Contact Page</h1>
            <h1 className="text-2xl font-bold mb-4 text-[#DFFF0B] px-32"><GoMail className="inline-block mr-2" />お問い合わせ</h1>
            <ResendForm />
        </div>
    );
}