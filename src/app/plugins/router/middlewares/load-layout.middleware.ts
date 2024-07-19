import { RouteLocationNormalized } from "vue-router"
import { LayoutNameEnum, LayoutNamesMapEnum } from "#shared/utils/enums"

export const loadLayoutMiddleware = async (to: RouteLocationNormalized) => {
  const layout = to.meta?.layout || LayoutNameEnum.empty
  const fileName = LayoutNamesMapEnum[layout]
  const component = await import(`../../../../views/layouts/${fileName}.vue`)

  to.meta.layoutComponent = await component.default
}
