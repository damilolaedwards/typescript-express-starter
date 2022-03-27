import jwt from "jsonwebtoken"
import { Request, Response, NextFunction, RequestHandler } from "express"
import { User, Payload } from "../models/User"
import * as mongoDB from "mongodb"

declare module "express-serve-static-core" {
  interface Request {
    token?: string
    user?: mongoDB.WithId<mongoDB.Document>
  }
}

//Middlewares
export const auth: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "")
    if (token && process.env.JWT_SECRET) {
      const decoded = jwt.verify(token, process.env.JWT_SECRET) as Payload
      const user = await User.collection.findOne({ _id: decoded._id })

      if (
        !user ||
        !user.tokens.find((user_token: string) => {
          user_token == token
        })
      ) {
        throw new Error()
      }
      req.token = token
      req.user = user
      next()
    } else {
      throw new Error("invalid token or JWT_SECRET not provided in config file")
    }
  } catch (e) {
    res.status(401).send({ error: "Please authenticate!" })
  }
}

export class Input {
  
  static sanitize(fields: string[]) {
    return function (req: Request, res: Response, next: NextFunction) {
      const data = Object.keys(req.body)
      data.forEach((item: string) => {
        if (!fields.includes(item)) {
          delete req.body[item]
        }else{
          req.body[item] = req.body[item].trim()
        }
      })
      next()
    }
  }
}

