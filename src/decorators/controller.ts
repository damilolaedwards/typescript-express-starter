import "reflect-metadata"
import { Request, Response, RequestHandler, NextFunction } from "express"
import { AppRouter } from "./../services/router.services"
import { MetadataKeys } from "./MetadataKeys"
import { Methods } from "./Methods"

export function controller(routePrefix: string) {
  return function (target: Function) {
    const router = AppRouter.instance()

    for (let key in target.prototype) {
      const routeHandler = target.prototype[key]
      const path = Reflect.getMetadata(MetadataKeys.path, target.prototype, key)
      const method: Methods = Reflect.getMetadata(
        MetadataKeys.method,
        target.prototype,
        key,
      )

      const middlewares =
        Reflect.getMetadata(MetadataKeys.middleware, target.prototype, key) ||
        []

      if (path) {
        router[method](`${routePrefix}${path}`, ...middlewares, routeHandler)
      }
    }
  }
}