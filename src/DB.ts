import * as mongoDB from "mongodb"

export class DB {
  private static client: mongoDB.MongoClient

  static async conn(): Promise<mongoDB.MongoClient> {
    if (!DB.client) {
      const url = process.env.MONGODB_URL
      if (url) {
        const db = new mongoDB.MongoClient(url)
        await db.connect()
        DB.client = db
      } else {
        console.log(
          "Could not connect to database, No DB url provided in config file!",
        )
      }
    }
    return DB.client
  }
  static collection(name: string): mongoDB.Collection {
    if (!process.env.DB_NAME) {
      throw new Error("DB name not found in config file")
    }
    const db: mongoDB.Db = DB.client.db(process.env.DB_NAME)
    return db.collection(name)
  }
}
