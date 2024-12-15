import Ordersummary from "@/components/bagpage/checkoutpage/ordersummary"
import Formsection from "@/components/bagpage/checkoutpage/formsection";


const CheckoutPage = () => {
    return (
        <div className="max-w-[1280px] m-auto p-3">
            <div className="w-full md:flex items-start">
                <div className="md:hidden block">
                    <Ordersummary />
                </div>
                <Formsection />
                <div className="hidden md:block">
                    <Ordersummary />
                </div>
            </div>
        </div>
    )
}

export default CheckoutPage