import { FaCartPlus, FaRegEye, FaRegStar } from 'react-icons/fa'
import tw from 'tailwind-styled-components'

const ProductCard = () => {
    return (
        <ProductContainer>
            {/* product image */}
            <Thumbnail>
                <img className='w-full cursor-pointer' src='/assets/baby-store-product-img-10.jpg' alt='' />

                <CtaBtnWrapper>
                    <ActionButton>
                        {/* tooltip */}
                        <Tooltip>Add to Cart</Tooltip>

                        <FaCartPlus fontSize={16} />
                    </ActionButton>

                    <ActionButton>
                        {/* tooltip */}
                        <Tooltip>Quick View</Tooltip>

                        <FaRegEye fontSize={16} />
                    </ActionButton>
                </CtaBtnWrapper>
            </Thumbnail>

            {/* product body */}
            <div className='p-5 space-y-1'>
                <h3 className='capitalize text-xl font-sriracha'>Extra Soft Touch Lamb Doll</h3>
                <p className='capitalize font-bold'>price $8.00</p>
                <ul className='flex items-center gap-1'>
                    {Array(5)
                        .fill()
                        .map((_, index) => (
                            <li key={index}>
                                <button className='text-yellow-500'>
                                    <FaRegStar fontSize={14} />
                                </button>
                            </li>
                        ))}
                </ul>
            </div>
        </ProductContainer>
    )
}

export default ProductCard

// styled components
const ProductContainer = tw.div`relative border rounded overflow-hidden`

const Thumbnail = tw.div`relative group`

const CtaBtnWrapper = tw.div`flex flex-col gap-2 absolute top-4 -right-full transition-all duration-300 ease-in-out group-hover:right-4`

const ActionButton = tw.button`flex items-center justify-center gap-2 relative border w-[40px] h-[40px] rounded-full transition-all duration-300 ease-linear hover:bg-white bg-gray-300 group/button`

const Tooltip = tw.span`bg-[#3e1f55] pointer-events-none whitespace-nowrap px-[9px] py-[8px] text-white rounded text-xs absolute right-full mr-[10px] after:absolute after:content after:top-[50%] after:-mt-[5px] after:-right-[10px] after:border-solid after:border-[5px] after:border-l-[#3e1f55] opacity-0 transition-all duration-300 ease-linear group-hover/button:opacity-100`
