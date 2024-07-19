export const onlyAllowNumber = (value: string) => !value || /^\d+$/.test(value)

export const clearPhoneSymbols = (value: string): string => {
  if (!value) {
    return ""
  }
  return value.replace(/[+, ,(),-]/g, "")
}
