import * as mongoDB from "mongodb"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

export type Payload = {
  _id: mongoDB.ObjectId
  email?: string
  password?: string
  tokens: { token: string }[]
}

type AuthCredentials = {
  email: string
  password: string
}

let users: mongoDB.Collection

export class User {
  static injectDB(db: mongoDB.Db) {
    if (users) {
      return
    }
    try {
      users = db.collection("users")
    } catch (e) {
      console.error(
        `Unable to establish collection handles in Users model: ${e}`,
      )
    }
  }
  static get collection() {
    return users
  }

  static required(): string[] {
    return ["email", "password"]
  }

  static async generateAuthToken(user: mongoDB.Document) {
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET not provided in config file")
    }
    const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET)
    const tokens = user.tokens.push(token)
    await users.findOneAndUpdate(
      { _id: user._id },
      { $set: { tokens: tokens } },
    )
    return { user, token }
  }

  static async findByCredentials(
    email: string,
    password: string,
  ): Promise<mongoDB.WithId<mongoDB.Document>> {
    const user = await users.findOne({ email, password })
    if (!user) {
      throw new Error("Unable to login")
    }
    const isMatch = bcrypt.compare(password, user.password)

    if (!isMatch) {
      throw new Error("Unable to login")
    }

    return user
  }

  static async create(data: AuthCredentials) {
    const i = await users.insertOne(data)
    data.password = await bcrypt.hash(data.password, 8)
    const user = Object.assign({ _id: i.insertedId, tokens: [] }, data)

    return user
  }

  static async update(
    user: Payload,
  ): Promise<mongoDB.ModifyResult<mongoDB.Document>> {
    return await users.findOneAndUpdate({ _id: user._id }, user)
  }

  static async remove(
    user: Payload,
  ): Promise<mongoDB.ModifyResult<mongoDB.Document>> {
    return await users.findOneAndDelete({ _id: user._id })
  }
}
