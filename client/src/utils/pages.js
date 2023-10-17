export const calcTotalPages = (total, perPage) => {
  return Math.ceil(total / perPage)
}
