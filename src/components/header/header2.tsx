import Image from "next/image"
import { SlArrowLeft } from "react-icons/sl";
import { HiShoppingCart } from "react-icons/hi2";
import Listroutes from "./listroutes"
import Link from "next/link"
import { FaLocationDot } from "react-icons/fa6";
import Listtoggle from "./listtoggle";

const routes = [
    {
        name: "feed",
        route: "/feed"
    },
    {
        name: "In Stock",
        route: "/instock"
    },
    {
        name: "Upcoming",
        route: "/upcoming"
    }
]

const Header2 = () => {
    return (
        <>
            <div className="w-full sm:px-10 px-2 py-2 bg-[#F5F5F5] text-[#757575] flex justify-between items-center">
                <Link href={"/"} className="flex items-center gap-2 text-sm">
                    <SlArrowLeft />
                    Visit Nike.com
                </Link>
                <div className="flex justify-center items-center sm:gap-5 gap-3 text-xs font-medium">
                    <Link href={"/signin"}>Join/Log In</Link>
                    <Link href={"/"}>Help</Link>
                    <Link href={""}><HiShoppingCart className="text-lg" /></Link>
                    <Link href={""}>
                        <span className="flex items-center gap-2"><FaLocationDot /> Pakistan</span>
                    </Link>
                </div>
            </div>

            <div className="w-full sm:py-4 sm:px-10 px-2 py-2 flex justify-between items-center border-b m-auto relative">
                <div className="w-14 h-10 xl:mr-40">
                    <Image src={"/snkrs.webp"} alt="" width={600} height={600} className="w-full h-full object-contain" />
                </div>
                <div className="gap-6 items-center font-medium text-sm lg:flex hidden">
                    <Listroutes routes={routes} />
                </div>
                <Listtoggle icon="window"/>
            </div>
        </>
    )
}

export default Header2