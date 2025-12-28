import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TypographyH1 } from "@/components/ui/TypographyH1";
import { PostMeta } from "@/types/post";
import { isEmpty, map } from "es-toolkit/compat";
import Link from "next/link";

type Props = {
  posts: PostMeta[];
  basePath: string;
};

export default function PostList({ posts, basePath }: Props) {
  if (isEmpty(posts)) {
    return <TypographyH1>아직 작성된 글이 없어요.</TypographyH1>;
  }

  return (
    <div className="flex flex-col gap-4">
      {map(posts, (post) => (
        <Link href={`${basePath}/${post.slug}`} key={post.slug}>
          <Card>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <div className="flex gap-2">
                {map(post.categories, (category) => (
                  <Badge key={category} variant="outline">
                    {category}
                  </Badge>
                ))}
              </div>
              <div>
                <CardDescription className="text-muted-foreground">
                  {post.description}
                </CardDescription>
                <CardDescription>{post.date}</CardDescription>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
