import { useContext } from 'react'
import { ApiContext } from '../../context/ApiContext'
import { CartContext } from '../../context/CartContext'
import { ToastContainer } from "react-toastify";
import { motion } from "framer-motion";

const time = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

const RandomizedRecipe = () => {
    const {randomRecipe} = useContext(ApiContext)
    const { addItemToCart, notify } = useContext(CartContext);
    
  return (
    <>
    <div className="flex border-b border-2 w-3/4 mx-auto mt-5 border-white opacity-40"/>
        <div className='flex justify-center mt-10'>
      <motion.div whileHover={{ scale: 1.02 }} key={randomRecipe.id} className='max-w-sm lg:max-w-4xl m-2 lg:m-0 2xl:m-2 bg-opacity-50 bg-white rounded-lg shadow'>
        <div className='relative'>
        <h1 className='text-gray-800 p-3 my-auto bg-white bg-opacity-40 text-xl lg:text-2xl font-semibold rounded-lg capitalize'>today's recipe for you</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => {
            addItemToCart(randomRecipe);
            notify();
          }}
          className="absolute h-9 w-9 lg:h-10 lg:w-10 m-2 top-0 right-0 text-gray-50 p-2 bg-red-600 text-red hover:bg-gray-800 hover:text-white transition-all rounded-full cursor-pointer "
          viewBox="0 0 20 20"
          fill="currentColor">
           <path
             fillRule="evenodd"
             d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
             clipRule="evenodd"/>
        </svg>
        </div>
             <div className="flex p-2 lg:p-3">
               <div className="p-2 rounded-lg w-80 bg-gray-100">
                 <img
                   className="w-full h-full object-contain rounded-lg"
                   src={randomRecipe.image}
                   alt={randomRecipe.title}
                 />
               </div>
               <div className="min-h-min px-2 lg:p-5">
                 <h5 className="mb-2 text-lg lg:text-xl font-bold tracking-normal text-gray-700">
                   {randomRecipe.title}
                 </h5>
                 <p className="my-2 lg:my-4 h-10 overflow-y-auto no-scrollbar font-normal text-gray-700 dark:text-gray-600">{time} {randomRecipe.readyInMinutes} minutes
                 </p>
                 <div className="text-gray-700">
                  <b className="mt-5">
                  Total servings 
                </b>
                <p>{randomRecipe.servings}</p>
                  </div>
               </div>
             </div>
           </motion.div>
           <ToastContainer/>
    </div>
    </>
  
  )
}

export default RandomizedRecipe