import { axiosInstance } from "@/app/plugins"
import { IResponse } from "@/shared/utils/types"
import { ICategory, ICategoryByParam, ICategoryResponse } from "./contract-create.type"

export const fetchCategoryById = async (categoryId?: number): Promise<IResponse<ICategoryResponse[]>> => {
  const { data: response } = await axiosInstance.get<IResponse<ICategory[]>>("/v1/categories/list", {
    params: {
      parent_id: categoryId
    }
  })

  return {
    ...response,
    data: response.data.map(
      (category: ICategory): ICategoryResponse => ({
        ...category,
        key: category.id,
        label: category.title,
        depth: 1,
        isLeaf: false
      })
    )
  }
}

export const fetchCategoryByParam = async (params: { query: number }) => {
  const { data: response } = await axiosInstance.get<IResponse<ICategoryByParam>>("/v1/categories/search", {
    params
  })
  return response
}

export const fetchProductUnits = async () => {
  const { data: response } = await axiosInstance.get("/v1/units/list")

  return response
}
