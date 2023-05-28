import BannerSection from '../../components/sections/BannerSection'
import BestSeller from '../../components/sections/BestSeller'
import CategorySection from '../../components/sections/CategorySection'
import NewArrivals from '../../components/sections/NewArrivals'
import NewsLetter from '../../components/sections/NewsLetter'

const HomePage = () => {
    return (
        <>
            <BannerSection />
            <CategorySection />
            <NewArrivals />
            <BestSeller />
            <NewsLetter />
        </>
    )
}

export default HomePage
