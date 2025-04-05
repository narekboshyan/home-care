"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function GallerySlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 3, spacing: 16 },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1 },
      },
      "(min-width: 769px) and (max-width: 1024px)": {
        slides: { perView: 2 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const images = [
    "/bedroom_1.jpeg",
    "/kitchen.jpeg",
    "/living_room.jpeg",
    "/bedroom_2.jpeg",
    "/bathroom.jpeg",
    "/bedroom_3.jpeg",
    "/bedroom_4.jpeg",
    "/corridor.jpeg",
  ];

  return (
    <section className="w-full pt-0 pb-12 md:pb-24 lg:pb-32 flex flex-col items-center">
      <div className="relative w-full max-w-7xl px-4 md:px-12">
        <button
          onClick={() => instanceRef.current?.prev()}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 -ml-10 bg-white p-2 rounded-full shadow hover:bg-blue-100 cursor-pointer hidden xl:flex"
        >
          <ChevronLeft className="w-6 h-6 text-blue-700" />
        </button>
        <button
          onClick={() => instanceRef.current?.next()}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 -mr-10 bg-white p-2 rounded-full shadow hover:bg-blue-100 cursor-pointer hidden xl:flex"
        >
          <ChevronRight className="w-6 h-6 text-blue-700" />
        </button>

        <div ref={sliderRef} className="keen-slider">
          {images.map((src, i) => (
            <div className="keen-slider__slide px-2" key={i}>
              <div className="w-full h-64 relative rounded-lg overflow-hidden">
                <Image
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex xl:hidden gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`h-2 w-2 rounded-full transition-colors ${
              currentSlide === idx ? "bg-blue-600" : "bg-blue-200"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
