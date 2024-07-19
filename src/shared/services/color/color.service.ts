import { IColor } from "./color.types"
import { axiosInstance } from "@/app/plugins"
import { IListResponse } from "#shared/utils/types"

export const fetchColorList = async () => {
  const { data: response } = await axiosInstance.get<IListResponse<IColor[]>>("/dashboard/colors")

  return response
}
