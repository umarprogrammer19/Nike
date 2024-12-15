import Image from "next/image"
import Link from "next/link"

const data = [
    {
        category: "Mens's",
        image: "/home/essentials/image1.webp"
    },
    {
        category: "Womens's",
        image: "/home/essentials/image2.webp"
    },
    {
        category: "Kid's",
        image: "/home/essentials/image3.webp"
    },
]
const Essentials = () => {
    return (
        <div className="w-full flex flex-wrap items-center gap-3">
            {data.map((data, index) => {
                return (
                    <div key={index} className="xs:flex-1 h-full relative">
                        <span className="absolute bottom-[10%] left-[10%] md:px-6 px-4 py-2 rounded-full bg-white md:text-base sm:text-sm text-xs font-medium">{data.category}</span>
                        <Image src={data.image} alt="" width={600} height={600} className="w-full h-full object-cover" />
                    </div>
                )
            })}

            <div className="w-full md:py-20 py-10 flex flex-wrap gap-5 md:text-left text-center md:flex-row flex-col justify-evenly items-center text-lg">
                <div>
                    <h1 className="font-medium mb-3">Icons</h1>
                    <div className="text-zinc-400 flex flex-col gap-3">
                        <Link href={"/"}>Air Force 1</Link>
                        <Link href={"/"}>Huarache</Link>
                        <Link href={"/"}>Air Max 90</Link>
                        <Link href={"/"}>Air Max 95</Link>
                    </div>
                </div>
                <div>
                    <h1 className="font-medium mb-3">Shoes</h1>
                    <div className="text-zinc-400 flex flex-col gap-3">
                        <Link href={"/"}>All Shoes</Link>
                        <Link href={"/"}>Custom Shoes</Link>
                        <Link href={"/"}>Jordan Shoes</Link>
                        <Link href={"/"}>Running Shoes</Link>
                    </div>
                </div>
                <div>
                    <h1 className="font-medium mb-3">Clothing</h1>
                    <div className="text-zinc-400 flex flex-col gap-3">
                        <Link href={"/"}>All Clothing</Link>
                        <Link href={"/"}>Modest Wear</Link>
                        <Link href={"/"}>Hoodies & Pullovers</Link>
                        <Link href={"/"}>Shirts & Tops</Link>
                    </div>
                </div>
                <div>
                    <h1 className="font-medium mb-3">Kids&apos;</h1>
                    <div className="text-zinc-400 flex flex-col gap-3">
                        <Link href={"/"}>Infant & Toddler Shoes</Link>
                        <Link href={"/"}>Kids Shoes</Link>
                        <Link href={"/"}>Kids Jordan Shoes</Link>
                        <Link href={"/"}>/Kids Running Shoes</Link>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Essentials