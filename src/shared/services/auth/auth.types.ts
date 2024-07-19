export interface IRole {
  id: number
  name: string
  created_at: string
  updated_at: string
}

export interface IUser {
  id: number
  name: string
  surname: string | null
  patronymic: string | null
  status: number
  phone: string | null
  created_at: string
  updated_at: string
  role: IRole
}

export interface IAuth {
  bearer_token: string
  user: IUser
}
