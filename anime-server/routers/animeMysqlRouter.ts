import { Router } from "express";
import { Anime } from "../entities/Animes";
import { AppDataSource } from "../startup/data-source";
import { Genre } from "../entities/Genres";

interface ModifiedAnime {
  id: number;
  title: string;
  title_english: string | null;
  title_japanese: string | null;
  type: string;
  source: string;
  episodes: number | null;
  status: string;
  rating: string;
  score: number;
  synopsis: string | null;
  background: string | null;
  season: string | null;
  year: number | null;
  aired_from: Date | null;
  genres: Genre[];
  trailer: {
    youtube_id: string | null;
    url: string | null;
    embed_url: string | null;
    image_url: string | null;
  };
}

interface Response {
  count: number;
  results: ModifiedAnime[];
}

const animeRouter = Router();
const animeRepository = AppDataSource.getRepository(Anime);

// Get all animes with optional filters
animeRouter.get("/", async (req, res) => {
  try {
    let genreId = req.query.genres ? Number(req.query.genres) : undefined;
    let sortBy = req.query.sort_by || "title";
    let order = req.query.order === "desc" ? "DESC" : "ASC";

    const queryBuilder = animeRepository
      .createQueryBuilder("anime")
      .leftJoinAndSelect("anime.genres", "genres");

    if (genreId) {
      queryBuilder.andWhere(
        "anime.id IN (SELECT anime_id FROM anime_genres WHERE genre_id = :genreId)",
        { genreId }
      );
    }

    if (sortBy) {
      queryBuilder.orderBy(
        `anime.${sortBy}`,
        order.toUpperCase() as "ASC" | "DESC"
      );
    }

    const animes = await queryBuilder.getMany();

    const modifiedAnimes = animes.map((anime) => ({
      id: anime.id,
      title: anime.title,
      title_english: anime.title_english,
      title_japanese: anime.title_japanese,
      type: anime.type,
      source: anime.source,
      episodes: anime.episodes,
      status: anime.status,
      rating: anime.rating,
      score: anime.score,
      synopsis: anime.synopsis,
      background: anime.background,
      season: anime.season,
      year: anime.year,
      aired_from: anime.aired_from,
      genres: anime.genres,
      trailer: {
        youtube_id: anime.trailer_youtube_id,
        url: anime.trailer_url,
        embed_url: anime.trailer_embed_url,
        image_url: anime.trailer_image_url,
      },
    }));

    const response: Response = {
      count: modifiedAnimes.length,
      results: modifiedAnimes,
    };

    res.status(200).send(response);
  } catch (error) {
    console.error("Error fetching animes:", error);
    res.status(500).send({ message: "Error fetching animes." });
  }
});

// Get anime by ID
animeRouter.get("/:id", async (req, res) => {
  try {
    const animeId = Number(req.params.id);
    const anime = await animeRepository.findOne({
      where: { id: animeId },
      relations: ["genres"],
    });

    if (!anime) {
      return res.status(404).send({ message: "Anime not found." });
    }

    const modifiedAnime: ModifiedAnime = {
      id: anime.id,
      title: anime.title,
      title_english: anime.title_english,
      title_japanese: anime.title_japanese,
      type: anime.type,
      source: anime.source,
      episodes: anime.episodes,
      status: anime.status,
      rating: anime.rating,
      score: anime.score,
      synopsis: anime.synopsis,
      background: anime.background,
      season: anime.season,
      year: anime.year,
      aired_from: anime.aired_from,
      genres: anime.genres,
      trailer: {
        youtube_id: anime.trailer_youtube_id,
        url: anime.trailer_url,
        embed_url: anime.trailer_embed_url,
        image_url: anime.trailer_image_url,
      },
    };

    res.status(200).send(modifiedAnime);
  } catch (error) {
    console.error("Error fetching anime by ID:", error);
    res.status(500).send({ message: "Error fetching anime by ID." });
  }
});

export default animeRouter;
