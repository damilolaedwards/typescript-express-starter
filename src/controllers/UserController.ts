import e, { Request, Response } from "express"
import { get, controller, post, use } from "./../decorators"
import { auth, Input } from "../utils/middlewares"
import { User } from "./../models/User"
import validate from "./../utils/validator/validate"
import { Mail } from "../services/mail.service"

@controller("/api/v1/user")
export class UserController {
  @get("/me")
  @use(auth)
  async me(req: Request, res: Response) {
    try {
      res.status(200).send(User.getAuthUser(req.body))
    } catch (e: any) {
      res.status(400).send({
        error: e.message,
      })
    }
  }
  @post('/me/update')
  @use(auth)
  @use(Input.sanitize(['firstname', 'lastname']))
  async patch(req:Request, res:Response){
    const rules = {
      firstname : ["string"],
      lastname : ["string"]
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
      const user = await User.update(req.body)
      res.status(200).send(user)

    } catch (e: any) {
      res.status(500).send({
        error: e.message
      })
    }

  }
  @post('/delete')
  @use(auth)
  async delete(req:Request, res:Response){
    try {
      const user = await User.remove(req.body.user)
      Mail.deactivateAccount()
      res.status(200).send({
        success : "user account successfully deleted",
        user, 
      })
    } catch (e: any) {
      res.status(500).send({
        error : e.message
      })
    }
  }
}
