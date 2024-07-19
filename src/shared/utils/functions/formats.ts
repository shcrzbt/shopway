export const currencyFormat = (number: number | string, fraction: number = 2) => {
  if (!number) {
    return "0.00"
  }
  if (typeof number === "string") {
    number = Number(number)
  }

  return Intl.NumberFormat("en-EN", {
    minimumFractionDigits: fraction,
    maximumFractionDigits: fraction
  })
    .format(number)
    .replaceAll(",", " ")
}

export const phoneFormat = (phoneNumber: string): string => {
  if (!phoneNumber) {
    return ""
  }

  if (phoneNumber.toString().length != 12) {
    return phoneNumber
  }

  const x = phoneNumber
    .toString()
    .replace(/\D/g, "")
    .match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/)

  if (!x) {
    return phoneNumber
  }

  return `+${x[1]} (${x[2]}) ${x[3]}-${x[4]}-${x[5]}`
}
