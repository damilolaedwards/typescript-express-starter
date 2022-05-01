import crypto from "crypto";

const key = process.env.ENC_KEY || "";
const vector = process.env.INIT_VEC || "";

export class utils {
  static isJsonString(data: string) {
    try {
      JSON.parse(data);
    } catch (e) {
      return false;
    }
    return true;
  }

  static encrypt(data: string) {
    let cipher = crypto.createCipheriv("aes256", key, vector);
    let encrypted = cipher.update(data, "utf8", "base64");
    encrypted += cipher.final("base64");
    return encrypted;
  }

  static decrypt(data: string) {
    let decipher = crypto.createDecipheriv("aes-256-cbc", key, vector);
    let decrypted = decipher.update(data, "base64", "utf8");
    return decrypted + decipher.final("utf8");
  }
}
