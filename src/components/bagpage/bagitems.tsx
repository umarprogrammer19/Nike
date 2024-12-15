import Image from "next/image"
import { AiOutlineDelete } from "react-icons/ai"
import { FiHeart } from "react-icons/fi"

const data = [
    {
      image: "/products/clothes/neela.webp",
      title: "Nike Dri-FIT Ready",
      category: "Men's Short-Sleeve Fitness Top",
      colours: 3,
      price: "2,495",
      id: 4
    },
    {
      image: "/products/clothes/boxer.webp",
      title: "Nike One Leak Protection: Period",
      category: "Women's Mid-Rise 18cm (approx.) Biker Shorts",
      colours: 2,
      price: "3,395",
      id: 5
    },
  ]

const Bagitems = () => {
    return (
        <div className="flex-1 md:p-2">
            <div className="w-full rounded-lg bg-[#F5F5F5] py-3 px-5">
                <span className="text-lg font-medium">Free Delivery</span>
                <p className="text-sm">Applies to orders of ₹ 14 000.00 or more. <span className="underline ml-2">View details</span></p>
            </div>

            <h1 className="text-2xl font-medium py-4">Bag</h1>
            <div className="w-full">
                {data.map((data, index) => {
                    return (
                        <div className="w-full flex justify-between items-start py-8 border-b" key={index}>
                            <div className="flex gap-3">
                                <div className="w-36 h-36">
                                    <Image src={data.image} alt="" width={600} height={600} className="w-full h-full object-contain" />
                                </div>
                                <div className="text-[#757575] flex flex-col justify-between">
                                    <div>
                                        <h3 className="sm:text-lg font-medium text-[#111]">{data.title}</h3>
                                        <p className="sm:text-sm xs:text-xs">Men&apos;s Short-Sleeve Running Top</p>
                                        <p className="sm:text-sm xs:text-xs">Ashen Slate/Cobalt Bliss</p>
                                        <p className="flex gap-10 sm:text-sm xs:text-xs py-1">
                                            <span>Size L</span>
                                            <span>Quantity 1</span>
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3 text-[#111] text-xl">
                                        <FiHeart />
                                        <AiOutlineDelete />
                                    </div>
                                </div>
                            </div>
                            <div className="md:text-lg sm:text-sm xs:text-xs">
                                MRP: ${data.price}.00
                            </div>
                        </div>
                    )
                })
                }
            </div>
            <h1 className="text-2xl font-medium py-4">Favorites</h1>
            <p className="">There are no items saved to your favourites.</p>
        </div>
    )
}

export default Bagitems