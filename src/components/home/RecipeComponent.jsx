import {useContext } from 'react'
import { ApiContext } from '../../context/ApiContext';

const RecipeComponent = () => {
    const {data} = useContext(ApiContext)
    
    return (
    <div>
        {data?.map(dt => (
            <div key={dt.id}>
                <div>
                    <img src={dt.image}/>
                    <h1 className='text-black'>{dt.title}</h1>
                </div>
                <div>
                    
                </div>
           
            </div>
        ))}
    </div>
  )
}

export default RecipeComponent;