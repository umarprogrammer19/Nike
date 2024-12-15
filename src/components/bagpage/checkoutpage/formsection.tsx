import { HiOutlineInboxArrowDown } from "react-icons/hi2"

const Formsection = () => {
    return (
        <div className="flex-1 md:p-2 lg:px-20">
            <h1 className="text-2xl font-medium py-4">How would you like to get your order?</h1>
            <p className="text-zinc-500 text-lg">
                Customs regulation for India require a copy of the recipient&apos;s KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information. Learn More
            </p>
            <div className="w-full border-2 border-[#111] rounded-lg py-5 px-6 flex items-center gap-4 text-lg my-8">
                <HiOutlineInboxArrowDown className="text-2xl" />
                <span className="font-medium">Deliver it</span>
            </div>
            <h1 className="text-2xl font-medium py-4">Enter your name and address:</h1>

            <form action="" className="space-y-5 border-b pb-12">
                <input type="text" placeholder="First Name" className="w-full p-4 rounded-lg border-2 placeholder:text-zinc-900" />
                <input type="text" placeholder="Last Name" className="w-full p-4 rounded-lg border-2 placeholder:text-zinc-900" />
                <input type="text" placeholder="Address Line 1" className="w-full p-4 rounded-lg border-2 placeholder:text-zinc-900" />
                <input type="text" placeholder="Address Line 2" className="w-full p-4 rounded-lg border-2 placeholder:text-zinc-900" />
                <input type="text" placeholder="Address Line 3" className="w-full p-4 rounded-lg border-2 placeholder:text-zinc-900" />
                <div className="grid grid-cols-2 gap-5">
                    <input type="text" placeholder="Postal Code" className="grid-span-1 w-full p-4 rounded-lg border-2 placeholder:text-zinc-900" />
                    <input type="text" placeholder="Locality" className="grid-span-1 w-full p-4 rounded-lg border-2 placeholder:text-zinc-900" />
                    <input type="text" placeholder="State/Territory" className="grid-span-1 w-full p-4 rounded-lg border-2 placeholder:text-zinc-500" />
                    <input type="text" placeholder="Postal Code" className="grid-span-1 w-full p-4 rounded-lg border-2 placeholder:text-zinc-900" />
                </div>
                <div className="space-y-5 py-6">
                    <div className="flex items-center gap-4">
                        <input type="checkbox" className="w-4 h-4" />
                        <span>Save this address to my profile</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <input type="checkbox" className="w-4 h-4" />
                        <span>Make this my preferred address</span>
                    </div>
                </div>

                <h1 className="text-2xl font-medium py-4">What&apos;s your contact information?</h1>

                <div className="space-y-5">
                    <input type="text" placeholder="Email" className="w-full p-4 rounded-lg border-2 placeholder:text-zinc-900" />
                    <input type="text" placeholder="Phone Number" className="w-full p-4 rounded-lg border-2 placeholder:text-zinc-900" />
                </div>

                <h1 className="text-2xl font-medium py-4">What&apos;s your PAN?</h1>

                <div className="space-y-5 text-[#757575]">
                    <input type="text" placeholder="PAN" className="w-full p-4 rounded-lg border-2 placeholder:text-zinc-900" />
                    <p className="px-4">
                        Enter your PAN to enable payment with UPI, Net Banking or local card methods
                    </p>

                    <div className="space-y-12 py-6">
                        <div className="flex items-center gap-4">
                            <input type="checkbox" className="w-4 h-4" />
                            <span className="text-xs">Save PAN details to Nike Profile</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <input type="checkbox" className="w-4 h-4" />
                            <span className="text-xs">I have read and consent to eShopWorld processing my information in accordance with the Privacy Statement and Cookie Policy. eShopWorld is a trusted Nike partner.</span>
                        </div>
                    </div>  
                </div>
                <input type="submit" className="w-full text-center rounded-full py-4 bg-[#F5F5F5] font-medium text-zinc-500"/>
            </form>

            <div className="py-5">
                <div className="py-5 border-b hover:text-[#111] text-zinc-500 font-medium text-2xl">Delivery</div>
                <div className="py-5 border-b hover:text-[#111] text-zinc-500 font-medium text-2xl">Shipping</div>
                <div className="py-5 border-b hover:text-[#111] text-zinc-500 font-medium text-2xl">Billing</div>
                <div className="py-5 border-b hover:text-[#111] text-zinc-500 font-medium text-2xl">Payment</div>
            </div>
        </div>
    )
}

export default Formsection