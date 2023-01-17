import { React } from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NavBarIcons from "./NavBarIcons";
import NavBarCSS from "./NavBar.module.css";

const NavBar = ({
	toggleCart,
	cartLen,
	toggleFavorites,
	favoritesLen,
	changeFilter,
}) => {
	return (
		<nav className={NavBarCSS.navbarContainer}>
			<Logo />
			<SearchBar changeFilter={changeFilter} />
			<NavBarIcons
				toggleCart={toggleCart}
				cartLen={cartLen}
				toggleFavorites={toggleFavorites}
				favoritesLen={favoritesLen}
			/>
			{/* <SignIn /> */}
		</nav>
	);
};
export default NavBar;
