import express from "express";
import gameRouter from "../routers/animeMysqlRouter";
import genreRouter from "../routers/genreMysqlRouter";
import storeRouter from "../routers/ratingMysqlRouter";
import platformRouter from "../routers/typeMysqlRoute";

const setupMysqlRouters = (app: express.Application) => {
  app.use("/anime", gameRouter);
  app.use("/genres/anime", genreRouter);
};

export default setupMysqlRouters;
