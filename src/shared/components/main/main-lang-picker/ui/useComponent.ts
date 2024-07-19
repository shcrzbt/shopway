import { computed } from "vue"
import { useI18n } from "vue-i18n"
import { useLocalStorage } from "@vueuse/core"
import { RusFlagIcon, UzbFlagIcon } from "#icons/svg"
import { APP_DEFAULT_LOCALE, APP_LOCALE_STORAGE_KEY } from "#shared/utils/constants"

export const useComponent = () => {
  const storage = useLocalStorage(APP_LOCALE_STORAGE_KEY, APP_DEFAULT_LOCALE)
  const { t, availableLocales, locale: appLocale } = useI18n()

  const localeList = computed(() =>
    availableLocales.map(lang => ({
      label: t(`language.${lang.toLowerCase()}`),
      value: lang.toLowerCase(),
      icon: iconsMap[lang]
    }))
  )

  const onUpdateLocale = (locale: string) => {
    appLocale.value = locale
    storage.value = locale
  }

  const iconsMap: { [key: string]: () => JSX.Element } = {
    ru: RusFlagIcon,
    uz: UzbFlagIcon
  }

  return {
    iconsMap,
    appLocale,
    localeList,
    onUpdateLocale
  }
}
