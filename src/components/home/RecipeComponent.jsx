import {useContext } from 'react'
import { ApiContext } from '../../context/ApiContext';
import { ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import DetailsPageComponent from './DetailsPageComponent';
import { Link } from 'react-router-dom';

const time = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>


const RecipeComponent = () => {
    const {bulkRecipe} = useContext(ApiContext);

    return (
    <section className='mt-10'>
        <div className="relative p-20 flex py-5 items-center">
            <div className="flex-grow border-t border-gray-100"></div>
            <span className="flex-shrink text-2xl mx-4 text-white">Browse Recipe</span>
            <div className="flex-grow border-t border-gray-100"></div>
        </div>
        <div className='flex flex-wrap justify-center'>
        {bulkRecipe?.map(dt => (
             <motion.div whileHover={{ scale: 1.02 }} key={dt.id} className="p-2">
             <div className="max-w-[20rem] m-2 lg:m-0 2xl:m-2 bg-opacity-50 bg-white rounded-lg shadow ">
               <div className="p-4 rounded-t-lg bg-white">
                 <img
                   className="w-full h-48 object-contain"
                   src={dt.image}
                   alt={dt.title}
                 />
               </div>
               <div className="min-h-min p-5">
                 <h5 className="mb-2 h-16 text-xl font-bold tracking-normal text-gray-700">
                   {dt.title}
                 </h5>
                 <p className="my-5 h-10  overflow-y-auto no-scrollbar font-normal text-gray-700 dark:text-gray-600">{time} {dt.readyInMinutes} minutes
                 </p>
                 <div className="mx-3 my-2 pt-6 border-t-2 border-black border-opacity-20 flex justify-between ">
                   <p className="text-lg h-10 capitalize text-gray-800">{dt.diets[0]}, {dt.diets[1]}</p>
                   <button
                     className="px-4 py-1 bg-red-600 text-white font-semibold hover:bg-gray-800 hover:text-white transition-all rounded-lg"
                   >
                     <DetailsPageComponent recipe={dt} />
                   </button>
                 </div>
               </div>
             </div>
           </motion.div>
        ))}
        </div>
      
    </section>
  )
}

export default RecipeComponent;