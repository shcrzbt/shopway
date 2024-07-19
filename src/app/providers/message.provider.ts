import type { MessageProviderProps } from "naive-ui"
import { createDiscreteApi } from "naive-ui"
import { themeOverrides } from "#shared/utils/overrides"

const config: MessageProviderProps = {
  placement: "top-right",
  duration: 6000
}

export const { message } = createDiscreteApi(["message"], {
  messageProviderProps: config,
  configProviderProps: { themeOverrides: themeOverrides }
})
