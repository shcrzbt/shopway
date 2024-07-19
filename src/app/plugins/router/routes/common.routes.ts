import { RouteRecordRaw } from "vue-router"
import { LayoutNameEnum, RouteNameEnum } from "#shared/utils/enums"

export const commonRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: { name: "product.list" },
    name: RouteNameEnum.main
    // meta: {
    //   layout: LayoutNameEnum.main
    // },
    // component: () => import("@/views/pages/dashboard")
  },
  {
    path: "/:pathMatch(.*)*",
    name: RouteNameEnum.notFound,
    meta: {
      layout: LayoutNameEnum.main
    },
    component: () => import("@/views/pages/common/Error404Page.vue")
  },
  {
    path: "/forbidden",
    name: RouteNameEnum.forbidden,
    meta: {
      layout: LayoutNameEnum.main
    },
    component: () => import("@/views/pages/common/Error403Page.vue")
  }
]
