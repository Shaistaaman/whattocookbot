import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import {
  Search,
  HelpCircle,
  MessageSquare,
  FileText,
  BookOpen,
  ExternalLink
} from 'lucide-react'

const HelpCenter = () => {
  return (
    <>
      <Header />
      <main className='min-h-screen py-12'>
        <div className='container px-4 md:px-6 space-y-10'>
          {/* Hero section */}
          <section className='text-center space-y-6 max-w-4xl mx-auto'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight'>
              How Can We Help You?
            </h1>
            <p className='text-muted-foreground text-lg'>
              Find answers to common questions or reach out for support.
            </p>
            <div className='relative max-w-xl mx-auto'>
              <Search className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground' />
              <Input placeholder='Search for answers...' className='pl-10' />
              <Button className='absolute right-1 top-1/2 -translate-y-1/2 h-8'>
                Search
              </Button>
            </div>
          </section>

          {/* Quick links */}
          <section>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
              {[
                {
                  title: 'Account',
                  icon: <FileText className='h-6 w-6' />,
                  desc: 'Manage your profile and settings'
                },
                {
                  title: 'Recipes',
                  icon: <BookOpen className='h-6 w-6' />,
                  desc: 'Find and save your favorite recipes'
                },
                {
                  title: 'Chat Support',
                  icon: <MessageSquare className='h-6 w-6' />,
                  desc: 'Talk to our team for personalized help'
                },
                {
                  title: 'Guides',
                  icon: <HelpCircle className='h-6 w-6' />,
                  desc: 'Tutorials and how-to resources'
                }
              ].map((item, index) => (
                <Card
                  key={index}
                  className='hover:bg-muted/50 transition-colors cursor-pointer'
                >
                  <CardContent className='p-6 text-center flex flex-col items-center'>
                    <div className='h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4'>
                      {item.icon}
                    </div>
                    <h3 className='font-semibold mb-1'>{item.title}</h3>
                    <p className='text-sm text-muted-foreground'>{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Main content */}
          <section>
            <Tabs defaultValue='faq' className='w-full'>
              <TabsList className='w-full grid grid-cols-2 md:grid-cols-4 mb-8'>
                <TabsTrigger value='faq'>
                  Frequently Asked Questions
                </TabsTrigger>
                <TabsTrigger value='contact'>Contact Us</TabsTrigger>
                <TabsTrigger value='guides'>User Guides</TabsTrigger>
                <TabsTrigger value='troubleshooting'>
                  Troubleshooting
                </TabsTrigger>
              </TabsList>

              {/* FAQ Tab */}
              <TabsContent value='faq' className='space-y-6'>
                <Accordion type='single' collapsible className='w-full'>
                  <AccordionItem value='item-1'>
                    <AccordionTrigger>
                      How do I create an account?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p>To create an account on whattocookbot:</p>
                      <ol className='list-decimal pl-6 mt-2 space-y-1'>
                        <li>
                          Click on the "Sign Up" button in the top-right corner
                          of the page
                        </li>
                        <li>Enter your email address and create a password</li>
                        <li>
                          Fill in your profile information and dietary
                          preferences
                        </li>
                        <li>
                          Verify your email address by clicking the link sent to
                          your inbox
                        </li>
                        <li>
                          Start exploring recipes and saving your favorites!
                        </li>
                      </ol>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value='item-2'>
                    <AccordionTrigger>
                      How do I save recipes to my favorites?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p>
                        You can save recipes to your favorites by clicking the
                        heart icon on any recipe card or recipe detail page. You
                        must be logged in to save recipes. Your favorites will
                        be accessible from your profile dashboard for easy
                        reference.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value='item-3'>
                    <AccordionTrigger>
                      Can I search for recipes based on specific ingredients?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p>
                        Yes! whattocookbot allows you to search for recipes
                        based on ingredients you have on hand. You can:
                      </p>
                      <ul className='list-disc pl-6 mt-2 space-y-1'>
                        <li>
                          Use the search bar and enter ingredients separated by
                          commas
                        </li>
                        <li>
                          Use the advanced search filter to select multiple
                          ingredients
                        </li>
                        <li>
                          Ask our AI assistant directly by clicking the chat
                          button
                        </li>
                      </ul>
                      <p className='mt-2'>
                        Our AI will help you find the perfect recipes that match
                        what you have available.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value='item-4'>
                    <AccordionTrigger>
                      How do I update my dietary preferences?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p>To update your dietary preferences:</p>
                      <ol className='list-decimal pl-6 mt-2 space-y-1'>
                        <li>Log in to your account</li>
                        <li>
                          Click on your profile icon in the top-right corner
                        </li>
                        <li>Select "Settings" from the dropdown menu</li>
                        <li>Navigate to the "Dietary Preferences" tab</li>
                        <li>
                          Update your preferences and click "Save Changes"
                        </li>
                      </ol>
                      <p className='mt-2'>
                        Your recipe recommendations will automatically update
                        based on your new preferences.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value='item-5'>
                    <AccordionTrigger>
                      Is whattocookbot available on mobile devices?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p>
                        Yes! whattocookbot is fully responsive and works on all
                        devices including smartphones and tablets. We've
                        optimized the experience for smaller screens, allowing
                        you to browse recipes, chat with our AI, and manage your
                        account on the go.
                      </p>
                      <p className='mt-2'>
                        We're also working on dedicated iOS and Android apps
                        that will be available soon, with additional features
                        like offline recipe access and meal planning tools.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value='item-6'>
                    <AccordionTrigger>
                      How does the AI chatbot work?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p>
                        Our AI chatbot uses natural language processing to
                        understand your queries and provide personalized recipe
                        recommendations. You can:
                      </p>
                      <ul className='list-disc pl-6 mt-2 space-y-1'>
                        <li>Ask for recipes based on ingredients you have</li>
                        <li>Request meal ideas for specific dietary needs</li>
                        <li>Get cooking tips and substitution suggestions</li>
                        <li>Ask for nutrition information</li>
                      </ul>
                      <p className='mt-2'>
                        The more you interact with the chatbot, the better it
                        gets at understanding your preferences and providing
                        relevant recommendations.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>

              {/* Contact Us Tab */}
              <TabsContent value='contact' className='space-y-6'>
                <Card>
                  <CardHeader>
                    <CardTitle>Get in Touch</CardTitle>
                    <CardDescription>
                      We're here to help! Fill out the form below and our team
                      will get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className='space-y-4'>
                      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                        <div className='space-y-2'>
                          <label htmlFor='name' className='text-sm font-medium'>
                            Name
                          </label>
                          <Input id='name' placeholder='Your name' />
                        </div>
                        <div className='space-y-2'>
                          <label
                            htmlFor='email'
                            className='text-sm font-medium'
                          >
                            Email
                          </label>
                          <Input
                            id='email'
                            type='email'
                            placeholder='Your email'
                          />
                        </div>
                      </div>
                      <div className='space-y-2'>
                        <label
                          htmlFor='subject'
                          className='text-sm font-medium'
                        >
                          Subject
                        </label>
                        <Input id='subject' placeholder="What's this about?" />
                      </div>
                      <div className='space-y-2'>
                        <label
                          htmlFor='message'
                          className='text-sm font-medium'
                        >
                          Message
                        </label>
                        <textarea
                          id='message'
                          className='flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                          placeholder='How can we help you?'
                        ></textarea>
                      </div>
                      <Button type='submit' className='w-full'>
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                  <Card>
                    <CardContent className='p-6 flex flex-col items-center text-center'>
                      <div className='h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4'>
                        <MessageSquare className='h-6 w-6' />
                      </div>
                      <h3 className='font-semibold mb-1'>Live Chat</h3>
                      <p className='text-sm text-muted-foreground mb-4'>
                        Chat with our support team in real-time
                      </p>
                      <Button variant='outline' size='sm'>
                        Start Chat
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className='p-6 flex flex-col items-center text-center'>
                      <div className='h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4'>
                        <FileText className='h-6 w-6' />
                      </div>
                      <h3 className='font-semibold mb-1'>Email Support</h3>
                      <p className='text-sm text-muted-foreground mb-4'>
                        Get help via email
                      </p>
                      <a
                        href='mailto:support@whattocookbot.com'
                        className='text-primary hover:underline text-sm'
                      >
                        support@whattocookbot.com
                      </a>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className='p-6 flex flex-col items-center text-center'>
                      <div className='h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4'>
                        <BookOpen className='h-6 w-6' />
                      </div>
                      <h3 className='font-semibold mb-1'>Knowledge Base</h3>
                      <p className='text-sm text-muted-foreground mb-4'>
                        Explore our comprehensive guides
                      </p>
                      <Button variant='outline' size='sm'>
                        Browse Articles
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* User Guides Tab */}
              <TabsContent value='guides' className='space-y-6'>
                <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                  {[
                    {
                      title: 'Getting Started Guide',
                      desc: 'Learn the basics of using whattocookbot',
                      icon: <BookOpen className='h-10 w-10' />,
                      time: '5 min read'
                    },
                    {
                      title: 'Recipe Search Tips',
                      desc: 'Master the search functionality to find perfect recipes',
                      icon: <Search className='h-10 w-10' />,
                      time: '3 min read'
                    },
                    {
                      title: 'Meal Planning 101',
                      desc: 'Create effective meal plans for the week',
                      icon: <FileText className='h-10 w-10' />,
                      time: '7 min read'
                    },
                    {
                      title: 'Customizing Your Profile',
                      desc: 'Set preferences for personalized recommendations',
                      icon: <HelpCircle className='h-10 w-10' />,
                      time: '4 min read'
                    },
                    {
                      title: 'Using the AI Assistant',
                      desc: 'Get the most out of our AI chatbot',
                      icon: <MessageSquare className='h-10 w-10' />,
                      time: '6 min read'
                    },
                    {
                      title: 'Nutrition Tracking',
                      desc: 'Track your nutritional intake with our tools',
                      icon: <FileText className='h-10 w-10' />,
                      time: '8 min read'
                    }
                  ].map((guide, index) => (
                    <Card key={index} className='overflow-hidden'>
                      <div className='bg-muted h-1.5' />
                      <CardContent className='p-6'>
                        <div className='text-primary mb-4'>{guide.icon}</div>
                        <h3 className='font-semibold text-lg mb-2'>
                          {guide.title}
                        </h3>
                        <p className='text-sm text-muted-foreground mb-4'>
                          {guide.desc}
                        </p>
                        <div className='flex items-center justify-between'>
                          <span className='text-xs text-muted-foreground'>
                            {guide.time}
                          </span>
                          <Button
                            variant='outline'
                            size='sm'
                            className='flex items-center'
                          >
                            Read Guide
                            <ExternalLink className='h-3.5 w-3.5 ml-1' />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Video Tutorials</CardTitle>
                    <CardDescription>
                      Watch our step-by-step guides to get the most out of
                      whattocookbot
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                      {[
                        {
                          title: 'Getting Started with whattocookbot',
                          duration: '3:45'
                        },
                        {
                          title: 'How to Use the AI Chatbot',
                          duration: '4:12'
                        },
                        {
                          title: 'Creating Your First Meal Plan',
                          duration: '6:18'
                        }
                      ].map((video, index) => (
                        <div
                          key={index}
                          className='rounded-lg border overflow-hidden'
                        >
                          <div className='aspect-video bg-muted relative'>
                            <div className='absolute inset-0 flex items-center justify-center'>
                              <Button
                                variant='ghost'
                                size='icon'
                                className='h-12 w-12 rounded-full bg-black/50 text-white hover:bg-black/70'
                              >
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  viewBox='0 0 24 24'
                                  fill='none'
                                  stroke='currentColor'
                                  strokeWidth='2'
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  className='h-6 w-6'
                                >
                                  <polygon points='5 3 19 12 5 21 5 3' />
                                </svg>
                              </Button>
                            </div>
                          </div>
                          <div className='p-3'>
                            <h4 className='font-medium text-sm mb-1'>
                              {video.title}
                            </h4>
                            <p className='text-xs text-muted-foreground'>
                              {video.duration}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Troubleshooting Tab */}
              <TabsContent value='troubleshooting' className='space-y-6'>
                <Card>
                  <CardHeader>
                    <CardTitle>Common Issues & Solutions</CardTitle>
                    <CardDescription>
                      Quick fixes for frequently encountered problems
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type='single' collapsible className='w-full'>
                      <AccordionItem value='issue-1'>
                        <AccordionTrigger>
                          I can't log in to my account
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            If you're having trouble logging in, try these
                            steps:
                          </p>
                          <ol className='list-decimal pl-6 mt-2 space-y-1'>
                            <li>
                              Check that you're using the correct email address
                            </li>
                            <li>
                              Make sure your password is entered correctly
                              (check caps lock)
                            </li>
                            <li>
                              Use the "Forgot Password" link to reset your
                              password
                            </li>
                            <li>Clear your browser cookies and cache</li>
                            <li>Try using a different browser or device</li>
                          </ol>
                          <p className='mt-2'>
                            If you still can't log in, please contact support.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value='issue-2'>
                        <AccordionTrigger>
                          Recipes aren't loading correctly
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            If recipes aren't loading or displaying properly:
                          </p>
                          <ol className='list-decimal pl-6 mt-2 space-y-1'>
                            <li>Check your internet connection</li>
                            <li>Refresh the page</li>
                            <li>Clear your browser cache</li>
                            <li>
                              Disable any browser extensions that might be
                              interfering
                            </li>
                            <li>
                              Try accessing the site in an incognito/private
                              window
                            </li>
                          </ol>
                          <p className='mt-2'>
                            If the problem persists, it might be a temporary
                            issue with our servers. Please try again later or
                            contact support if the issue continues.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value='issue-3'>
                        <AccordionTrigger>
                          The AI chatbot isn't responding
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            If our AI chatbot isn't responding or functioning
                            properly:
                          </p>
                          <ol className='list-decimal pl-6 mt-2 space-y-1'>
                            <li>Refresh the page</li>
                            <li>Try closing and reopening the chat window</li>
                            <li>
                              Check if you're logged in (some features require
                              login)
                            </li>
                            <li>
                              Make sure your question is clear and specific
                            </li>
                            <li>Check your internet connection</li>
                          </ol>
                          <p className='mt-2'>
                            Our AI might occasionally experience high traffic.
                            If the problem persists, please try again later or
                            use the search function to find recipes in the
                            meantime.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value='issue-4'>
                        <AccordionTrigger>
                          I'm not receiving email notifications
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            If you're not receiving emails from whattocookbot:
                          </p>
                          <ol className='list-decimal pl-6 mt-2 space-y-1'>
                            <li>Check your spam or junk folder</li>
                            <li>
                              Add support@whattocookbot.com to your contacts
                            </li>
                            <li>
                              Check if you have email notifications enabled in
                              your account settings
                            </li>
                            <li>
                              Verify that your email address is entered
                              correctly in your profile
                            </li>
                          </ol>
                          <p className='mt-2'>
                            If you've verified all of the above and still aren't
                            receiving emails, please contact our support team
                            for assistance.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>

                <div className='bg-muted/30 p-6 rounded-lg'>
                  <h3 className='text-xl font-bold mb-4'>
                    Technical Requirements
                  </h3>
                  <div className='space-y-4'>
                    <div>
                      <h4 className='font-semibold mb-2'>Supported Browsers</h4>
                      <p className='text-sm text-muted-foreground'>
                        whattocookbot works best on the latest versions of
                        Chrome, Firefox, Safari, and Edge. We recommend keeping
                        your browser updated for the best experience.
                      </p>
                    </div>
                    <div>
                      <h4 className='font-semibold mb-2'>
                        Mobile Compatibility
                      </h4>
                      <p className='text-sm text-muted-foreground'>
                        Our website is fully responsive and optimized for mobile
                        devices. You can access all features on smartphones and
                        tablets running iOS 12+ or Android 8+.
                      </p>
                    </div>
                    <div>
                      <h4 className='font-semibold mb-2'>
                        Internet Connection
                      </h4>
                      <p className='text-sm text-muted-foreground'>
                        A stable internet connection is required for optimal
                        performance, especially when using the AI chatbot and
                        searching for recipes.
                      </p>
                    </div>
                  </div>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Still Having Issues?</CardTitle>
                    <CardDescription>
                      Our support team is ready to help solve any problems you
                      encounter.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='flex flex-col items-center text-center space-y-4'>
                    <Button className='w-full max-w-md'>
                      <MessageSquare className='mr-2 h-4 w-4' />
                      Contact Support
                    </Button>
                    <p className='text-sm text-muted-foreground'>
                      Our typical response time is within 24 hours.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default HelpCenter
