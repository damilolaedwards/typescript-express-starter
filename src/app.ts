import express from "express";
import bodyParser from "body-parser";
import multer from "multer";
import { AppRouter } from "./services/router.service";
import "./controllers/Node";

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(AppRouter.instance());

export default app;
