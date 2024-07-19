import { createI18n } from "vue-i18n"
import { ru, uz } from "./locales"
import { useLocalStorage } from "@vueuse/core"
import { APP_DEFAULT_LOCALE, APP_LOCALE_STORAGE_KEY } from "#shared/utils/constants"

export const i18n = createI18n({
  locale: useLocalStorage(APP_LOCALE_STORAGE_KEY, APP_DEFAULT_LOCALE).value,
  fallbackLocale: APP_DEFAULT_LOCALE,
  legacy: false,
  messages: {
    ru,
    uz
  },
  numberFormats: {
    ru: {
      decimal: {
        style: "decimal",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }
    },
    uz: {
      decimal: {
        style: "decimal",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }
    }
  },
  pluralRules: {
    /**
     * @param choice {number} a choice index given by the input to $tc: `$tc('path.to.rule', choiceIndex)`
     * @param choicesLength {number} an overall amount of available choices
     * @returns a final choice index to select plural word by
     */
    ru: function (choice: number, choicesLength: number) {
      // this === VueI18n instance, so the locale property also exists here

      if (choice === 0) {
        return 0
      }

      const teen = choice > 10 && choice < 20
      const endsWithOne = choice % 10 === 1

      if (choicesLength < 4) {
        return !teen && endsWithOne ? 1 : 2
      }

      if (!teen && endsWithOne) {
        return 1
      }

      if (!teen && choice % 10 >= 2 && choice % 10 <= 4) {
        return 2
      }

      return choicesLength < 4 ? 2 : 3
    }
  }
})
