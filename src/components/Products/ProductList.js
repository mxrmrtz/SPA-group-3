import ProductItem from "./ProductItem";
import ProductListCSS from "./ProductList.module.css";

const ProductList = ({ productsData, addToCart, toggleAddFavorites }) => {
	console.log(productsData);
	return (
		<ul className={ProductListCSS.productGrid}>
			{productsData.map((product) => (
				<ProductItem
					key={product.id}
					productsData={product}
					addToCart={addToCart}
					toggleAddFavorites={toggleAddFavorites}
				/>
			))}
		</ul>
	);
};
export default ProductList;
