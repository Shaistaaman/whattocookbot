import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Card, CardContent } from '@/components/ui/card'
import {
  CheckCircle2,
  Coffee,
  Heart,
  Utensils,
  Star,
  Clock
} from 'lucide-react'

const About = () => {
  return (
    <>
      <Header />
      <main className='min-h-screen py-12'>
        <div className='container px-4 md:px-6 space-y-12'>
          {/* Hero section */}
          <section className='text-center space-y-4'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight'>
              About WhatToCookBot
            </h1>
            <p className='text-muted-foreground text-lg max-w-3xl mx-auto'>
              Empowering everyone to cook delicious, healthy meals with the help
              of AI technology.
            </p>
          </section>

          {/* Our story */}
          <section className='grid md:grid-cols-2 gap-8 items-center'>
            <div className='space-y-4'>
              <h2 className='text-2xl md:text-3xl font-bold'>Our Story</h2>
              <p className='text-muted-foreground'>
                WhatToCookBot started with a simple idea: make cooking
                accessible to everyone. Our founders, passionate home cooks
                themselves, realized that many people struggle with meal
                planning, ingredient management, and finding recipes that match
                what they have on hand.
              </p>
              <p className='text-muted-foreground'>
                In 2025, we launched the first version of WhatToCookBot,
                combining AI technology with culinary expertise to create a
                platform that understands your preferences, dietary
                restrictions, and available ingredients to recommend the perfect
                recipes.
              </p>
            </div>
            <div className='rounded-lg overflow-hidden'>
              <img
                src='https://images.unsplash.com/photo-1556911220-bff31c812dba'
                alt='Team cooking together'
                className='w-full h-auto object-cover rounded-lg'
              />
            </div>
          </section>

          {/* Our mission */}
          <section className='bg-muted/30 rounded-lg p-8'>
            <div className='max-w-3xl mx-auto text-center space-y-4'>
              <h2 className='text-2xl md:text-3xl font-bold'>Our Mission</h2>
              <p className='text-muted-foreground text-lg'>
                To reduce food waste, encourage healthy eating habits, and make
                cooking an enjoyable experience for everyone, regardless of
                their skill level.
              </p>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 pt-8'>
                <Card className='bg-background'>
                  <CardContent className='pt-6 flex flex-col items-center text-center space-y-2'>
                    <Utensils className='h-12 w-12 text-primary' />
                    <h3 className='font-semibold text-lg'>Simplify Cooking</h3>
                    <p className='text-sm text-muted-foreground'>
                      Making meal preparation easier with AI-powered recipe
                      suggestions.
                    </p>
                  </CardContent>
                </Card>
                <Card className='bg-background'>
                  <CardContent className='pt-6 flex flex-col items-center text-center space-y-2'>
                    <Heart className='h-12 w-12 text-primary' />
                    <h3 className='font-semibold text-lg'>Promote Health</h3>
                    <p className='text-sm text-muted-foreground'>
                      Encouraging balanced nutrition through personalized meal
                      planning.
                    </p>
                  </CardContent>
                </Card>
                <Card className='bg-background'>
                  <CardContent className='pt-6 flex flex-col items-center text-center space-y-2'>
                    <Coffee className='h-12 w-12 text-primary' />
                    <h3 className='font-semibold text-lg'>Build Community</h3>
                    <p className='text-sm text-muted-foreground'>
                      Connecting food lovers and sharing culinary knowledge.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* What sets us apart */}
          <section className='space-y-8'>
            <h2 className='text-2xl md:text-3xl font-bold text-center'>
              What Sets Us Apart
            </h2>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
              <div className='bg-background p-6 rounded-lg border shadow-sm'>
                <div className='flex items-start space-x-3'>
                  <CheckCircle2 className='h-6 w-6 text-primary flex-shrink-0 mt-1' />
                  <div>
                    <h3 className='font-semibold mb-2'>
                      AI-Powered Recommendations
                    </h3>
                    <p className='text-sm text-muted-foreground'>
                      Our algorithms learn your preferences and dietary needs to
                      provide personalized recipe suggestions.
                    </p>
                  </div>
                </div>
              </div>
              <div className='bg-background p-6 rounded-lg border shadow-sm'>
                <div className='flex items-start space-x-3'>
                  <Star className='h-6 w-6 text-primary flex-shrink-0 mt-1' />
                  <div>
                    <h3 className='font-semibold mb-2'>
                      Chef-Approved Recipes
                    </h3>
                    <p className='text-sm text-muted-foreground'>
                      All our recipes are tested and approved by professional
                      chefs for quality and taste.
                    </p>
                  </div>
                </div>
              </div>
              <div className='bg-background p-6 rounded-lg border shadow-sm'>
                <div className='flex items-start space-x-3'>
                  <Clock className='h-6 w-6 text-primary flex-shrink-0 mt-1' />
                  <div>
                    <h3 className='font-semibold mb-2'>
                      Time-Saving Solutions
                    </h3>
                    <p className='text-sm text-muted-foreground'>
                      Quick recipes, meal prep guidance, and efficient cooking
                      techniques to save you time.
                    </p>
                  </div>
                </div>
              </div>
              <div className='bg-background p-6 rounded-lg border shadow-sm'>
                <div className='flex items-start space-x-3'>
                  <Heart className='h-6 w-6 text-primary flex-shrink-0 mt-1' />
                  <div>
                    <h3 className='font-semibold mb-2'>Community-Focused</h3>
                    <p className='text-sm text-muted-foreground'>
                      A platform for food enthusiasts to share recipes, tips,
                      and cooking experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Team */}
          {/* <section className='text-center space-y-8'>
            <h2 className='text-2xl md:text-3xl font-bold'>Meet Our Team</h2>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
              {[
                {
                  name: 'Alex Johnson',
                  role: 'Founder & CEO',
                  image:
                    'https://images.unsplash.com/photo-1552058544-f2b08422138a'
                },
                {
                  name: 'Sophia Chen',
                  role: 'Head Chef',
                  image:
                    'https://images.unsplash.com/photo-1561948955-570b270e7c36'
                },
                {
                  name: 'Marcus Lee',
                  role: 'Lead Developer',
                  image:
                    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d'
                },
                {
                  name: 'Emma Roberts',
                  role: 'Nutrition Expert',
                  image:
                    'https://images.unsplash.com/photo-1544005313-94ddf0286df2'
                }
              ].map((member, index) => (
                <div
                  key={index}
                  className='flex flex-col items-center space-y-2'
                >
                  <div className='w-32 h-32 rounded-full overflow-hidden'>
                    <img
                      src={member.image}
                      alt={member.name}
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <h3 className='font-semibold'>{member.name}</h3>
                  <p className='text-sm text-muted-foreground'>{member.role}</p>
                </div>
              ))}
            </div>
          </section> */}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default About
