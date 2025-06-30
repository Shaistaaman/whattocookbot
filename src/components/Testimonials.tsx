import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        'whattocookbot transformed my cooking experience! I never waste ingredients anymore.',
      author: 'Jamie L.',
      role: 'Busy Parent',
      avatar: 'https://randomuser.me/api/portraits/women/12.jpg'
    },
    {
      quote:
        'As a fitness enthusiast, I love the nutritional information for each recipe. It helps me stay on track.',
      author: 'Carlos M.',
      role: 'Fitness Coach',
      avatar: 'https://randomuser.me/api/portraits/men/42.jpg'
    },
    {
      quote:
        "The recipe suggestions are incredible. It's like having a professional chef in my kitchen!",
      author: 'Sarah K.',
      role: 'Food Blogger',
      avatar: 'https://randomuser.me/api/portraits/women/37.jpg'
    }
  ]

  return (
    <section className='py-16 bg-gradient-to-b from-white to-smartmeal-yellow/20'>
      <div className='container px-4 md:px-6'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center mb-12'>
          <h2 className='text-3xl font-bold tracking-tighter md:text-4xl'>
            What Our Users Say
          </h2>
          <p className='max-w-[700px] text-muted-foreground'>
            Join thousands of happy cooks who have transformed their kitchen
            experience.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className='flex flex-col p-6 bg-background rounded-lg border shadow-sm'
            >
              <div className='flex-1'>
                <p className='text-lg italic mb-4'>
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>
              <div className='flex items-center gap-4 pt-4 border-t'>
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className='w-12 h-12 rounded-full object-cover'
                />
                <div>
                  <h4 className='font-semibold'>{testimonial.author}</h4>
                  <p className='text-sm text-muted-foreground'>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
