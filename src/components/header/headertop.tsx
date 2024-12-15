import Image from "next/image"
import Link from "next/link"

const Headertop = () => {
    return (
        <div className="w-full sm:px-10 px-2 py-2 bg-[#F5F5F5] flex justify-between items-center">
            <div className="w-6 h-6">
                <Image src={"/logo2.webp"} alt="" width={600} height={600} className="w-full h-full object-contain" />
            </div>
            <div className="flex justify-center items-center gap-4 text-xs font-medium">   
                <Link href={"/"}>Find a Store</Link> | 
                <Link href={"/contact"}>Help</Link> | 
                <Link href={"/joinus"}>Join Us</Link> | 
                <Link href={"/signin"}>Sign In</Link> 
            </div>
        </div>
    )
}

export default Headertop