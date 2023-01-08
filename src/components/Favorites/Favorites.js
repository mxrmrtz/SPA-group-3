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
			<ul>
				{checkForEmpty ? (
					<div>favorites is empty</div>
				) : (
					favorites.map((favItem) => (
						<li className={FavoritesCSS.favoritesListItem}>
							<button onClick={() => deleteFavoritesItem(favItem.id)}>
								delete
							</button>
							<button onClick={() => moveFavoriteToCart(favItem)}>
								add to cart
							</button>
							<FavoritesItem favItem={favItem} key={favItem.id} />
						</li>
					))
				)}
			</ul>
		</div>
	);
};

export default Favorites;
