import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { CheckCircle, Apple, Beef, Fish, Wheat, Leaf, Info } from 'lucide-react'

const NutritionGuide = () => {
  return (
    <>
      <Header />
      <main className='min-h-screen py-12'>
        <div className='container px-4 md:px-6 space-y-10'>
          {/* Header section */}
          <section className='text-center space-y-4 max-w-3xl mx-auto'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight'>
              Nutrition Guide
            </h1>
            <p className='text-muted-foreground text-lg'>
              Discover the essentials of balanced nutrition and make informed
              choices about your diet.
            </p>
          </section>

          {/* Main content tabs */}
          <Tabs defaultValue='basics' className='w-full'>
            <TabsList className='w-full grid grid-cols-2 md:grid-cols-4 mb-8'>
              <TabsTrigger value='basics'>Nutrition Basics</TabsTrigger>
              <TabsTrigger value='diets'>Dietary Patterns</TabsTrigger>
              <TabsTrigger value='macros'>Macronutrients</TabsTrigger>
              <TabsTrigger value='meal-planning'>Meal Planning</TabsTrigger>
            </TabsList>

            {/* Nutrition Basics */}
            <TabsContent value='basics' className='space-y-8'>
              <div className='grid md:grid-cols-2 gap-8'>
                <div className='space-y-4'>
                  <h2 className='text-2xl font-bold'>
                    Understanding Nutrition
                  </h2>
                  <p>
                    Good nutrition is the foundation of health and well-being.
                    It involves consuming a variety of foods that provide the
                    nutrients needed for energy, growth, and cell maintenance.
                  </p>
                  <p>
                    Key components of a balanced diet include proteins,
                    carbohydrates, fats, vitamins, minerals, and water. Each
                    plays a specific role in maintaining body functions and
                    overall health.
                  </p>
                </div>
                <div className='rounded-lg overflow-hidden'>
                  <img
                    src='https://images.unsplash.com/photo-1498837167922-ddd27525d352'
                    alt='Variety of healthy foods'
                    className='w-full h-auto object-cover rounded-lg'
                  />
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Essential Nutrients</CardTitle>
                  <CardDescription>
                    Key nutrients your body needs for optimal health
                  </CardDescription>
                </CardHeader>
                <CardContent className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                  {[
                    {
                      name: 'Proteins',
                      desc: 'Building blocks for muscles, tissues, and enzymes',
                      icon: <Beef className='h-5 w-5' />
                    },
                    {
                      name: 'Carbohydrates',
                      desc: 'Primary energy source for the body',
                      icon: <Wheat className='h-5 w-5' />
                    },
                    {
                      name: 'Fats',
                      desc: 'Energy storage, insulation, and cell function',
                      icon: <Info className='h-5 w-5' />
                    },
                    {
                      name: 'Vitamins',
                      desc: 'Regulate metabolism and support various functions',
                      icon: <Apple className='h-5 w-5' />
                    },
                    {
                      name: 'Minerals',
                      desc: 'Support bone health, fluid balance, and nerve function',
                      icon: <Leaf className='h-5 w-5' />
                    },
                    {
                      name: 'Water',
                      desc: 'Essential for digestion, absorption, and temperature regulation',
                      icon: <Info className='h-5 w-5' />
                    }
                  ].map((nutrient, index) => (
                    <div
                      key={index}
                      className='flex items-start space-x-3 p-4 border rounded-md'
                    >
                      <div className='bg-primary/10 p-2 rounded-full text-primary'>
                        {nutrient.icon}
                      </div>
                      <div>
                        <h3 className='font-semibold'>{nutrient.name}</h3>
                        <p className='text-sm text-muted-foreground'>
                          {nutrient.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Accordion type='single' collapsible className='w-full'>
                <AccordionItem value='item-1'>
                  <AccordionTrigger>
                    How many calories do I need daily?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Daily calorie needs vary based on age, sex, weight,
                      height, and activity level. For a rough estimate:
                    </p>
                    <ul className='list-disc pl-6 mt-2 space-y-1'>
                      <li>Adult women: 1,600-2,400 calories</li>
                      <li>Adult men: 2,000-3,000 calories</li>
                      <li>Active individuals or athletes may need more</li>
                    </ul>
                    <p className='mt-2'>
                      For a personalized recommendation, consult a registered
                      dietitian or use our whattocookbot calculator.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value='item-2'>
                  <AccordionTrigger>What is a balanced meal?</AccordionTrigger>
                  <AccordionContent>
                    <p>A balanced meal typically includes:</p>
                    <ul className='list-disc pl-6 mt-2 space-y-1'>
                      <li>
                        1/4 plate of lean protein (chicken, fish, beans, tofu)
                      </li>
                      <li>1/4 plate of whole grains or starchy vegetables</li>
                      <li>1/2 plate of non-starchy vegetables</li>
                      <li>
                        A small amount of healthy fats (olive oil, avocado)
                      </li>
                    </ul>
                    <p className='mt-2'>
                      This plate method helps ensure you get a good balance of
                      nutrients at each meal.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value='item-3'>
                  <AccordionTrigger>
                    How much water should I drink daily?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>
                      The standard recommendation is about 8 cups (64 ounces) of
                      water per day, but needs vary based on:
                    </p>
                    <ul className='list-disc pl-6 mt-2 space-y-1'>
                      <li>Body size and weight</li>
                      <li>Activity level and exercise intensity</li>
                      <li>Climate and environment</li>
                      <li>Overall health</li>
                    </ul>
                    <p className='mt-2'>
                      A good indicator of proper hydration is pale yellow urine.
                      Darker urine may indicate dehydration.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            {/* Dietary Patterns */}
            <TabsContent value='diets' className='space-y-8'>
              <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {[
                  {
                    name: 'Mediterranean Diet',
                    desc: 'Emphasizes fruits, vegetables, whole grains, olive oil, and moderate consumption of fish, poultry, and wine.',
                    benefits: [
                      'Heart health',
                      'Longevity',
                      'Reduced inflammation'
                    ],
                    image:
                      'https://images.unsplash.com/photo-1556040220-4096d522378d'
                  },
                  {
                    name: 'Plant-Based Diet',
                    desc: 'Focuses on foods derived from plants with few or no animal products, including fruits, vegetables, grains, nuts, and seeds.',
                    benefits: [
                      'Reduced carbon footprint',
                      'Heart health',
                      'Weight management'
                    ],
                    image:
                      'https://images.unsplash.com/photo-1543362906-acfc16c67564'
                  },
                  {
                    name: 'DASH Diet',
                    desc: 'Designed to help treat or prevent high blood pressure by reducing sodium intake and eating foods rich in nutrients.',
                    benefits: [
                      'Lower blood pressure',
                      'Heart health',
                      'Reduced diabetes risk'
                    ],
                    image:
                      'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1'
                  },
                  {
                    name: 'Ketogenic Diet',
                    desc: 'Very low-carb, high-fat diet that puts the body into a metabolic state called ketosis.',
                    benefits: [
                      'Weight loss',
                      'Improved insulin sensitivity',
                      'Potential brain health benefits'
                    ],
                    image:
                      'https://images.unsplash.com/photo-1524182735-3930ab93c7fc'
                  },
                  {
                    name: 'Paleo Diet',
                    desc: 'Based on foods similar to what might have been eaten during the Paleolithic era, including lean meats, fish, fruits, vegetables, nuts, and seeds.',
                    benefits: [
                      'Weight loss',
                      'Improved glucose tolerance',
                      'Better blood pressure control'
                    ],
                    image:
                      'https://images.unsplash.com/photo-1608500218890-c4fde8542ef5'
                  },
                  {
                    name: 'Flexitarian Diet',
                    desc: 'A flexible approach that encourages mostly plant-based foods while allowing meat and other animal products in moderation.',
                    benefits: [
                      'Sustainability',
                      'Nutritional diversity',
                      'Easier to maintain long-term'
                    ],
                    image:
                      'https://images.unsplash.com/photo-1565895405138-6c3a1555da6a'
                  }
                ].map((diet, index) => (
                  <Card key={index}>
                    <div className='h-48 overflow-hidden'>
                      <img
                        src={diet.image}
                        alt={diet.name}
                        className='w-full h-full object-cover'
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{diet.name}</CardTitle>
                    </CardHeader>
                    <CardContent className='space-y-3'>
                      <p className='text-sm text-muted-foreground'>
                        {diet.desc}
                      </p>
                      <div>
                        <h4 className='text-sm font-semibold mb-1'>
                          Key Benefits:
                        </h4>
                        <ul className='text-sm space-y-1'>
                          {diet.benefits.map((benefit, i) => (
                            <li key={i} className='flex items-center'>
                              <CheckCircle className='h-3.5 w-3.5 text-primary mr-2' />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Macronutrients */}
            <TabsContent value='macros' className='space-y-8'>
              <div className='grid md:grid-cols-3 gap-6'>
                <Card>
                  <CardHeader className='bg-amber-50 dark:bg-amber-900/20'>
                    <CardTitle className='flex items-center'>
                      <Wheat className='h-5 w-5 mr-2' />
                      Carbohydrates
                    </CardTitle>
                    <CardDescription>
                      Main source of energy for the body
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='pt-6 space-y-4'>
                    <div>
                      <h4 className='font-semibold mb-2'>
                        Recommended Intake:
                      </h4>
                      <p className='text-sm'>45-65% of daily calories</p>
                    </div>
                    <div>
                      <h4 className='font-semibold mb-2'>Best Sources:</h4>
                      <ul className='text-sm space-y-1'>
                        <li>Whole grains (brown rice, quinoa, oats)</li>
                        <li>Fruits and vegetables</li>
                        <li>Legumes (beans, lentils)</li>
                        <li>Starchy vegetables (sweet potatoes)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className='font-semibold mb-2'>Function:</h4>
                      <p className='text-sm'>
                        Provides immediate energy for all cells, especially
                        important for brain function and during high-intensity
                        exercise.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className='bg-rose-50 dark:bg-rose-900/20'>
                    <CardTitle className='flex items-center'>
                      <Beef className='h-5 w-5 mr-2' />
                      Proteins
                    </CardTitle>
                    <CardDescription>
                      Building blocks for body tissues
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='pt-6 space-y-4'>
                    <div>
                      <h4 className='font-semibold mb-2'>
                        Recommended Intake:
                      </h4>
                      <p className='text-sm'>
                        10-35% of daily calories (0.8g per kg of body weight)
                      </p>
                    </div>
                    <div>
                      <h4 className='font-semibold mb-2'>Best Sources:</h4>
                      <ul className='text-sm space-y-1'>
                        <li>Lean meats (chicken, turkey)</li>
                        <li>Fish and seafood</li>
                        <li>Eggs and dairy</li>
                        <li>Plant proteins (tofu, legumes, nuts)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className='font-semibold mb-2'>Function:</h4>
                      <p className='text-sm'>
                        Essential for growth and repair of tissues, enzyme
                        production, hormone regulation, and immune function.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className='bg-blue-50 dark:bg-blue-900/20'>
                    <CardTitle className='flex items-center'>
                      <Fish className='h-5 w-5 mr-2' />
                      Fats
                    </CardTitle>
                    <CardDescription>
                      Essential for cell structure and energy storage
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='pt-6 space-y-4'>
                    <div>
                      <h4 className='font-semibold mb-2'>
                        Recommended Intake:
                      </h4>
                      <p className='text-sm'>20-35% of daily calories</p>
                    </div>
                    <div>
                      <h4 className='font-semibold mb-2'>Best Sources:</h4>
                      <ul className='text-sm space-y-1'>
                        <li>Avocados and olive oil</li>
                        <li>Nuts and seeds</li>
                        <li>Fatty fish (salmon, mackerel)</li>
                        <li>Nut butters</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className='font-semibold mb-2'>Function:</h4>
                      <p className='text-sm'>
                        Protects organs, insulates the body, helps absorb
                        fat-soluble vitamins, and provides concentrated energy
                        storage.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className='bg-muted/30 p-6 rounded-lg'>
                <h3 className='text-xl font-bold mb-4'>
                  Finding Your Macro Balance
                </h3>
                <p className='mb-4'>
                  The right macronutrient balance depends on your individual
                  goals, age, sex, activity level, and health status. Here are
                  some general guidelines:
                </p>

                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6'>
                  <div className='bg-background p-4 rounded-md border shadow-sm'>
                    <h4 className='font-semibold mb-2'>Weight Maintenance</h4>
                    <ul className='text-sm space-y-1'>
                      <li>Carbs: 45-55%</li>
                      <li>Protein: 15-20%</li>
                      <li>Fat: 25-35%</li>
                    </ul>
                  </div>
                  <div className='bg-background p-4 rounded-md border shadow-sm'>
                    <h4 className='font-semibold mb-2'>Weight Loss</h4>
                    <ul className='text-sm space-y-1'>
                      <li>Carbs: 30-40%</li>
                      <li>Protein: 25-30%</li>
                      <li>Fat: 30-35%</li>
                    </ul>
                  </div>
                  <div className='bg-background p-4 rounded-md border shadow-sm'>
                    <h4 className='font-semibold mb-2'>Athletic Performance</h4>
                    <ul className='text-sm space-y-1'>
                      <li>Carbs: 55-65%</li>
                      <li>Protein: 15-20%</li>
                      <li>Fat: 20-30%</li>
                    </ul>
                  </div>
                  <div className='bg-background p-4 rounded-md border shadow-sm'>
                    <h4 className='font-semibold mb-2'>Muscle Building</h4>
                    <ul className='text-sm space-y-1'>
                      <li>Carbs: 40-50%</li>
                      <li>Protein: 25-35%</li>
                      <li>Fat: 15-25%</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Meal Planning */}
            <TabsContent value='meal-planning' className='space-y-8'>
              <div className='grid md:grid-cols-2 gap-8'>
                <div className='space-y-4'>
                  <h2 className='text-2xl font-bold'>Smart Meal Planning</h2>
                  <p>
                    Effective meal planning can save time, reduce food waste,
                    and help you maintain a balanced diet. It's about making
                    thoughtful decisions about what to eat before hunger
                    strikes.
                  </p>
                  <div className='space-y-2'>
                    <h3 className='font-semibold'>
                      Benefits of Meal Planning:
                    </h3>
                    <ul className='list-disc pl-6 space-y-1'>
                      <li>Saves time and money</li>
                      <li>Reduces food waste</li>
                      <li>Helps maintain portion control</li>
                      <li>Makes it easier to achieve nutritional goals</li>
                      <li>Reduces decision fatigue around food choices</li>
                    </ul>
                  </div>
                </div>
                <div className='rounded-lg overflow-hidden'>
                  <img
                    src='https://images.unsplash.com/photo-1498837167922-ddd27525d352'
                    alt='Meal prep containers'
                    className='w-full h-auto object-cover rounded-lg'
                  />
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>5-Step Meal Planning Process</CardTitle>
                </CardHeader>
                <CardContent className='space-y-6'>
                  <div className='relative'>
                    <div className='absolute left-3.5 top-0 h-full w-px bg-muted-foreground/20'></div>

                    {[
                      {
                        step: 'Step 1: Take Inventory',
                        content:
                          'Check what you already have in your pantry, refrigerator, and freezer.'
                      },
                      {
                        step: 'Step 2: Schedule Your Meals',
                        content:
                          "Decide which meals you'll cook at home and which you might eat out."
                      },
                      {
                        step: 'Step 3: Find Balanced Recipes',
                        content:
                          'Select recipes that incorporate a variety of food groups.'
                      },
                      {
                        step: 'Step 4: Create a Shopping List',
                        content:
                          'List all ingredients needed for your planned meals.'
                      },
                      {
                        step: 'Step 5: Prep Components in Advance',
                        content:
                          'Wash and chop vegetables, cook grains, or prepare proteins ahead of time.'
                      }
                    ].map((item, index) => (
                      <div key={index} className='relative pl-10 pb-8'>
                        <div className='absolute left-0 top-1 rounded-full bg-primary text-primary-foreground flex items-center justify-center h-7 w-7 text-sm font-bold'>
                          {index + 1}
                        </div>
                        <h3 className='font-semibold'>{item.step}</h3>
                        <p className='text-sm text-muted-foreground mt-1'>
                          {item.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className='grid gap-6 md:grid-cols-3'>
                <Card>
                  <CardHeader>
                    <CardTitle>Breakfast Ideas</CardTitle>
                    <CardDescription>
                      Quick and nutritious morning meals
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className='space-y-2 text-sm'>
                      <li className='flex items-start'>
                        <CheckCircle className='h-4 w-4 text-primary mr-2 mt-0.5' />
                        <span>Greek yogurt with berries and nuts</span>
                      </li>
                      <li className='flex items-start'>
                        <CheckCircle className='h-4 w-4 text-primary mr-2 mt-0.5' />
                        <span>Overnight oats with apple and cinnamon</span>
                      </li>
                      <li className='flex items-start'>
                        <CheckCircle className='h-4 w-4 text-primary mr-2 mt-0.5' />
                        <span>Whole grain toast with avocado and egg</span>
                      </li>
                      <li className='flex items-start'>
                        <CheckCircle className='h-4 w-4 text-primary mr-2 mt-0.5' />
                        <span>Spinach and mushroom omelet</span>
                      </li>
                      <li className='flex items-start'>
                        <CheckCircle className='h-4 w-4 text-primary mr-2 mt-0.5' />
                        <span>Smoothie with banana, spinach, and protein</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Lunch Ideas</CardTitle>
                    <CardDescription>
                      Balanced midday refueling options
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className='space-y-2 text-sm'>
                      <li className='flex items-start'>
                        <CheckCircle className='h-4 w-4 text-primary mr-2 mt-0.5' />
                        <span>
                          Grain bowl with quinoa, roasted vegetables, and
                          chicken
                        </span>
                      </li>
                      <li className='flex items-start'>
                        <CheckCircle className='h-4 w-4 text-primary mr-2 mt-0.5' />
                        <span>Wrap with hummus, turkey, and vegetables</span>
                      </li>
                      <li className='flex items-start'>
                        <CheckCircle className='h-4 w-4 text-primary mr-2 mt-0.5' />
                        <span>Lentil soup with whole grain bread</span>
                      </li>
                      <li className='flex items-start'>
                        <CheckCircle className='h-4 w-4 text-primary mr-2 mt-0.5' />
                        <span>Tuna salad with mixed greens</span>
                      </li>
                      <li className='flex items-start'>
                        <CheckCircle className='h-4 w-4 text-primary mr-2 mt-0.5' />
                        <span>Chickpea and vegetable stir-fry</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Dinner Ideas</CardTitle>
                    <CardDescription>
                      Satisfying and nutritious evening meals
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className='space-y-2 text-sm'>
                      <li className='flex items-start'>
                        <CheckCircle className='h-4 w-4 text-primary mr-2 mt-0.5' />
                        <span>Baked salmon with roasted vegetables</span>
                      </li>
                      <li className='flex items-start'>
                        <CheckCircle className='h-4 w-4 text-primary mr-2 mt-0.5' />
                        <span>Vegetable and bean chili</span>
                      </li>
                      <li className='flex items-start'>
                        <CheckCircle className='h-4 w-4 text-primary mr-2 mt-0.5' />
                        <span>Stir-fry with tofu and brown rice</span>
                      </li>
                      <li className='flex items-start'>
                        <CheckCircle className='h-4 w-4 text-primary mr-2 mt-0.5' />
                        <span>Stuffed bell peppers with ground turkey</span>
                      </li>
                      <li className='flex items-start'>
                        <CheckCircle className='h-4 w-4 text-primary mr-2 mt-0.5' />
                        <span>
                          Whole wheat pasta with tomato sauce and vegetables
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default NutritionGuide
