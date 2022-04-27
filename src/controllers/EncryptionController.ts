import { Request, Response } from "express"
import { controller, post} from "../decorators"


@controller("")
export class EncryptionController {
  @post("/encrypt")
  async register(req: Request, res: Response) {
  

    
  }
}
