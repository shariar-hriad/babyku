import { CgProfile } from 'react-icons/cg'
import { FaCartPlus } from 'react-icons/fa'
import { HiOutlineChevronRight } from 'react-icons/hi'
import { HiOutlineBars3BottomRight } from 'react-icons/hi2'

const Header = () => {
    return (
        <header className='py-5 fixed top-0 w-full z-30 px-2 md:px-10 bg-white/70 backdrop-blur shadow'>
            <div className='flex items-center justify-between lg:justify-normal gap-12'>
                <div>
                    <img src='/assets/baby-store-logo.svg' alt='babyku' />
                </div>

                <nav className='hidden lg:block lg:flex-1'>
                    <ul className='inline-flex gap-5'>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>About Us</li>
                        <li>Testimonial</li>
                        <li>Contact Us</li>
                    </ul>
                </nav>

                <div className='flex items-center gap-5'>
                    <div className='hidden md:flex items-center gap-2'>
                        <input
                            className='py-2 px-2 text-white bg-primary placeholder:text-white rounded focus:outline-none focus:ring focus:ring-primary'
                            type='text'
                            placeholder='Search products...'
                        />

                        <button type='submit' className='bg-primary rounded text-white px-1 py-2'>
                            <HiOutlineChevronRight fontSize={23} />
                        </button>
                    </div>

                    <button className='text-primary relative z-0'>
                        <FaCartPlus fontSize={20} />

                        <span className='absolute -top-full -right-full bg-primary/75 text-white w-[20px] h-[20px] rounded-full flex items-center justify-center -z-0 text-xs font-bold'>
                            10
                        </span>
                    </button>

                    <button type='button'>
                        <CgProfile fontSize={20} />
                    </button>

                    <button type='button' className='lg:hidden'>
                        <HiOutlineBars3BottomRight fontSize={30} />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
