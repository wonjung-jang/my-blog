import { ReactNode } from "react";

export default async function BlogContent({ children }: { children: ReactNode }) {
  return <div className="w-full px-8 py-8 prose dark:prose-invert">{children}</div>;
}
