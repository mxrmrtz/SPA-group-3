const ProductItem = ({productsData}) => {
	return(
		<li>
			<div>
			<img src={productsData.img} alt="drone"/>
			<h2>{productsData.brand} {productsData.title}</h2>
			<div>{productsData.units}{productsData.price}</div>
			<div>{productsData.rating}</div>
			</div>
		</li>

	)
}
export default ProductItem