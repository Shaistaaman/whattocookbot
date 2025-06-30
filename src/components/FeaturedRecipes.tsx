
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';
import { Heart } from 'lucide-react';
import { useFavoriteRecipes } from '@/contexts/FavoriteRecipesContext';
import { cn } from '@/lib/utils';

interface Recipe {
  id: string;
  title: string;
  image: string;
  category: string;
  time: string;
  difficulty: string;
}

const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Quick Veggie Stir-Fry',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
    category: 'Vegetarian',
    time: '15 min',
    difficulty: 'Easy',
  },
  {
    id: '2',
    title: 'Chicken Teriyaki Bowl',
    image: 'https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f',
    category: 'Asian',
    time: '20 min',
    difficulty: 'Medium',
  },
  {
    id: '3',
    title: 'Mediterranean Pasta',
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601',
    category: 'Italian',
    time: '25 min',
    difficulty: 'Easy',
  },
  {
    id: '4',
    title: 'Avocado Toast',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8',
    category: 'Breakfast',
    time: '10 min',
    difficulty: 'Easy',
  },
];

const FeaturedRecipes = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useFavoriteRecipes();

  const handleRecipeClick = (recipeId: string) => {
    if (isAuthenticated) {
      navigate(`/recipes/${recipeId}`);
    } else {
      // Store the intended URL to redirect after login
      localStorage.setItem('redirectAfterLogin', `/recipes/${recipeId}`);
      
      toast({
        title: "Login Required",
        description: "Please log in to view recipe details"
      });
      
      navigate('/login');
    }
  };

  const handleFavoriteToggle = (e: React.MouseEvent<HTMLButtonElement>, recipeId: string) => {
    e.stopPropagation(); // Prevent card click
    toggleFavorite(recipeId);
  };

  return (
    <section className="py-12 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Popular Recipes</h2>
          <p className="max-w-[700px] text-muted-foreground">
            Discover our most loved recipes that are quick, easy, and delicious.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <Card 
              key={recipe.id} 
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
              onClick={() => handleRecipeClick(recipe.id)}
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-primary/90 text-white px-2 py-1 rounded-full text-xs">
                  {recipe.category}
                </div>
                {isAuthenticated && (
                  <button 
                    onClick={(e) => handleFavoriteToggle(e, recipe.id)} 
                    className="absolute top-2 left-2 bg-white/80 p-1.5 rounded-full shadow-md hover:bg-white transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <Heart className={cn("h-4 w-4", isFavorite(recipe.id) ? "fill-red-500 text-red-500" : "text-gray-600")} />
                  </button>
                )}
              </div>
              <CardHeader className="p-4 pb-0">
                <CardTitle className="text-lg">{recipe.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-2">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>⏱️ {recipe.time}</span>
                  <span>📊 {recipe.difficulty}</span>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button 
                  variant="secondary" 
                  className="w-full"
                  onClick={(e) => {
                    e.stopPropagation(); 
                    handleRecipeClick(recipe.id);
                  }}
                >
                  View Recipe
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link to="/recipes">
            <Button variant="outline" size="lg">View All Recipes</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRecipes;
