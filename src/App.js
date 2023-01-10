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

	//working on searchbar-filter bellow

	const [searchBarFilter, setSearchBarFilter] = useState("");
	const changeFilter = (e) => setSearchBarFilter(e.target.value);

	const keys = ["title", "brand"];
	const searchFilter = (product) =>
		keys.some((key) =>
			product[key].toLowerCase().includes(searchBarFilter.toLowerCase())
		);

	const aThirdFilter = (product) => true;
	const anotherFilter = (product) => true;

	const filteredProducts = productsData
		// .filter(product => searchFilter(product))
		.filter(searchFilter)
		.filter(anotherFilter)
		.filter(aThirdFilter);

	// const search = (data) => {
	// 	return data.filter((item) =>
	// 		item.title.toLowerCase().includes(searchBarFilter)
	// 	);
	// };

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
				changeFilter={changeFilter}
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
				productsData={filteredProducts}
				addToCart={addToCart}
				toggleAddFavorites={toggleAddFavorites}
				// searchBarFilter={searchBarFilter}
			/>
		</div>
	);
}

export default App;
