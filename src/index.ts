import express from "express"
import { AppRouter } from "./AppRouter"
import "./controllers/AuthController"

const app = express()
app.use(AppRouter.instance())
app.listen(3000, () => {
  console.log("Listening on port 3000")
})
