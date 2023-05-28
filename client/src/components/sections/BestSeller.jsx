import ProductCard from '../shared/ProductCard'

const BestSeller = () => {
    return (
        <section className='bg-[#f7f7f7] py-[40px] lg:py-[80px] relative'>
            <div className='container'>
                <div className='text-center max-w-2xl w-full mx-auto'>
                    <h2 className='font-sriracha text-[40px] leading-[50px] mb-[10px] lg:text-[56px] lg:leading-[56px] lg:mb-[20px] text-[#3e1f55]'>
                        Best Seller
                    </h2>
                    <p className='text-[#4a4a4a]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quos! Lorem ipsum dolor sit amet
                        consectetur adipisicing.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-[60px] gap-4'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </section>
    )
}

export default BestSeller
