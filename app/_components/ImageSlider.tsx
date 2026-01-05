"use client";

import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { map } from "es-toolkit/compat";
import Image from "next/image";
import { useState } from "react";

type Image = {
  src: string;
  alt: string;
};

export default function ImageSlider({ images }: { images: Image[] }) {
  const [currentImageNumber, setCurrentImageNumber] = useState<number>(1);
  const handlePreviousClick = () => {
    setCurrentImageNumber((prev) => (prev -= 1));
  };
  const handleNextClick = () => {
    setCurrentImageNumber((prev) => (prev += 1));
  };
  return (
    <Carousel>
      <CarouselContent>
        {map(images, ({ src, alt }, index) => (
          <CarouselItem key={`${alt}-${index}`} className="flex items-center justify-center">
            <Image src={src} alt={alt} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute inset-x-0 bottom-1 flex justify-center items-center">
        <Badge className="opacity-50">
          {currentImageNumber} / {images.length}
        </Badge>
      </div>
      <CarouselPrevious onClick={handlePreviousClick} />
      <CarouselNext onClick={handleNextClick} />
    </Carousel>
  );
}
