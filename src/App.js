import ProductList from "./components/Products/ProductList";
import productsData from "./products.json";
import NavBar from "./components/Nav-top/NavBar";
import { useState } from "react";
import Cart from "./components/ShoppingCart/Cart";
function App() {
	const [cart, setCart] = useState([]);
	const [showCart, setShowCart] = useState(false);

	const addToCart = (product) => {
		setCart([...cart, { ...product, id: cart.length }]);
	};

	const toggleCart = () => {
		setShowCart(!showCart ? true : false);
	};

	const deleteCartItem = (id) => {
		setCart(cart.filter((item) => item.id !== id));
	};

	const cartLen = cart.length;

	return (
		<div>
			<NavBar toggleCart={toggleCart} cartLen={cartLen} />
			{showCart && (
				<Cart cart={cart} deleteCartItem={deleteCartItem} cartLen={cartLen} />
			)}
			<ProductList productsData={productsData} addToCart={addToCart} />
		</div>
	);
}

export default App;
