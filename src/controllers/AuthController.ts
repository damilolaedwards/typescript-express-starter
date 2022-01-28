import { Request, Response } from "express"
import { get, controller, post, use } from "./../decorators"
import { auth, Input } from "../utils/middlewares"
import { User } from "./../models/User"
import validate from "./../utils/validator/validate"

@controller("")
export class AuthController {
  @post("/register")
  @use(Input.trim(["email", "password"]))
  @use(Input.sanitize(["email", "password"]))
  async register(req: Request, res: Response) {
    const rules = {
      email: ["required", "email"],
      password: ["required", "min:8"],
    }

    const v = validate.make(req.body, rules)

    const exists = await User.collection.findOne({ email: req.body.email })
    if (exists) {
      return res.status(400).send({
        error: {
          message: "input validation error",
          body: "email already exists in database",
        },
      })
    }

    if (!v.passes()) {
      return res.status(400).send({
        error: {
          messsage: "input validation error",
          body: v.getErrors(),
        },
      })
    }

    try {
      res
        .status(201)
        .send(await User.generateAuthToken(await User.create(req.body)))
    } catch (e) {
      res.status(400).send(e.message)
    }
  }
}
