import { createDiscreteApi } from "naive-ui"
import { themeOverrides } from "#shared/utils/overrides"

export const { loadingBar } = createDiscreteApi(["loadingBar"], {
  configProviderProps: { themeOverrides: themeOverrides }
})
