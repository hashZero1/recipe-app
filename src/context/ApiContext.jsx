import { createContext,useState, useEffect } from "react"
import axios from "axios";

const apikey = import.meta.env.VITE_API_KEY;

export const ApiContext = createContext();

export const ApiProvider = ({children}) =>{
    const [searchData, setSearchData] = useState([])

    // for handle other api requests e.g. random recipe, homescreen recipe
    const [randomData, setRandom] = useState()
    const [bulkRecipe, setBulkRecipe] = useState()


    //for random recipe 
    useEffect(() => {
        async function FetchData(){
            try{
                const res = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${apikey}&number=10`)
                const data = res.data;
                setRandom(data.recipes);
            }catch(e){
                console.log(e.response.data.message)
            }}
            FetchData();
        },[])

    // for home screen recipe 
    useEffect(() => {
        async function FetchData(){
            try{
                const res = await axios.get(`https://api.spoonacular.com/recipes/informationBulk?ids=715,716,766,721,780,777,453,343,65665,5456,740&apiKey=${apikey}`)
                const data = res.data;
                setBulkRecipe(data);
            }catch(e){
                console.log(e.response.data.message)
            }}
            FetchData();
        },[])

    //for searching recipe 
    const searchRecipe = async () => {
        try {
          const response = await axios.get(
            `https://api.spoonacular.com/recipes/complexSearch?query=${searchData}&apiKey=${apikey}&addRecipeInformation=true`
          );  
          console.log(response.data)
          setSearchData(response.data);
        } catch (e) {
          console.log("sorry item is not available");
        }
      };

    const values= {randomData,bulkRecipe,searchData,setSearchData,searchRecipe}
    return(
        <ApiContext.Provider value={values}>
            {children}
        </ApiContext.Provider>
    )
}


