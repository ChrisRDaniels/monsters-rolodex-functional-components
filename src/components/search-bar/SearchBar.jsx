import "./search-bar.styles.css";

const SearchBar = ({ className, placeholder, onChangeHandler }) => (
	<input
		className={` search-bar ${className}`}
		type="search"
		placeholder={placeholder}
		onChange={onChangeHandler}
	/>
);

export default SearchBar;
