import { createContext, useState, useEffect } from "react";

const FavoritesContext = createContext();


export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    try {
      const savedFavorites = JSON.parse(localStorage.getItem("favorites"));
      return Array.isArray(savedFavorites) ? savedFavorites : [];
    } catch (error) {
      console.error("Failed ", error);
      return [];
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem("favorites", JSON.stringify(favorites));
      
    } catch (error) {
      console.error("Failed to save favorites to localStorage", error);
    }
  }, [favorites]);

  const toggleFavorite = (imageId) => {
    setFavorites((prev) => {
      const updatedFavorites = prev.includes(imageId)
        ? prev.filter((id) => id !== imageId)
        : [...prev, imageId];

      localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); 
      return updatedFavorites;
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
