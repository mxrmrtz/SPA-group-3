import React from "react";
import heart from "../../assets/icons/heart-icon.svg";
import add from "../../assets/icons/Add-icon.svg";
import ProductItemCSS from "./ProductItem.module.css";
const ProductItem = ({ productsData, addToCart, toggleAddFavorites, setProductPage }) => {


	return (
		<li onClick={setProductPage} className={ProductItemCSS.productListItem}>
			<div className={ProductItemCSS.productContainer}>
				<div className={ProductItemCSS.iconsContainer}>
					<button>
						<img
							src={heart}
							alt="hert icon used to save an item fro later"
							onClick={() => toggleAddFavorites(productsData)}
						/>
					</button>
					<button>
						<img
							src={add}
							alt="icon used to add item to shopping cart"
							onClick={() => addToCart(productsData)}
						/>
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
