import useAnimeTrailer from "../hooks/useAnimeTrailer";
import "../AnimeTrailer.css";

interface Props {
  animeId: string;
}

const AnimeTrailer = ({ animeId }: Props) => {
  const { trailer, error } = useAnimeTrailer(animeId);

  if (error) return <div>{error}</div>;

  return trailer ? (
    <div className="trailerSection">
      <h3>{trailer.name}</h3>
      <iframe
        width="1120"
        height="630"
        // Ensure autoplay=0 is included in the URL to disable autoplay
        src={`${
          trailer.data.max ? trailer.data.max : trailer.data[480]
        }?autoplay=0`}
        title={trailer.name}
        frameBorder="0"
        allow="fullscreen"
        allowFullScreen
      ></iframe>
    </div>
  ) : (
    <div className="trailerSection">
      <h3>Trailer</h3>
      <div className="placeholder">
        <p>No trailer available</p>
      </div>
    </div>
  );
};

export default AnimeTrailer;
