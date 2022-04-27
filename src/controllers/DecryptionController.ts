import { Request, Response } from "express"
import { controller, post} from "../decorators"


@controller("")
export class DecryptionController {
  @post("/decrypt")
  async register(req: Request, res: Response) {
  

    
  }
}