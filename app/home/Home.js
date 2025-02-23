import BannerSection from './BannerSection';
import FeatureSection from './FeatureSection';
import HeroSection from './HeroSection';
import PopularProduct from './PopularProduct';
import TrendingProduct from './TrendingPorduct';
function Home() {
  return (
    <div>
        <div>

        <HeroSection/>
        <FeatureSection/>
        <PopularProduct/>
        <BannerSection/>
        <TrendingProduct/>
        </div>
    </div>
  )
}

export default Home