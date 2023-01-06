import React from "react";
import heart from "../../assets/icons/heart-icon.svg";
import add from "../../assets/icons/Add-icon.svg";
import ProductItemCSS from "./ProductItem.module.css";
const ProductItem = ({ productsData }) => {
	return (
		<li className={ProductItemCSS.productListItem}>
			<div className={ProductItemCSS.productContainer}>
				<div className={ProductItemCSS.iconsContainer}>
					<button>
						<img src={heart} alt="hert icon used to save an item fro later" />
					</button>
					<button>
						<img src={add} alt="icon used to add item to shopping cart" />
					</button>
				</div>
				<img
					src={productsData.img}
					alt="drone"
					className={ProductItemCSS.productImage}
				/>
				<div>
					<h2>
						{productsData.brand} {productsData.title}
					</h2>
					<div>
						{productsData.units}
						{productsData.price}
					</div>
					<div>{productsData.rating}</div>
				</div>
			</div>
		</li>
	);
};
export default ProductItem;
