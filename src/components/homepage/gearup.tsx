import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import Card from "../card"

const womens = [
    {
        image: "/products/clothes/boxer.webp",
        title: "Nike One Leak Protection: Period",
        category: "Women's Mid-Rise 18cm (approx.) Biker Shorts",
        categorySearch: "women",
        colours: 2,
        price: "3,395",
        id: 5
    },
    {
        image: "/products/clothes/kalu.webp",
        title: "Nike Sportswear",
        category: "Women's Ribbed Jersey Short-Sleeve Top",
        categorySearch: "women",
        colours: 2,
        price: "3,295",
        id: 7
    },
    {
        image: "/products/shoes/shoe1.webp",
        title: "Nike Air Max Pulse",
        category: "Women's Shoes",
        categorySearch: "kids",
        colours: 2,
        price: "13,995",
        id: 1
    },
]

const mens = [
    {
        image: "/products/shoes/shoe2.webp",
        title: "Nike Air Max 97 SE",
        category: "Men's Shoes",
        categorySearch: "women",
        colours: 2,
        price: "16,995",
        id: 2
    },
    {
        image: "/products/shoes/jordan.webp",
        title: "Air Jordan XXXVII Low PF",
        category: "Men's Basketball Shoes",
        categorySearch: "men",
        colours: 1,
        price: "16,295",
        id: 3
    },
    {
        image: "/products/clothes/neela.webp",
        title: "Nike Dri-FIT Ready",
        category: "Men's Short-Sleeve Fitness Top",
        categorySearch: "men",
        colours: 3,
        price: "2,495",
        id: 4
    },
]

const Gearup = () => {
    return (
        <div className="w-full md:flex items-start md:py-10 gap-8">
            <div className="lg:w-1/2 w-full">
                <div className="flex items-center gap-3 py-2 w-full justify-end px-6">
                    <span className="text-sm font-medium">Shop Men&apos;s</span>
                    <div className="md:w-12 md:h-12 w-8 h-8 rounded-full bg-zinc-100 text-zinc-400 flex justify-center items-center md:text-2xl text-lg p-1">
                        <BsChevronLeft />
                    </div>
                    <div className="md:w-12 md:h-12 w-8 h-8 rounded-full bg-zinc-100 text-zinc-400 flex justify-center items-center md:text-2xl text-lg p-1">
                        <BsChevronRight />
                    </div>
                </div>
                <div className="w-full h-full flex overflow-x-scroll gap-3">
                    <Card arr={womens} size="sm" />
                </div>
            </div>
            <div className="lg:w-1/2 w-full">
                <div className="flex items-center gap-3 py-2 w-full justify-end px-6">
                    <span className="text-sm font-medium">Shop Women&apos;s</span>
                    <div className="md:w-12 md:h-12 w-8 h-8 rounded-full bg-zinc-100 text-zinc-400 flex justify-center items-center md:text-2xl text-lg p-1">
                        <BsChevronLeft />
                    </div>
                    <div className="md:w-12 md:h-12 w-8 h-8 rounded-full bg-zinc-100 text-zinc-400 flex justify-center items-center md:text-2xl text-lg p-1">
                        <BsChevronRight />
                    </div>
                </div>
                <div className="w-full h-full flex overflow-x-scroll gap-3">
                    <Card arr={mens} size="sm" />
                </div>
            </div>
        </div>
    )
}

export default Gearup