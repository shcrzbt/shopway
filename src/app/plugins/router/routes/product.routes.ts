import type { RouteRecordRaw } from "vue-router"
import { LayoutNameEnum } from "#shared/utils/enums"
import { ProductRouteNamesEnum } from "#app/plugins/router/routes/enums"

export const productRoutes: RouteRecordRaw[] = [
  {
    path: "/product/create",
    name: ProductRouteNamesEnum.create,
    meta: {
      layout: LayoutNameEnum.main
    },
    component: () => import("@/views/pages/product/create")
  },
  {
    path: "/products",
    name: ProductRouteNamesEnum.list,
    meta: {
      layout: LayoutNameEnum.main,
      pageTitle: "product.list.title",
      hideLayoutHeader: true
    },
    component: () => import("@/views/pages/product/list")
  }
]
