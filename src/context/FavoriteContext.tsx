import React, { createContext, useContext, useState } from 'react';

type FavoriteContextType = {
  favorites: string[];
  toggleFavorite: (img: string) => void;
};

const FavoriteContext = createContext<FavoriteContextType>({
  favorites: [],
  toggleFavorite: () => {},
});

export const useFavorites = () => useContext(FavoriteContext);

export const FavoriteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (img: string) => {
    setFavorites((prev) =>
      prev.includes(img) ? prev.filter((i) => i !== img) : [...prev, img]
    );
  };

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};
