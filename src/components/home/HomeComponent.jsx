import SearchComponent from '../search/SearchComponent';
import NavComponent from './NavComponent';
import RecipeComponent from './RecipeComponent';

const HomeComponent = () => {
 
  return (
    <section className=''>
    <NavComponent/>
    <RecipeComponent/>
    <SearchComponent/>
    </section>
  )
}
export default HomeComponent