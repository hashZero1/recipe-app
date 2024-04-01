import SearchSuggestions from "./SearchSuggestionComponent";

const SearchComponent = () => {
  return (
  <section className="mt-24">
    <div className="my-10 py-10 ">
      <h1 className="text-center text-5xl text-white font-bold uppercase m-6">Hey there! 👀</h1>
      <h2 className="text-center text-2xl lg:text-3xl text-white">What are you planning on making today? 😋</h2>
    </div>
    <SearchSuggestions/>
  </section>
  );
};

export default SearchComponent;
