import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import BlogHeader from "./app/_components/BlogHeader";
import BlogContent from "./app/_components/BlogContent";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Link,
    BlogHeader,
    BlogContent,
    ...components,
  };
}
