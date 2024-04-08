import { Combobox } from '@headlessui/react';
import { useContext, useState } from 'react'
import { ApiContext } from '../../context/ApiContext';
import { Link } from 'react-router-dom';

const SearchSuggestions = () =>{   
    const {searchData, setSearchData,searchRecipe} = useContext(ApiContext);
    const [query, setQuery] = useState("");
    const [recipes, setRecipe] = useState(() => [
        "pasta",
        "cauliflower",
        "vegetarian",
        "cuisine",
        "coffeebean",
        "tomato",
        "cheese",
        "egg",
        "meat",
        "paneer",
        "chicken",
        "sandwich",
        "seafood",
        "biryani",
        "potato",
        "rice",
        "taco",
        "rolls",
        "pancake",
]);
const [activePerson, setActivePerson] = useState(null);

const filteredPeople =
  query === ""
    ? recipes
    : recipes.filter((recipe) =>
        recipe.toLowerCase().includes(query.toLowerCase())
      );

return (
  <div>
    <Combobox
      value={activePerson}
      onChange={(recipe) => {
        setActivePerson(recipe);
        setSearchData(recipe)

        // Attach to list of recipes
        if (!recipes.includes(recipe)) {
          setRecipe((existing) => [...existing, recipe]);
        }
      }}
      as="div"
      className="text-center mt-6 relative"
    >
      <Combobox.Input 
      className="px-4 py-2 lg:px-5 lg:py-3 w-[72%] lg:w-4/6 text-lg lg:text-2xl bg-white rounded-tl-lg rounded-bl-lg"
      placeholder="Search Recipe..." 
      onChange={(event) => setQuery(event.target.value)} />
         <Link
        onClick={() => searchRecipe()}
        to={`/search/:${searchData}`}
        className="px-3 py-[11px] lg:px-5 lg:py-3 text-lg bg-red-600 text-white font-semibold hover:bg-gray-800 hover:text-white lg:text-2xl rounded-tr-lg rounded-br-lg "
        >
          Search
        </Link>
      <Combobox.Options className="absolute left-4 lg:left-[16.5em] text-left top-12 lg:top-[4em] h-80 overflow-y-scroll no-scrollbar z-40">
        {query !== "" && (
          <Combobox.Option
          onChange={() => setSearchData(query)}
            value={query}
            className={({ active, selected }) => {
              return `px-4 py-2 bg-gray-50 pointer-default ${
                active && selected
                  ? "bg-blue-50"
                  : active
                  ? "bg-blue-50"
                  : selected
                  ? "bg-blue-500 text-white"
                  : ""
              }`;
            }}
          >
            Create new recipe: {query}
          </Combobox.Option>
        )}
        {filteredPeople.map((recipe) => {
          return (
            <Combobox.Option
              key={recipe}
              onChange={() => setSearchData(recipe)}
              value={recipe}
              className={({ active }) =>
              `relative min-w-[18.4em] lg:min-w-[40em] text-md bg-gray-100 lg:text-lg px-5 py-2 capitalize  ${
                active
                  ? "bg-red-500 cursor-pointer text-white"
                  : "text-gray-900"
              }`
            }
            >
              {recipe}
            </Combobox.Option>
          );
        })}
      </Combobox.Options>
    </Combobox>
  </div>
);
}

export default SearchSuggestions;