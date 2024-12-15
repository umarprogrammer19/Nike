import Image from "next/image"

const sidebarData = [
    {
        image: "/contact/phone.png",
        para: "000 800 919 0566",
        span: "Products & Orders: 24 hours a day, 7 days a week Company Info & Enquiries: 07:30 - 16:30, Monday - Friday"
    },
    {
        image: "/contact/message.png",
        para: "24 hours a day",
        span: "7 days a week"
    },
    {
        image: "/contact/envelope.png",
        para: "We'll reply within",
        span: "five business days"
    },
    {
        image: "/contact/location.png",
        para: "STORE LOCATION",
        span: "Find Nike retail stores near you"
    },
]

const Sidebar = () => {
    return (
        <div className="md:w-96 w-full md:border-l-2 px-16 flex justify-start items-center flex-col min-h-screen gap-3 mdpt-0 pt-10">
            <h1 className="font-medium text-2xl">CONTACT US</h1>
            {
                sidebarData.map((data, index) => {
                    return (
                        <div key={index} className="flex justify-center flex-col items-center">
                            <div className="w-20 h-20 py-2 my-4">
                                <Image src={data.image} alt="" width={600} height={600} className="w-full h-full object-contain" />
                            </div>
                            <p className="font-medium">{data.para}</p>
                            <span className="text-center">{data.span}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Sidebar