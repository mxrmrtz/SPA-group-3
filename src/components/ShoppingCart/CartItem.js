import React from "react";
import CartItemCSS from "./CartItem.module.css";

const CartItem = ({ cartItem, activateDelete }) => {
	return (
		<div className={CartItemCSS.cartItemContainer}>
			<img src={cartItem.img} alt="img" className={CartItemCSS.cartItemImage} />
			<div>
				<h3 className={CartItemCSS.cartItemTitle}>{cartItem.title}</h3>
				<div className={CartItemCSS.cartItemPrice}>{cartItem.price}</div>
			</div>
		</div>
	);
};

export default CartItem;
