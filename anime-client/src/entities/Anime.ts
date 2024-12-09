// entities/Anime.ts
export interface Anime {
  id: number;
  url: string;
  image_url: string | undefined;
  trailer: {
    youtube_id: string | null;
    url: string | null;
    embed_url: string | null;
    images: {
      image_url: string | null;
      small_image_url: string | null;
      medium_image_url: string | null;
      large_image_url: string | null;
      maximum_image_url: string | null;
    };
  };
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
