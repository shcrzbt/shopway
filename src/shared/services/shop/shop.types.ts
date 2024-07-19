export interface IShop {
  id: number
  is_active: boolean
  parent_id: number | null
  name: string
  phone: string
  created_at: string
  updated_at: string
  logo: string | null
}
