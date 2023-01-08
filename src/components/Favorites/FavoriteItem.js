import React from "react";
import FavoritesItemCSS from "./FavoriteItem.module.css";

const FavoritesItem = ({ favItem }) => {
	return (
		<div className={FavoritesItemCSS.favoriteItemContainer}>
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
			</div>
		</div>
	);
};

export default FavoritesItem;
