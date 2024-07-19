import { MaskTokens, MaskType } from "maska"

export interface IMaskOptions {
  mask?: MaskType
  tokens?: MaskTokens
  tokensReplace?: boolean
  eager?: boolean
  reversed?: boolean
}

export interface ITab {
  value: string
  label: string
  disabled?: boolean
  show?: boolean
}
