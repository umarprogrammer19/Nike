import Image from "next/image"

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
const Ordersummary = () => {
    return (
        <div className="md:w-[420px] w-full md:px-6">
            <h1 className="text-2xl font-medium py-4">Order Summary</h1>
            <div className="space-y-4 py-4 text-zinc-500">
                <p className="flex justify-between items-center">
                    <span>Subtotal</span>
                    <span>$ 20,890.00</span>
                </p>
                <p className="flex justify-between items-center">
                    <span>Estimated Delivery & Handling</span>
                    <span>Free</span>
                </p>
                <p className="flex justify-between items-center py-4 text-base border-y text-[#111]">
                    <span>Total</span>
                    <span>$ 20,890.00</span>
                </p>
            </div>
            <p className="text-xs text-[#757575]">(The total reflects the price of your order, including all duties and taxes)</p>
            <div className="py-6 space-y-3">
                {
                    data.map((data, index) => {
                        return (
                            <div key={index} className="flex gap-2 items-start">
                                <div className="w-24 h-24">
                                    <Image src={data.image} alt="" width={600} height={600} className="w-full h-full object-contain" />
                                </div>
                                <div className="text-[#757575]">
                                    <p className="text-[#111]">{data.title}</p>
                                    <p className="sm:text-sm xs:text-xs">Men&apos;s Short-Sleeve Running Top</p>
                                    <p className="sm:text-sm xs:text-xs">Ashen Slate/Cobalt Bliss</p>
                                    <span className="text-sm">${data.price}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Ordersummary