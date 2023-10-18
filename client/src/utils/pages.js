export default function calcTotalPages(total, perPage) {
  return Math.ceil(total / perPage)
}
