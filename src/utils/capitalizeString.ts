export const capitalizeString = (stringToCapitalize: string) => {
  let res = ""
  if (stringToCapitalize.length > 0)
    res += stringToCapitalize.charAt(0).toUpperCase()
  if (stringToCapitalize.length > 1) res += stringToCapitalize.slice(1)
  return res
}
