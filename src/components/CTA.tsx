import React from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='py-16 bg-smartmeal-bright-orange text-white'>
      <div className='container px-4 md:px-6'>
        <div className='grid gap-6 lg:grid-cols-2 items-center'>
          <div className='space-y-4'>
            <h2 className='text-3xl font-bold tracking-tighter md:text-4xl'>
              Ready to Transform Your Cooking Experience?
            </h2>
            <p className='max-w-[700px] text-white/80 md:text-xl'>
              Join whattocookbot today and discover the joy of cooking without
              waste or worry.
            </p>
          </div>
          <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-end'>
            <Link to='/signup'>
              <Button
                size='lg'
                className='bg-white text-smartmeal-bright-orange hover:bg-white/90'
              >
                Get Started for Free
              </Button>
            </Link>
            <Link to='/recipes'>
              <Button
                size='lg'
                variant='outline'
                className='border-white text-white bg-[#FD742B]/80 hover:bg-[#FD742B] hover:text-white'
              >
                Explore Recipes
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
