import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import CustomImage from "./app/_components/CustomImage";
import ImageSlider from "./app/_components/ImageSlider";
import PostHeader from "./app/_components/PostHeader";
import PostContent from "./app/_components/PostContent";
import YoutubePreview from "./app/_components/YoutubePreview";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Link,
    CustomImage,
    ImageSlider,
    YoutubePreview,
    PostHeader,
    PostContent,
    ...components,
  };
}
