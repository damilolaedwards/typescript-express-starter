import express, { Request, Response } from "express"
import bodyParser from "body-parser"
import { AppRouter } from "./services/router.services"
import { connectToDatabase } from "./services/database.service"
import "./controllers/AuthController"

const port = process.env.PORT || 3000
const app = express()
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
)

app.use(AppRouter.instance())

connectToDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server started at http://localhost:${port}`)
    })
  })
  .catch((error: Error) => {
    console.error("Database connection failed", error)
    process.exit()
  })
