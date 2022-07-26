export const getTotalPages = (totalCount, limit) => {
	// console.log(`result : ${Math.ceil(totalCount / limit)}`)
	return Math.ceil(totalCount / limit)
}