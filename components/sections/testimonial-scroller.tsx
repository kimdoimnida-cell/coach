"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const testimonials = [
  "/testimonials/2.png",
  "/testimonials/3.png",
  "/testimonials/4.png",
  "/testimonials/5.png",
  "/testimonials/6.png",
  "/testimonials/7.png",
  "/testimonials/8.png",
  "/testimonials/9.png",
  "/testimonials/10.png",
]

export function TestimonialScroller() {
  const [isLoaded, setIsLoaded] = useState(false)
  
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!isLoaded) return null

  // Duplicate the array to create a seamless loop
  const doubledTestimonials = [...testimonials, ...testimonials]

  return (
    <section className="bg-primary py-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 mb-8">
         <p className="text-sm font-medium tracking-[0.2em] uppercase text-brand mb-2">
          REVIEWS
        </p>
        <h3 className="text-2xl font-bold text-primary-foreground md:text-3xl">
          실제 코칭 수강생 후기
        </h3>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex py-4">
          {doubledTestimonials.map((src, i) => (
            <div
              key={i}
              className="mx-4 flex-shrink-0 relative w-[280px] h-[500px] md:w-[320px] md:h-[570px] rounded-2xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-300"
            >
              <Image
                src={src}
                alt={`Testimonial ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 280px, 320px"
              />
            </div>
          ))}
        </div>

        {/* Second set for seamless transition */}
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex py-4">
          {doubledTestimonials.map((src, i) => (
            <div
              key={`duplicate-${i}`}
              className="mx-4 flex-shrink-0 relative w-[280px] h-[500px] md:w-[320px] md:h-[570px] rounded-2xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-300"
            >
              <Image
                src={src}
                alt={`Testimonial duplicate ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 280px, 320px"
              />
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 60s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes marquee2 {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-marquee:hover,
        .animate-marquee2:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
