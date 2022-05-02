import { Request, Response } from "express";
import pinataSDK from "@pinata/sdk";
import multer from "multer";
import Big from 'big.js';
import { createAlchemyWeb3 } from "@alch/alchemy-web3";
import { controller, get, post, use } from "../decorators";
import {utils} from "../services/utils.services"
import {requiredProps} from "../services/middleware.service"

const ALCHEMY_API_URL = process.env.ALCHEMY_API_URL || "";
const web3 = createAlchemyWeb3(ALCHEMY_API_URL);
const abi = require("../../tipshot_abi.json");
const contractAddress = "0x390c9a7d14B1D7b45244131260584bEc1E405dFF";
const tipshotContract = new web3.eth.Contract(abi, contractAddress);

const gateway_url = process.env.GATEWAY_URL || "";
const api_key = process.env.PINATA_API_KEY || "";
const api_secret = process.env.PINATA_API_SECRET || "";
const pinata = pinataSDK(api_key, api_secret);

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
  @use(requiredProps)
  @use(upload.single('image'))
  upload(req: Request, res: Response) {
    const key = req.body.json_data.key
    const odd = req.body.json_data.odd
    const start_time = req.body.json_data.start_time
    const end_time = req.body.json_data.end_time
    
    if (req.file) {
      req.body.json_data = {
        ...req.body,
        image: {
          mimetype: req.file.mimetype,
          buffer: req.file.buffer,
        },
      };
    }

    const encrypted = utils.encrypt(JSON.stringify(req.body.json_data));
    const payload = {
      content: encrypted,
    };
    pinata
      .pinJSONToIPFS(payload, {pinataMetadata: {
        name: req.body.address
    }})
      .then((result) => {
        return res.status(200).send({
          ipfsHash: result.IpfsHash,
          key: utils.encrypt(key),
          start_time: start_time,
          end_time: end_time,
          odd: new Big(odd).mul(100),
        });
      })
      .catch((err) => {
        return res.status(500).send({
          error: "Could not pin to IPFS",
          message : err.message
        });
      });
  }


  @post("/purchase")
  encryptPurchaseKey(req: Request, res: Response) {
    if (req.body.key.length < 6) {
      return res.status(400).send({
        error: "key length too short, min: 6 chars",
      });
    }
    if (!parseInt(req.body.id)) {
      return res.status(400).send({
        error: "invalid id",
      });
    }
    return res.status(200).send({
      id: req.body.id,
      key: utils.encrypt(req.body.key),
    });
  }


  @post("/tip/view")
  async viewTip(req: Request, res: Response) {
    if(!req.body.address || !req.body.id){
      return res.status(400).send({
        error: "Invalid input parameters",
      });
    }
    const tx = await tipshotContract.methods
      .Purchases(req.body.address, req.body.id)
      .call();
    if (tx.purchased && utils.decrypt(tx.key) == req.body.key) {
      const tip = await tipshotContract.methods.Predictions(req.body.id).call();
      const content = await fetch(gateway_url + tip.ipfsHash);
      const decrypted = utils.decrypt(await content.text());
      res.status(200).send({
        data: JSON.parse(decrypted),
      });
    } else {
      return res.status(404).send({
        data: null,
      });
    }
  }

  @post("/profile/create")
  async createProfile(req: Request, res:Response) {
    if(!utils.isJsonString(JSON.stringify(req.body.data))){
      return res.status(400).send({
        error : "Invalid json data"
      })
    }
    const encrypted = utils.encrypt(JSON.stringify(req.body.data));
    const payload = {
      content: encrypted,
    };
    pinata
      .pinJSONToIPFS(payload, {pinataMetadata: {
        name: "profile_" + req.body.address 
    }})
    .then((result) => {
      return res.status(200).send({
        _profileData: result.IpfsHash,
      });
    })
    .catch((err) => {
      return res.status(500).send({
        error: "Could not pin to IPFS",
        message : err.message
      });
    });


  }

  @get('/profile/:address')
  async profile(req: Request, res:Response){
    const user = await tipshotContract.methods.User(req.params.address).call();
    if(user.profile){
      const content = await fetch(gateway_url + user.profile);
      const decrypted = utils.decrypt(await content.text());
      return res.status(200).send({
        data: JSON.parse(decrypted),
      });
    }
    return res.status(404).send({
      message : "No profile data found"
    })
  } 



  
}
