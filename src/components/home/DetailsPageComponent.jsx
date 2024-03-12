import { Drawer } from "vaul";

export default function DetailsPageComponent({recipe}) {
  const anslyzedIns = (recipe.analyzedInstructions[0])
  
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
              <div className="flex flex-col justify-center px-4 mx-auto">
                <Drawer.Title className="font-bold text-2xl mb-4">
                  {recipe.title}
                </Drawer.Title>
                <div className="">
                  <img src={recipe.image} alt={recipe.title}/>
                  <p className="text-zinc-600 mt-5">
                    <span className=" font-semibold">Total servings</span> - {recipe.servings}
                </p>
                <p className="text-zinc-600 mt-5 capitalize">
                    <span className=" font-semibold">DishTypes</span> - {recipe.dishTypes[0]}, {recipe.dishTypes[1]}, {recipe.dishTypes[2]}, {recipe.dishTypes[3]}, {recipe.dishTypes[4]}
                </p>
                </div>
                <p className="text-zinc-600 mt-8">
                <span className="text-xl font-semibold">Instructions</span> - {recipe.instructions}
                </p>
                <p className="text-zinc-600 mt-8">
                <span className="text-xl font-semibold">Step by Steps Intruction</span><br/>
                </p>               
              </div>
            </div>
            <div className="p-4 bg-zinc-100 border-t border-zinc-200 mt-auto">
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
            </div>
          </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
