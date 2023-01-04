import ProductItem from "./ProductItem";

const ProductList = ({ productsData }) => {
	console.log(productsData)
	return (
		<ul>
			{productsData.map((product) => (
				<ProductItem key={product.id} productsData={product} />
			))}
		</ul>
	);
};
export default ProductList;
