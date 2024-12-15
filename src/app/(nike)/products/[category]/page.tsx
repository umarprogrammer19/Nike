import React from 'react'
import { productData } from '@/utils/product';
import Card from '@/components/card';

const ProdByCategory = ({params}: {params: { category: string }}) => {

  const categoty = params.category
  const filteredItems = productData.filter((data)=> data.categorySearch === categoty)
  
  return (
    <div className='w-full min-h-[50vh] md:px-20 p-3 py-10 flex flex-wrap md:gap-6 gap-4 justify-center'>
      {filteredItems.length <= 0 ? 
        <h1 className='text-4xl text-[#111] font-thin my-auto animate-bounce'>This page currently has no items</h1>
        :
        <Card arr={filteredItems} size='sm' />
      }
    </div>
  )
}

export default ProdByCategory