import { useParams } from "react-router-dom";

export const VideoMovie = () => {
  const { videoId } = useParams();
  return (
    <div>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="Video Player"
        width="100%"
        height="800"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};
