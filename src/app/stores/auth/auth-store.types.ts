export interface IAuthStoreState {
  access_token: string
  expires_in: number
}

export interface ILoginPayload extends IAuthStoreState {
  user: any
  scopes: string[]
}
