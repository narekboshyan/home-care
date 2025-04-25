"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import clsx from "clsx";

export default function GallerySlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

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

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedIndex(null), 300); // Wait for animation
  };

  const showNextImage = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! + 1) % images.length);
  }, [images.length, selectedIndex]);

  const showPrevImage = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! - 1 + images.length) % images.length);
  }, [images.length, selectedIndex]);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (modalOpen) {
        if (e.key === "ArrowRight") showNextImage();
        else if (e.key === "ArrowLeft") showPrevImage();
        else if (e.key === "Escape") closeModal();
      } else {
        if (e.key === "ArrowRight") instanceRef.current?.next();
        else if (e.key === "ArrowLeft") instanceRef.current?.prev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [instanceRef, modalOpen, selectedIndex, showNextImage, showPrevImage]);

  return (
    <section className="w-full pt-0 pb-12 md:pb-24 lg:pb-32 flex flex-col items-center">
      <div className="relative w-full max-w-7xl px-4 md:px-12">
        <button
          onClick={() => instanceRef.current?.prev()}
          disabled={!hasMounted || !instanceRef.current}
          className={clsx(
            "absolute left-0 top-1/2 z-10 -translate-y-1/2 -ml-10 bg-white p-2 rounded-full shadow hover:bg-blue-100 cursor-pointer hidden xl:flex",
            (!hasMounted || !instanceRef.current) &&
              "opacity-50 cursor-not-allowed"
          )}
        >
          <ChevronLeft className="w-6 h-6 text-blue-700" />
        </button>
        <button
          onClick={() => instanceRef.current?.next()}
          disabled={!hasMounted || !instanceRef.current}
          className={clsx(
            "absolute right-0 top-1/2 z-10 -translate-y-1/2 -mr-10 bg-white p-2 rounded-full shadow hover:bg-blue-100 cursor-pointer hidden xl:flex",
            (!hasMounted || !instanceRef.current) &&
              "opacity-50 cursor-not-allowed"
          )}
        >
          <ChevronRight className="w-6 h-6 text-blue-700" />
        </button>

        <div ref={sliderRef} className="keen-slider">
          {images.map((src, i) => (
            <div className="keen-slider__slide px-2" key={i}>
              <div
                className="w-full h-64 relative rounded-lg overflow-hidden cursor-pointer"
                onClick={() => openModal(i)}
              >
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

      {selectedIndex !== null && (
        <div
          className={clsx(
            "fixed inset-0 bg-black/80 z-50 flex items-center justify-center transition-opacity duration-300",
            modalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
          onClick={closeModal}
        >
          <div
            className={clsx(
              "relative  w-[100vw] h-[90vh] transition-transform duration-300 flex items-center justify-center",
              "sm:w-full sm:h-full", // mobile full screen
              modalOpen ? "scale-100" : "scale-95"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Button */}
            <button
              onClick={showPrevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white p-2 rounded-full"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image */}
            <Image
              src={images[selectedIndex]}
              alt="Enlarged"
              className="object-contain"
              fill
            />

            {/* Next Button */}
            <button
              onClick={showNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white p-2 rounded-full"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
