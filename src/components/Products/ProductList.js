import ProductItem from "./ProductItem";
import ProductListCSS from "./ProductList.module.css";

const ProductList = ({ productsData }) => {
	console.log(productsData);
	return (
		<ul className={ProductListCSS.productGrid}>
			{productsData.map((product) => (
				<ProductItem key={product.id} productsData={product} />
			))}
		</ul>
	);
};
export default ProductList;
