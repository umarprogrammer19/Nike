import Bestofairmax from '@/components/homepage/bestofairmax';
import Actionbuttons from '@/components/product/productdetails/actionbuttons';
import { productData } from '@/utils/product';
import Image from 'next/image';
import React from 'react'

const PorductDetail = ({ params }: { params: { prodid: number } }) => {
    const id = params.prodid;
    const prod = productData.find((data) => data.id.toString() === id.toString())

    if (prod)
        return (
            <div className='md:px-12 px-3 py-3'>
                <div className='w-full md:flex text-[#111]'>
                    <div className='flex-1 gap-5 flex flex-wrap'>
                        <div className='w-[46%]'>
                            <Image src={prod.image} alt="" width={1300} height={700} className="w-full h-full object-cover" />
                        </div>
                        <div className='w-[46%]'>
                            <Image src={prod.image} alt="" width={1300} height={700} className="w-full h-full object-cover" />
                        </div>
                        <div className='w-[46%]'>
                            <Image src={prod.image} alt="" width={1300} height={700} className="w-full h-full object-cover" />
                        </div>
                        <div className='w-[46%]'>
                            <Image src={prod.image} alt="" width={1300} height={700} className="w-full h-full object-cover" />
                        </div>
                    </div>

                    <div className='md:w-[500px] w-full'>
                        <h1 className='text-2xl font-medium md:mt-0 mt-5'>{prod.title}</h1>
                        <div className='font-medium'>{prod.category}</div>
                        <div className='font-medium text-sm mt-3 inline-block'>MRP: ${prod.price}</div>
                        <div className='text-xs text-[#757575]'>inc. of taxes</div>
                        <div className='text-xs text-[#757575]'>(Also includes all applicable duties)</div>

                        <div className='py-12'>
                            <div className='flex justify-between items-center text-sm'>
                                <span className='font-medium'>Select Size</span>
                                <span className='text-[#757575]'>Size guide</span>
                            </div>
                            <div className='py-2 grid grid-cols-3 gap-1'>
                                {["UK 6 (EU 40)", "UK 6.5", "UK 7", "UK 7.5", "UK 9", "UK 10", "UK 11.5"]
                                    .map((data, index) => {
                                        return (
                                            <div key={index} className='col-span-1 border border-zinc-200 hover:border-zinc-500 flex justify-center items-center gap-2 rounded-md py-2'>
                                                <span className=''>{data}</span>
                                            </div>
                                        )
                                    })}
                            </div>
                            <Actionbuttons id={prod.id}/>
                        </div>
                        <div>
                            <p className='pt-6 text-sm text-[#111] leading-7'>
                                Layer on style with the Air Max 97. The cracked leather and soft suede update the iconic design while the original look (inspired by Japanese bullet trains and water droplets) still takes centre stage. Easy-to-style colours let you hit the stxreets quickly.
                            </p>
                            <div className='p-8 text-[#111] '>
                                Colour Shown: Flat Pewter/Light<br/> Bone/Black/White
                                <div>Style: DV7421-001</div>
                            </div>
                            <span className='underline underline-offset-4 font-medium'>view Product details</span>
                        </div>
                    </div>
                </div>
                <Bestofairmax introTitle="You might also like" cardSize="lg"/>
            </div>
        )
}

export default PorductDetail