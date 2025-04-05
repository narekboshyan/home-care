"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function GallerySlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

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

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (src: string) => {
    setSelectedImage(src);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedImage(null), 300); // Allow animation to complete
  };

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        instanceRef.current?.next();
      } else if (e.key === "ArrowLeft") {
        instanceRef.current?.prev();
      } else if (e.key === "Escape" && modalOpen) {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalOpen, instanceRef]);

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
                onClick={() => openModal(src)}
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

      {/* Modal with animation and 60% width */}
      {selectedImage && (
        <div
          className={clsx(
            "fixed inset-0 bg-black/80 z-50 flex items-center justify-center transition-opacity duration-300",
            modalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
          onClick={closeModal}
        >
          <div
            className={clsx(
              "relative w-[60vw] h-[90vh] transition-transform duration-300",
              modalOpen ? "scale-100" : "scale-95"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Enlarged"
              fill
              style={{
                objectFit: "cover",
              }}
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-black/60 rounded-full p-2"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
