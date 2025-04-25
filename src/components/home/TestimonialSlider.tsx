'use client';

import { useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  degree: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ms Laura Scala',
    degree: 'BSc',
    content: 'I loved learning about and exploring different modelling techniques in Statistics. I can confidently say that it was the best module I have taken in my fourth year. At times it was really challenging but Sujit guided me patiently and effectively which helped me progress with my research, thus making it fun, engaging and very enjoyable. The constant support provided encouraged me to aspire for a deeper understanding of the topic.'
  },
  {
    id: 2,
    name: 'John Smith',
    degree: 'MSc',
    content: 'The statistical modeling course was incredibly comprehensive and practical. Dr. Sahu\'s expertise and teaching methodology made complex concepts accessible and engaging.'
  },
  {
    id: 3,
    name: 'Emily Johnson',
    degree: 'PhD',
    content: 'Working with Professor Sahu on spatial-temporal modeling was a highlight of my PhD journey. His guidance and deep knowledge of the subject matter were invaluable to my research.'
  }
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative bg-rose-300 py-28 min-h-[420px]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-white hover:text-gray-200 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-white hover:text-gray-200 focus:outline-none"
            aria-label="Next testimonial"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonial Content */}
          <div className="overflow-hidden">
            <div
              className="transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              <div className="flex">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <h2 className="text-4xl font-bold mb-8">{testimonial.name} <span className="font-normal text-2xl">({testimonial.degree})</span></h2>
                    <p className="text-2xl leading-relaxed">{testimonial.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full focus:outline-none ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
