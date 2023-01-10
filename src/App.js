import ProductList from "./components/Products/ProductList";
import productsData from "./products.json";
import NavBar from "./components/Nav-top/NavBar";
import Favorites from "./components/Favorites/Favorites";
import { useState } from "react";
import Cart from "./components/ShoppingCart/Cart";
import Card from "./components/Card";
import NavBar2 from "./components/NavBar2";
import BrandFilter from "./components/BrandFilter";
import data from "./Data/data.json";
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

	//yinlus navbar
	// const [filterBrand, setFilterBrand] = useState(null);
	const [items, setItems] = useState(data);
	// console.log(data);

	const handleSelect = (brandName) => {
		// console.log('handleSelect triggered', brandName);
		let newItems = data.filter((d) => d.brand === brandName);
		setItems(newItems);

		return (
			<div>
				<NavBar
					toggleCart={toggleCart}
					toggleFavorites={toggleFavorites}
					cartLen={cartLen}
					favoritesLen={favoritesLen}
				/>
				<NavBar2 data={data} selected={handleSelect} />
				{items &&
					items.map((dataItems, index) => (
						<Card key={index} itemData={dataItems} />
					))}
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
	};
}

export default App;
