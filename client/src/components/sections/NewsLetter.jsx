/* eslint-disable react/no-unescaped-entities */

const NewsLetter = () => {
    return (
        <section className='py-10'>
            <div className='container max-w-[1140px]'>
                <div className='bg-[#fce8b8] p-5 lg:p-[100px] rounded-lg relative z-0 overflow-hidden'>
                    <p className='uppercase font-sriracha text-[13px] text-[#3e1f55]'>subscribe to our newsletter</p>

                    <h3 className='font-sriracha text-[40px] text-[#3e1f55] lg:text-[74px]'>Don't Miss Out!</h3>

                    <p className='text-[#3e1f55] text-base mb-5'>
                        Get the latest on sales, special offer, new releases and more…
                    </p>

                    <div className='flex gap-1 items-center max-w-lg'>
                        <input
                            className='py-3 w-full px-2 rounded focus:ring focus:outline-none bg-white'
                            placeholder='Email Adress'
                            type='email'
                            name='newsletter'
                            id='newsletter'
                        />

                        <input
                            className='bg-primary text-white py-3 px-5 text-base rounded font-medium uppercase'
                            type='submit'
                            value='subscribe'
                        />
                    </div>

                    {/* overlay */}
                    <div
                        className='absolute inset-0 -z-[1]'
                        style={{
                            background: 'url(/assets/baby-store-cta-blob-bg-overlay.svg)',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'left center',
                        }}
                    />
                </div>
            </div>
        </section>
    )
}

export default NewsLetter
