import validationLocales from "./validation.locales"
import commonLocales from "./common.locales"
import productLocales from "#app/plugins/i18n/locales/ru/product.locales"
import shopLocales from "#app/plugins/i18n/locales/ru/shop.locales"

export default {
  common: commonLocales,
  product: productLocales,
  shop: shopLocales,
  validation: validationLocales,
  language: {
    ru: "Русский",
    uz: "Узбекский"
  },
  pagination: {
    next: "Следующая",
    prev: "Назад"
  }
}
