export interface IProductTranslation {
  id: number
  product_id: number
  locale: string
  title: string
  created_at: string
  updated_at: string
}
export interface IProduct {
  id: number
  category_id: number
  shop_id: number
  color_id: number
  status: number
  price: number
  parent_id: number | null
  external_id: number | null
  barcode: string
  created_at: string
  updated_at: string
  logo: string | null
  translation: IProductTranslation
}
