import { React } from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NavBarIcons from "./NavBarIcons";
import SignIn from "./SignIn";
import NavBarCSS from "./NavBar.module.css";

const NavBar = ({ toggleCart, cartLen, toggleFavorites, favoritesLen }) => {
	return (
		<nav className={NavBarCSS.navbarContainer}>
			<Logo />
			<SearchBar />
			<NavBarIcons
				toggleCart={toggleCart}
				cartLen={cartLen}
				toggleFavorites={toggleFavorites}
				favoritesLen={favoritesLen}
			/>
			<SignIn />
		</nav>
	);
};
export default NavBar;
