// entities/Anime.ts
export interface Anime {
  id: number;
  url: string;
  image_url: string | undefined;
  approved: boolean;
  title: string;
  title_english: string | null;
  title_japanese: string | null;
  type: string;
  source: string;
  episodes: number | null;
  status: string;
  airing: boolean;
  aired_from: string | null;
  rating: string;
  score: number;
  popularity: number;
  synopsis: string | null;
  background: string | null;
  season: string | null;
  year: number | null;
  trailer_youtube_id: string | null;
  trailer_url: string | null;
  trailer_embed_url: string | null;
  trailer_image_url: string | null;
  genres: {
    id: number;
    name: string;
    type: string;
    url: string;
  }[];
}

export interface AnimeApiResponse {
  results: Anime[];
}
