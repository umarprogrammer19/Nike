import Bestofairmax from "@/components/homepage/bestofairmax";
import Downloadappbanner from "@/components/homepage/downloadappbanner";
import Essentials from "@/components/homepage/essentials";
import Gearup from "@/components/homepage/gearup";
import Intro from "@/components/homepage/intro";
import Link from "next/link";

const intro = {
  image: "/home/intro.webp",
  span: "First Look",
  title: "NIKE AIR MAX PULSE",
  para: "Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse designed to push you past your limits and help you go to the max."
}

const featuredArr = {
  image: "/home/featuredpage.webp",
  title: "STEP INTO WHAT FEELS GOOD",
  para: "Cause everyone should know the feeling of running in that perfect pair."
}

const dontMisspage = {
  image: "/home/dontmiss.webp",
  title: "FLIGHT ESSENTIALS",
  para: "Your built-to-last, all-week wears—but with style only Jordan Brand can deliver."
}

export default function Home() {
  return (
    <div className="max-w-[1344px] m-auto px-3 text-[#111]">
      <Downloadappbanner />
      <Intro data={intro}>
        <Link href={"/"} className='px-6 py-2 bg-[#111111] text-white text-sm rounded-full'>Notify Me</Link>
        <Link href={"/products"} className='px-6 py-2 bg-[#111111] text-white text-sm rounded-full'>Shop Air Max</Link>
      </Intro>
      <Bestofairmax introTitle="Best Of Air Max" cardSize="lg"/>
      <p className="text-2xl font-medium py-4">Featured</p>
      <Intro data={featuredArr}>
        <Link href={"/products"} className='px-6 py-2 bg-[#111111] text-white text-sm rounded-full'>Find Your Shoe</Link>
      </Intro>
      <p className="text-2xl font-medium py-4">Gear Up</p>
      <Gearup />
      <p className="text-2xl font-medium py-4">Don&apos;s Miss</p>
      <Intro data={dontMisspage}>
        <Link href={"/products"} className='px-6 py-2 bg-[#111111] text-white text-sm rounded-full'>Shop</Link>
      </Intro>  
      <p className="text-2xl font-medium py-4">The Essentials</p>
      <Essentials />
    </div>
  );
}
