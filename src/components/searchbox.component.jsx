const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2 ma2">
      <input
        className="tc pa2 ba b--gray bg-washed-blue"
        type="search"
        placeholder="Search Users"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
