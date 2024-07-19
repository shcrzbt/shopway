import { ISize } from "./size.types"
import { axiosInstance } from "@/app/plugins"
import { IListResponse } from "#shared/utils/types"

export const fetchSizeList = async () => {
  const { data: response } = await axiosInstance.get<IListResponse<ISize[]>>("/dashboard/sizes")

  return response
}
