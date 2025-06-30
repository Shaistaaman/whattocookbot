
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '10 Easy Ways to Reduce Food Waste in Your Kitchen',
    excerpt: 'Simple strategies to make the most of your ingredients and reduce environmental impact.',
    image: 'https://images.unsplash.com/photo-1543362906-acfc16c67564',
    category: 'Sustainability',
    author: 'Emma Watson',
    date: 'May 1, 2025',
    readTime: '5 min read',
  },
  {
    id: '2',
    title: 'The Science of Flavor: How to Balance Your Dishes',
    excerpt: 'Understanding the five basic tastes and how to create perfectly balanced meals every time.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    category: 'Cooking Tips',
    author: 'James Chen',
    date: 'April 28, 2025',
    readTime: '7 min read',
  },
  {
    id: '3',
    title: 'Seasonal Eating: Spring Vegetables Guide',
    excerpt: 'Why eating seasonally matters and which vegetables are at their peak in spring.',
    image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c',
    category: 'Seasonal',
    author: 'Sophia Rodriguez',
    date: 'April 23, 2025',
    readTime: '6 min read',
  },
  {
    id: '4',
    title: 'Plant-Based Protein: Complete Guide for Vegetarians',
    excerpt: 'Everything you need to know about getting enough protein on a vegetarian or vegan diet.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    category: 'Nutrition',
    author: 'Alex Johnson',
    date: 'April 20, 2025',
    readTime: '8 min read',
  },
  {
    id: '5',
    title: 'Kitchen Gadgets: What\'s Worth the Investment',
    excerpt: 'Our expert reviews of the most useful kitchen tools that are actually worth buying.',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba',
    category: 'Equipment',
    author: 'Marcus Lee',
    date: 'April 15, 2025',
    readTime: '6 min read',
  },
  {
    id: '6',
    title: 'Meal Prep 101: Save Time and Eat Better',
    excerpt: 'A beginner\'s guide to efficient meal planning and preparation for the whole week.',
    image: 'https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7',
    category: 'Planning',
    author: 'Olivia Smith',
    date: 'April 10, 2025',
    readTime: '5 min read',
  },
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !categoryFilter || post.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <>
      <Header />
      <main className="min-h-screen bg-muted/30 py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Cooking Blog & Tips
            </h1>
            <p className="max-w-[700px] text-muted-foreground">
              Expert advice, cooking techniques, and food insights to enhance your culinary journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <div className="bg-background p-6 rounded-lg border shadow-sm">
                <h3 className="font-semibold text-lg mb-4">Filters</h3>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="search">Search</Label>
                    <Input 
                      id="search" 
                      placeholder="Search blog posts..." 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <select
                      id="category"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      value={categoryFilter}
                      onChange={(e) => setCategoryFilter(e.target.value)}
                    >
                      <option value="">All Categories</option>
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                  
                  <Button 
                    onClick={() => {
                      setSearchTerm('');
                      setCategoryFilter('');
                    }}
                    variant="outline"
                    className="w-full"
                  >
                    Clear Filters
                  </Button>
                </div>
                
                <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                  <h4 className="font-semibold mb-2">Get Recipe Ideas</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Tell us what ingredients you have and our AI will suggest delicious recipes.
                  </p>
                  <Link to="/">
                    <Button size="sm" className="w-full">
                      Try WhatToCookBot
                    </Button>
                  </Link>
                </div>
              </div>
              
              {/* Ad Space */}
              <div className="bg-muted p-6 rounded-lg border mt-4 text-center">
                <p className="text-muted-foreground text-sm mb-2">Advertisement</p>
                <div className="bg-gray-200 h-60 flex items-center justify-center text-muted-foreground">
                  Ad Space
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post) => (
                    <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-video relative overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-2 right-2 bg-primary/90 text-white px-2 py-1 rounded-full text-xs">
                          {post.category}
                        </div>
                      </div>
                      <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-lg">{post.title}</CardTitle>
                        <CardDescription className="flex items-center gap-2 text-xs">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                      </CardContent>
                      <CardFooter className="p-4 pt-0 flex justify-between items-center">
                        <div className="text-sm">By {post.author}</div>
                        <Link to={`/blog/${post.id}`}>
                          <Button variant="ghost" size="sm">Read More</Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))
                ) : (
                  <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
                    <h3 className="text-xl font-bold mb-2">No blog posts found</h3>
                    <p className="text-muted-foreground mb-4">
                      Try changing your search criteria or browse all posts.
                    </p>
                    <Button 
                      onClick={() => {
                        setSearchTerm('');
                        setCategoryFilter('');
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
  );
};

export default Blog;
