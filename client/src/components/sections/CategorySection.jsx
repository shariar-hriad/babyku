import { FaLongArrowAltRight } from 'react-icons/fa'

import categoryImage1 from '/assets/baby-store-promo-banner-img-1.png'
import categoryImage3 from '/assets/baby-store-promo-banner-img-3.png'
import categoryImage from '/assets/baby-store-promo-banner-img.png'

const CategorySection = () => {
    return (
        <section className='py-[60px]'>
            <div className='container max-w-[1200px]'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px]'>
                    {/* Grid Item */}
                    <div
                        className='rounded-lg p-8 flex flex-col relative'
                        style={{
                            background: 'url(/assets/baby-store-promo-banner-blob-bg-1.svg)',
                            backgroundColor: '#f7f7f7',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'bottom center',
                            backgroundSize: 'contain',
                        }}
                    >
                        <div className='text-center'>
                            <h6 className='font-sriracha uppercase text-sm text-[#3e1f55]'>best choice for your</h6>
                            <h2 className='font-sriracha uppercase text-[26px] lg:text-[46px] lg:leading-[50px] text-[#3e1f55]'>
                                Princess
                            </h2>
                        </div>

                        <div className='mb-[30px] flex justify-center'>
                            <img className='w-[250px]' src={categoryImage1} alt='' />
                        </div>

                        <button className='flex items-center gap-3 uppercase text-base font-extrabold text-primary absolute bottom-5'>
                            shop now <FaLongArrowAltRight />
                        </button>
                    </div>

                    {/* Grid Item */}
                    <div
                        className='relative overflow-hidden rounded-lg py-[30px] px-[20px] flex flex-col'
                        style={{
                            background: 'url(/assets/baby-store-promo-banner-blob-bg-2.svg)',
                            backgroundColor: '#f7f7f7',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right top',
                            backgroundSize: 'contain',
                        }}
                    >
                        <div className='flex'>
                            <div className='basis-3/5 flex flex-col justify-between'>
                                <div className='text-left'>
                                    <h6 className='font-sriracha uppercase text-lg text-primary'>20% off</h6>
                                    <h2 className='font-sriracha uppercase text-[26px] lg:text-[40px] lg:leading-[50px] text-[#3e1f55]'>
                                        New Born Essentials
                                    </h2>
                                    <p>Lorem ipsum dolor sit amet elit. Hic, minima!</p>
                                </div>
                            </div>

                            <div className='basis-2/5 shrink-0'>
                                <img src={categoryImage} alt='' />
                            </div>
                        </div>

                        <button className='flex items-center gap-3 uppercase font-extrabold text-primary absolute bottom-5'>
                            shop now <FaLongArrowAltRight />
                        </button>
                    </div>

                    {/* Grid Item */}
                    <div
                        className='rounded-lg p-8 flex flex-col relative overflow-hidden'
                        style={{
                            background: 'url(/assets/baby-store-promo-banner-blob-bg-3.svg)',
                            backgroundColor: '#f7f7f7',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'top center',
                            backgroundSize: 'contain',
                        }}
                    >
                        {/* discount */}
                        <div className='w-[100px] h-[100px] bg-primary rounded-full absolute -right-[15px] -top-[28px] flex items-center justify-center'>
                            <h3 className='text-white text-[20px] font-sriracha w-[56px] leading-[24px] uppercase mt-3 ms-3'>
                                20% off
                            </h3>
                        </div>

                        <div className='text-center'>
                            <h6 className='font-sriracha uppercase text-sm text-white'>new arrivals</h6>
                            <h2 className='font-sriracha uppercase text-[26px] lg:text-[46px] lg:leading-[50px] text-white'>
                                Princess
                            </h2>
                        </div>

                        <div className='mb-[30px] flex justify-center'>
                            <img className='w-[250px]' src={categoryImage3} alt='' />
                        </div>

                        <button className='flex items-center gap-3 uppercase font-extrabold text-primary absolute bottom-5'>
                            shop now <FaLongArrowAltRight />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CategorySection
