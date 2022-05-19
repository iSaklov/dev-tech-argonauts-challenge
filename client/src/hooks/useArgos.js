import { useMemo } from "react";

export const useSortedArgos = (argos, sort) => {
	const sortedArgos = useMemo(() => {
		if(sort) {
			return [...argos].sort((a, b) => a[sort].localeCompare(b[sort]))
		}
		return argos
	}, [sort, argos])

	return sortedArgos
}

export const useArgos = (argos, sort, query) => {
	const sortedArgos = useSortedArgos(argos, sort)
	
	const sortedAndSearchedArgos = useMemo(() => {
		return sortedArgos.filter(argo => argo.name.toLowerCase().includes(query.toLowerCase()))
	}, [query, sortedArgos])

	return sortedAndSearchedArgos
}