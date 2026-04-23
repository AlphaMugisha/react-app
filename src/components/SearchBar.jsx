function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={value}
      onChange={onChange}
      className="search-bar"
    />
  );
}

export default SearchBar;