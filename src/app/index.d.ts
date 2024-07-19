import "vue"
import "vue-router"
import { LayoutNameEnum } from "#shared/utils/enums"
// import { RouteRecordName } from "vue-router"
import { VueElement } from "vue"

declare module "vue" {
  interface InputHTMLAttributes {
    ["data-maska"]?: string
  }
}

declare module "vue-router" {
  interface RouteMeta {
    layout?: LayoutNameEnum
    layoutComponent?: VueElement | any
    permissionKey?: string | string[]
    pageTitle?: string
    documentTitle?: string
    hideLayoutHeader?: boolean
  }

  interface LocationQuery {
    page?: number
    type?: string | number
    // redirectTo?: RouteRecordName | string
  }

  interface LocationQueryRaw extends LocationQuery {}

  interface LocationQueryValueRaw extends LocationQuery {}
}
