import { Router } from "express";
import { rating } from "../entities/Rating";
import { AppDataSource } from "../startup/data-source";

interface Response {
  count: number;
  results: rating[];
}

const ratingRouter = Router();
const ratingsRepository = AppDataSource.getRepository(rating);

// Get all ratings
ratingRouter.get("/", async (req, res) => {
  try {
    const ratings = await ratingsRepository.find();
    const response: Response = {
      count: ratings.length,
      results: ratings,
    };
    res.send(response);
  } catch (error) {
    console.error("Error fetching ratings:", error);
    res.status(500).send({ error: "Failed to fetch ratings." });
  }
});

export default ratingRouter;
