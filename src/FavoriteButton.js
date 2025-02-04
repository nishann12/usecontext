import { useContext } from "react";
import FavoritesContext from "./FavoritesContext";

const FavoriteButton = ({ imageId }) => {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  return (
    <button
      className="btn btn-sm position-absolute top-0 end-0 m-2"
      style={{ background: favorites.includes(imageId) ? "red" : "gray", color: "white" }}
      onClick={(e) => {
        e.stopPropagation(); 
        toggleFavorite(imageId);
      }}
    >
      {favorites.includes(imageId) ? "❤️" : "🤍"}
    </button>
  );
};

export default FavoriteButton;
