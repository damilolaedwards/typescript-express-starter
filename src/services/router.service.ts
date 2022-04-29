import express from "express";

export class AppRouter {
  private static singleton: express.Router;

  static instance(): express.Router {
    if (!AppRouter.singleton) {
      AppRouter.singleton = express.Router();
    }
    return AppRouter.singleton;
  }
}
