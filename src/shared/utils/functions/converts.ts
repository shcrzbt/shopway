export const convertNumberToSymbol = (str: string, matches: number[]) => {
  let count = 0
  return str.replace(/\d/g, (d: any) => (matches.includes(++count) ? "*" : d))
}
