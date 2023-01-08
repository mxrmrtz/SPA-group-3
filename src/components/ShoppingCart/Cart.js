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
			{/* {checkForEmpty ? null : (
				<button onClick={() => deleteCartItem(deleteItem[0].id)}>delete</button>
			)} */}

			<ul>
				{checkForEmpty ? (
					<div>cart is empty</div>
				) : (
					cart.map((cartItem) => (
						<li className={CartCSS.cartListItem}>
							<button onClick={() => deleteCartItem(cartItem.id)}>
								delete
							</button>
							<CartItem
								cartItem={cartItem}
								key={cartItem.id}
								activateDelete={activateDelete}
							/>
						</li>
					))
				)}
			</ul>
		</div>
	);
};

export default Cart;
