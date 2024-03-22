import { Drawer } from "vaul";

export default function DetailsPageComponent({recipe}) {
  const anslyzedIns = (recipe.analyzedInstructions[0]?.steps)

  return (
    <Drawer.Root shouldScaleBackground>
      <Drawer.Trigger asChild>
        <button>Details</button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0">
            <div className="p-4 bg-white overflow-y-scroll no-scrollbar rounded-t-[10px] flex-1">
              <div className="mx-auto w-14 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
              <div className="flex flex-col bg-gray-100 w-11/12 justify-center p-10 mx-auto rounded-t-[20px]">
                <Drawer.Title className="font-bold text-2xl lg:text-4xl mb-5  bg-white rounded-[12px]  p-4">
                  {recipe.title}
                </Drawer.Title>
                <div className="flex flex-col lg:flex-row justify-between lg:text-lg lg:w-3/5">
                  <img className="rounded-[12px]" src={recipe.image} alt={recipe.title}/>
                  <div className="my-4 lg:my-0">
                  <b className="text-zinc-600 mt-5">
                  Total servings 
                </b>
                <p className=" ">{recipe.servings}</p>
                  </div>
                 <div>
                 <b className="text-zinc-600 mt-5 capitalize">
                DishTypes 
                </b>
                <p className="capitalize">
                  {recipe.dishTypes[0]}<br/> 
                  {recipe.dishTypes[1]}<br/> 
                  {recipe.dishTypes[2]}<br/> 
                  {recipe.dishTypes[3]}<br/> 
                  {recipe.dishTypes[4]}</p> 
                 </div>
              
                </div>
                <div className=" lg:w-5/6">
                <h2 className="font-semibold mb-2 text-2xl text-zinc-600 mt-8">
                Instructions :
                </h2>
                <p className="text-lg">{recipe.instructions}</p>
                <h3 className="mb-2 text-zinc-600 mt-8 text-xl font-semibold">
                Step by Steps Intructions :
                </h3>     
                <p className="text-lg"> {anslyzedIns?.map(dt => <li key={dt.number}>{dt.step}</li>)}</p>
                </div>
                           
              </div>
            </div>
            {/* <div className="p-4 bg-zinc-100 border-t border-zinc-200 mt-auto">
              <div className="flex gap-6 justify-end max-w-md mx-auto">
                <a
                  className="text-xs text-zinc-600 flex items-center gap-0.25"
                  href="https://github.com/emilkowalski/vaul"
                  target="_blank"
                >
                  GitHub
                  
                </a>
                <a
                  className="text-xs text-zinc-600 flex items-center gap-0.25"
                  href="https://twitter.com/emilkowalski_"
                  target="_blank"
                >
                  Twitter

                </a>
              </div>
            </div> */}
          </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
