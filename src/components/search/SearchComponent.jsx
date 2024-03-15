import { useContext, Fragment, useState } from "react";
import { ApiContext } from "../../context/ApiContext";
import { Combobox, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { recipes } from "./Recipes";

const SearchComponent = () => {
    const {searchData, setSearchData,searchRecipe} = useContext(ApiContext);
    const [query, setQuery] = useState('');

  const filteredProduct =
    query === ""
      ? recipes
      : recipes.filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase());
        }
      );

  const handleChange = (e) => {
    setQuery(e.target.value);
  };


  return (
  <section className="mt-24">
    <h1 className="text-center text-5xl text-white font-bold uppercase m-5">Hey there! 👀</h1>
    <h2 className="text-center text-3xl text-white mb-12">What are you planning on making today? 😋</h2>
    <Combobox value={searchData} onChange={setSearchData}>
      <div className="text-center mt-6 relative">
        <Combobox.Input
        className="px-6 py-5 lg:px-5 lg:py-7 w-3/4 lg:w-4/6 text-xl lg:text-2xl tracking-wide bg-white rounded-tl-lg rounded-bl-lg "
        placeholder="Search Recipe..."
        displayValue={query}
        onChange={handleChange}
        />
        <Link
        onClick={() => searchRecipe()}
        to={`/search/:${searchData}`}
        className="px-4 py-5 lg:px-8 lg:py-7 text-xl bg-red-600 text-white font-semibold hover:bg-gray-800 hover:text-white lg:text-2xl tracking-wide rounded-tr-lg rounded-br-lg "
        >
          Search
        </Link>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery(query)}
        >
            <Combobox.Options className="mx-12 lg:mx-64 z-20 h-60 yes-scrollbar shadow bg-white overflow-y-scroll mt-2 w-3/4 text-left absolute ">
              {filteredProduct?.map((data) => (
                <Combobox.Option
                  onChange={() => setSearchData(data)}
                  key={data}
                  className={({ active }) =>
                    `relative text-lg px-5 py-2 w-4/6 capitalize  ${
                      active
                        ? "bg-red-500 cursor-pointer text-white"
                        : "text-gray-900"
                    }`
                  }
                  value={data}
                >
                  {data}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
      <div>
      </div>
    </section>
  );
};

export default SearchComponent;
