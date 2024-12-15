const JobSearchSidebar = () => {
    return (
        <div className="md:w-96 w-full lg:p-8 md:flex justify-between flex-col">
            <div>
                <h1 className="text-4xl tracking-tight font-medium py-10">THERE ARE 959 OPEN POSITIONS</h1>
                <div className="flex items-center border-b pb-10">
                    <input type="text" placeholder="KEYWORD SEARCH" className="placeholder:text-xs placeholder:font-medium flex-1 h-10 py-2 px-2 border-2 border-r-0 border-[#757575]" />
                    <span className="w-10 h-10 bg-[#191919]"></span>
                </div>
                <div className="text-[#191919]">
                    <div className="text-xs border-b py-5 px-3 tracking-widest font-medium">BRAND</div>
                    <div className="text-xs border-b py-5 px-3 tracking-widest font-medium">CAREER AREA</div>
                    <div className="text-xs border-b py-5 px-3 tracking-widest font-medium">LOCATION</div>
                </div>
            </div>
            <div className="space-y-4">
                <button className="w-full py-3 text-xs capitalize text-center border-2 border-[#191919]">SET A JOB ALERT</button>
                <button className="w-full py-3 text-xs capitalize text-center text-white bg-[#191919]">SEARCH CONTRACT JOBS</button>
                <button className="w-full py-3 text-xs capitalize text-center text-white bg-[#191919]">JOIN THE CONTRACT TALENT COMMUNITY</button>
                <p className="m-auto w-fit text-sm text-[#222222]">Currently only offered in USA.</p>
            </div>
        </div>
    )
}

export default JobSearchSidebar