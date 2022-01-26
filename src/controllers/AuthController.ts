import { Request, Response } from "express"
import { get, controller, post, use } from "./../decorators"
import "../utils/middlewares"

@controller("")
class AuthController {
  @get("/")
  getRoot(req: Request, res: Response) {
    res.send(`
        <div>
          <div>You are logged in</div>
          <a href="/auth/logout">Logout</a>
        </div>
      `)
  }
}
