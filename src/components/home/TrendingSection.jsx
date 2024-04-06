import { useContext} from 'react'
import { Tab } from '@headlessui/react'
import RecipeComponent from './RecipeComponent'
import { ApiContext } from '../../context/ApiContext';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const headings = ["Trending Recipe", "Most Searched Recipe"]

const TrendingSection = () => {
    const {bulkRecipe,randomData} = useContext(ApiContext);
    console.log(`from Trending ${randomData}`)

  return (
      <Tab.Group>
      <Tab.List className="relative mx-2 lg:mx-0 mt-10 lg:p-10 flex lg:py-5 items-center lg:text-xl lg:mt-4 text-gray-50">
      <div className="flex border-t border-gray-100 ">
        </div>  
        <div className='mt-10 w-full flex justify-center'>
        {headings.map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-1/3 rounded-lg m-2  py-4 text-md font-medium leading-5',
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
        <Tab.Panel><RecipeComponent bulkRecipe={bulkRecipe}/></Tab.Panel>
        <Tab.Panel><RecipeComponent bulkRecipe={randomData}/></Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  )
}

export default TrendingSection