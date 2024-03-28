import { useContext} from 'react'
import { Tab } from '@headlessui/react'
import RecipeComponent from './RecipeComponent'
import { ApiContext } from '../../context/ApiContext';

const TrendingSection = () => {
    const {bulkRecipe,randomData} = useContext(ApiContext);
    console.log(`from Trending ${randomData}`)

  return (
      <Tab.Group>
      <Tab.List className="relative mx-2 lg:mx-0 mt-10 lg:p-10 flex lg:py-5 items-center lg:text-xl lg:mt-4 text-gray-50">
      <div className="flex-grow border-t border-gray-100 "></div>  
        <Tab className='bg-opacity-50 bg-white m-2 focus:bg-red-500'>Trending Recipe</Tab>
        <Tab className='bg-opacity-50 bg-white m-2 focus:bg-red-500'>Most Searched Recipe</Tab>
        <div className="flex-grow border-t border-gray-100"></div>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel><RecipeComponent bulkRecipe={bulkRecipe}/></Tab.Panel>
        <Tab.Panel><RecipeComponent bulkRecipe={randomData}/></Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  )
}

export default TrendingSection