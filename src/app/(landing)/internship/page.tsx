import JobListSection from "@/components/internship/joblistsection"
import JobSearchSidebar from "@/components/internship/jobsearchsidebar"
import Image from "next/image"


const priorityData = [
  {
    heading : "Fitness Fit For All",
    para: "Whether you’re just getting started or consider yourself a fitness pro, NIKE provides fitness opportunities and discounts for all levels and goals.",
    image: "/internship/banners/image.png"
  },
  {
    heading : "Financial Health",
    para: "Whether you’re just getting started or consider yourself a fitness pro, NIKE provides fitness opportunities and discounts for all levels and goals.",
    image: "/internship/banners/health.webp"
  },
  {
    heading : "REST & RECOVERY",
    para: "Whether you’re just getting started or consider yourself a fitness pro, NIKE provides fitness opportunities and discounts for all levels and goals.",
    image: "/internship/banners/recovery.webp"
  },
  {
    heading: "Nike Group Insurance Plan",
    para: "Whether you’re just getting started or consider yourself a fitness pro, NIKE provides fitness opportunities and discounts for all levels and goals.",
    btn: "Payment Rates",
    image: "/internship/banners/health.webp"
  },
  {
    heading : "Fitness Fit For All",
    para: "Whether you’re just getting started or consider yourself a fitness pro, NIKE provides fitness opportunities and discounts for all levels and goals.",
    image: "/internship/banners/image.png"
  }
]

const Internship = () => {
  return (
    <div className="w-full lg:px-32 sm:px-10 sm:py-12 p-3 ">
        <div className="w-full md:flex items-start">
            <JobSearchSidebar />
            <JobListSection />
        </div>
        <div className="w-full md:space-y-12 space-y-4 py-10 inline-block">
            {
              priorityData.map((data, index)=> {
                return(
                  <div key={index} className="w-full relative flex justify-center items-center">
                      {data.image && <Image src={data.image} alt="" width={600} height={600} className="w-full h-full object-contain -z-10"/>}
                      <div className="w-full flex justify-center items-center flex-col md:gap-5 gap-2 z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <h1 className="lg:text-4xl text-2xl tracking-tight font-medium">{data.heading}</h1>
                        <p className="text-center lg:text-sm text-xs md:w-[500px] px-4">{data.para}</p>
                        {data.btn && <button className="w-fit px-5 py-3 text-xs capitalize text-center text-white bg-[#191919]">{data.btn}</button>}
                      </div>
                  </div>
                )
              })
            }
        </div>
    </div>
  )
}

export default Internship