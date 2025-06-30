import React, { useRef, useEffect } from 'react'

interface Ad {
  id: number
  image: string
  text: string
}

const ads: Ad[] = [
  {
    id: 1,
    image: '/logo.png',
    text: 'Try our new AI-powered recipe recommendations today!'
  },
  {
    id: 2,
    image: '/logo.png',
    text: '50% off premium meal plans for new users!'
  },
  {
    id: 3,
    image: '/logo.png',
    text: 'Discover cuisine from around the world with our global recipes'
  },
  {
    id: 4,
    image: '/logo.png',
    text: "Cook like a pro with whattocookbot's cooking tips"
  },
  {
    id: 5,
    image: '/logo.png',
    text: 'Eat healthy with our nutritionist-approved recipes'
  }
]

const AdTicker: React.FC = () => {
  const tickerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tickerAnimation = () => {
      if (tickerRef.current) {
        if (
          tickerRef.current.scrollLeft >=
          tickerRef.current.scrollWidth - tickerRef.current.clientWidth
        ) {
          tickerRef.current.scrollLeft = 0
        } else {
          tickerRef.current.scrollLeft += 1
        }
      }
    }

    const animationInterval = setInterval(tickerAnimation, 20)

    return () => {
      clearInterval(animationInterval)
    }
  }, [])

  return (
    <div className='w-full bg-gradient-to-r from-smartmeal-yellow/30 to-smartmeal-orange/30 overflow-hidden'>
      <div
        ref={tickerRef}
        className='flex overflow-x-scroll py-4 hide-scrollbar whitespace-nowrap'
        style={{ scrollBehavior: 'smooth' }}
      >
        {ads.map(ad => (
          <div
            key={ad.id}
            className='inline-flex items-center mx-6 bg-white/70 rounded-lg px-4 py-2 shadow-md hover:shadow-lg transition-shadow hover:bg-white/90'
          >
            <img
              src={ad.image}
              alt={`Ad ${ad.id}`}
              className='h-10 w-10 object-contain mr-3'
            />
            <span className='font-medium text-gray-800'>{ad.text}</span>
          </div>
        ))}

        {/* Duplicate ads to create seamless looping */}
        {ads.map(ad => (
          <div
            key={`dup-${ad.id}`}
            className='inline-flex items-center mx-6 bg-white/70 rounded-lg px-4 py-2 shadow-md hover:shadow-lg transition-shadow hover:bg-white/90'
          >
            <img
              src={ad.image}
              alt={`Ad ${ad.id}`}
              className='h-10 w-10 object-contain mr-3'
            />
            <span className='font-medium text-gray-800'>{ad.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdTicker
