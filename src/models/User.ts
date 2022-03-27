import crypto from "crypto"
import * as mongoDB from "mongodb"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import { Mail } from "../services/mail.service"

export type Payload = {
  _id: mongoDB.ObjectId
  email: string
  password?: string
  tokens?: { token: string }[]
}

type AuthCredentials = {
  _id?: mongoDB.ObjectId

  email: string
  password : string
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

  static getAuthUser(user: Payload) {
    delete user.password
    delete user.tokens

    return user
  }

  static async getUser(email: string) {
    return await users.findOne({ email })
  }

  static generateAuthToken(user: mongoDB.Document) {
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET not provided in config file")
    }
    return jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET)
  }

  static async addToken(user: mongoDB.Document, token: string) {
    await users.updateOne({ _id: user._id }, { $push: { tokens: token } })
    user.tokens.push(token)
  }

  static async removeToken(user: mongoDB.Document, token: string) {
    await users.updateOne(
      { _id: user._id },
      { $pull: { tokens: { $eq: token } } },
    )
  }

  static async removeAllTokens(user: mongoDB.Document) {
    await users.updateOne({ _id: user._id }, { tokens: [] })
  }

  static async saveResetToken(user: mongoDB.Document, hash: string) {
    await user.updateOne({ _id: user._id }, { password_reset_token: hash })
  }

  static async findByCredentials(email: string, password: string) {
    const user = await users.findOne({ email })
    if (!user) {
      throw new Error("Matching credentials not found!")
    }
    const isMatch = bcrypt.compare(password, user.password)

    if (!isMatch) {
      throw new Error("Incorrect password")
    }
    return user
  }

  static async create(user: AuthCredentials) {
    user.password = await bcrypt.hash(user.password, 8)
    const created_at = await users.insertOne(
      Object.assign(user, { created_at: "$$NOW", tokens: [] }),
    )
    return user
  }

  static async passwordReset(user: mongoDB.Document){
    const clientURL = process.env.CLIENT_URL
      let resetToken = crypto.randomBytes(32).toString("hex")
      const hash = await bcrypt.hash(resetToken, 8)
      await User.saveResetToken(user, hash)
      const link = `${clientURL}/passwordReset?token=${resetToken}&id=${user._id}`
      return link
  }

  static async changePassword(userId: string, token: string, password: string){
  const user = await users.findOne({ _id : userId });
  if (!user || !user.password_reset_token) {
    throw new Error("Invalid or expired password reset token");
  }
  const isValid = await bcrypt.compare(token, user.token);
  if (!isValid) {
    throw new Error("Invalid or expired password reset token");
  }
  const hash = await bcrypt.hash(password, 8);
  await users.updateOne(
    { _id: userId },
    { $set: { password: hash, password_reset_token: null } },
  );

  return user;
  }

  static async update(
    user: Payload,
  ): Promise<mongoDB.ModifyResult<mongoDB.Document>> {
    return await users.findOneAndUpdate({ _id: user._id }, user)
  }

  static async remove(
    user: mongoDB.Document,
  ) {
    return await users.findOneAndDelete({ _id: user._id })
  }
}
