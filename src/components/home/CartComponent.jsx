import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import uuid from "react-uuid";
import { motion as m } from "framer-motion";
import { AuthContext } from "../../context/AuthContext";
import DetailsPageComponent from "./DetailsPageComponent";

export const Cart = ({ toggle, handleToggle }) => {
  const { cartItems, deleteItemCart } = useContext(CartContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <m.aside
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="fixed w-screen h-screen z-20 -top-10 -right-5 lg:h-[90vh] lg:top-10 lg:left-[45em] 2xl:left-[79em] overflow-y-scroll no-scrollbar"
    >
      <div className="relative">
        <div className="m-10 mt-10 p-4 left-0 absolute xl:mt-20 xl:absolute xl:-top-20 xl:left-[190px] xl:w-[400px] bg-red-100 bg-opacity-90 rounded-br-xl rounded-bl-xl transition-all shadow-md">
          <div className="absolute p-2 top-0 left-0 xl:-left-14 lg:bg-red-100 bg-transparent opacity-90 rounded-tl-xl rounded-bl-xl">
            <svg
              onClick={() => handleToggle(!toggle)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="cursor-pointer text-black rounded-full w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          {cartItems.length === 0 ? (
            <div className="mt-10 text-xl" key={uuid()}>
              <h1 className="p-2 mt-2 font-semibold text-xl">
                {currentUser ? (
                  <h1 className="text-2xl">Hi, {currentUser.displayName} 👀</h1>
                ) : null}
                Your list is empty.
              </h1>
              <p className="p-2">
                Your favourite recipe is waiting. Hurry up – and start saving your favourite recipes, So you can enjoy making it later.
              </p>
            </div>
          ) : (
            <div className="pt-10 w-[74vw] xl:w-full">
              {cartItems.map((item) => {
                const { id, title, image } = item;

                return (
                  <div
                    className="flex flex-col mx-2 my-4 p-2 bg-red-200 shadow-md rounded-xl"
                    key={id}
                  >
                    <div className="flex flex-col-reverse ">
                      <div className="w-40 ">
                        <img
                          className="rounded-xl object-fill"
                          src={image}
                          alt={image}
                        />
                      </div>
                      <div className="my-2 w-full">
                        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
                      </div>
                    </div>
                    <div className="m-4 flex justify-evenly">
                      <button
                        className=" w-full p-0 bg-red-600 text-white font-semibold hover:bg-gray-50 hover:text-black rounded-xl hover:border-0"
                      >
                         <DetailsPageComponent recipe={item}/>
                      </button>
                     
                      <button
                        onClick={() => deleteItemCart(item)}
                        className="ml-4 w-full bg-gray-50 text-black font-semibold hover:bg-red-600 hover:text-white rounded-xl hover:border-0"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </m.aside>
  );
};
