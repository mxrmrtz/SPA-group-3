import heart from "../../assets/icons/heart-icon.svg";
import Cart from "../../assets/icons/Cart-icon.svg";
import NavBarIconsCSS from "./NavBarIcons.module.css";

const NavBarIcons = () => {
	return (
		<div className={NavBarIconsCSS.iconsContainer}>
			<div className={NavBarIconsCSS.favoritesContainer}>
				<img src={heart} alt="heart icon" />
				<p>Favorit</p>
			</div>
			<div className={NavBarIconsCSS.heartContainer}>
				<img src={Cart} alt="cart icon" />
				<p>Cart</p>
			</div>
		</div>
	);
};
export default NavBarIcons;
