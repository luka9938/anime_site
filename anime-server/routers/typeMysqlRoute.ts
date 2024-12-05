import { Router } from "express";
import { Type } from "../entities/Types"; // Adjust the import path based on your project structure
import { AppDataSource } from "../startup/data-source";

interface Response {
  count: number;
  results: Type[];
}

const typeRouter = Router();
const typeRepository = AppDataSource.getRepository(Type);

// Get all types
typeRouter.get("/", async (req, res) => {
  try {
    const types = await typeRepository.find();
    const response: Response = {
      count: types.length,
      results: types,
    };
    res.send(response);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch types" });
  }
});

export default typeRouter;
