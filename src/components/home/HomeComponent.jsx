import FooterComponent from './FooterComponent';
import SearchComponent from '../search/SearchComponent';
import NavComponent from './NavComponent';
import TrendingSection from './TrendingSection';
import RandomizedRecipe from './RandomizedRecipe';

const HomeComponent = () => {
 
  return (
    <main className='bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-red-500 via-red-400 to-gray-100'>
    <NavComponent/>
    <SearchComponent/>
    <TrendingSection/>
    <RandomizedRecipe/>
    <FooterComponent/>
    </main>
  )
}
export default HomeComponent