import { Drawer } from "vaul";

export default function DetailsPageComponent({recipe}) {
  const nameless = () => {
    const anslyzedIns = (recipe.analyzedInstructions[0]?.steps)
      return anslyzedIns?.map(dt => <li key={dt.number}>{dt.step}</li>)
  }
  
  return (
    <Drawer.Root shouldScaleBackground>
      <Drawer.Trigger asChild>
        <button>Details</button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="bg-zinc-100 text-gray-700 flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0">
            <div className="pt-2 lg:p-4 bg-white overflow-y-scroll no-scrollbar rounded-t-[10px] flex-1">
              <div className="mx-auto w-14 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
              <div className="flex flex-col bg-gray-100 w-11/12 justify-center p-4 lg:p-10 mx-auto rounded-t-[10px]">
                <Drawer.Title className="font-bold text-xl lg:text-4xl mb-5  bg-white rounded-[12px]  p-4">
                  {recipe.title}
                </Drawer.Title>
                <div className="flex flex-col lg:flex-row justify-between lg:text-lg lg:w-3/5">
                  <img className="rounded-[10px]" src={recipe.image} alt={recipe.title}/>
                  <div className="my-4 lg:my-0">
                  <b className=" mt-5">
                  Total servings 
                </b>
                <p>{recipe.servings}</p>
                  </div>
                 <div className="capitalize">
                 <b>
                DishTypes 
                </b>
                <p>
                  {recipe.dishTypes[0]}<br/> 
                  {recipe.dishTypes[1]}<br/> 
                  {recipe.dishTypes[2]}<br/> 
                  {recipe.dishTypes[3]}<br/> 
                  {recipe.dishTypes[4]}</p> 
                 </div>
              
                </div>
                <div className="lg:w-5/6">
                <h2 className="font-semibold mb-2 text-xl lg:text-2xl mt-5 lg:mt-8">
                Instructions :
                </h2>
                <p className=" leading-relaxed tracking-wide lg:text-lg">{!recipe.instructions? "Not Available": recipe.instructions } </p>
                <h3 className="mb-2  mt-8 text-lg lg:text-xl font-semibold">
                Step by Steps Intructions :
                </h3>     
                <p className="leading-relaxed tracking-wide lg:text-lg">{!recipe.analyzedInstructions? "Not Available": nameless()} </p>
                </div>         
              </div>
              <div className="mx-auto w-40 h-1.5 flex-shrink-0 rounded-full bg-zinc-300  my-2" />
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
