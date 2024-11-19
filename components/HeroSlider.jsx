"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Button from './ui/Button'

const slides = [
    {
        image: '/images/hero-1.jpg',
        title: 'Monitoring Mangrove di Ujung Kulon',
        subtitle: 'PLATFORM MONITORING MANGROVE',
        description: 'Memantau persebaran dan kondisi hutan mangrove dari waktu ke waktu di kawasan Ujung Kulon'
    },
    {
        image: '/images/hero-2.jpg',
        title: 'Preservasi Ekosistem Mangrove',
        subtitle: 'KONSERVASI BERKELANJUTAN',
        description: 'Menjaga kelestarian ekosistem mangrove untuk generasi mendatang'
    },
    {
        image: '/images/hero-3.jpg',
        title: 'Data Spasial Temporal Mangrove',
        subtitle: 'ANALISIS KOMPREHENSIF',
        description: 'Menyediakan data dan analisis mengenai perubahan luas dan kondisi mangrove'
    }
]

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="relative h-[600px] overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                >
                    <Image
                        src={slide.image}
                        alt={slide.title}
                        layout="fill"
                        objectFit="cover"
                        priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="text-center text-white max-w-4xl px-4">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4">Welcome to Co-Rove</h2>
                            <h2 className="text-sm md:text-base font-medium mb-2">{slide.subtitle}</h2>
                            <h1
                                className={`text-3xl md:text-5xl font-bold mb-4 text-white transition-all duration-1000 ${index === currentSlide ? 'typing-animation' : 'opacity-0'
                                    }`}
                                style={{
                                    animationDelay: `${index === currentSlide ? '0s' : '0s'}`, // delay for new slide
                                }}
                            >
                                {slide.title}
                            </h1>
                            <p className="text-lg md:text-xl mb-8">{slide.description}</p>
                        </div>
                    </div>
                </div>
            ))}

            {/* Previous Slide Button */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-red-300 bg-opacity-50 p-2 rounded-full text-black hover:bg-opacity-75 transition-all z-50"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Slide Button */}
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-red-300 bg-opacity-50 p-2 rounded-full text-black hover:bg-opacity-75 transition-all z-50"
                aria-label="Next slide"
            >
                <ChevronRight className="w-6 h-6" />
            </button>
        </div>
    )
}

export default HeroSlider
