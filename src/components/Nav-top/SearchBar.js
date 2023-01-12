import Search from "../../assets/icons/Search-icon.svg";
import SearchBarCSS from "./SearchBar.module.css";

const SearchBar = ({ changeFilter }) => {
	return (
		<form className={SearchBarCSS.SearchBarContainer}>
			<input
				placeholder="Search"
				type="text"
				onChange={changeFilter}
				className={SearchBarCSS.input}
			/>
			<button className={SearchBarCSS.searchBtn}>
				<img src={Search} alt="search icon" />
			</button>
		</form>
	);
};
export default SearchBar;
