import Card from "@/components/card"
import { productData } from "@/utils/product"
import { VscSettings } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

const navData = [
    "Shoes", "Sports Bras", "Tops & T-Shirts", "Hoodies & Sweatshirts"
    , "Jackets", "Trousers & Tights", "Shorts", "Tracksuits", "Jumpsuits & Rompers",
    "Skirts & Dresses", "Socks", "Accessories & Equipment"
]
const Peoducts = () => {
    return (
        <div className="md:px-12 px-3 py-3">
            <div className="w-full flex justify-between items-center py-6">
                <h1 className="text-2xl font-medium">New (500)</h1>
                <div className="flex items-center gap-2">
                    <span>Hide Filters</span>
                    <VscSettings className="text-lg mr-3" />
                    <span>Sort By</span>
                    <IoIosArrowDown className="text-lg" />
                </div>
            </div>
            <div className="flex items-start ">
                <div className="w-80 md:flex hidden flex-col gap-1 text-[#111]">
                    <div className="flex flex-col gap-2 border-b pb-5 w-[85%]">
                        {navData.map((data, index) => <Link href="" key={index} className="font-medium">{data}</Link>)}
                    </div>

                    <div className="border-b w-[85%] text-[#111] space-y-2 py-5">
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-medium mb-2">Gender</span>
                            <IoIosArrowDown className="text-lg" />
                        </div>
                        {["Men", "Women", "Unisex"].map((data, i) => {
                            return (
                                <div key={i} className="flex items-center gap-2">
                                    <input type="checkbox" className="w-4 h-4" />
                                    <p>{data}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="border-b w-[85%] text-[#111] space-y-2 py-5">
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-medium mb-2">Kids</span>
                            <IoIosArrowDown className="text-lg" />
                        </div>
                        {["Boys", "Girls"].map((data, i) => {
                            return (
                                <div key={i} className="flex items-center gap-2">
                                    <input type="checkbox" className="w-4 h-4" />
                                    <p>{data}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="border-b w-[85%] text-[#111] space-y-2 py-5">
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-medium mb-2">Shop By Price</span>
                            <IoIosArrowDown className="text-lg" />
                        </div>
                        {["Under 2500$", "Under 600$"].map((data, i) => {
                            return (
                                <div key={i} className="flex items-center gap-2">
                                    <input type="checkbox" className="w-4 h-4" />
                                    <p>{data}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="flex-1 flex flex-wrap gap-4 justify-center">
                    <Card arr={productData} size="lg" />
                </div>
            </div>
        </div>
    )
}

export default Peoducts