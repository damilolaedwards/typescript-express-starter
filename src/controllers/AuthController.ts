import { Request, Response } from "express"
import { get, controller, post, use } from "./../decorators"
import { auth, Input } from "../utils/middlewares"
import { User } from "./../models/User"
import validate from "./../utils/validator/validate"
import { Mail } from "../services/mail.service"


@controller("/api/v1/auth")
export class AuthController {
  @post("/register")
  @use(Input.sanitize(["email", "password", "confirm_password"]))
  async register(req: Request, res: Response) {
    const rules = {
      email: ["required", "email"],
      password: ["required", "min:8"],
      confirm_password: ["same:password"],
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
    delete req.body.confirm_password
    try {
      res.status(201).send(await User.create(req.body))
    } catch (e: any) {
      res.status(400).send({
        error: e.message,
      })
    }
  }

  @post("/login")
  @use(Input.sanitize(["email", "password"]))
  async login(req: Request, res: Response) {
    const rules = {
      email: ["required", "email"],
      password: ["required", "min:8"],
    }
    const v = validate.make(req.body, rules)

    if (!v.passes()) {
      return res.status(400).send({
        error: {
          messsage: "input validation error",
          body: v.getErrors(),
        },
      })
    }

    try {
      const user = await User.findByCredentials(
        req.body.email,
        req.body.password,
      )
      const token = User.generateAuthToken(user)
      await User.addToken(user, token)
      res.send({ user, token })
    } catch (e: any) {
      res.status(400).send({
        error: e.message,
      })
    }
  }

  @post("/logout")
  @use(auth)
  async logout(req: Request, res: Response) {
    if (!req.user) {
      throw new Error("Could not logout!")
    }
    try {
      await User.removeToken(req.user, req.user.token)
      res.status(200).send({
        success: "logout successfull!",
      })
    } catch (e: any) {
      res.status(500).send({
        error: e.message,
      })
    }
  }
  @post("logout/all")
  @use(auth)
  async logoutAll(req: Request, res: Response) {
    if (!req.user) {
      throw new Error("Could not logout!")
    }
    try {
      User.removeAllTokens(req.user)
      res.status(200).send({
        message: "Logged out all accounts",
      })
    } catch (e: any) {
      res.status(500).send({
        error: e.message,
      })
    }
  }
  @post("/password/reset")
  @use(Input.sanitize(["email"]))
  async resetPassword(req: Request, res: Response) {
    const rules = {
      email: ["required", "email"]
    }
    const v = validate.make(req.body, rules)

    if (!v.passes()) {
      return res.status(400).send({
        error: {
          messsage: "input validation error",
          body: v.getErrors(),
        },
      })
    }
    const user = await User.getUser(req.body.email)
    if (!user) {
      return res.status(404).send({
        error: "email not found",
      })
    }

    try {
      const link = await User.passwordReset(user)
      Mail.resetPassword(
        user.email,
        "Password Reset Request",
        { name: user.name, link: link },
        "./template/requestResetPassword.handlebars",
      )
      res.status(200).send({
        success: "password reset email successfully sent",
      })
    } catch (e: any) {
      res.status(500).send({
        error: e.message,
      })
    }
  }

  @use(Input.sanitize(["user_id", "token", "password", "confirm_password"]))
  @post('/password/change')
  async changePassword(req:Request, res:Response){
    try {
      const recipient = await User.changePassword(req.body.user_id, req.body.token, req.body.password)
      Mail.passwordChanged( recipient.email,
        "Password Successfully Changed",
        { name: recipient.name },
        "./template/requestChangePassword.handlebars")
    } catch (e: any) {
      res.status(500).send({
        error : e.message
      })
    }

  }

  
  
}
