import { useAuthStore } from "@/app/stores"
import { NavigationGuardNext, RouteLocationNormalized, RouteLocationNormalizedLoaded } from "vue-router"
import { RouteNameEnum } from "#shared/utils/enums"

export const authMiddleware = (to: RouteLocationNormalized, from: RouteLocationNormalizedLoaded, next: NavigationGuardNext) => {
  const authStore = useAuthStore()

  if (authStore.isAuthorized && to.name == RouteNameEnum.authLogin) {
    return next({ name: RouteNameEnum.main })
  }

  if (!authStore.isAuthorized && to.name !== RouteNameEnum.authLogin) {
    return next({ name: RouteNameEnum.authLogin })
  }

  next()
}
