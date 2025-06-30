import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Share2, Clock, ChefHat, Users, Printer, Heart, PlayCircle } from 'lucide-react';
import { useFavoriteRecipes } from '@/contexts/FavoriteRecipesContext';
import { cn } from '@/lib/utils';

// Mock recipe data - in a real app this would come from an API
const recipeData = {
  '1': {
    id: '1',
    title: 'Quick Veggie Stir-Fry',
    description: 'A delicious and nutritious vegetable stir-fry that comes together in minutes. Perfect for busy weeknights when you want something healthy and tasty.',
    images: [
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
      'https://images.unsplash.com/photo-1473093295043-cdd812d0e601'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'Main Course',
    cuisine: 'Asian',
    diet: ['Vegetarian', 'Low-Calorie'],
    prepTime: '10 min',
    cookTime: '15 min',
    totalTime: '25 min',
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      '2 tablespoons vegetable oil',
      '3 cloves garlic, minced',
      '1 tablespoon ginger, grated',
      '1 red bell pepper, sliced',
      '1 yellow bell pepper, sliced',
      '2 carrots, julienned',
      '1 cup broccoli florets',
      '1 cup snap peas',
      '3 tablespoons soy sauce',
      '1 tablespoon sesame oil',
      '2 tablespoons rice vinegar',
      'Red pepper flakes to taste',
      '2 green onions, sliced',
      'Sesame seeds for garnish'
    ],
    instructions: [
      {
        step: 1,
        text: 'Heat vegetable oil in a large wok or skillet over high heat.'
      },
      {
        step: 2,
        text: 'Add garlic and ginger, stir for 30 seconds until fragrant.'
      },
      {
        step: 3,
        text: 'Add bell peppers, carrots, and broccoli. Stir-fry for 3-4 minutes.'
      },
      {
        step: 4,
        text: 'Add snap peas and continue to stir-fry for 2 minutes.'
      },
      {
        step: 5,
        text: 'In a small bowl, mix soy sauce, sesame oil, and rice vinegar.'
      },
      {
        step: 6,
        text: 'Pour sauce over vegetables and toss to coat. Cook for 1-2 more minutes.'
      },
      {
        step: 7,
        text: 'Add red pepper flakes to taste.'
      },
      {
        step: 8,
        text: 'Remove from heat. Garnish with green onions and sesame seeds.'
      }
    ],
    nutritionalInfo: {
      calories: 180,
      protein: '5g',
      carbs: '15g',
      fat: '12g',
      fiber: '6g'
    }
  },
  '2': {
    id: '2',
    title: 'Chicken Teriyaki Bowl',
    description: 'A satisfying and flavorful chicken teriyaki bowl with steamed rice and vegetables. This balanced meal is perfect for meal prep or a quick dinner option.',
    images: [
      'https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1',
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'Main Course',
    cuisine: 'Asian',
    diet: ['High-Protein', 'Gluten-Free'],
    prepTime: '15 min',
    cookTime: '20 min',
    totalTime: '35 min',
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      '1.5 lbs boneless, skinless chicken thighs',
      '1/4 cup soy sauce',
      '1/4 cup mirin',
      '2 tbsp honey',
      '2 tbsp brown sugar',
      '2 cloves garlic, minced',
      '1 tbsp ginger, grated',
      '1 tbsp cornstarch',
      '2 tbsp water',
      '2 cups cooked rice',
      '2 carrots, julienned',
      '1 cup broccoli florets, steamed',
      '1 cup edamame, shelled',
      '2 green onions, sliced',
      'Sesame seeds for garnish'
    ],
    instructions: [
      {
        step: 1,
        text: 'Cut chicken thighs into bite-sized pieces.'
      },
      {
        step: 2,
        text: 'In a bowl, combine soy sauce, mirin, honey, brown sugar, garlic, and ginger.'
      },
      {
        step: 3,
        text: 'Add chicken to the marinade, toss to coat, and let sit for 15 minutes.'
      },
      {
        step: 4,
        text: 'Heat a large skillet over medium-high heat. Add chicken and marinade.'
      },
      {
        step: 5,
        text: 'Cook chicken until done, about 7-8 minutes, stirring occasionally.'
      },
      {
        step: 6,
        text: 'Mix cornstarch and water in a small bowl. Add to the skillet and stir.'
      },
      {
        step: 7,
        text: 'Cook until sauce thickens, about 1-2 minutes.'
      },
      {
        step: 8,
        text: 'Serve chicken over rice with vegetables on the side.'
      },
      {
        step: 9,
        text: 'Garnish with green onions and sesame seeds.'
      }
    ],
    nutritionalInfo: {
      calories: 420,
      protein: '35g',
      carbs: '40g',
      fat: '12g',
      fiber: '3g'
    }
  },
  '3': {
    id: '3',
    title: 'Mediterranean Pasta',
    description: 'A fresh and light Mediterranean pasta dish featuring cherry tomatoes, olives, feta cheese, and herbs. Perfect for summer dinners!',
    images: [
      'https://images.unsplash.com/photo-1473093295043-cdd812d0e601',
      'https://images.unsplash.com/photo-1540420773420-3366772f4999',
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'Main Course',
    cuisine: 'Italian',
    diet: ['Vegetarian'],
    prepTime: '10 min',
    cookTime: '15 min',
    totalTime: '25 min',
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      '12 oz whole wheat pasta',
      '2 tbsp olive oil',
      '3 cloves garlic, minced',
      '1 pint cherry tomatoes, halved',
      '1/2 cup kalamata olives, pitted and halved',
      '1/4 cup red onion, thinly sliced',
      '1 cucumber, diced',
      '1/2 cup feta cheese, crumbled',
      '1/4 cup fresh basil, chopped',
      '2 tbsp fresh parsley, chopped',
      '2 tbsp lemon juice',
      '1/4 cup extra virgin olive oil',
      'Salt and black pepper to taste',
      'Pinch of red pepper flakes'
    ],
    instructions: [
      {
        step: 1,
        text: 'Cook pasta according to package directions. Drain and set aside.'
      },
      {
        step: 2,
        text: 'In a large skillet, heat olive oil over medium heat.'
      },
      {
        step: 3,
        text: 'Add garlic and cook until fragrant, about 30 seconds.'
      },
      {
        step: 4,
        text: 'Add cherry tomatoes and cook until they start to soften, 3-4 minutes.'
      },
      {
        step: 5,
        text: 'In a large bowl, combine cooked pasta, tomato mixture, olives, red onion, and cucumber.'
      },
      {
        step: 6,
        text: 'In a small bowl, whisk together lemon juice and extra virgin olive oil.'
      },
      {
        step: 7,
        text: 'Pour dressing over pasta and toss to combine.'
      },
      {
        step: 8,
        text: 'Add feta, basil, and parsley. Toss gently.'
      },
      {
        step: 9,
        text: 'Season with salt, pepper, and red pepper flakes.'
      },
      {
        step: 10,
        text: 'Serve at room temperature or chilled.'
      }
    ],
    nutritionalInfo: {
      calories: 380,
      protein: '12g',
      carbs: '54g',
      fat: '15g',
      fiber: '8g'
    }
  },
  '4': {
    id: '4',
    title: 'Avocado Toast',
    description: 'A simple yet nutritious breakfast option featuring creamy avocado on toasted bread with various toppings. Customize it to your liking!',
    images: [
      'https://images.unsplash.com/photo-1525351484163-7529414344d8',
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
      'https://images.unsplash.com/photo-1540420773420-3366772f4999'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'Breakfast',
    cuisine: 'American',
    diet: ['Vegetarian', 'Vegan'],
    prepTime: '5 min',
    cookTime: '5 min',
    totalTime: '10 min',
    servings: 2,
    difficulty: 'Easy',
    ingredients: [
      '2 slices whole grain bread',
      '1 ripe avocado',
      '1 tbsp lemon juice',
      'Salt and black pepper to taste',
      'Red pepper flakes (optional)',
      '2 eggs (optional)',
      'Cherry tomatoes, halved (optional)',
      'Microgreens or sprouts (optional)',
      'Everything bagel seasoning (optional)'
    ],
    instructions: [
      {
        step: 1,
        text: 'Toast bread slices until golden and crispy.'
      },
      {
        step: 2,
        text: 'Cut avocado in half, remove pit, and scoop flesh into a bowl.'
      },
      {
        step: 3,
        text: 'Add lemon juice, salt, and pepper to avocado. Mash with a fork to desired consistency.'
      },
      {
        step: 4,
        text: 'Spread avocado mixture evenly on toasted bread.'
      },
      {
        step: 5,
        text: 'Top with optional toppings like cherry tomatoes, microgreens, or everything bagel seasoning.'
      },
      {
        step: 6,
        text: 'If using eggs, fry or poach them separately and place on top of avocado toast.'
      },
      {
        step: 7,
        text: 'Serve immediately.'
      }
    ],
    nutritionalInfo: {
      calories: 280,
      protein: '6g',
      carbs: '25g',
      fat: '18g',
      fiber: '10g'
    }
  }
};

const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const recipe = recipeData[id as keyof typeof recipeData];
  const { isFavorite, toggleFavorite } = useFavoriteRecipes();
  
  if (!recipe) {
    return (
      <>
        <Header />
        <main className="container py-12">
          <h1>Recipe not found</h1>
          <p>The recipe you're looking for doesn't exist or has been removed.</p>
        </main>
        <Footer />
      </>
    );
  }

  const handleFavoriteToggle = () => {
    toggleFavorite(recipe.id);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-8">
        <div className="container px-4 md:px-6">
          {/* Recipe Header */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{recipe.title}</h1>
              <div className="flex items-center gap-2 mt-2 md:mt-0">
                <Button size="sm" variant="outline">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
                <Button size="sm" variant="outline">
                  <Printer className="mr-2 h-4 w-4" />
                  Print
                </Button>
                <Button 
                  size="sm" 
                  variant={isFavorite(recipe.id) ? "default" : "outline"}
                  className={cn(isFavorite(recipe.id) && "bg-red-500 hover:bg-red-600")}
                  onClick={handleFavoriteToggle}
                >
                  <Heart className={cn("mr-2 h-4 w-4", isFavorite(recipe.id) && "fill-current")} />
                  {isFavorite(recipe.id) ? 'Saved' : 'Save'}
                </Button>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6">{recipe.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary">{recipe.category}</Badge>
              <Badge variant="secondary">{recipe.cuisine}</Badge>
              {recipe.diet.map((dietType) => (
                <Badge key={dietType} variant="outline">{dietType}</Badge>
              ))}
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-muted p-4 rounded-lg mb-8">
              <div className="flex flex-col items-center text-center">
                <Clock className="h-5 w-5 text-muted-foreground mb-1" />
                <span className="text-sm font-medium">Prep Time</span>
                <span className="text-sm">{recipe.prepTime}</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <ChefHat className="h-5 w-5 text-muted-foreground mb-1" />
                <span className="text-sm font-medium">Cook Time</span>
                <span className="text-sm">{recipe.cookTime}</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Clock className="h-5 w-5 text-muted-foreground mb-1" />
                <span className="text-sm font-medium">Total Time</span>
                <span className="text-sm">{recipe.totalTime}</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="h-5 w-5 text-muted-foreground mb-1" />
                <span className="text-sm font-medium">Servings</span>
                <span className="text-sm">{recipe.servings}</span>
              </div>
            </div>
          </div>
          
          {/* Recipe Images and Content */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">
            <div className="lg:col-span-3 mb-6 lg:mb-0 space-y-4 relative">
              {/* Main Image */}
              <div className="rounded-lg overflow-hidden aspect-video bg-muted relative group">
                <img 
                  src={recipe.images[0]} 
                  alt={recipe.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                
                {/* Favorite button overlay */}
                <button 
                  onClick={handleFavoriteToggle}
                  className="absolute top-3 left-3 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors group-hover:opacity-100 md:opacity-80"
                  aria-label={isFavorite(recipe.id) ? "Remove from favorites" : "Add to favorites"}
                >
                  <Heart className={cn("h-6 w-6", isFavorite(recipe.id) ? "fill-red-500 text-red-500" : "text-gray-600")} />
                </button>
              </div>
              
              {/* Thumbnail images */}
              <div className="grid grid-cols-3 gap-4">
                {recipe.images.slice(0, 3).map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden aspect-square bg-muted">
                    <img 
                      src={image} 
                      alt={`${recipe.title} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="sticky top-20">
                <Tabs defaultValue="ingredients" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
                    <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
                  </TabsList>
                  <TabsContent value="ingredients" className="bg-muted/50 p-4 rounded-md mt-4 max-h-[500px] overflow-y-auto">
                    <h3 className="font-medium mb-4 text-lg">Ingredients</h3>
                    <p className="text-sm text-muted-foreground mb-4">Serves {recipe.servings}</p>
                    <ul className="space-y-2">
                      {recipe.ingredients.map((ingredient, i) => (
                        <li key={i} className="flex items-start">
                          <div className="h-6 w-6 rounded border border-primary mr-2 flex-shrink-0" />
                          <span className="text-sm">{ingredient}</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                  <TabsContent value="nutrition" className="bg-muted/50 p-4 rounded-md mt-4">
                    <h3 className="font-medium mb-4 text-lg">Nutrition Facts</h3>
                    <p className="text-sm text-muted-foreground mb-4">Per serving</p>
                    <div className="space-y-2">
                      <div className="flex justify-between py-1 border-b">
                        <span>Calories</span>
                        <span className="font-medium">{recipe.nutritionalInfo.calories}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b">
                        <span>Protein</span>
                        <span className="font-medium">{recipe.nutritionalInfo.protein}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b">
                        <span>Carbs</span>
                        <span className="font-medium">{recipe.nutritionalInfo.carbs}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b">
                        <span>Fat</span>
                        <span className="font-medium">{recipe.nutritionalInfo.fat}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span>Fiber</span>
                        <span className="font-medium">{recipe.nutritionalInfo.fiber}</span>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
          
          {/* Recipe Instructions */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <ChefHat className="mr-2 h-5 w-5" />
              How to Cook
            </h2>
            
            <div className="lg:grid lg:grid-cols-5 gap-8">
              <div className="lg:col-span-3 space-y-6">
                {recipe.instructions.map((instruction) => (
                  <div 
                    key={instruction.step} 
                    className="flex items-start p-4 rounded-lg transition-all hover:bg-muted/50"
                  >
                    <div className="bg-primary text-primary-foreground h-8 w-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      {instruction.step}
                    </div>
                    <div>
                      <p>{instruction.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="lg:col-span-2 mt-8 lg:mt-0">
                <div className="sticky top-20 rounded-lg overflow-hidden bg-muted">
                  <div className="relative pt-[56.25%]">
                    <iframe
                      src={recipe.videoUrl}
                      className="absolute top-0 left-0 w-full h-full"
                      title={`How to cook ${recipe.title}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-4 flex items-center gap-2">
                    <PlayCircle className="h-5 w-5 text-primary" />
                    <span className="font-medium">Video Tutorial: {recipe.title}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default RecipeDetail;
