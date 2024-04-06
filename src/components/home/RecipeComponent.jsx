import { ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import DetailsPageComponent from './DetailsPageComponent';
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";


const time = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>


const RecipeComponent = ({bulkRecipe}) => {
  const { addItemToCart, notify } = useContext(CartContext);

    return (
    <section className='mt-5'>
        <div className='flex flex-wrap justify-center'>
        {bulkRecipe?.map(dt => (
             <motion.div whileHover={{ scale: 1.02 }} key={dt.id} className="p-2">
             <div className="relative max-w-[20rem] m-2 lg:m-0 2xl:m-2 bg-opacity-50 bg-white rounded-lg shadow ">
             <svg
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => {
                    addItemToCart(dt);
                    notify();
                  }}
                  className="absolute h-10 w-10 m-2 top-0 right-0 text-gray-50 p-2 bg-red-600 text-red hover:bg-gray-800 hover:text-white transition-all rounded-full cursor-pointer "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
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
                   <p className="text-lg h-10 capitalize text-gray-800">
                    {dt.diets[0]}<br/> 
                    {dt.diets[1]}</p>
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
         <ToastContainer />
        </div>  
    </section>
  )
}

export default RecipeComponent;