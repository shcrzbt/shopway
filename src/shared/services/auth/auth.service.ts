import { IAuth } from "./auth.types"
import { axiosInstance } from "@/app/plugins"
import { IResponse } from "#shared/utils/types"

export const logInRequest = async (phoneOrName: string, password: string) => {
  const { data: response } = await axiosInstance.post<IAuth>("/dashboard/auth/sign-in", {
    phone_or_name: phoneOrName,
    password: password
  })

  return response
}
export const logOutRequest = async () => {
  const { data: response } = await axiosInstance.post("/dashboard/auth/sign-out")
  return response
}
