import type { RouteRecordRaw } from "vue-router"
import { LayoutNameEnum } from "#shared/utils/enums"
import { ColorRouteNamesEnum } from "#app/plugins/router/routes/enums"

export const colorRoutes: RouteRecordRaw[] = [
  {
    path: "/color/create",
    name: ColorRouteNamesEnum.create,
    meta: {
      layout: LayoutNameEnum.main
    },
    component: () => import("@/views/pages/color/create")
  },
  {
    path: "/colors",
    name: ColorRouteNamesEnum.list,
    meta: {
      layout: LayoutNameEnum.main,
      pageTitle: "color.list.title"
    },
    component: () => import("@/views/pages/color/list")
  }
]
