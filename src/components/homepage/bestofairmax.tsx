import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { productData } from "@/utils/product";
import Card from "@/components/card";

const Bestofairmax = ({ introTitle, cardSize }: { introTitle?: string, cardSize: "sm" | "lg" }) => {
    return (
        <div className="w-full py-8">
            <div className="w-full flex justify-between items-center">
                {introTitle && <p className="text-2xl font-medium">{introTitle}</p>}
                <div className="flex items-center gap-3">
                    <span className="text-sm font-medium">Shop</span>
                    <div className="w-12 h-12 rounded-full bg-zinc-100 text-zinc-400 flex justify-center items-center text-2xl p-1">
                        <BsChevronLeft />
                    </div>
                    <div className="w-12 h-12 rounded-full bg-zinc-100 text-zinc-400 flex justify-center items-center text-2xl p-1">
                        <BsChevronRight />
                    </div>
                </div>
            </div>
            <div className="w-full overflow-x-scroll flex gap-4 py-2">
                <Card arr={productData} size={cardSize}/>
            </div>
        </div>
    )
}

export default Bestofairmax