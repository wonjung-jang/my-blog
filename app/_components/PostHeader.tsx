import { Badge } from "@/components/ui/badge";
import { TypographyH1 } from "@/components/ui/TypographyH1";
import { TypographyMuted } from "@/components/ui/TypographyMuted";
import { PostMeta } from "@/types/post";
import { map } from "es-toolkit/compat";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

export default async function PostHeader({
  title,
  date,
  categories,
  type,
}: Omit<PostMeta, "description">) {
  return (
    <header className="w-full flex flex-col items-start gap-2 px-4 pb-4 border-b pt-16">
      <Link
        href={`/${type}`}
        className="flex items-center gap-1 hover:bg-gray-100 p-1 rounded text-muted-foreground text-sm"
      >
        <ArrowLeftIcon size={15} />
        목록으로
      </Link>
      <TypographyH1>{title}</TypographyH1>
      <div className="flex gap-1 p-1">
        {map(categories, (category) => (
          <Badge key={category} variant="outline">
            {category}
          </Badge>
        ))}
      </div>
      <TypographyMuted>{date}</TypographyMuted>
    </header>
  );
}
