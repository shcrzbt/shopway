import type { RouteRecordRaw } from "vue-router"
import { LayoutNameEnum } from "#shared/utils/enums"
import { ShopRouteNamesEnum } from "#app/plugins/router/routes/enums"

export const shopRoutes: RouteRecordRaw[] = [
  {
    path: "/shop/create",
    name: ShopRouteNamesEnum.create,
    meta: {
      layout: LayoutNameEnum.main
    },
    component: () => import("@/views/pages/shop/create")
  },
  {
    path: "/shops",
    name: ShopRouteNamesEnum.list,
    meta: {
      layout: LayoutNameEnum.main,
      pageTitle: "shop.list.title",
    },
    component: () => import("@/views/pages/shop/list")
  }
]
