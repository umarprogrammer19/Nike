import Link from "next/link"
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";

const faqs = [
    {
        ques: "Does my card need international purchases enabled?",
        ans: "Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled."
    },
    {
        ques: "Can I pay for my order with multiple methods?",
        ans: "No, payment for Nike orders can't be split between multiple payment methods."
    },
    {
        ques: "What payment method is accepted for SNKRS orders?",
        ans: "You can use any accepted credit card to pay for your SNKRS order."
    },
    {
        ques: "Why don't I see Apple Pay as an option?",
        ans: "To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com."
    },
]

const Content = () => {
    return (
        <div className="flex-1 md:px-10 ">
            <h1 className="font-medium text-2xl">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h1>
            <div className="">
                <p className="py-3">We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:</p>
                <div className="space-y-4 p-4">
                    <p>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</p>
                    <p>If you enter your PAN information at checkout, you&apos;ll be able to pay for your order with PayTM or a local credit or debit card.</p>
                    <p>Apple Pay</p>
                </div>
                <p className="py-3"><span className="underline font-medium">Nike Members</span> can store multiple debit or credit cards in their profile for faster checkout. If you&apos;re not already a Member, join us today.</p>
                <div className="flex items-center gap-4 py-4">
                    <Link href={"/"} className="px-6 py-2 bg-[#111111] text-white text-sm rounded-full">JOIN US</Link>
                    <Link href={"/"} className="px-6 py-2 bg-[#111111] text-white text-sm rounded-full">SHOP NIKE</Link>
                </div>
            </div>

            <div>
                <h1 className="text-xl font-medium">FAQs</h1>
                {faqs.map((data, index) => {
                    return (
                        <div key={index} className="py-4">
                            <p className="font-medium mb-1">{data.ques}</p>
                            <span className="text-[#111]">{data.ans}</span>
                        </div>
                    )
                })}
            </div>
            <span className="text-sm py-3">Was this answer helpful?</span>
            <div className="text-2xl flex items-center gap-2 py-3">
                <AiFillLike />
                <AiFillDislike />
            </div>
            <div>
                <h2 className="text-xl text-zinc-500 font-medium">RELATED</h2>
                <div className="md:p-4 text-sm space-y-3 font-medium">
                    <p className="border-b-2 w-fit">WHAT ARE NIKE&apos;S DELIVERY OPTIONS?</p>
                    <p className="border-b-2 w-fit">HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</p>
                </div>
            </div>
        </div>
    )
}

export default Content