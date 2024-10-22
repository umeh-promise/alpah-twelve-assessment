import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/utils";
import { ChevronIcon } from "@/assets/icons";

interface ImageCarouselProps {
  images: string[];
}

export default function Carousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  return (
    <article className="flex h-[32rem] w-full flex-col items-start gap-2 overflow-hidden md:gap-4">
      <figure className="relative size-full overflow-hidden rounded-md border border-grey-400">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transform transition-transform duration-500 ease-in-out ${
              index === currentIndex
                ? "translate-x-0"
                : index < currentIndex
                  ? "-translate-x-full"
                  : "translate-x-full"
            }`}
          >
            <Image
              src={src}
              alt={`Main image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="size-full object-cover object-center"
            />
          </div>
        ))}

        <figcaption className="absolute bottom-0 grid gap-2 bg-gradient-to-b from-transparent to-black/50 p-6">
          <h6 className="text-xs font-semibold leading-2 text-white">
            Latest News & Updates
          </h6>
          <p className="text-xs leading-2 text-white">
            Turpis interdum nunc varius ornare dignissim pretium. Massa ornare
            quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla
            purus, erat fringilla tincidunt quisque non. Pellentesque in ut
            tellus.
          </p>

          <section className="flex flex-wrap items-center justify-center gap-1">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "relative h-[3px] w-4 rounded-full bg-white opacity-30",
                  {
                    "opacity-100": index === currentIndex,
                  },
                )}
              >
                <span className="block bg-white"></span>
              </button>
            ))}
          </section>
        </figcaption>

        <button
          onClick={prevSlide}
          className="md:size-12.5 absolute left-6 top-1/2 grid size-11 -translate-y-1/2 place-content-center rounded-full bg-white text-black hover:bg-opacity-80"
        >
          <ChevronIcon variation="left" />
        </button>

        <button
          onClick={nextSlide}
          className="md:size-12.5 absolute right-6 top-1/2 grid size-11 -translate-y-1/2 place-content-center rounded-full bg-white text-black hover:bg-opacity-80"
        >
          <ChevronIcon variation="right" />
        </button>
      </figure>
    </article>
  );
}
