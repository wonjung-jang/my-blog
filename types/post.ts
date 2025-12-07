export type Post = {
  title: string;
  date: string;
  description: string;
  type: "dev" | "daily";
  categories: string[];
};
