import Search from "../../assets/icons/Search-icon.svg";

const SearchBar = () => {
	
	return (
		
		<div>
			<form>
			<input placeholder="DJI phantom"></input>
		    <button>
				<img src={Search}></img>
				</button>
			</form>
		</div>
	);
};
export default SearchBar;
