import React, { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Link } from 'react-router-dom'

interface Recipe {
  id: string
  title: string
  image: string
  category: string
  cuisine: string
  diet: string[]
  time: string
  difficulty: string
}

const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Quick Veggie Stir-Fry',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
    category: 'Main Course',
    cuisine: 'Asian',
    diet: ['Vegetarian', 'Low-Calorie'],
    time: '15 min',
    difficulty: 'Easy'
  },
  {
    id: '2',
    title: 'Chicken Teriyaki Bowl',
    image: 'https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f',
    category: 'Main Course',
    cuisine: 'Asian',
    diet: ['High-Protein', 'Gluten-Free'],
    time: '20 min',
    difficulty: 'Medium'
  },
  {
    id: '3',
    title: 'Mediterranean Pasta',
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601',
    category: 'Main Course',
    cuisine: 'Italian',
    diet: ['Vegetarian'],
    time: '25 min',
    difficulty: 'Easy'
  },
  {
    id: '4',
    title: 'Avocado Toast',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8',
    category: 'Breakfast',
    cuisine: 'American',
    diet: ['Vegetarian', 'Vegan'],
    time: '10 min',
    difficulty: 'Easy'
  },
  {
    id: '5',
    title: 'Beef and Broccoli',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1',
    category: 'Main Course',
    cuisine: 'Asian',
    diet: ['High-Protein', 'Low-Carb'],
    time: '30 min',
    difficulty: 'Medium'
  },
  {
    id: '6',
    title: 'Greek Salad',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999',
    category: 'Salad',
    cuisine: 'Mediterranean',
    diet: ['Vegetarian', 'Low-Calorie', 'Gluten-Free'],
    time: '15 min',
    difficulty: 'Easy'
  },
  {
    id: '7',
    title: 'Salmon with Asparagus',
    image: 'https://images.unsplash.com/photo-1558298261-7842db7f1298',
    category: 'Main Course',
    cuisine: 'American',
    diet: ['High-Protein', 'Low-Carb'],
    time: '25 min',
    difficulty: 'Medium'
  },
  {
    id: '8',
    title: 'Vegan Buddha Bowl',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    category: 'Main Course',
    cuisine: 'International',
    diet: ['Vegan', 'Gluten-Free'],
    time: '20 min',
    difficulty: 'Easy'
  }
]

const Recipes = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState({
    cuisine: '',
    diet: '',
    difficulty: ''
  })

  const cuisines = Array.from(new Set(recipes.map(recipe => recipe.cuisine)))
  const diets = Array.from(new Set(recipes.flatMap(recipe => recipe.diet)))
  const difficulties = Array.from(
    new Set(recipes.map(recipe => recipe.difficulty))
  )

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
    const matchesCuisine =
      !filters.cuisine || recipe.cuisine === filters.cuisine
    const matchesDiet = !filters.diet || recipe.diet.includes(filters.diet)
    const matchesDifficulty =
      !filters.difficulty || recipe.difficulty === filters.difficulty

    return matchesSearch && matchesCuisine && matchesDiet && matchesDifficulty
  })

  return (
    <>
      <Header />
      <main className='min-h-screen bg-muted/30 py-8'>
        <div className='container px-4 md:px-6'>
          <div className='flex flex-col items-center justify-center space-y-4 text-center mb-8'>
            <h1 className='text-3xl font-bold tracking-tighter md:text-4xl'>
              Recipe Collection
            </h1>
            <p className='max-w-[700px] text-muted-foreground'>
              Browse our collection of delicious recipes for every occasion.
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
            <div className='lg:col-span-1'>
              <div className='bg-background p-6 rounded-lg border shadow-sm'>
                <h3 className='font-semibold text-lg mb-4'>Filters</h3>

                <div className='space-y-4'>
                  <div>
                    <Label htmlFor='search'>Search</Label>
                    <Input
                      id='search'
                      placeholder='Search recipes...'
                      value={searchTerm}
                      onChange={e => setSearchTerm(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor='cuisine'>Cuisine</Label>
                    <select
                      id='cuisine'
                      className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                      value={filters.cuisine}
                      onChange={e =>
                        setFilters({ ...filters, cuisine: e.target.value })
                      }
                    >
                      <option value=''>All Cuisines</option>
                      {cuisines.map(cuisine => (
                        <option key={cuisine} value={cuisine}>
                          {cuisine}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label htmlFor='diet'>Dietary</Label>
                    <select
                      id='diet'
                      className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                      value={filters.diet}
                      onChange={e =>
                        setFilters({ ...filters, diet: e.target.value })
                      }
                    >
                      <option value=''>All Diets</option>
                      {diets.map(diet => (
                        <option key={diet} value={diet}>
                          {diet}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label htmlFor='difficulty'>Difficulty</Label>
                    <select
                      id='difficulty'
                      className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                      value={filters.difficulty}
                      onChange={e =>
                        setFilters({ ...filters, difficulty: e.target.value })
                      }
                    >
                      <option value=''>All Difficulties</option>
                      {difficulties.map(difficulty => (
                        <option key={difficulty} value={difficulty}>
                          {difficulty}
                        </option>
                      ))}
                    </select>
                  </div>

                  <Button
                    onClick={() => {
                      setSearchTerm('')
                      setFilters({ cuisine: '', diet: '', difficulty: '' })
                    }}
                    variant='outline'
                    className='w-full'
                  >
                    Clear Filters
                  </Button>
                </div>

                <div className='mt-8 p-4 bg-primary/10 rounded-lg'>
                  <h4 className='font-semibold mb-2'>Need recipe ideas?</h4>
                  <p className='text-sm text-muted-foreground mb-4'>
                    Tell us what ingredients you have and our AI will suggest
                    delicious recipes.
                  </p>
                  <Link to='/'>
                    <Button size='sm' className='w-full'>
                      Try whattocookbot
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Ad Space */}
              <div className='bg-muted p-6 rounded-lg border mt-4 text-center'>
                <p className='text-muted-foreground text-sm mb-2'>
                  Advertisement
                </p>
                <div className='bg-gray-200 h-60 flex items-center justify-center text-muted-foreground'>
                  Ad Space
                </div>
              </div>
            </div>

            <div className='lg:col-span-3'>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {filteredRecipes.length > 0 ? (
                  filteredRecipes.map(recipe => (
                    <Card
                      key={recipe.id}
                      className='overflow-hidden hover:shadow-lg transition-shadow'
                    >
                      <div className='aspect-video relative overflow-hidden'>
                        <img
                          src={recipe.image}
                          alt={recipe.title}
                          className='object-cover w-full h-full hover:scale-105 transition-transform duration-300'
                        />
                        <div className='absolute top-2 right-2 bg-primary/90 text-white px-2 py-1 rounded-full text-xs'>
                          {recipe.cuisine}
                        </div>
                      </div>
                      <CardHeader className='p-4 pb-0'>
                        <CardTitle className='text-lg'>
                          {recipe.title}
                        </CardTitle>
                        <CardDescription>{recipe.category}</CardDescription>
                      </CardHeader>
                      <CardContent className='p-4 py-2'>
                        <div className='flex flex-wrap gap-1 mb-2'>
                          {recipe.diet.map(tag => (
                            <span
                              key={tag}
                              className='bg-secondary/60 text-secondary-foreground text-xs px-2 py-0.5 rounded-full'
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className='flex justify-between text-sm text-muted-foreground'>
                          <span>⏱️ {recipe.time}</span>
                          <span>📊 {recipe.difficulty}</span>
                        </div>
                      </CardContent>
                      <CardFooter className='p-4 pt-0'>
                        <Link to={`/recipes/${recipe.id}`} className='w-full'>
                          <Button variant='secondary' className='w-full'>
                            View Recipe
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))
                ) : (
                  <div className='col-span-full flex flex-col items-center justify-center py-12 text-center'>
                    <h3 className='text-xl font-bold mb-2'>No recipes found</h3>
                    <p className='text-muted-foreground mb-4'>
                      Try changing your search criteria or browse all recipes.
                    </p>
                    <Button
                      onClick={() => {
                        setSearchTerm('')
                        setFilters({ cuisine: '', diet: '', difficulty: '' })
                      }}
                    >
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Recipes
