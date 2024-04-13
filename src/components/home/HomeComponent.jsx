import FooterComponent from './FooterComponent';
import NavComponent from './NavComponent';
import TrendingSection from './TrendingSection';
import RandomizedRecipe from './RandomizedRecipe';
import HeroComponent from './HeroComponent';

const HomeComponent = () => {
 
  return (
    <main className='bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-red-500 via-red-400 to-gray-100'>
    <NavComponent/>
    <HeroComponent/>
    <TrendingSection/>
    <RandomizedRecipe/>
    <FooterComponent/>
    </main>
  )
}
export default HomeComponent