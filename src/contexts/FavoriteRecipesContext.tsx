
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { toast } from '@/components/ui/use-toast';

interface FavoriteRecipesContextType {
  favoriteRecipes: string[];
  toggleFavorite: (recipeId: string) => void;
  isFavorite: (recipeId: string) => boolean;
}

const FavoriteRecipesContext = createContext<FavoriteRecipesContextType>({
  favoriteRecipes: [],
  toggleFavorite: () => {},
  isFavorite: () => false,
});

export const useFavoriteRecipes = () => useContext(FavoriteRecipesContext);

export const FavoriteRecipesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favoriteRecipes, setFavoriteRecipes] = useState<string[]>([]);
  const { isAuthenticated } = useAuth();

  // Load favorites from localStorage on initial render
  useEffect(() => {
    if (isAuthenticated) {
      const storedFavorites = localStorage.getItem('favoriteRecipes');
      if (storedFavorites) {
        setFavoriteRecipes(JSON.parse(storedFavorites));
      }
    }
  }, [isAuthenticated]);

  // Save favorites to localStorage when they change
  useEffect(() => {
    if (isAuthenticated && favoriteRecipes.length > 0) {
      localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
    }
  }, [favoriteRecipes, isAuthenticated]);

  const toggleFavorite = (recipeId: string) => {
    if (!isAuthenticated) {
      toast({
        title: "Login Required",
        description: "Please log in to save favorite recipes",
      });
      return;
    }

    setFavoriteRecipes(prev => {
      if (prev.includes(recipeId)) {
        toast({
          title: "Removed from favorites",
          description: "Recipe has been removed from your favorites",
        });
        return prev.filter(id => id !== recipeId);
      } else {
        toast({
          title: "Added to favorites",
          description: "Recipe has been added to your favorites",
        });
        return [...prev, recipeId];
      }
    });
  };

  const isFavorite = (recipeId: string) => {
    return favoriteRecipes.includes(recipeId);
  };

  return (
    <FavoriteRecipesContext.Provider value={{ favoriteRecipes, toggleFavorite, isFavorite }}>
      {children}
    </FavoriteRecipesContext.Provider>
  );
};
