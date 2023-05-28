import tw from 'tailwind-styled-components'

const Footer = () => {
    return (
        <footer className='bg-[#f2f2f2] py-5 lg:py-10'>
            <div className='container'>
                <WidgetGrid>
                    <Widget>
                        <img className='mb-5' src='/assets/baby-store-logo.svg' alt='babyku' />
                        <adress className='prose'>
                            123 Fifth Ave, New York, NY 12004. <br />
                            <a href='tel:+1 123 456 78 90'>+1 123 456 78 90</a>
                            <br />
                            <a href='mailto:'>mail@example.com</a>
                        </adress>
                    </Widget>

                    <Widget>
                        <WidgetTitle>Customer Service</WidgetTitle>

                        <WidgetList>
                            <li>Contact Us</li>
                            <li>Help & FAQs</li>
                            <li>Payment Method</li>
                            <li>Delivery Information</li>
                            <li>Track Your Order</li>
                            <li>Return & Exchanges</li>
                        </WidgetList>
                    </Widget>

                    <Widget>
                        <WidgetTitle>Categories</WidgetTitle>

                        <WidgetList>
                            <li>Clothing & Fashion</li>
                            <li>Toys</li>
                            <li>School Supplies</li>
                            <li>Birthday Party Supplies</li>
                            <li>Baby Diapering</li>
                        </WidgetList>
                    </Widget>

                    <Widget>
                        <WidgetTitle>Our Company</WidgetTitle>

                        <WidgetList>
                            <li>Corporate Information</li>
                            <li>Privacy & Cookies Policy</li>
                            <li>Terms & Condition</li>
                            <li>Promo & Terms</li>
                        </WidgetList>
                    </Widget>
                </WidgetGrid>
            </div>
        </footer>
    )
}

export default Footer

const WidgetGrid = tw.div`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`
const Widget = tw.div`p-2`
const WidgetTitle = tw.h4`font-sriracha text-[22px] text-[#3e1f55] mb-4`
const WidgetList = tw.ul`space-y-2 list-none no-underline`
