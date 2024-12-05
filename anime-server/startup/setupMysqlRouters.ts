import express from "express";
import animeRouter from "../routers/animeMysqlRouter";
import genreRouter from "../routers/genreMysqlRouter";

const setupMysqlRouters = (app: express.Application) => {
  app.use("/anime", animeRouter);
  app.use("/genres/anime", genreRouter);
};

export default setupMysqlRouters;
