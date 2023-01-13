import heart from "../../assets/icons/heart-icon.svg";
import Cart from "../../assets/icons/Cart-icon.svg";
import NavBarIconsCSS from "./NavBarIcons.module.css";

const NavBarIcons = ({
	toggleCart,
	cartLen,
	toggleFavorites,
	favoritesLen,
}) => {
	return (
		<div className={NavBarIconsCSS.iconsContainer}>
			<div
				className={NavBarIconsCSS.favoritesContainer}
				onClick={toggleFavorites}
			>
				{favoritesLen === 0 ? null : (
					<span className={NavBarIconsCSS.favCount}>{favoritesLen}</span>
				)}
				<img src={heart} alt="heart icon" />
				<p>Favorit</p>
			</div>
			<div className={NavBarIconsCSS.heartContainer} onClick={toggleCart}>
				{cartLen === 0 ? null : (
					<span className={NavBarIconsCSS.cartCount}>{cartLen}</span>
				)}
				<img src={Cart} alt="cart icon" />
				<p>Cart</p>
			</div>
		</div>
	);
};
export default NavBarIcons;
