import { checkPermission } from "#shared/utils/permissions"
import { NavigationGuardNext, RouteLocationNormalized, RouteLocationNormalizedLoaded } from "vue-router"

export const permissionMiddleware = (to: RouteLocationNormalized, from: RouteLocationNormalizedLoaded, next: NavigationGuardNext) => {
  if (to.meta.permissionKey) {
    const isAllowed = checkPermission(to.meta.permissionKey)
    if (!isAllowed) {
      return next({ name: "forbidden" })
    }
  }

  next()
}
