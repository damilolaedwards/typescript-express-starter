import { Request, Response, NextFunction } from "express";
import { utils } from "./utils.services";

export function requiredProps(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  try {
    req.body.json_data = JSON.parse(req.body.json_data);
  } catch (error) {
    res.status(400);
    res.send({
      error: "Invalid json data",
    });
    return;
  }
  if (
    req.body.json_data.key &&
    req.body.json_data.start_time &&
    req.body.json_data.end_time &&
    req.body.json_data.odd &&
    req.body.json_data.tips &&
    req.body.address &&
    utils.isJsonString(JSON.stringify(req.body.json_data))
  ) {
    next();
    return;
  }

  res.status(400);
  res.send({
    error: "Invalid json data",
  });
}
