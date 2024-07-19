export interface IListResponse<T> extends IResponseLinks, IResponseMeta {
  data: T
  message?: string
  errors?: any
}

interface IResponseLinks {
  first: string
  last: string
  previous: string | null
  next: string
}

interface IResponseMeta {
  path: string
  current_page: number
  last_page: number
  from: number
  to: number
  per_page: number
  total: number
  links: IResponseMetaLink[]
}

interface IResponseMetaLink {
  url: string | null
  label: string
  active: boolean
}
