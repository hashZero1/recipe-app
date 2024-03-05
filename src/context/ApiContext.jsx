import { createContext,useState, useEffect } from "react"
import axios from "axios"

const apikey = import.meta.env.VITE_API_KEY;

export const ApiContext = createContext();

export const ApiProvider = ({children}) =>{
    const [data, setData] = useState()

    useEffect(() => {
        async function FetchData(){
            const res = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${apikey}`)
            const data = res.data.recipes;
            console.log(res.data.recipes);
            setData(data);
        }
        FetchData();
    },[])

    const values= {data}
    return(
        <ApiContext.Provider value={values}>
            {children}
        </ApiContext.Provider>
    )
}
