import axios from "axios"
import type { AxiosInstance } from "axios"

import { handleError, handleRequest, handleResponse } from "./config/interceptors"

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
})

axiosInstance.interceptors.request.use(handleRequest, handleError)

axiosInstance.interceptors.response.use(handleResponse, handleError)
