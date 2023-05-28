import { FaTag } from 'react-icons/fa'

const BannerSection = () => {
    return (
        <section
            className='py-[80px] relative z-0'
            style={{
                background: 'url(/assets/hero-bg.svg)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right top',
                backgroundSize: '60vw auto',
            }}
        >
            <div className='container relative z-10 pt-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-y-5'>
                    {/* content */}
                    <div className='prose'>
                        <p className='flex items-center gap-3 text-[13px] leading-[24px] text-primary font-extrabold uppercase mb-[20px]'>
                            <FaTag /> flat 30% off + cashback
                        </p>
                        <h1 className='text-[40px] font-sriracha lg:text-[74px] leading-[55px] lg:leading-[89px] text-[#3e1f55] font-normal mt-0 mb-[20px]'>
                            Baby Essential Fashion & Nursery
                        </h1>
                        <p>
                            Fermentum, cursus ultrices porttitor tincidunt suscipit quam facilisis sit massa
                            pellentesque mi quis elit elementum tristique urna.
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, error.</p>
                        <div className='flex flex-col md:flex-row mb:items-center gap-[20px]'>
                            <button className='transition-all duration-300 ease-in hover:text-[#3e1f55] hover:bg-[#f2f2f2] uppercase text-sm leading-[14px] bg-primary font-extrabold px-7 text-white py-4 rounded'>
                                Shop now
                            </button>
                            <h5 className='text-primary text-center md:text-left text-xl font-normal font-sriracha'>
                                Use code: BEC30
                            </h5>
                        </div>
                    </div>

                    {/* image */}
                    <div
                        style={{
                            background: 'url(/assets/yellow-blob.svg)',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain',
                            backgroundPosition: 'top center',
                        }}
                    >
                        <img src='/assets/baby-store-hero-baby-img.png' alt='' />
                    </div>
                </div>
            </div>

            {/* overlay */}
            <div
                className='absolute inset-0 -z-0'
                style={{
                    background: 'url(/assets/hero-overlay.svg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '20vw auto',
                    backgroundPosition: 'left top',
                }}
            ></div>
        </section>
    )
}

export default BannerSection
