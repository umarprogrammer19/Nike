"use client";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import Listroutes from "./listroutes";
import Image from "next/image";

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

const Listtoggle = ({ icon }: { icon: "window" | "dots" }) => {
    const [activeNavList, setActiveNavList] = useState(false)

    return (
        <div className="flex gap-1">
            {icon === "dots" ?
                <div className='text-2xl text-slate-800 lg:hidden block m-auto' onClick={() => activeNavList ? setActiveNavList(false) : setActiveNavList(true)}>
                    <BsThreeDotsVertical />
                </div>
                :
                <div className="w-6 h-6" onClick={() => activeNavList ? setActiveNavList(false) : setActiveNavList(true)}>
                    <Image src={"/icons/snkrlisticon.png"} alt="" width={600} height={600} className="w-full h-full object-contain" />
                </div>
            }
            {activeNavList && <div className='gap-2 text-nowrap px-8 py-5 items-start lg:hidden flex flex-col absolute right-0 top-full glass text-zinc-100 bg-black/45 rounded-md z-50'>
                <Listroutes routes={routes} />
            </div>}
        </div>
    )
}

export default Listtoggle