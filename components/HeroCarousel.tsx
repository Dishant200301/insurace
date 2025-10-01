
import React, { useState, useEffect, useCallback } from 'react';
import { HeroSlide } from '../types';

interface HeroCarouselProps {
    slides: HeroSlide[];
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, [slides.length]);

    useEffect(() => {
        const intervalId = setInterval(nextSlide, 5000); // Autoplay every 5 seconds
        return () => clearInterval(intervalId);
    }, [nextSlide]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    if (!slides || slides.length === 0) {
        return null;
    }

    return (
        <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img src={slide.src} alt={slide.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                </div>
            ))}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in-down">{slides[currentIndex].title}</h1>
                <p className="text-lg md:text-2xl max-w-3xl mb-8 animate-fade-in-up">{slides[currentIndex].subtitle}</p>
                <a href={slides[currentIndex].ctaHref} className="bg-brandBlue text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300 transform hover:scale-105">
                    {slides[currentIndex].ctaLabel}
                </a>
            </div>
             <div className="absolute z-20 bottom-5 left-1/2 -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentIndex ? 'bg-brandBlue' : 'bg-white/50 hover:bg-white'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroCarousel;
