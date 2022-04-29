import express from "express";
import bodyParser from "body-parser";
import { AppRouter } from "./services/router.service";
import "./controllers/Node";

const port = process.env.PORT || 5000;
const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(AppRouter.instance());

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
