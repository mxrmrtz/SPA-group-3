import React from "react";
import FavoritesItem from "./FavoriteItem";
import FavoritesCSS from "./Favorites.module.css";

const Favorites = ({
	favoritesLen,
	favorites,
	deleteFavoritesItem,
	moveFavoriteToCart,
}) => {
	const checkForEmpty = favoritesLen === 0 ? true : false;

	return (
		<div className={FavoritesCSS.favoritesContainer}>
			<h2 className={FavoritesCSS.favHeading}>Shopping Cart</h2>
			<ul className={FavoritesCSS.listContainer}>
				{checkForEmpty ? (
					<div>favorites is empty</div>
				) : (
					favorites.map((favItem) => (
						<li className={FavoritesCSS.favoritesListItem}>
							<FavoritesItem
								favItem={favItem}
								key={favItem.id}
								deleteFavoritesItem={deleteFavoritesItem}
								moveFavoriteToCart={moveFavoriteToCart}
							/>
						</li>
					))
				)}
			</ul>
		</div>
	);
};

export default Favorites;
