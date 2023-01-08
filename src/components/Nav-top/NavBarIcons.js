import heart from "../../assets/icons/heart-icon.svg";
import Cart from "../../assets/icons/Cart-icon.svg";
import NavBarIconsCSS from "./NavBarIcons.module.css";

const NavBarIcons = ({ toggleCart, cartLen }) => {
	return (
		<div className={NavBarIconsCSS.iconsContainer}>
			<div className={NavBarIconsCSS.favoritesContainer}>
				<img src={heart} alt="heart icon" />
				<p>Favorit</p>
			</div>
			<div className={NavBarIconsCSS.heartContainer} onClick={toggleCart}>
				<img src={Cart} alt="cart icon" />
				<p>Cart({cartLen})</p>
			</div>
		</div>
	);
};
export default NavBarIcons;
