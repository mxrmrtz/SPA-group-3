import logo from "../../assets/icons/logo.svg";
import LogoCSS from "./Logo.module.css";

const NavLogo = () => {
	return (
		<div className={LogoCSS.logoContainer}>
			<img src={logo}></img>
			<h1>Drown Store</h1>
		</div>
	);
};
export default NavLogo;
