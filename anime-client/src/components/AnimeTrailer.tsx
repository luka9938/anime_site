import useAnimeTrailer from "../hooks/useAnimeTrailer";
import "../AnimeTrailer.css";

interface Props {
  animeId: string;
}

const AnimeTrailer = ({ animeId }: Props) => {
  const { trailer, error } = useAnimeTrailer(animeId);

  if (error) return <div className="error">{error}</div>;

  return trailer ? (
    <div className="trailerSection">
      <h3>Trailer</h3>
      <iframe
        width="1120"
        height="630"
        src={`${trailer.trailer_embed_url}?autoplay=0`}
        title="Anime Trailer"
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
