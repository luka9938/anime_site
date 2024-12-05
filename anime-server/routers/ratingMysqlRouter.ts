import { Router } from "express";
import { Rating } from "../entities/Ratings";
import { AppDataSource } from "../startup/data-source";

interface Response {
  count: number;
  results: Rating[];
}

const ratingRouter = Router();
const ratingRepository = AppDataSource.getRepository(Rating);

// Get all ratings
ratingRouter.get("/", async (req, res) => {
  try {
    const ratings = await ratingRepository.find();
    const response: Response = {
      count: ratings.length,
      results: ratings,
    };
    res.send(response);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch ratings" });
  }
});

export default ratingRouter;
