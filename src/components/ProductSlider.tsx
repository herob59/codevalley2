"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  { id: 1, image: "/categories/macbook.webp", name: "MacBook Pro 2019", link: "/products/macbook-pro-2019" },
  { id: 2, image: "/categories/hp1030.jpeg", name: "HP EliteBook 1030", link: "/products/hp-elitebook-1030" },
  { id: 3, image: "/categories/dell-xps.jpg", name: "Dell XPS 15", link: "/products/dell-xps-15" },
  { id: 4, image: "/categories/asus-rog.webp", name: "Asus ROG Zephyrus", link: "/products/asus-rog-zephyrus" },
  { id: 5, image: "/categories/lenovo-thinkpad.jpg", name: "Lenovo ThinkPad X1", link: "/products/lenovo-thinkpad-x1" },
];

export default function ProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto mt-10">
      {/* Slider Container */}
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <Link href={products[currentIndex].link}>
          <img src={products[currentIndex].image} alt={products[currentIndex].name} className="w-full h-68 object-cover" />
        </Link>
      </div>

      {/* Left & Right Arrows */}
      <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md">
        <ChevronLeft size={24} />
      </button>

      <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md">
        <ChevronRight size={24} />
      </button>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-blue-500" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
}
