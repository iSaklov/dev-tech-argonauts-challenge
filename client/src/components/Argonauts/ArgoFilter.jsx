import React from "react"
import MyInput from "../UI/MyIput"
import MySelect from "../UI/MySelect"

const ArgoFilter = ({filter, setFilter}) => {
	return (
		<>
			<MyInput
				value={filter.query}
				onChange={e => setFilter({...filter, query: e.target.value})}
				placeholder="Recherche ..."
			/>
			<MySelect
				value={filter.sort}
				onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
				defaultValue="Choose your option"
				options={[
					{value: "name", name: "by name"},
					{value: "date", name: "by date"},
				]}
			/>
		</>
	)
}

export default ArgoFilter