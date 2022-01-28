import * as mongoDB from "mongodb"
import { User } from "../models/User"

export async function connectToDatabase() {
  if (!process.env.MONGODB_URL) {
    throw new Error("MONGODB_URL not set in config")
  }

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    process.env.MONGODB_URL,
  )

  await client.connect()

  const db: mongoDB.Db = client.db(process.env.DB_NAME)

  //Models Database Connections
  User.injectDB(db)

  console.log(`Successfully connected to database: ${db.databaseName}`)
}
