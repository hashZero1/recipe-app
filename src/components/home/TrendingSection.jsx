import React, { useContext} from 'react'
import { Tab } from '@headlessui/react'
import RecipeComponent from './RecipeComponent'
import { ApiContext } from '../../context/ApiContext';

const TrendingSection = () => {
    const {bulkRecipe,randomData} = useContext(ApiContext);

  return (
      <Tab.Group>
      <Tab.List className="relative p-10 flex py-5 items-center text-xl mt-4 text-gray-50">
      <div className="flex-grow border-t border-gray-100"></div>  
        <Tab className='bg-opacity-50 bg-white m-2'>Trending Recipe</Tab>
        <Tab className='bg-opacity-50 bg-white m-2'>Most Searched Recipe</Tab>
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