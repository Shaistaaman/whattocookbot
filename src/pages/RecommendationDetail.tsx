
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star, MapPin, ArrowLeft, ChevronRight, Share2, Phone, Globe, Clock, DollarSign, Info } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

interface Recommendation {
  id: string;
  name: string;
  type: 'restaurant' | 'gym' | 'product';
  category: string;
  rating: number;
  images: string[];
  description: string;
  detailedDescription: string;
  location?: string;
  address?: string;
  contact?: {
    phone?: string;
    email?: string;
    website?: string;
  };
  hours?: {
    weekdays: string;
    weekend: string;
    notes?: string;
  };
  price?: string;
  tags: string[];
  features?: string[];
  reviews?: {
    id: string;
    user: string;
    rating: number;
    comment: string;
    date: string;
  }[];
  relatedProducts?: string[];
}

// Mock recommendation data - in a real app this would come from an API
const recommendations: Recommendation[] = [
  {
    id: '1',
    name: 'Green Leaf Bistro',
    type: 'restaurant',
    category: 'Vegetarian',
    rating: 4.8,
    images: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0',
      'https://images.unsplash.com/photo-1600891964599-f61ba0e24092'
    ],
    description: 'Farm-to-table vegetarian restaurant with seasonal menus and organic ingredients.',
    detailedDescription: `Green Leaf Bistro is a premier vegetarian dining experience that celebrates the bounty of local farmers and the art of plant-based cuisine. Established in 2018, our restaurant has quickly become a favorite destination for food enthusiasts who appreciate thoughtfully prepared vegetarian dishes that don't compromise on flavor or creativity.

    Our executive chef, Sarah Johnson, creates seasonal menus that showcase the finest organic ingredients sourced from farms within a 50-mile radius. Each dish is designed to highlight the natural flavors of the ingredients while incorporating culinary techniques from around the world.
    
    The restaurant's interior features reclaimed wood tables, living plant walls, and floor-to-ceiling windows that flood the space with natural light. Our commitment to sustainability extends beyond our menu to every aspect of our operation, from compostable takeaway containers to our energy-efficient kitchen equipment.
    
    Whether you're a committed vegetarian or simply looking to enjoy a meal where vegetables take center stage, Green Leaf Bistro offers an unforgettable dining experience that proves plant-based cuisine can be both sophisticated and satisfying.`,
    location: 'Downtown',
    address: '123 Market Street, San Francisco, CA 94103',
    contact: {
      phone: '(415) 555-0123',
      email: 'info@greenleafbistro.com',
      website: 'www.greenleafbistro.com'
    },
    hours: {
      weekdays: '11:00 AM - 9:00 PM',
      weekend: '10:00 AM - 10:00 PM',
      notes: 'Closed on Mondays'
    },
    price: '$$$',
    tags: ['Vegetarian', 'Organic', 'Local', 'Sustainable'],
    features: [
      'Outdoor seating',
      'Wheelchair accessible',
      'Vegan options',
      'Gluten-free options',
      'Full bar',
      'Private dining available'
    ],
    reviews: [
      {
        id: '101',
        user: 'Michelle T.',
        rating: 5,
        comment: 'The seasonal vegetable platter was incredible - so fresh and flavorful! Great ambiance and attentive service too.',
        date: 'April 15, 2025'
      },
      {
        id: '102',
        user: 'David R.',
        rating: 4.5,
        comment: 'Creative menu with lots of options. The mushroom risotto was exceptional. Slightly pricey but worth it for a special occasion.',
        date: 'April 2, 2025'
      },
      {
        id: '103',
        user: 'Samantha K.',
        rating: 5,
        comment: 'As a non-vegetarian, I was blown away by how satisfying the meals were. Will definitely be back!',
        date: 'March 27, 2025'
      }
    ]
  },
  {
    id: '2',
    name: 'FitZone Gym',
    type: 'gym',
    category: 'Fitness Center',
    rating: 4.5,
    images: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48',
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f',
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f',
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438'
    ],
    description: 'Modern fitness center with state-of-the-art equipment and expert trainers.',
    detailedDescription: `FitZone Gym is a premium fitness facility designed to support members of all fitness levels on their journey to better health and wellness. Our 15,000 square foot facility features the latest in exercise technology, comfortable workout spaces, and a team of certified personal trainers ready to help you achieve your fitness goals.

    At FitZone, we believe that fitness should be accessible to everyone. That's why our gym is equipped with a wide range of cardio machines, strength training equipment, and functional training areas to accommodate various workout styles and preferences. Our specialty areas include a dedicated HIIT zone, a spacious yoga studio, and a spin room with immersive audio-visual experiences.
    
    What sets FitZone apart is our community atmosphere. We foster a supportive environment where members encourage each other and celebrate achievements together. Our group classes are designed to be both challenging and fun, creating a motivating experience that keeps members coming back.
    
    With amenities like clean locker rooms, complimentary towel service, a protein smoothie bar, and childcare services, FitZone makes it easy to incorporate fitness into your busy lifestyle. Whether you're a fitness enthusiast or just beginning your wellness journey, FitZone provides the tools, guidance, and support you need to succeed.`,
    location: 'Westside',
    address: '456 Fitness Lane, San Francisco, CA 94118',
    contact: {
      phone: '(415) 555-0456',
      email: 'info@fitzgym.com',
      website: 'www.fitzgym.com'
    },
    hours: {
      weekdays: '5:00 AM - 11:00 PM',
      weekend: '6:00 AM - 9:00 PM',
      notes: '24/7 access available with premium membership'
    },
    price: '$$',
    tags: ['Weight Training', 'Cardio', '24/7', 'Personal Training'],
    features: [
      'State-of-the-art equipment',
      'Free parking',
      'Locker rooms with showers',
      'Towel service',
      'Group fitness classes',
      'Personal training',
      'Nutritional counseling',
      'Smoothie bar'
    ],
    reviews: [
      {
        id: '201',
        user: 'Jason M.',
        rating: 4.5,
        comment: 'Great equipment that\'s always well-maintained. The trainers are knowledgeable and the classes are top-notch.',
        date: 'April 20, 2025'
      },
      {
        id: '202',
        user: 'Lisa P.',
        rating: 5,
        comment: 'I\'ve tried many gyms in the city, and FitZone is by far the best. Clean, not overcrowded, and the 24/7 access is perfect for my schedule.',
        date: 'April 10, 2025'
      },
      {
        id: '203',
        user: 'Robert T.',
        rating: 4,
        comment: 'Good variety of equipment and classes. The only downside is it gets busy during peak hours after work.',
        date: 'March 22, 2025'
      }
    ]
  },
  {
    id: '3',
    name: 'Chef\'s Premium Knife Set',
    type: 'product',
    category: 'Kitchen Tools',
    rating: 4.9,
    images: [
      'https://images.unsplash.com/photo-1593618998160-944d50c9416f',
      'https://images.unsplash.com/photo-1566454825481-9c31bb92854a',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115',
      'https://images.unsplash.com/photo-1596568361411-e9b50427e0e1'
    ],
    description: 'Professional-grade knife set with ergonomic handles and precision-forged blades.',
    detailedDescription: `The Chef's Premium Knife Set represents the pinnacle of culinary cutlery, designed for professional chefs and serious home cooks who demand the very best from their kitchen tools. Each knife in this comprehensive 9-piece set is precision-forged from high-carbon German stainless steel, ensuring exceptional durability, sharpness, and stain resistance.

    The knives feature full-tang construction for perfect balance and stability during use, with ergonomically designed handles made from sustainably sourced pakkawood that provides both comfort and elegant aesthetics. The handles are triple-riveted to ensure the blades never loosen over time, making these knives a worthwhile investment that will last for decades with proper care.
    
    This set includes all the essential knives needed for any culinary task: an 8-inch chef's knife, 8-inch slicing knife, 8-inch bread knife, 7-inch santoku knife, 5.5-inch utility knife, 3.5-inch paring knife, kitchen shears, a honing rod, and a beautiful acacia wood storage block with a built-in sharpener.
    
    Each blade undergoes a specialized ice-hardening process that strengthens the steel, allowing the edges to stay sharper longer than conventional knives. The precision-tapered blades minimize friction during cutting, while the bolsters provide perfect balance and protect fingers during use.
    
    Whether you're finely mincing herbs, carving a roast, or slicing delicate fish for sashimi, the Chef's Premium Knife Set offers the precision, comfort, and reliability that elevates every cooking experience.`,
    price: '$$$',
    tags: ['Kitchen Tools', 'Professional', 'High-Quality', 'Stainless Steel'],
    features: [
      'High-carbon German stainless steel',
      'Full tang construction',
      'Ergonomic pakkawood handles',
      'Triple-riveted handles',
      'Precision-forged blades',
      'Ice-hardened for durability',
      'Includes storage block with built-in sharpener',
      '25-year warranty'
    ],
    reviews: [
      {
        id: '301',
        user: 'Chef Marcus B.',
        rating: 5,
        comment: 'After 20 years in professional kitchens, these are the best knives I\'ve used. Perfect balance, exceptional edge retention, and beautiful design.',
        date: 'April 18, 2025'
      },
      {
        id: '302',
        user: 'Amelia H.',
        rating: 4.5,
        comment: 'Worth every penny. These knives have transformed my cooking experience - vegetables practically slice themselves!',
        date: 'April 5, 2025'
      },
      {
        id: '303',
        user: 'Thomas L.',
        rating: 5,
        comment: 'Bought these as a gift for my wife who loves to cook, and she hasn\'t stopped raving about them. The quality is immediately apparent.',
        date: 'March 30, 2025'
      }
    ],
    relatedProducts: ['Knife Sharpening Stone', 'Cutting Board Set', 'Knife Edge Guards']
  },
  {
    id: '4',
    name: 'Spice Market',
    type: 'restaurant',
    category: 'Asian Fusion',
    rating: 4.6,
    images: [
      'https://images.unsplash.com/photo-1552566626-52f8b828add9',
      'https://images.unsplash.com/photo-1532347231146-80afc9a3f394',
      'https://images.unsplash.com/photo-1517499414974-3f566f76f5c0',
      'https://images.unsplash.com/photo-1576867757603-05b134ebc379'
    ],
    description: 'Asian fusion restaurant featuring bold flavors and authentic spices from across Asia.',
    detailedDescription: `Spice Market takes diners on a culinary journey through the vibrant food cultures of Asia, offering innovative fusion dishes that highlight the complex and aromatic spices of the continent. Located in a stylishly renovated historic building, the restaurant combines modern design elements with traditional Asian motifs to create a sophisticated yet welcoming atmosphere.

    Executive Chef Minh Nguyen draws inspiration from his extensive travels throughout Asia, incorporating techniques and flavor profiles from countries including Thailand, Vietnam, India, and Japan. The menu is designed for sharing, allowing guests to sample multiple dishes and experience a variety of flavors in one meal.
    
    Signature dishes include Korean-spiced lamb ribs with tamarind glaze, seafood laksa with hand-pulled noodles, and Vietnamese coffee-rubbed duck breast. The restaurant's bar program features craft cocktails infused with Asian ingredients like lemongrass, yuzu, and five-spice syrup, alongside a thoughtfully curated wine list selected to complement the bold flavors of the cuisine.
    
    Spice Market sources many ingredients directly from small-scale Asian producers and local farms, ensuring authenticity and freshness in every dish. The restaurant also offers a popular monthly cooking class where guests can learn to recreate some of their favorite menu items at home.
    
    Whether you're seeking an intimate dining experience or celebrating with friends, Spice Market provides a memorable culinary adventure that awakens the senses and introduces diners to the diverse and delicious world of Asian cuisine.`,
    location: 'Eastside',
    address: '789 Spice Avenue, San Francisco, CA 94110',
    contact: {
      phone: '(415) 555-0789',
      email: 'info@spicemarketsf.com',
      website: 'www.spicemarketsf.com'
    },
    hours: {
      weekdays: '5:00 PM - 10:00 PM',
      weekend: '12:00 PM - 11:00 PM',
      notes: 'Happy Hour: Tuesday-Friday, 5:00 PM - 6:30 PM'
    },
    price: '$$',
    tags: ['Asian', 'Spicy', 'Fusion', 'Cocktails'],
    features: [
      'Vegetarian options',
      'Vegan options',
      'Full bar',
      'Craft cocktails',
      'Private dining room',
      'Happy hour specials',
      'Takeout available',
      'Monthly cooking classes'
    ],
    reviews: [
      {
        id: '401',
        user: 'Andrea L.',
        rating: 4.5,
        comment: 'The flavors here are incredible! The Korean lamb ribs were perfectly spiced and the cocktails were unique and delicious.',
        date: 'April 22, 2025'
      },
      {
        id: '402',
        user: 'Michael P.',
        rating: 5,
        comment: 'Best Asian fusion I\'ve had in the city. Great atmosphere and the staff really knows their menu - got excellent recommendations.',
        date: 'April 14, 2025'
      },
      {
        id: '403',
        user: 'Natalie C.',
        rating: 4,
        comment: 'Loved the creative dishes and spice combinations. The space is beautiful too. A bit noisy on weekend nights.',
        date: 'April 1, 2025'
      }
    ]
  },
  {
    id: '5',
    name: 'PowerFit Studio',
    type: 'gym',
    category: 'Boutique Gym',
    rating: 4.7,
    images: [
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f',
      'https://images.unsplash.com/photo-1571019613576-2b22c76fd955',
      'https://images.unsplash.com/photo-1518310383802-640c2de311b2',
      'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a'
    ],
    description: 'Boutique fitness studio specializing in high-intensity interval training and personal coaching.',
    detailedDescription: `PowerFit Studio has revolutionized the fitness experience by creating a boutique gym environment focused on personalized attention and results-driven workouts. Unlike traditional big-box gyms, PowerFit limits class sizes to ensure each member receives individualized coaching and motivation throughout their fitness journey.

    The studio specializes in high-intensity interval training (HIIT) workouts that maximize calorie burn and muscle development in efficient 45-minute sessions. Each class is thoughtfully designed by our team of certified fitness experts who constantly evolve the programming to prevent plateaus and keep workouts challenging and engaging.
    
    At PowerFit, we believe in training smarter, not just harder. Our proprietary heart rate monitoring system allows members to track their effort in real-time on displays throughout the studio, helping them optimize their workout intensity for maximum results. After class, detailed performance metrics are delivered to each member's app, allowing them to track progress over time.
    
    The studio features premium equipment including TRX suspension trainers, Assault AirBikes, Concept2 rowers, custom weight stations, and more. Our climate-controlled rooms, luxury shower amenities, and complimentary performance towels enhance the premium experience.
    
    Beyond group classes, PowerFit offers one-on-one personal training, nutrition coaching, and recovery services including foam rolling workshops and mobility sessions. Our community extends outside the studio with regular social events, outdoor workouts in summer months, and charity fitness challenges.`,
    location: 'Northside',
    address: '101 Fitness Boulevard, San Francisco, CA 94133',
    contact: {
      phone: '(415) 555-0101',
      email: 'hello@powerfitsf.com',
      website: 'www.powerfitsf.com'
    },
    hours: {
      weekdays: '5:30 AM - 8:00 PM',
      weekend: '7:00 AM - 2:00 PM',
      notes: 'Classes require advance booking through our app'
    },
    price: '$$$',
    tags: ['HIIT', 'Personal Training', 'Small Groups', 'Heart Rate Training'],
    features: [
      'Small class sizes (max 16 people)',
      'Heart rate monitoring technology',
      'Premium equipment',
      'Performance tracking app',
      'Towel service',
      'Luxury shower amenities',
      'Nutritional guidance',
      'Recovery sessions'
    ],
    reviews: [
      {
        id: '501',
        user: 'Jennifer R.',
        rating: 5,
        comment: 'PowerFit transformed my fitness journey! I\'ve lost 25 pounds and gained so much strength. The coaches are amazing and really push you to your best.',
        date: 'April 23, 2025'
      },
      {
        id: '502',
        user: 'Kevin M.',
        rating: 4.5,
        comment: 'Great workouts that are never the same twice. The heart rate technology really helps me gauge my effort and see improvements over time.',
        date: 'April 17, 2025'
      },
      {
        id: '503',
        user: 'Sarah T.',
        rating: 4.5,
        comment: 'Worth every penny for the personalized attention. It\'s like having a personal trainer but in a fun, motivating group setting.',
        date: 'April 8, 2025'
      }
    ]
  },
  {
    id: '6',
    name: 'Smart Kitchen Scale',
    type: 'product',
    category: 'Kitchen Gadgets',
    rating: 4.4,
    images: [
      'https://images.unsplash.com/photo-1608500218890-c4f9669fd331',
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace',
      'https://images.unsplash.com/photo-1622480916113-9897a29a983f'
    ],
    description: 'Digital kitchen scale with nutritional calculation features and smartphone connectivity.',
    detailedDescription: `The Smart Kitchen Scale represents the next evolution in cooking precision and nutritional awareness. This sleek, modern device does far more than simply weigh your ingredients—it transforms the way you cook, bake, and track your nutrition with its innovative features and intuitive design.

    With accuracy to 0.1 gram and a capacity of up to 5kg, this scale provides precise measurements for everything from spices to large food items. The high-resolution LCD display features an anti-fingerprint coating and backlight for easy reading in any kitchen lighting condition.
    
    What truly sets this scale apart is its smart functionality. The companion smartphone app connects via Bluetooth and instantly recognizes thousands of ingredients as you place them on the scale. For each ingredient, you'll see a complete nutritional breakdown including calories, macronutrients (protein, carbs, fats), vitamins, and minerals. This makes the scale invaluable for those tracking their nutrition, following specific diets, or managing health conditions.
    
    The app also includes hundreds of recipes with step-by-step weighing instructions, automatically adjusting quantities based on your desired number of servings. Your cooking history is saved in the cloud, allowing you to track your nutritional intake over time and easily repeat favorite meals.
    
    Designed with practical kitchen use in mind, the scale features a tempered glass surface that's easy to clean, water-resistant construction to withstand splashes, and a rechargeable battery that lasts up to 30 days on a single charge. The minimalist design complements any kitchen aesthetic while taking up minimal counter space.
    
    Whether you're a precision baker, nutrition enthusiast, or someone looking to bring more consistency to your cooking, the Smart Kitchen Scale provides the technological edge to elevate your culinary experience.`,
    price: '$$',
    tags: ['Smart Device', 'Precision', 'Nutrition', 'Connected'],
    features: [
      'Bluetooth connectivity',
      'Nutritional calculation',
      'Recipe database',
      'Meal tracking',
      '0.1g precision',
      '5kg capacity',
      'Rechargeable battery',
      'Water-resistant design'
    ],
    reviews: [
      {
        id: '601',
        user: 'Patricia N.',
        rating: 4.5,
        comment: 'Game-changer for my meal prep! The nutritional breakdown feature has made it so much easier to stay on track with my fitness goals.',
        date: 'April 21, 2025'
      },
      {
        id: '602',
        user: 'Brandon K.',
        rating: 4,
        comment: 'Very accurate scale and the app is quite intuitive. Battery life is great too. Only wish it had Apple Health integration.',
        date: 'April 12, 2025'
      },
      {
        id: '603',
        user: 'Maya J.',
        rating: 5,
        comment: 'As someone who bakes frequently, the precision of this scale has improved my results tremendously. The recipe database is a nice bonus!',
        date: 'April 3, 2025'
      }
    ],
    relatedProducts: ['Smart Food Processor', 'Connected Cooking Thermometer', 'Recipe Subscription Service']
  }
];

const RecommendationDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const recommendation = recommendations.find(item => item.id === id);
  
  useEffect(() => {
    if (!isAuthenticated) {
      localStorage.setItem('redirectAfterLogin', `/recommendations/${id}`);
      
      toast({
        title: "Login Required",
        description: "Please log in to view recommendation details",
      });
      
      navigate('/login');
    }
  }, [isAuthenticated, navigate, id]);
  
  if (!isAuthenticated) {
    return null;
  }
  
  if (!recommendation) {
    return (
      <>
        <Header />
        <main className="container py-12">
          <h1>Recommendation not found</h1>
          <p>The recommendation you're looking for doesn't exist or has been removed.</p>
          <Button asChild className="mt-4">
            <Link to="/recommendations">Back to Recommendations</Link>
          </Button>
        </main>
        <Footer />
      </>
    );
  }
  
  const renderRatingStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-muted/30 py-8">
        <div className="container px-4 md:px-6">
          {/* Breadcrumbs */}
          <div className="flex items-center mb-6 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
            <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground" />
            <Link to="/recommendations" className="text-muted-foreground hover:text-primary">Recommendations</Link>
            <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground" />
            <span className="text-foreground truncate max-w-[200px]">{recommendation.name}</span>
          </div>
          
          {/* Back Button */}
          <Button variant="outline" size="sm" className="mb-6" onClick={() => navigate('/recommendations')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Recommendations
          </Button>
          
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Image Carousel */}
            <div className="lg:col-span-2">
              <Carousel className="w-full">
                <CarouselContent>
                  {recommendation.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-[16/9] relative rounded-lg overflow-hidden">
                        <img 
                          src={image} 
                          alt={`${recommendation.name} - image ${index + 1}`} 
                          className="object-cover w-full h-full"
                        />
                        {index === 0 && (
                          <Badge className="absolute top-4 left-4 capitalize">{recommendation.type}</Badge>
                        )}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center gap-2 mt-2">
                  <CarouselPrevious className="static transform-none translate-y-0 h-8 w-8" />
                  <CarouselNext className="static transform-none translate-y-0 h-8 w-8" />
                </div>
              </Carousel>
              
              {/* Description */}
              <div className="mt-6 bg-background p-6 rounded-lg border">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-2xl font-bold">{recommendation.name}</h1>
                  <Button variant="outline" size="sm">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="flex mr-2">
                    {renderRatingStars(recommendation.rating)}
                  </div>
                  <span className="text-sm">
                    {recommendation.rating.toFixed(1)} 
                    {recommendation.reviews && (
                      <span className="text-muted-foreground ml-1">
                        ({recommendation.reviews.length} reviews)
                      </span>
                    )}
                  </span>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">{recommendation.category}</Badge>
                    {recommendation.tags.map((tag) => (
                      <Badge key={tag} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                  
                  {recommendation.location && (
                    <div className="flex items-start text-sm">
                      <MapPin className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground" />
                      <span>{recommendation.location}</span>
                    </div>
                  )}
                  
                  {recommendation.price && (
                    <div className="flex items-start text-sm">
                      <DollarSign className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground" />
                      <span>
                        {recommendation.price === '$' && 'Affordable'}
                        {recommendation.price === '$$' && 'Moderate'}
                        {recommendation.price === '$$$' && 'Premium'}
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="prose max-w-none">
                  <p>{recommendation.description}</p>
                  <div className="my-6">
                    {recommendation.detailedDescription.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4">{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Features */}
              {recommendation.features && (
                <div className="mt-6 bg-background p-6 rounded-lg border">
                  <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <Info className="h-5 w-5 mr-2" />
                    Features & Amenities
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {recommendation.features.map((feature) => (
                      <div key={feature} className="flex items-center">
                        <div className="h-2 w-2 bg-primary rounded-full mr-2" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Reviews */}
              {recommendation.reviews && (
                <div className="mt-6 bg-background p-6 rounded-lg border">
                  <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
                  <div className="space-y-4">
                    {recommendation.reviews.map((review) => (
                      <div key={review.id} className="border-b pb-4 mb-4 last:border-0 last:pb-0 last:mb-0">
                        <div className="flex justify-between items-center mb-2">
                          <div className="font-medium">{review.user}</div>
                          <div className="text-sm text-muted-foreground">{review.date}</div>
                        </div>
                        <div className="flex mb-2">
                          {renderRatingStars(review.rating)}
                        </div>
                        <p className="text-sm">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Related Products */}
              {recommendation.type === 'product' && recommendation.relatedProducts && (
                <div className="mt-6 bg-background p-6 rounded-lg border">
                  <h2 className="text-xl font-semibold mb-4">Related Products</h2>
                  <ul className="list-disc pl-5 space-y-1">
                    {recommendation.relatedProducts.map((product) => (
                      <li key={product}>{product}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Contact Info - for restaurants and gyms */}
              {(recommendation.type === 'restaurant' || recommendation.type === 'gym') && (
                <div className="bg-background p-6 rounded-lg border shadow-sm">
                  <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
                  
                  {recommendation.address && (
                    <div className="mb-4">
                      <div className="font-medium mb-1 flex items-center">
                        <MapPin className="h-4 w-4 mr-2" /> Address
                      </div>
                      <p className="text-sm">{recommendation.address}</p>
                      <div className="mt-2">
                        <Button variant="outline" size="sm" className="w-full text-sm">
                          Get Directions
                        </Button>
                      </div>
                    </div>
                  )}
                  
                  {recommendation.contact?.phone && (
                    <div className="mb-4">
                      <div className="font-medium mb-1 flex items-center">
                        <Phone className="h-4 w-4 mr-2" /> Phone
                      </div>
                      <p className="text-sm">{recommendation.contact.phone}</p>
                    </div>
                  )}
                  
                  {recommendation.contact?.website && (
                    <div className="mb-4">
                      <div className="font-medium mb-1 flex items-center">
                        <Globe className="h-4 w-4 mr-2" /> Website
                      </div>
                      <a 
                        href={`https://${recommendation.contact.website}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline"
                      >
                        {recommendation.contact.website}
                      </a>
                    </div>
                  )}
                  
                  {recommendation.contact?.email && (
                    <div>
                      <div className="font-medium mb-1">Email</div>
                      <p className="text-sm text-primary hover:underline">
                        {recommendation.contact.email}
                      </p>
                    </div>
                  )}
                </div>
              )}
              
              {/* Hours - for restaurants and gyms */}
              {recommendation.hours && (
                <div className="bg-background p-6 rounded-lg border shadow-sm">
                  <h3 className="font-semibold text-lg mb-4 flex items-center">
                    <Clock className="h-4 w-4 mr-2" /> Hours of Operation
                  </h3>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Weekdays</span>
                      <span>{recommendation.hours.weekdays}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Weekend</span>
                      <span>{recommendation.hours.weekend}</span>
                    </div>
                    
                    {recommendation.hours.notes && (
                      <div className="pt-2 mt-2 border-t text-sm text-muted-foreground">
                        <span className="italic">{recommendation.hours.notes}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
              
              {/* Product Details - for products */}
              {recommendation.type === 'product' && (
                <div className="bg-background p-6 rounded-lg border shadow-sm">
                  <h3 className="font-semibold text-lg mb-4">Product Details</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Category</span>
                      <span className="font-medium">{recommendation.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Price Range</span>
                      <span className="font-medium">
                        {recommendation.price === '$' && 'Budget-friendly'}
                        {recommendation.price === '$$' && 'Mid-range'}
                        {recommendation.price === '$$$' && 'Premium'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Rating</span>
                      <span className="font-medium flex items-center">
                        {recommendation.rating.toFixed(1)}
                        <Star className="h-3 w-3 text-yellow-400 fill-yellow-400 ml-1" />
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t">
                    <Button className="w-full">Find Retailers</Button>
                  </div>
                </div>
              )}
              
              {/* Map placeholder for restaurants and gyms */}
              {(recommendation.type === 'restaurant' || recommendation.type === 'gym') && (
                <div className="bg-background p-6 rounded-lg border shadow-sm">
                  <h3 className="font-semibold text-lg mb-4">Location</h3>
                  <div className="aspect-square bg-muted rounded-md flex items-center justify-center">
                    <span className="text-muted-foreground">Map View</span>
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" size="sm" className="w-full">
                      View Larger Map
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default RecommendationDetail;
