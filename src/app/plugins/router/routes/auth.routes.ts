import type { RouteRecordRaw } from "vue-router"
import { LayoutNameEnum, RouteNameEnum } from "#shared/utils/enums"

export const authRoutes: RouteRecordRaw[] = [
  {
    path: "/auth/login",
    name: RouteNameEnum.authLogin,
    meta: {
      layout: LayoutNameEnum.auth,
      documentTitle: "common.save"
    },
    component: () => import("@/views/pages/auth/login/ui/AuthPage.vue")
  }
]
