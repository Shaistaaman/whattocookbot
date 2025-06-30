
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Share2, Calendar, Clock, User, ArrowLeft, ChevronRight } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

// Mock blog data - in a real app this would come from an API
const blogPosts = [
  {
    id: '1',
    title: '10 Easy Ways to Reduce Food Waste in Your Kitchen',
    excerpt: 'Simple strategies to make the most of your ingredients and reduce environmental impact.',
    content: `
      <p>Food waste is a significant global issue, with nearly one-third of all food produced worldwide being discarded. Not only does this waste valuable resources, but it also contributes to greenhouse gas emissions as food decomposes in landfills.</p>
      
      <p>The good news is that small changes in your kitchen habits can make a big difference. Here are ten practical strategies to help you reduce food waste at home:</p>
      
      <h3>1. Plan Your Meals</h3>
      <p>Before heading to the grocery store, take inventory of what you already have and plan meals around those ingredients. Create a detailed shopping list based on your meal plan and stick to it to avoid impulse purchases that might go to waste.</p>
      
      <h3>2. Store Food Properly</h3>
      <p>Learn the optimal storage conditions for different foods. For example, keep potatoes and onions separate, store herbs like cut flowers in water, and keep most fruits in the refrigerator (except bananas, which should be kept at room temperature).</p>
      
      <h3>3. Understand Food Labels</h3>
      <p>"Best before" and "use by" dates often cause confusion. "Use by" relates to safety while "best before" refers to quality. Many foods are still perfectly fine to eat after their "best before" date – use your senses to judge.</p>
      
      <h3>4. Practice FIFO (First In, First Out)</h3>
      <p>When unpacking groceries, move older products to the front of the fridge or pantry and place newer items in the back. This way, you're more likely to use the older items before they spoil.</p>
      
      <h3>5. Get Creative with Leftovers</h3>
      <p>Transform leftovers into new meals. Yesterday's roast chicken can become today's chicken salad sandwich or tomorrow's chicken soup. Designate a "leftovers night" each week to ensure nothing goes to waste.</p>
      
      <h3>6. Learn to Preserve</h3>
      <p>Freezing, pickling, fermenting, and canning are excellent ways to extend the life of your food. Even beginners can start with simple freezing techniques – most fruits, vegetables, and cooked dishes freeze well.</p>
      
      <h3>7. Use Your Freezer Wisely</h3>
      <p>Freeze items like bread, sliced bananas for smoothies, or herbs in oil in ice cube trays. Label and date everything to keep track of what you have.</p>
      
      <h3>8. Love Your Leftovers</h3>
      <p>Designate containers specifically for leftovers and keep them in a visible spot in your fridge. Consider setting a reminder to eat them before they spoil.</p>
      
      <h3>9. Get Comfortable with Imperfection</h3>
      <p>Many fruits and vegetables with slight blemishes are perfectly fine to eat. Cut away damaged parts and use the rest in cooking.</p>
      
      <h3>10. Compost What You Can't Eat</h3>
      <p>Some food waste is inevitable, but it doesn't have to go to the landfill. Set up a composting system, even if it's just a small countertop bin, to turn food scraps into nutrient-rich soil for your garden.</p>
      
      <p>By implementing these strategies, you'll not only reduce your environmental footprint but also save money on groceries. Start with one or two changes and gradually incorporate more as they become habits. Every small action contributes to a more sustainable food system.</p>
    `,
    images: [
      'https://images.unsplash.com/photo-1543362906-acfc16c67564',
      'https://images.unsplash.com/photo-1605493725784-54c42b65b2c7',
      'https://images.unsplash.com/photo-1574484284002-952d92456975'
    ],
    category: 'Sustainability',
    author: {
      name: 'Emma Watson',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      bio: 'Emma is an environmental scientist and food sustainability advocate with 8 years of experience in reducing food waste in both commercial and domestic settings.'
    },
    date: 'May 1, 2025',
    readTime: '5 min read',
    tags: ['food waste', 'sustainability', 'kitchen tips', 'eco-friendly']
  },
  {
    id: '2',
    title: 'The Science of Flavor: How to Balance Your Dishes',
    excerpt: 'Understanding the five basic tastes and how to create perfectly balanced meals every time.',
    content: `
      <p>Creating a perfectly balanced dish is both an art and a science. The key lies in understanding how different flavors interact with each other and how to manipulate them to achieve the desired result. In this article, we'll explore the five basic tastes recognized by food science and how to balance them in your cooking.</p>
      
      <h3>The Five Basic Tastes</h3>
      <p>Our taste buds can detect five primary tastes:</p>
      
      <h4>1. Sweet</h4>
      <p>Sweetness is detected by taste buds at the tip of your tongue. Sources of sweetness include sugar, honey, fruits, and certain vegetables like sweet potatoes and corn. Sweetness can balance acidity and bitterness in a dish.</p>
      
      <h4>2. Salty</h4>
      <p>Salt is a flavor enhancer that brings out the natural taste of foods. Beyond table salt, saltiness can come from soy sauce, fish sauce, cured meats, and cheeses. A pinch of salt can even enhance sweet dishes by creating contrast.</p>
      
      <h4>3. Sour</h4>
      <p>Sourness comes from acids like citrus juices, vinegars, yogurt, and fermented foods. Acidity brightens flavors and can cut through richness, making it essential for balance in fatty dishes.</p>
      
      <h4>4. Bitter</h4>
      <p>Bitterness is detected at the back of the tongue and comes from foods like coffee, dark chocolate, bitter greens, and certain spices. While often avoided, a controlled amount of bitterness adds complexity and depth to dishes.</p>
      
      <h4>5. Umami</h4>
      <p>Umami, often described as "savory" or "meaty," was officially recognized as the fifth taste in the early 20th century. It's found in foods rich in glutamates, like aged cheeses, mushrooms, tomatoes, fermented products, and meat broths.</p>
      
      <h3>Finding the Perfect Balance</h3>
      
      <p>Creating a well-balanced dish involves understanding how these five tastes interact and complement each other. Here are some principles to guide you:</p>
      
      <h4>Contrast and Complement</h4>
      <p>Some flavors naturally balance each other: sweetness moderates acidity and bitterness, while saltiness can enhance sweetness. A squeeze of lemon (sour) on fish (umami) creates a harmonious contrast that highlights both flavors.</p>
      
      <h4>Building Flavor Layers</h4>
      <p>Start with a base flavor (often umami) and build complementary tastes around it. For example, a tomato sauce begins with umami (tomatoes), adds sweetness (perhaps a bit of sugar), saltiness (salt), and acidity (perhaps a splash of vinegar) until balanced.</p>
      
      <h4>Taste as You Go</h4>
      <p>The most important tool in flavor balancing is your palate. Taste your dish throughout the cooking process. Is it too acidic? Add a touch of sweetness. Too flat? Perhaps it needs salt or acid to brighten it up.</p>
      
      <h4>Use the "Power Ingredients"</h4>
      <p>Keep these flavor-balancing ingredients on hand:</p>
      <ul>
        <li>For acidity: Lemon juice, vinegar, yogurt</li>
        <li>For sweetness: Honey, sugar, fruits</li>
        <li>For saltiness: Salt, soy sauce, fish sauce</li>
        <li>For umami: Mushrooms, aged cheese, soy sauce, nutritional yeast</li>
        <li>For bitterness: Cocoa, coffee, bitter greens</li>
      </ul>
      
      <p>By understanding and applying these principles of flavor balance, you can transform good dishes into great ones. Remember that balance doesn't always mean equal parts of each taste—rather, it means creating harmony where each element supports and enhances the others. With practice, you'll develop an intuition for what a dish needs to reach its full potential.</p>
    `,
    images: [
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
      'https://images.unsplash.com/photo-1466637574441-749b8f19452f',
      'https://images.unsplash.com/photo-1607877742574-13a6094263af'
    ],
    category: 'Cooking Tips',
    author: {
      name: 'James Chen',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      bio: 'James is a professional chef with 15 years of experience in top restaurants around the world. He specializes in flavor development and culinary science.'
    },
    date: 'April 28, 2025',
    readTime: '7 min read',
    tags: ['cooking science', 'flavor', 'culinary tips', 'food balance']
  },
];

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const blogPost = blogPosts.find(post => post.id === id);
  
  useEffect(() => {
    if (!isAuthenticated) {
      localStorage.setItem('redirectAfterLogin', `/blog/${id}`);
      
      toast({
        title: "Login Required",
        description: "Please log in to access full blog content",
      });
      
      navigate('/login');
    }
  }, [isAuthenticated, navigate, id]);
  
  if (!isAuthenticated) {
    return null;
  }
  
  if (!blogPost) {
    return (
      <>
        <Header />
        <main className="container py-12">
          <h1>Blog post not found</h1>
          <p>The blog post you're looking for doesn't exist or has been removed.</p>
          <Button asChild className="mt-4">
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-muted/30 py-8">
        <div className="container px-4 md:px-6">
          {/* Breadcrumbs */}
          <div className="flex items-center mb-6 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
            <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground" />
            <Link to="/blog" className="text-muted-foreground hover:text-primary">Blog</Link>
            <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground" />
            <span className="text-foreground truncate max-w-[200px]">{blogPost.title}</span>
          </div>
          
          {/* Back Button */}
          <Button variant="outline" size="sm" className="mb-6" onClick={() => navigate('/blog')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-6">
              {/* Main Content */}
              <div className="bg-background rounded-lg border shadow-sm overflow-hidden">
                {/* Cover Image */}
                <div className="aspect-video w-full relative">
                  <img 
                    src={blogPost.images[0]} 
                    alt={blogPost.title} 
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4">{blogPost.category}</Badge>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h1 className="text-3xl font-bold tracking-tight mb-4">{blogPost.title}</h1>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{blogPost.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{blogPost.readTime}</span>
                    </div>
                  </div>
                  
                  {/* Blog Content */}
                  <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: blogPost.content }} />
                  
                  {/* Additional Images */}
                  {blogPost.images.length > 1 && (
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold mb-4">Gallery</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {blogPost.images.slice(1).map((image, index) => (
                          <div key={index} className="rounded-md overflow-hidden aspect-video">
                            <img 
                              src={image} 
                              alt={`${blogPost.title} image ${index + 2}`} 
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Tags */}
                  <div className="mt-8 pt-6 border-t">
                    <h3 className="text-sm font-medium mb-2">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {blogPost.tags.map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Share */}
                  <div className="mt-6 flex justify-end">
                    <Button variant="outline" size="sm">
                      <Share2 className="mr-2 h-4 w-4" />
                      Share this article
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1 space-y-6">
              {/* Author Card */}
              <div className="bg-background rounded-lg border shadow-sm p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                    <img 
                      src={blogPost.author.image} 
                      alt={blogPost.author.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">{blogPost.author.name}</h3>
                  <div className="flex items-center mt-1 mb-4">
                    <User className="h-3 w-3 mr-1 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Author</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{blogPost.author.bio}</p>
                </div>
              </div>
              
              {/* Related Posts Placeholder */}
              <div className="bg-background rounded-lg border shadow-sm p-6">
                <h3 className="font-semibold mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {blogPosts
                    .filter(post => post.id !== id)
                    .slice(0, 2)
                    .map(post => (
                      <div key={post.id} className="flex gap-3">
                        <div className="flex-shrink-0 w-16 h-16 rounded-md overflow-hidden">
                          <img 
                            src={post.images[0]} 
                            alt={post.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm line-clamp-2">
                            <Link to={`/blog/${post.id}`} className="hover:text-primary">
                              {post.title}
                            </Link>
                          </h4>
                          <span className="text-xs text-muted-foreground">{post.date}</span>
                        </div>
                      </div>
                    ))
                  }
                  
                  <Button variant="link" className="p-0 h-auto" asChild>
                    <Link to="/blog">View all articles</Link>
                  </Button>
                </div>
              </div>
              
              {/* Newsletter Signup */}
              <div className="bg-primary/10 rounded-lg border border-primary/20 p-6">
                <h3 className="font-semibold mb-2">Subscribe to our newsletter</h3>
                <p className="text-sm text-muted-foreground mb-4">Get the latest articles and recipes delivered to your inbox.</p>
                <div className="flex flex-col gap-2">
                  <input 
                    type="email" 
                    placeholder="Your email address"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <Button className="w-full">Subscribe</Button>
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

export default BlogDetail;
