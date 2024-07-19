import { ICategory } from "./category.types"
import { axiosInstance } from "@/app/plugins"
import { IListResponse } from "#shared/utils/types"

export const fetchCategoryList = async () => {
  const { data: response } = await axiosInstance.get<IListResponse<ICategory[]>>("/dashboard/categories")

  return response
}
