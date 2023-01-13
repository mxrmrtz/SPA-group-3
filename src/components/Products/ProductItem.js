import React, { useState } from "react";
import heart from "../../assets/icons/heart-icon.svg";
import redHeart from "../../assets/icons/red-heart.svg";
import add from "../../assets/icons/Add-icon.svg";
import addBlue from "../../assets/icons/add-blue.svg";
import ProductItemCSS from "./ProductItem.module.css";
const ProductItem = ({
	productsData,
	addToCart,
	toggleAddFavorites,
	setProductPage,
	favorites,
}) => {
	const [src, setSrc] = useState(add);

	return (
		<li className={ProductItemCSS.productListItem}>
			<div className={ProductItemCSS.productContainer}>
				<div className={ProductItemCSS.iconsContainer}>
					<button>
						<img
							src={favorites.includes(productsData) ? redHeart : heart}
							alt="hert icon used to save an item fro later"
							onClick={() => toggleAddFavorites(productsData)}
							className={ProductItemCSS.heart}
						/>
					</button>
					<button>
						<img
							className={ProductItemCSS.productImage}
							src={src}
							alt="icon used to add item to shopping cart"
							onClick={() => {
								addToCart(productsData);
								setInterval(() => {
									setSrc(add);
								}, 100);
								setTimeout(() => {
									setSrc(addBlue);
								}, 50);
							}}
						/>
					</button>
				</div>
				<div className={ProductItemCSS.productImageContainer}>
					<img
						src={productsData.img}
						alt="drone"
						className={ProductItemCSS.productImage}
						onClick={setProductPage}
					/>
				</div>
				<div className={ProductItemCSS.productTextContainer}>
					<h2>
						{productsData.brand} {productsData.title}
					</h2>
					<div className={ProductItemCSS.price}>
						{productsData.units}
						{productsData.price}
					</div>
					<div className={ProductItemCSS.rating}>{productsData.rating}</div>
				</div>
			</div>
		</li>
	);
};
export default ProductItem;
