import { motion } from "framer-motion";
import { ApiContext } from "../../context/ApiContext";
import { useContext } from "react";
import DetailsPageComponent from "../home/DetailsPageComponent";
import NavComponent from "../home/NavComponent";
import SearchComponent from "./SearchComponent";
import FooterComponent from "../home/FooterComponent";

const time = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

const SearchResult = () => {
  const {searchData} = useContext(ApiContext);
  console.log(searchData)
  return (
    <div className="bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-red-500 via-red-400 to-gray-100">
    <NavComponent/>
    <div className="flex flex-wrap justify-center mt-10">
    {searchData.results?.map((dt) => (
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
    </div>
    <FooterComponent/>
    </div>
  );
};

export default SearchResult;
