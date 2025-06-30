import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { supabase } from '@/lib/supabase';
import { toast } from '@/components/ui/use-toast';

interface FavoriteRecipesContextType {
  favoriteRecipes: string[];
  isLoading: boolean;
  toggleFavorite: (recipeId: string) => Promise<void>;
  isFavorite: (recipeId: string) => boolean;
}

const FavoriteRecipesContext = createContext<FavoriteRecipesContextType>({
  favoriteRecipes: [],
  isLoading: false,
  toggleFavorite: async () => {},
  isFavorite: () => false,
});

export const useFavoriteRecipes = () => useContext(FavoriteRecipesContext);

export const FavoriteRecipesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favoriteRecipes, setFavoriteRecipes] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { isAuthenticated, user } = useAuth();

  // Load favorites from Supabase when user is authenticated
  useEffect(() => {
    if (isAuthenticated && user) {
      loadFavorites();
    } else {
      setFavoriteRecipes([]);
    }
  }, [isAuthenticated, user]);

  const loadFavorites = async () => {
    if (!user) return;

    try {
      setIsLoading(true);
      
      const { data, error } = await supabase
        .from('favorite_recipes')
        .select('recipe_id')
        .eq('user_id', user.id);

      if (error) {
        console.error('Error loading favorites:', error);
        return;
      }

      setFavoriteRecipes(data.map(item => item.recipe_id));
    } catch (error) {
      console.error('Error in loadFavorites:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleFavorite = async (recipeId: string) => {
    if (!isAuthenticated || !user) {
      toast({
        title: "Login Required",
        description: "Please log in to save favorite recipes",
      });
      return;
    }

    try {
      const isFavorited = favoriteRecipes.includes(recipeId);

      if (isFavorited) {
        // Remove from favorites
        const { error } = await supabase
          .from('favorite_recipes')
          .delete()
          .eq('user_id', user.id)
          .eq('recipe_id', recipeId);

        if (error) {
          throw error;
        }

        setFavoriteRecipes(prev => prev.filter(id => id !== recipeId));
        
        toast({
          title: "Removed from favorites",
          description: "Recipe has been removed from your favorites",
        });
      } else {
        // Add to favorites
        const { error } = await supabase
          .from('favorite_recipes')
          .insert({
            user_id: user.id,
            recipe_id: recipeId,
          });

        if (error) {
          throw error;
        }

        setFavoriteRecipes(prev => [...prev, recipeId]);
        
        toast({
          title: "Added to favorites",
          description: "Recipe has been added to your favorites",
        });
      }
    } catch (error: any) {
      console.error('Error toggling favorite:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to update favorites",
        variant: "destructive",
      });
    }
  };

  const isFavorite = (recipeId: string) => {
    return favoriteRecipes.includes(recipeId);
  };

  return (
    <FavoriteRecipesContext.Provider value={{ 
      favoriteRecipes, 
      isLoading, 
      toggleFavorite, 
      isFavorite 
    }}>
      {children}
    </FavoriteRecipesContext.Provider>
  );
};