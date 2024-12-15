import Link from "next/link"

const Proceedcheckout = () => {
    return (
        <div className="md:w-[420px] w-full md:px-6">
            <h1 className="text-2xl font-medium py-4">Free Delivery</h1>
            <div className="space-y-5 py-4">
                <p className="flex justify-between items-center">
                    <span>Subtotal</span>
                    <span>$ 20,890.00</span>
                </p>
                <p className="flex justify-between items-center">
                    <span>Estimated Delivery & Handling</span>
                    <span>Free</span>
                </p>
                <p className="flex justify-between items-center py-4 text-base border-y">
                    <span>Total</span>
                    <span>$ 20,890.00</span>
                </p>
                <Link href="/bag/checkout">
                    <button className='w-full bg-[#111] py-4 text-white rounded-full'>Member Checkout</button>
                </Link>
            </div>
        </div>
    )
}

export default Proceedcheckout