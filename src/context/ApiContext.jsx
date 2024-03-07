import { createContext,useState, useEffect } from "react"
import axios from "axios"

const apikey = import.meta.env.VITE_API_KEY;

export const ApiContext = createContext();

export const ApiProvider = ({children}) =>{
    const [searchData, setSearchData] = useState([])

    // for handle other api requests e.g. random recipe, homescreen recipe
    const [randomData, setRandom] = useState()
    const [bulkRecipe, setBulkRecipe] = useState()


    // for random recipe 
    useEffect(() => {
        async function FetchData(){
            const res = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${apikey}`)
            const data = res.data.recipes;
            console.log(res.data.recipes);
            setRandom(data);
        }
        FetchData();
    },[])

    // for home screen recipe 
    useEffect(() => {
        async function FetchData(){
            try{
                const res = await axios.get(`https://api.spoonacular.com/recipes/informationBulk?ids=2,3,4,5,6&apiKey=${apikey}`)
                const data = res.data;
                console.log(res.data);
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
            `https://api.spoonacular.com/recipes/complexSearch?query=${searchData}&apiKey=${apikey}`
          );
          console.log(response.data.results);
          setSearchData(response.data.results);
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


