import ProductItem from "./ProductItem";
import ProductListCSS from "./ProductList.module.css";

const ProductList = ({
	productsData,
	addToCart,
	toggleAddFavorites,
	setProductPage,
}) => {
	return (
		<ul className={ProductListCSS.productGrid}>
			{productsData
				// .filter((product) =>
				// 	product.title.toLowerCase().includes(searchBarFilter)
				// )
				.map((product) => (
					<ProductItem
						setProductPage={setProductPage}
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
