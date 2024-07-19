import type { RouteRecordRaw } from "vue-router"
import { LayoutNameEnum } from "#shared/utils/enums"
import { SizeRouteNamesEnum } from "#app/plugins/router/routes/enums"

export const sizeRoutes: RouteRecordRaw[] = [
  {
    path: "/size/create",
    name: SizeRouteNamesEnum.create,
    meta: {
      layout: LayoutNameEnum.main
    },
    component: () => import("@/views/pages/size/create")
  },
  {
    path: "/sizes",
    name: SizeRouteNamesEnum.list,
    meta: {
      layout: LayoutNameEnum.main,
      pageTitle: "size.list.title"
    },
    component: () => import("@/views/pages/size/list")
  }
]
