"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Listroutes = ({ routes }: { routes: { name: string, route: string }[] }) => {
    const path = usePathname()

    return (
        <>
            {routes.map((data, index) => {
                const isActive = (data.route === "/" && path === "/") || (data.route !== "/" && path.includes(data.route));
                return (
                    <Link key={index} href={data.route} className={`text-base ${isActive ? "border-b-2" : ""} border-zinc-300`}>{data.name}</Link>
                )
            })}
        </>
    )
}

export default Listroutes