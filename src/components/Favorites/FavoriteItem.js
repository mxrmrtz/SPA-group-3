import React from "react";
import FavoritesItemCSS from "./FavoriteItem.module.css";

const FavoritesItem = ({
	favItem,
	deleteFavoritesItem,
	moveFavoriteToCart,
}) => {
	const firstFeatures = favItem.features.slice(0, 5);
	return (
		<div className={FavoritesItemCSS.favoriteItemContainer}>
			{" "}
			<button
				onClick={() => deleteFavoritesItem(favItem.id)}
				className={FavoritesItemCSS.deleteBtn}
			>
				delete
			</button>
			<button
				onClick={() => moveFavoriteToCart(favItem)}
				className={FavoritesItemCSS.moveBtn}
			>
				add to cart
			</button>
			<img
				src={favItem.img}
				alt="img"
				className={FavoritesItemCSS.favoriteItemImage}
			/>
			<div>
				<h3 className={FavoritesItemCSS.favoriteItemTitle}>{favItem.title}</h3>
				<div className={FavoritesItemCSS.favoriteItemPrice}>
					{favItem.price}
				</div>
				<div className={FavoritesItemCSS.favItemFeatures}>
					{firstFeatures.map((feature, key) => {
						return <p key={Math.random()}>{feature}</p>;
					})}
				</div>
			</div>
		</div>
	);
};

export default FavoritesItem;
