import Card from "@/components/card";
import { productData } from "@/utils/product";

const FeedPage = () => {
  return (
    <div className='w-full md:px-20 p-3 py-10 flex flex-wrap sm:gap-6 gap-4 justify-center'>
      <Card arr={productData} size='lg' />
    </div>
  )
}

export default FeedPage