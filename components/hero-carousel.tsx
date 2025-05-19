"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const carouselItems = [
  {
    image: "/hero-1.jpg",
    title: "Expert Legal Representation",
    description:
      "Dedicated to protecting your rights and interests with personalized legal solutions",
    buttonText: "Consult Now",
  },
  {
    image: "/hero-2.jpg",
    title: "Decades of Legal Experience",
    description:
      "Our team of seasoned attorneys brings extensive expertise to every case we handle",
    buttonText: "Our Expertise",
  },
  {
    image: "/hero-3.jpg",
    title: "Committed to Client Success",
    description:
      "We work tirelessly to achieve the best possible outcomes for our clients",
    buttonText: "Learn More",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === carouselItems.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? carouselItems.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[600px] mt-20">
      {carouselItems.map((item, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            currentSlide === index
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 max-w-4xl">
              {item.title}
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mb-8">
              {item.description}
            </p>
            {/* <button className="bg-[#c25b5b] hover:bg-[#a04545] text-white px-6 py-3 rounded transition-colors">
              {item.buttonText}
            </button> */}
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-colors",
              currentSlide === index ? "bg-white" : "bg-white/50"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
