import { React } from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NavBarIcons from "./NavBarIcons";
import SignIn from "./SignIn";
import NavBarCSS from "./NavBar.module.css";

const NavBar = () => {
	return (
		<nav className={NavBarCSS.navbarContainer}>
			<Logo />
			<SearchBar />
			<NavBarIcons />
			<SignIn />
		</nav>
	);
};
export default NavBar;
