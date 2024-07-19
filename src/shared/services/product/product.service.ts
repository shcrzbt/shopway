import { IProduct } from "./product.types"
import { axiosInstance } from "@/app/plugins"
import { IListResponse } from "#shared/utils/types"

export const fetchProductList = async () => {
  const { data: response } = await axiosInstance.get<IListResponse<IProduct[]>>("/dashboard/products")

  return response
}
