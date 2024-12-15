"use client"
import Intro from "@/components/homepage/intro"
import Link from "next/link"

const breakingBarrier = {
  title: "BREAKING BARRIERS CHALLENGE",
  para: "50 years and we are never done— run with us for the future of sport."
}

const MemberShipPage = () => {
  return (
    <div className="max-w-[1344px] m-auto px-3 text-[#111]">
      <p className="text-2xl font-medium py-4">Nike Membership</p>
      <div className="w-full flex justify-center items-center flex-col py-20 gap-3">
        <Link href="https://youtube.com" className="text-red-500 font-bold text-3xl underline">The author is</Link>
        <h1 className="text-4xl font-medium">Where All Athletes Belong</h1>
        <p className="md:w-[500px] w-full p-2 text-center text-[#111111]">
          When you&apos;re with us, you&apos;re part of something bigger: a
          global community dedicated to bringing out the best in one
          another, with access to the most effective tools for the job,
          including Member-exclusive products, Nike By You
          customisation, and special offers. And it&apos;s all free.
        </p>
        <Link href={"/joinus"} className='px-6 py-2 bg-[#111111] text-white text-sm rounded-full'>Join Us</Link>
      </div>
      <Intro data={breakingBarrier}>
        <Link href={"/products"} className='px-6 py-2 bg-[#111111] text-white text-sm rounded-full'>Download the NRC App</Link>
      </Intro>

      <Intro data={breakingBarrier}>
        <Link href={"/products"} className='px-6 py-2 bg-[#111111] text-white text-sm rounded-full'>Download the NRC App</Link>
      </Intro>
    </div>
  )
}

export default MemberShipPage