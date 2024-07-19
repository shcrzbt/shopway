import { RouteLocationNormalized } from "vue-router"
import { i18n } from "#app/plugins"

export const pageTitleMiddleware = async (to: RouteLocationNormalized) => {
  const { t } = i18n.global

  document.title = `${t(to.meta?.documentTitle || to.meta?.pageTitle || "common.defaultPageTitle")}`
}
