import React from "react";
import CartItemCSS from "./CartItem.module.css";

const CartItem = ({ cartItem, deleteCartItem }) => {
	const firstFeatures = cartItem.features.slice(0, 5);
	return (
		<div className={CartItemCSS.cartItemContainer}>
			<button
				onClick={() => deleteCartItem(cartItem.id)}
				className={CartItemCSS.deleteBtn}
			>
				delete
			</button>
			<img src={cartItem.img} alt="img" className={CartItemCSS.cartItemImage} />
			<div>
				<h3 className={CartItemCSS.cartItemTitle}>{cartItem.title}</h3>
				<div className={CartItemCSS.cartItemPrice}>
					{cartItem.units} {cartItem.price}
				</div>
				<div className={CartItemCSS.cartItemFeatures}>
					{firstFeatures.map((feature, key) => {
						return <p key={Math.random()}>{feature}</p>;
					})}
				</div>
			</div>
		</div>
	);
};

export default CartItem;
