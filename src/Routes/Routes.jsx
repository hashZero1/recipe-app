import { Route, Routes } from 'react-router-dom'
import SearchResult from '../components/search/SearchResult'
import HomeComponent from '../components/home/HomeComponent'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<HomeComponent/>} />
        <Route path='/search/:name' element={<SearchResult/>} />
    </Routes>
     )
}

export default Routers;