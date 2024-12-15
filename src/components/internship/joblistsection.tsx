import Image from "next/image";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const jobdata = [
    {
        title: "Korea - Distribution Center (Customer Service Center) Operations Associate (Icheon)",
        type: "Supply Chain, Distribution & Logistics",
        location: "Icheon, South Korea",
        image: "/internship/image1.webp"
    },
    {
        title: "Korea - Distribution Center (Customer Service Center) Operations Associate (Icheon)",
        type: "Supply Chain, Distribution & Logistics",
        location: "Icheon, South Korea",
        image: "/internship/image2.webp"
    },
    {
        title: "Infrastructure and End User Support Specialist",
        type: "Technology",
        location: "Icheon, South Korea",
        image: "/internship/image3.webp"
    },
    {
        title: "Korea - Distribution Center (Customer Service Center) Operations Associate (Icheon)",
        type: "Supply Chain, Distribution & Logistics",
        location: "Icheon, South Korea",
        image: "/internship/image4.webp"
    },
]

const JobListSection = () => {
    return (
        <div className="flex-1 md:p-10 md:pt-0 pt-8">
            <div className="w-full flex justify-end">
                <span className="text-xs text-[#757575] border-b py-2 flex items-center gap-4">SORT BY POSTING DATE <MdOutlineKeyboardArrowDown className="text-xl" /></span>
            </div>
            <div className="md:p-6 space-y-8">
                {jobdata.map((data, index) => {
                    return (
                        <div key={index} className="w-full flex justify-between items-center">
                            <div className="flex flex-1 gap-3 items-center">
                                <div className="md:w-44 w-24 h-24 overflow-hidden">
                                    <Image src={data.image} alt="" width={600} height={600} className="w-full h-full object-contain" />
                                </div>
                                <div className="md:max-w-full max-w-64">
                                    <div className="w-10 h-8">
                                        <Image src={"/logo.webp"} alt="" width={600} height={600} className="w-full h-full object-contain" />
                                    </div>
                                    <h1 className="lg:text-2xl sm:text-lg text-sm font-medium tracking-tighter">{data.title}</h1>
                                    <p className="text-sm text-[#575757] font-medium">{data.type}</p>
                                    <span className="text-xs text-[#575757]">{data.location}</span>
                                </div>
                            </div>
                            <div className="w-12 flex flex-col gap-1">
                                <div className="lg:w-12 lg:h-12 md:w-8 md:h-8 w-6 h-6 bg-[#191919]"></div>
                                <div className="lg:w-12 lg:h-12 md:w-8 md:h-8 w-6 h-6 bg-[#191919]"></div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default JobListSection