import { useContext, useState} from 'react'
import { Tab } from '@headlessui/react'
import RecipeComponent from './RecipeComponent'
import { ApiContext } from '../../context/ApiContext';
import { MainPageSkeleton } from '../skeletons/MainPageSkeleton';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const headings = ["Trending Recipe", "Most Searched Recipe"]

const TrendingSection = () => {
    const {bulkRecipe,randomData} = useContext(ApiContext);
    const [loading, isLoading] = useState(true)

    setTimeout(() => {
      isLoading(false)
    }, 1000);

  return (
      <Tab.Group>
      <Tab.List className="relative mx-2 lg:mx-0 mt-10 lg:p-10 flex lg:py-5 items-center lg:text-xl lg:mt-4 text-gray-50"> 
        <div className='mt-10 w-full flex justify-center'>
        {headings.map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-1/2 lg:w-1/3 rounded-lg m-2 py-2 lg:py-4 text-sm lg:text-md font-medium leading-5',
                  'bg-black ',
                  selected
                    ? 'bg-red-600 text-gray-100  border-0 shadow'
                    : 'text-blue-100  hover:bg-white opacity-85 border-0 hover:text-gray-800'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </div> 
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <div className='flex flex-wrap justify-center'>
          {loading? <MainPageSkeleton cards={10}/> : <RecipeComponent bulkRecipe={bulkRecipe}/>}
          </div>
          </Tab.Panel>
        <Tab.Panel>
        <div className='flex flex-wrap justify-center'>
          {loading? <MainPageSkeleton cards={10}/> : <RecipeComponent bulkRecipe={randomData}/>}
          </div>
          </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  )
}

export default TrendingSection