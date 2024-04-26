import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const MainPageSkeleton = ({cards}) => {
  return (
    Array(cards).fill(0).map((item,i) => <div key={i} className="p-2">
    <div className="relative lg:w-[20rem] h-[25em] m-2 lg:m-2 bg-opacity-50 bg-white rounded-lg shadow ">
   
      <div className="p-4 rounded-t-lg bg-white">
        <Skeleton
          className="w-full h-10 opacity-70"
        />
      </div>
      <div className="p-4 lg:p-5">
        <div className='h-40'>
        <h5 className="mb-2  text-lg lg:text-xl font-bold tracking-normal">
          <Skeleton className='h-8 mb-4 opacity-70'/>
        </h5>
        <p className="my-2 lg:my-4 overflow-y-auto no-scrollbar font-normal">
          <Skeleton className='opacity-70' count={2}/>
        </p>
        </div>
       
        <div className="mx-4 pt-2 lg:mx-2 lg:pt-4 h-24 border-t-2 border-black border-opacity-20 flex justify-between ">
         <div className="px-16 p-2 lg:mr-2 capitalize bg-white bg-opacity-40 rounded-md text-gray-800">
           <Skeleton  className="w-full h-full object-contain"/>
         </div>
         <div className="my-auto">
         
            <Skeleton className="w-24 h-10 object-contain opacity-70"  />
        
         </div>
        </div>
      </div>
    </div>
  </div>)
    

  )
}
