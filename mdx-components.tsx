import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import Image from "next/image";
import ImageSlider from "./app/_components/ImageSlider";
import PostHeader from "./app/_components/PostHeader";
import PostContent from "./app/_components/PostContent";
import YoutubePreview from "./app/_components/YoutubePreview";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Link,
    Image,
    ImageSlider,
    YoutubePreview,
    PostHeader,
    PostContent,
    ...components,
  };
}
