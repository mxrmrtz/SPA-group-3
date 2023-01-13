import React from "react";
import FavoritesItem from "./FavoriteItem";
import FavoritesCSS from "./Favorites.module.css";
import closeIcon from "../../assets/icons/close.svg";

const Favorites = ({
	favoritesLen,
	favorites,
	deleteFavoritesItem,
	moveFavoriteToCart,
	closeFav,
}) => {
	const checkForEmpty = favoritesLen === 0 ? true : false;

	return (
		<div className={FavoritesCSS.favoritesContainer}>
			<h2 className={FavoritesCSS.favHeading}>Favorites</h2>
			<button className={FavoritesCSS.close} onClick={closeFav}>
				<img src={closeIcon} alt="close" />
			</button>
			<ul className={FavoritesCSS.listContainer}>
				{checkForEmpty ? (
					<div className={FavoritesCSS.ifEmptyText}>favorites is empty</div>
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
