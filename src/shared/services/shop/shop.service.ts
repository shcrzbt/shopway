import { IShop } from "./shop.types"
import { axiosInstance } from "@/app/plugins"
import { IListResponse } from "#shared/utils/types"

export const fetchShopList = async () => {
  const { data: response } = await axiosInstance.get<IListResponse<IShop[]>>("/dashboard/shops")

  return response
}
