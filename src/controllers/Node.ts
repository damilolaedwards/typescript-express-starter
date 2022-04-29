import { Request, Response } from "express";
import pinataSDK from "@pinata/sdk";
import crypto from "crypto";
import multer from "multer";
import { createAlchemyWeb3 } from "@alch/alchemy-web3";
import { controller, get, post, use } from "../decorators";

const ALCHEMY_API_URL = process.env.ALCHEMY_API_URL || "";
const web3 = createAlchemyWeb3(ALCHEMY_API_URL);
const abi = require("../../tipshot_abi.json");
const contractAddress = "0x390c9a7d14B1D7b45244131260584bEc1E405dFF";
const tipshotContract = new web3.eth.Contract(abi, contractAddress);

const gateway_url = process.env.GATEWAY_URL || "";
const api_key = process.env.PINATA_API_KEY || "";
const api_secret = process.env.PINATA_API_SECRET || "";
const pinata = pinataSDK(api_key, api_secret);

const key = process.env.ENC_KEY || "";
const vector = process.env.INIT_VEC || "";

const upload = multer({
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error("Please upload an image"));
    }

    cb(null, true);
  },
});

@controller("/api/v1")
export class Node {
  
  @post("/upload-tip")
  @use(upload.single("image"))
  upload(req: Request, res: Response) {
    if (!this.isJsonString(req.body.json_data)) {
      res.status(400).send({
        error: "Invalid json data",
      });
    }
    let json_data = req.body.json_data;
    if (req.file) {
      json_data = {
        ...req.body.json_data,
        image: {
          mimetype: req.file.mimetype,
          buffer: req.file.buffer,
        },
      };
    }
    const encrypted = this.encrypt(JSON.stringify(json_data));
    const payload = {
      content: encrypted,
    };
    pinata
      .pinJSONToIPFS(payload, {})
      .then((result) => {
        res.status(200).send({
          ipfsHash: result.IpfsHash,
          key: this.encrypt(req.body.json_data.key),
          start_time: req.body.json_data.start_time,
          end_time: req.body.json_data.end_time,
          odd: req.body.json_data.odd * 100,
        });
      })
      .catch((err) => {
        res.status(500).send({
          error: "Could not pin to IPFS",
        });
      });
  }


  @post("/purchase")
  encryptPurchaseKey(req: Request, res: Response) {
    if (req.body.key.length < 6) {
      res.status(400).send({
        error: "key length too short, min: 6 chars",
      });
    }
    res.status(200).send({
      id: req.body.id,
      key: this.encrypt(req.body.key),
    });
  }


  @post("/tip/view")
  async viewTip(req: Request, res: Response) {
    const tx = await tipshotContract.methods
      .Purchases(req.body.address, req.body.id)
      .call();
    if (tx.purchased && tx.key == this.encrypt(req.body.key)) {
      const tip = await tipshotContract.methods.Predictions(req.body.id).call();
      const content = await fetch(gateway_url + tip.ipfsHash);
      const decrypted = this.decrypt(await content.text());
      res.status(200).send({
        data: JSON.parse(decrypted),
      });
    } else {
      res.status(404).send({
        data: null,
      });
    }
  }

  isJsonString(str: string) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  encrypt(data: string) {
    let cipher = crypto.createCipheriv("aes256", key, vector);
    let encrypted = cipher.update(data, "utf8", "base64");
    encrypted += cipher.final("base64");
    return encrypted;
  }

  decrypt(data: string) {
    let decipher = crypto.createDecipheriv("aes-256-cbc", key, vector);
    let decrypted = decipher.update(data, "base64", "utf8");
    return decrypted + decipher.final("utf8");
  }
}
