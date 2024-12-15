import Image from "next/image";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import Listroutes from "./listroutes";
import Listtoggle from "./listtoggle";
import { IoBagOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import Headertop from "./headertop";

const routes = [
    {
        name: "New & Featured",
        route: "/products"
    },
    {
        name: "Men",
        route: "/products/men"
    },
    {
        name: "Women",
        route: "/products/women"
    },
    {
        name: "Kids",
        route: "/products/kids"
    },
    {
        name: "Sale",
        route: "/products/sale"
    },
    {
        name: "SNKRS",
        route: "/feed"
    },
]

const Header = () => {

    return (
        <>
        <Headertop />
        <div className='w-full sm:py-4 sm:px-10 px-2 py-2 flex justify-between items-center border-b m-auto relative'>
            <Link href={"/"} className="w-14 h-10 xl:mr-40">
                <Image src={"/logo.webp"} alt="" width={600} height={600} className="w-full h-full object-contain" />
            </Link>
            <div className="gap-6 items-center font-medium text-sm lg:flex hidden">
                <Listroutes routes={routes} />
            </div>
            <div className='flex justify-center items-center md:gap-6 gap-3'>
                <div className='relative xs:block hidden'>
                    <input type="text" className='px-4 py-2 bg-[#F5F5F5] rounded-3xl placeholder:text-sm sm:w-64 w-56 focus:outline-none pl-10' placeholder='What are you looking for?' />
                    <div className='flex justify-center items-center text-zinc-700 w-6 h-6 sm:w-8 sm:h-8 overflow-hidden absolute top-1/2 -translate-y-1/2 left-2 text-2xl'>
                        <IoSearch />
                    </div>
                </div>
                <Link href={"/bag"} className='w-6 h-6 sm:w-8 sm:h-8 overflow-hidden text-3xl flex justify-center items-center'>
                    <CiHeart className=""/>
                </Link>
                <Link href="/bag" className='w-6 h-6 sm:w-8 sm:h-8 overflow-hidden text-2xl flex justify-center items-center'>
                    <IoBagOutline className=""/>
                </Link>
                <Listtoggle icon="dots"/>
            </div>
        </div>
        </>
    )
}

export default Header