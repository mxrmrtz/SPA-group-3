import Search from "../../assets/icons/Search-icon.svg";
import SearchBarCSS from "./SearchBar.module.css";

const SearchBar = ({ changeFilter }) => {
	return (
		<div className={SearchBarCSS.SearchBarContainer}>
			<form>
				<input
					placeholder="DJI phantom"
					type="text"
					onChange={changeFilter}
				></input>
				<button>
					<img src={Search} alt="search icon" />
				</button>
			</form>
		</div>
	);
};
export default SearchBar;
