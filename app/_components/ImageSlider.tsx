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

type Image = {
  src: string;
  alt: string;
};

export default async function ImageSlider({ images }: { images: Image[] }) {
  return (
    <Carousel>
      <CarouselContent>
        {map(images, ({ src, alt }, index) => (
          <CarouselItem key={`${alt}-${index}`}>
            <Image src={src} alt={alt} className="mb-3" />
            <div className="w-full flex items-center justify-center">
              <Badge className="bottom-0">
                {index + 1} / {images.length}
              </Badge>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
