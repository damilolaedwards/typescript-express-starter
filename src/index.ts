import express from "express"
import bodyParser from "body-parser"
<<<<<<< HEAD
import { AppRouter } from "./services/router.services"
=======
import { AppRouter } from "./services/router.service"
import { connectToDatabase } from "./services/database.service"
>>>>>>> 3bc8c933e8cbdb575464235113e5cce6b02ff41d
import "./controllers/AuthController"
import "./controllers/UserController"

const port = process.env.PORT || 7000
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
