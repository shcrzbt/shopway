import { reactive, ref } from "vue"
import { IProduct } from "../types"

const usePage = () => {
  const products = reactive<IProduct[]>([])
  const product = reactive<IProduct>({
    id: 0,
    category: null,
    categories: [],
    selectedCategories: [],
    name: "",
    fullName: "",
    unit_id: "1",
    amount: 1,
    price: null,
    imei: null,
    original_name: null,
    original_imei: null,
    isMobileCategory: false
  })

  const onAddProduct = (): void => {
    products.push([...products])
  }

  const onRemoveProduct = (): void => {}

  const onCalculateByPeriod = (): void => {}

  const onCheckPromocode = (): void => {}

  return {
    product,
    products,
    onAddProduct,
    onRemoveProduct,
    onCalculateByPeriod,
    onCheckPromocode
  }
}

export default usePage
