import type { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios"
import { isAxiosError } from "axios"
import { useAuthStore } from "#app/stores"
import { i18n } from "#app/plugins"
import { messageError } from "#shared/utils/functions"
import { CustomHeadersEnum } from "./custom-headers.enum"

const handleRequest = async (
  request: InternalAxiosRequestConfig<AxiosRequestConfig>
): Promise<InternalAxiosRequestConfig<AxiosRequestConfig>> => {
  const authStore = useAuthStore()

  request.headers[CustomHeadersEnum.contentLanguage] = i18n.global.locale.value
  if (authStore.state.access_token) {
    request.headers.Authorization = `Bearer ${authStore.state.access_token}`
  }

  return request
}

const handleResponse = (response: AxiosResponse): AxiosResponse => response

const handleError = (error: unknown) => {
  console.error("%c INTERCEPTOR MESSAGE: \n", "color:red; font-size: 12px; font-weight: bold ", error)

  if (isAxiosError(error)) {
    if (error.response?.status == 401) {
      const authStore = useAuthStore()
      authStore.logout()
    }

    if (!error.config?.headers[CustomHeadersEnum.localErrorHandling]) {
      messageError(error.response?.data?.message)
    }

    return Promise.reject(error.response)
  }

  messageError(String(error))
  return Promise.reject(error)
}

export { handleError, handleRequest, handleResponse }
