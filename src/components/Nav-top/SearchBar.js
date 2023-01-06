import Search from "../../assets/icons/Search-icon.svg";
import SearchBarCSS from "./SearchBar.module.css";

const SearchBar = () => {
	return (
		<div className={SearchBarCSS.SearchBarContainer}>
			<form>
				<input placeholder="DJI phantom"></input>
				<button>
					<img src={Search} alt="search icon" />
				</button>
			</form>
		</div>
	);
};
export default SearchBar;
