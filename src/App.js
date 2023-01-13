import ProductList from "./components/Products/ProductList";
import productsData from "./products.json";
import NavBar from "./components/Nav-top/NavBar";
import Favorites from "./components/Favorites/Favorites";
import FeatureFilter from "./components/FeatureFilter/FeatureFilter";
import Cart from "./components/ShoppingCart/Cart";
import NavBar2 from "./components/Nav-bottom/NavBar2";
import PriceFilter from "./components/PriceFilter/PriceFilter.js";
import ProductItemPage from "./components/Products/ProductItemPage";
import AppCSS from "./App.module.css";

import { useState } from "react";

function App() {
	const [productPage, setProductPage] = useState();
	const [cart, setCart] = useState([]);
	const [showCart, setShowCart] = useState(false);
	const [favorites, setFavorites] = useState([]);
	const [showFavorites, setShowFavorites] = useState(false);
	const [priceFilterMin, setPriceFilterMin] = useState(0);
	const [priceFilterMax, setPriceFilterMax] = useState(1000000);
	const [searchBarFilter, setSearchBarFilter] = useState("");
	const [searchBrand, setSearchBrand] = useState("");

	const favoritesLen = favorites.length;
	const cartLen = cart.length;

	const changeFilter = (e) => setSearchBarFilter(e.target.value);
	const keys = ["title", "brand"];
	const searchFilter = (product) =>
		keys.some((key) =>
			product[key].toLowerCase().includes(searchBarFilter.toLowerCase())
		);

	const [features, setFeatures] = useState([]);
	const changeFeatureFilter = (e) => {
		const changedFeature = e.target.value;

		setFeatures((prevFeatures) =>
			!prevFeatures.includes(changedFeature)
				? [...prevFeatures, changedFeature]
				: prevFeatures.filter((prevItem) => prevItem !== changedFeature)
		);
	};
	const featureFilter = (product) => {
		if (features.length === 0) {
			return true;
		}

		return (
			product.features.filter((feature) => features.includes(feature))
				.length === features.length
		);
	};

	const brandFilter = (product) => {
		if (searchBrand.length === 0) {
			return true;
		}
		return product.brand === searchBrand;
	};

	const setMin = (e) =>
		setPriceFilterMin(e.target.value === "" ? 0 : parseInt(e.target.value));
	const setMax = (e) =>
		setPriceFilterMax(
			e.target.value === "" ? 1000000 : parseInt(e.target.value)
		);

	const priceFilterFunc = (product) =>
		product.price > priceFilterMin && product.price < priceFilterMax;

	// connect the filter chain here

	const filteredProducts = productsData
		.filter(searchFilter)
		.filter(featureFilter)
		.filter(brandFilter)
		.filter(priceFilterFunc);

	const addToCart = (product) => {
		setCart([...cart, { ...product, id: cart.length }]);
	};

	const toggleCart = () => {
		setShowCart(!showCart ? true : false);
		setShowFavorites(showCart ? false : false);
	};

	const closeCart = () => {
		setShowCart(false);
	};
	const closeFav = () => {
		setShowFavorites(false);
	};

	const deleteCartItem = (id) => {
		setCart(cart.filter((item) => item.id !== id));
	};

	const toggleFavorites = () => {
		setShowFavorites(!showFavorites ? true : false);
		setShowCart(showFavorites ? false : false);
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

	const handleBrandSearch = (brandName) => {
		setSearchBrand(brandName);
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
			<NavBar2 data={productsData} selected={handleBrandSearch} />
			{showCart && (
				<Cart
					cart={cart}
					deleteCartItem={deleteCartItem}
					cartLen={cartLen}
					closeCart={closeCart}
				/>
			)}
			{showFavorites && (
				<Favorites
					favorites={favorites}
					favoritesLen={favoritesLen}
					deleteFavoritesItem={deleteFavoritesItem}
					moveFavoriteToCart={moveFavoriteToCart}
					closeFav={closeFav}
				/>
			)}

			<div className={AppCSS.siteContainer}>
				<div>
					{productPage &&< ProductItemPage productsData={productsData} setProductPage={setProductPage} />}
				</div>
				<div>
					<PriceFilter setMin={setMin} setMax={setMax} />
					<FeatureFilter
						features={features}
						changeFeatureFilter={changeFeatureFilter}
					/>
				</div>
				<ProductList
					productsData={filteredProducts}
					addToCart={addToCart}
					toggleAddFavorites={toggleAddFavorites}

					setProductPage={setProductPage}
					// searchBarFilter={searchBarFilter}
					favorites={favorites}
				/>
			</div>
		</div>
	);
}

export default App;
