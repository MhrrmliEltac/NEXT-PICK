const SearchInput = () => {
  return (
    <div className="w-[40%]">
      <input
        id="search"
        type="text"
        name="search"
        placeholder="I'm searching for..."
        className="rounded flex px-[16px] py-[6px] w-full outline-none"
      />
    </div>
  );
};

export default SearchInput;
