type YouTubePreviewProps = {
  videoId: string;
};

export default async function YoutubePreview({ videoId }: YouTubePreviewProps) {
  return (
    <div className="relative w-full my-2 aspect-video">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
