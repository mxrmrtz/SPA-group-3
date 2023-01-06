import heart from "../../assets/icons/heart-icon.svg";
import Cart from "../../assets/icons/Cart-icon.svg";

const NavBarIcons = () => {
	
	return (
		<div>
		<div>
			<img src={heart}></img>
			<p>Favorit</p>
		</div>
		<div>
			<img src={Cart}></img>
			<p>Cart</p>
		</div>
		</div>
	);
};
export default NavBarIcons;
