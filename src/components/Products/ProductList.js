import ProductItem from "./ProductItem";
import ProductListCSS from "./ProductList.module.css";

const ProductList = ({
	productsData,
	addToCart,
	toggleAddFavorites,
	searchBarFilter,
}) => {
	return (
		<div className={ProductListCSS.listContainer}>
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
		</div>
	);
};
export default ProductList;
