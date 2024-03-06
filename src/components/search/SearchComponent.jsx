import { useContext, Fragment } from "react";
import { ApiContext } from "../../context/ApiContext";
import { Combobox, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import SearchResult from "./SearchResult";
import { recipes } from "./Recipes";

const SearchComponent = () => {
    const [query, setQuery,searchData, setSearchData,searchRecipe] = useContext(ApiContext)

  const filteredProduct =
    query === ""
      ? recipes
      : recipes.filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase());
        }
      );


  return (
    <section className="mt-14 lg:mt-20 lg:ml-12">
    <Combobox value={searchData} onChange={setSearchData}>
      <div className="relative mt-6 w-full">
        <Combobox.Input
          className="px-4 py-2 lg:px-5 lg:py-3 w-3/4 lg:w-4/6 text-xl lg:text-2xl bg-white rounded-tl-lg rounded-bl-lg "
          placeholder="Search products..."
          displayValue={query}
          onChange={setQuery}
        />
        <Link
          onClick={() => searchRecipe()}
          to={`/search/:${searchData}`}
          className="px-4 py-2 lg:px-5 lg:py-3 text-xl bg-red-600 text-white font-semibold hover:bg-gray-800 hover:text-white lg:text-2xl rounded-tr-lg rounded-br-lg "
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
          <Combobox.Options className="mt-2">
            {filteredProduct.map((data) => (
              <Combobox.Option
                onChange={() => setSearchData(data)}
                key={data}
                className={({ active }) =>
                  `relative text-lg px-5 py-2 w-4/6 capitalize bg-gray-100 ${
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
      <SearchResult searchProduct={searchData} />
    </div>
  </section>
  );
};

export default SearchComponent;
