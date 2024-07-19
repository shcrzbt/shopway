export interface ICategoryTranslation {
  id: number
  category_id: number
  locale: string
  title: string
  created_at: string
  updated_at: string
}

export interface ICategory {
  id: number
  is_active: boolean
  parent_id: number | null
  slug: string
  image: string | null
  translation: ICategoryTranslation
  created_at: string
  updated_at: string
}
