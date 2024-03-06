import { createContext,useState, useEffect } from "react"
import axios from "axios"
import useForm from './../hooks/useForm';

const apikey = import.meta.env.VITE_API_KEY;

export const ApiContext = createContext();

export const ApiProvider = ({children}) =>{
    //for handle search and search data
    const [query, setQuery] = useForm('')
    const [searchData, setSearchData] = useState()

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
const searchRecipe = () => {
        async function FetchData(){
            try{
                const res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apikey}`)
                const data = res.data;
                console.log(res.data.results);
                setSearchData(data.results);
            }catch(e){
                console.log(e.response.data.message)
            }}
            FetchData();
        }

    const values= {randomData,bulkRecipe,searchData,query,setQuery,setSearchData,searchRecipe}
    return(
        <ApiContext.Provider value={values}>
            {children}
        </ApiContext.Provider>
    )
}


