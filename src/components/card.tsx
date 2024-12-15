import { Product } from '@/utils/product'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({ arr, size }: { arr: Product[], size?: "sm" | "lg" }) => {
    return (
        <>{
            arr.map((data, index) => {
                return (
                    <Link key={index} href={`/products/all/${data.id}`}>
                        <div key={index} className={`${size !== "lg" ? 'sm:w-80 xs:w-52 w-36' : 'sm:w-96 w-40'} z-0`}>
                            <div key={index} className={`${size !== "lg" ? 'sm:w-80 sm:h-80 xs:w-52 xs:h-52' : 'sm:w-96 sm:h-96'} w-40 h-40 bg-[#F5F5F5] relative overflow-hidden group`}>
                                <Image src={data.image} alt={"product"} width={600} height={600} className="w-full h-full object-contain" />
                            </div>
                            <div className='flex justify-between xs:text-base text-sm mt-5'>
                                <div className='leading-3'>
                                    <span className='font-medium sm:text-base text-xs'>{data.title}</span><br />
                                    <span className="text-zinc-400 sm:text-sm text-xs">{data.category}</span>
                                    {data.colours && <span className="text-zinc-400 sm:text-sm text-xs">{data.colours}</span>}
                                </div>
                                <span className='sm:text-sm text-xs pl-1 font-medium'>${data.price}</span>
                            </div>
                        </div>
                    </Link>
                )
            })
        }</>

    )
}

export default Card