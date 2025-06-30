import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Star } from 'lucide-react'

interface Recommendation {
  id: string
  name: string
  type: 'restaurant' | 'gym' | 'product'
  category: string
  rating: number
  image: string
  description: string
  location?: string
  price?: string
  tags: string[]
}

const recommendations: Recommendation[] = [
  {
    id: '1',
    name: 'Green Leaf Bistro',
    type: 'restaurant',
    category: 'Vegetarian',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    description:
      'Farm-to-table vegetarian restaurant with seasonal menus and organic ingredients.',
    location: 'Downtown',
    price: '$$$',
    tags: ['Vegetarian', 'Organic', 'Local']
  },
  {
    id: '2',
    name: 'FitZone Gym',
    type: 'gym',
    category: 'Fitness Center',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48',
    description:
      'Modern fitness center with state-of-the-art equipment and expert trainers.',
    location: 'Westside',
    price: '$$',
    tags: ['Weight Training', 'Cardio', '24/7']
  },
  {
    id: '3',
    name: "Chef's Premium Knife Set",
    type: 'product',
    category: 'Kitchen Tools',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1593618998160-944d50c9416f',
    description:
      'Professional-grade knife set with ergonomic handles and precision-forged blades.',
    price: '$$$',
    tags: ['Kitchen Tools', 'Professional', 'High-Quality']
  },
  {
    id: '4',
    name: 'Spice Market',
    type: 'restaurant',
    category: 'Asian Fusion',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9',
    description:
      'Asian fusion restaurant featuring bold flavors and authentic spices from across Asia.',
    location: 'Eastside',
    price: '$$',
    tags: ['Asian', 'Spicy', 'Fusion']
  },
  {
    id: '5',
    name: 'PowerFit Studio',
    type: 'gym',
    category: 'Boutique Gym',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f',
    description:
      'Boutique fitness studio specializing in high-intensity interval training and personal coaching.',
    location: 'Northside',
    price: '$$$',
    tags: ['HIIT', 'Personal Training', 'Small Groups']
  },
  {
    id: '6',
    name: 'Smart Kitchen Scale',
    type: 'product',
    category: 'Kitchen Gadgets',
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1608500218890-c4f9669fd331',
    description:
      'Digital kitchen scale with nutritional calculation features and smartphone connectivity.',
    price: '$$',
    tags: ['Smart Device', 'Precision', 'Nutrition']
  }
]

const Recommendations = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState({
    type: '',
    category: '',
    priceRange: ''
  })

  const types = Array.from(new Set(recommendations.map(item => item.type)))
  const categories = Array.from(
    new Set(recommendations.map(item => item.category))
  )
  const priceRanges = Array.from(
    new Set(recommendations.filter(item => item.price).map(item => item.price))
  )

  const filteredRecommendations = recommendations.filter(item => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = !filters.type || item.type === filters.type
    const matchesCategory =
      !filters.category || item.category === filters.category
    const matchesPrice =
      !filters.priceRange || item.price === filters.priceRange

    return matchesSearch && matchesType && matchesCategory && matchesPrice
  })

  const renderRatingStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < Math.floor(rating)
              ? 'text-yellow-400 fill-yellow-400'
              : 'text-gray-300'
          }`}
        />
      ))
  }

  return (
    <>
      <Header />
      <main className='min-h-screen bg-muted/30 py-8'>
        <div className='container px-4 md:px-6'>
          <div className='flex flex-col items-center justify-center space-y-4 text-center mb-8'>
            <h1 className='text-3xl font-bold tracking-tighter md:text-4xl'>
              Recommendations
            </h1>
            <p className='max-w-[700px] text-muted-foreground'>
              Discover top restaurants, fitness centers, and kitchen products
              handpicked for our community.
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
                      placeholder='Search recommendations...'
                      value={searchTerm}
                      onChange={e => setSearchTerm(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor='type'>Type</Label>
                    <select
                      id='type'
                      className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                      value={filters.type}
                      onChange={e =>
                        setFilters({ ...filters, type: e.target.value })
                      }
                    >
                      <option value=''>All Types</option>
                      {types.map(type => (
                        <option key={type} value={type} className='capitalize'>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label htmlFor='category'>Category</Label>
                    <select
                      id='category'
                      className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                      value={filters.category}
                      onChange={e =>
                        setFilters({ ...filters, category: e.target.value })
                      }
                    >
                      <option value=''>All Categories</option>
                      {categories.map(category => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label htmlFor='priceRange'>Price Range</Label>
                    <select
                      id='priceRange'
                      className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                      value={filters.priceRange}
                      onChange={e =>
                        setFilters({ ...filters, priceRange: e.target.value })
                      }
                    >
                      <option value=''>All Price Ranges</option>
                      {priceRanges.map(price => (
                        <option key={price} value={price}>
                          {price}
                        </option>
                      ))}
                    </select>
                  </div>

                  <Button
                    onClick={() => {
                      setSearchTerm('')
                      setFilters({ type: '', category: '', priceRange: '' })
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
                  <Button size='sm' className='w-full' asChild>
                    <Link to='/'>Try whattocookbot</Link>
                  </Button>
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
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {filteredRecommendations.length > 0 ? (
                  filteredRecommendations.map(item => (
                    <Card
                      key={item.id}
                      className='overflow-hidden hover:shadow-lg transition-shadow'
                    >
                      <div className='aspect-video relative overflow-hidden'>
                        <img
                          src={item.image}
                          alt={item.name}
                          className='object-cover w-full h-full hover:scale-105 transition-transform duration-300'
                        />
                        <div className='absolute top-2 right-2 bg-smartmeal-red text-white px-2 py-1 rounded-full text-xs capitalize'>
                          {item.type}
                        </div>
                      </div>
                      <CardHeader className='p-4 pb-2'>
                        <div className='flex justify-between'>
                          <CardTitle className='text-lg'>{item.name}</CardTitle>
                          {item.price && (
                            <span className='text-sm font-medium'>
                              {item.price}
                            </span>
                          )}
                        </div>
                        <CardDescription className='flex items-center gap-1'>
                          <div className='flex'>
                            {renderRatingStars(item.rating)}
                          </div>
                          <span className='ml-1'>
                            ({item.rating.toFixed(1)})
                          </span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className='p-4 pt-0'>
                        <p className='text-sm text-muted-foreground mb-2'>
                          {item.description}
                        </p>
                        {item.location && (
                          <p className='text-xs text-muted-foreground'>
                            📍 {item.location}
                          </p>
                        )}
                        <div className='flex flex-wrap gap-1 mt-2'>
                          {item.tags.map(tag => (
                            <Badge
                              key={tag}
                              variant='secondary'
                              className='text-xs'
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className='p-4 pt-0'>
                        <Button className='w-full' variant='outline' asChild>
                          <Link to={`/recommendations/${item.id}`}>
                            View Details
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))
                ) : (
                  <div className='col-span-full flex flex-col items-center justify-center py-12 text-center'>
                    <h3 className='text-xl font-bold mb-2'>
                      No recommendations found
                    </h3>
                    <p className='text-muted-foreground mb-4'>
                      Try changing your search criteria or browse all
                      recommendations.
                    </p>
                    <Button
                      onClick={() => {
                        setSearchTerm('')
                        setFilters({ type: '', category: '', priceRange: '' })
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

export default Recommendations
