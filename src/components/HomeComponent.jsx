import {useContext } from 'react'
import { ApiContext } from '../context/ApiContext';

const HomeComponent = () => {
  const {data} = useContext(ApiContext)
  return (
    <div>
      {data?.map(dt => (
        <img key={dt.id} src={dt.image}/>
      ))}
    </div>
  )
}
export default HomeComponent