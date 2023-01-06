import {React} from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NavBarIcons from "./NavBarIcons";
import SignIn from "./SignIn";

const NavBar=()=>{
	return (
		<nav>
		<Logo />
		<SearchBar />
		<NavBarIcons />
		<SignIn />
		</nav>
	)
}
export default NavBar;
