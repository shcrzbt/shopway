import type { RouteRecordRaw } from "vue-router"
import { LayoutNameEnum } from "#shared/utils/enums"
import { CategoryRouteNamesEnum } from "#app/plugins/router/routes/enums"

export const categoryRoutes: RouteRecordRaw[] = [
  {
    path: "/category/create",
    name: CategoryRouteNamesEnum.create,
    meta: {
      layout: LayoutNameEnum.main
    },
    component: () => import("@/views/pages/category/create")
  },
  {
    path: "/categories",
    name: CategoryRouteNamesEnum.list,
    meta: {
      layout: LayoutNameEnum.main,
      pageTitle: "category.list.title"
    },
    component: () => import("@/views/pages/category/list")
  }
]
