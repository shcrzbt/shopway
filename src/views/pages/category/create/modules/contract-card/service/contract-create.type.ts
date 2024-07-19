export interface ICategory {
  id: number
  sort: number
  parent_id: number
  psic_code: string
  status: 1 | 0
  is_definite: 1 | 0
  is_phone: 0 | 1
  title: string
  slug: string
}

export interface ICategoryResponse extends ICategory {
  key: number
  label: string
  depth: 1
  isLeaf: false
}

export interface ICategoryByParam {
  id: number
  parent_id: number
  status: 0 | 1
  psic_code: string
  psic_text: null | string
  is_phone: 0 | 1
  title: string
  hierarchy_title: string
}
