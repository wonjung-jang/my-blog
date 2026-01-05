import Image from "next/image";

interface CustomImageProps {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export default function CustomImage({ src, width, height, alt = "" }: CustomImageProps) {
  return (
    <div className="w-full flex items-center justify-center">
      <Image src={src} width={width} height={height} alt={alt} />
    </div>
  );
}
