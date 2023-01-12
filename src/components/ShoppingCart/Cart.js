import React from "react";
import CartItem from "./CartItem";
import CartCSS from "./Cart.module.css";

const Cart = ({
	cart,
	activateDelete,
	deleteCartItem,
	deleteItem,
	cartLen,
}) => {
	const checkForEmpty = cartLen === 0 ? true : false;

	console.log("TEST EMPTY");
	console.log(checkForEmpty);

	return (
		<div className={CartCSS.cartContainer}>
			<h2 className={CartCSS.cartHeading}>Shopping Cart</h2>

			<ul className={CartCSS.listContainer}>
				{checkForEmpty ? (
					<div className={CartCSS.ifEmptyText}>Cart is empty</div>
				) : (
					cart.map((cartItem) => (
						<li className={CartCSS.cartListItem}>
							<CartItem
								cartItem={cartItem}
								key={cartItem.id}
								activateDelete={activateDelete}
								deleteCartItem={deleteCartItem}
							/>
						</li>
					))
				)}
			</ul>
			{checkForEmpty ? null : (
				<div className={CartCSS.cartCheckoutBtnContainer}>
					<button className={CartCSS.cartCheckoutBtn}>Checkout</button>
				</div>
			)}
		</div>
	);
};

export default Cart;
