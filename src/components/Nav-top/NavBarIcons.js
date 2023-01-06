import heart from "../../assets/icons/heart-icon.svg";
import Cart from "../../assets/icons/Cart-icon.svg";
import NavBarIconsCSS from "./NavBarIcons.module.css";

const NavBarIcons = () => {
	return (
		<div className={NavBarIconsCSS.iconsContainer}>
			<div className={NavBarIconsCSS.favoritesContainer}>
				<img src={heart}></img>
				<p>Favorit</p>
			</div>
			<div className={NavBarIconsCSS.heartContainer}>
				<img src={Cart}></img>
				<p>Cart</p>
			</div>
		</div>
	);
};
export default NavBarIcons;
