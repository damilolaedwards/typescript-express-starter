import express, { Request, Response } from "express"
import bodyParser from "body-parser"
import { AppRouter } from "./services/router.services"
import "./controllers/AuthController"

const port = process.env.PORT || 3000
const app = express()
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
)

app.use(AppRouter.instance())

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})
