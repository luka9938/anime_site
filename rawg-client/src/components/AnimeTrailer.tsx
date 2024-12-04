import React from "react";
import useAnimeTrailer from "../hooks/useAnimeTrailer";

interface Props {
  animeId: string;
}

const AnimeTrailer = ({ animeId }: Props) => {
  const { trailerUrl, error } = useAnimeTrailer(animeId);

  if (error) return <div>{error}</div>;

  return trailerUrl ? (
    <div className="trailerSection">
      <h3>Trailer</h3>
      <iframe
        width="1120"
        height="630"
        src={trailerUrl}
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
