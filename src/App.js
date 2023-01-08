import ProductList from "./components/Products/ProductList";
import productsData from "./products.json";
import NavBar from "./components/Nav-top/NavBar";
import Favorites from "./components/Favorites/Favorites";
import { useState } from "react";
import Cart from "./components/ShoppingCart/Cart";
function App() {
	const [cart, setCart] = useState([]);
	const [showCart, setShowCart] = useState(false);
	const [favorites, setFavorites] = useState([]);
	const [showFavorites, setShowFavorites] = useState(false);

	const favoritesLen = favorites.length;
	const cartLen = cart.length;

	const addToCart = (product) => {
		setCart([...cart, { ...product, id: cart.length }]);
	};

	const toggleCart = () => {
		setShowCart(!showCart ? true : false);
	};

	const deleteCartItem = (id) => {
		setCart(cart.filter((item) => item.id !== id));
	};

	const toggleFavorites = () => {
		setShowFavorites(!showFavorites ? true : false);
	};

	const toggleAddFavorites = (product) => {
		favorites.includes(product)
			? setFavorites((prev) => prev.filter((item) => item.id !== product.id))
			: setFavorites([...favorites, product]);
	};

	const deleteFavoritesItem = (id) => {
		setFavorites(favorites.filter((item) => item.id !== id));
	};

	const moveFavoriteToCart = (product) => {
		setCart([...cart, { ...product, id: cart.length }]);
		setFavorites(favorites.filter((item) => item.id !== product.id));
	};

	return (
		<div>
			<NavBar
				toggleCart={toggleCart}
				toggleFavorites={toggleFavorites}
				cartLen={cartLen}
				favoritesLen={favoritesLen}
			/>
			{showCart && (
				<Cart cart={cart} deleteCartItem={deleteCartItem} cartLen={cartLen} />
			)}
			{showFavorites && (
				<Favorites
					favorites={favorites}
					favoritesLen={favoritesLen}
					deleteFavoritesItem={deleteFavoritesItem}
					moveFavoriteToCart={moveFavoriteToCart}
				/>
			)}
			<ProductList
				productsData={productsData}
				addToCart={addToCart}
				toggleAddFavorites={toggleAddFavorites}
			/>
		</div>
	);
}

export default App;
