import React from "react"
import MyInput from "../UI/MyIput"
import MySelect from "../UI/MySelect"

const ArgoFilter = ({filter, setFilter}) => {
	return (
		<div className="row">
			<div className="input-field col s6">
				<MyInput
					type="search" 
					value={filter.query}
					onChange={e => setFilter({...filter, query: e.target.value})}
					placeholder="Recherche ..."
				/>
			</div>
			<div className="col s6">
				<MySelect
					value={filter.sort}
					onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
					defaultValue="Choose your option"
					options={[
						{value: "name", name: "by name"},
						{value: "date", name: "by date"},
					]}
				/>
			</div>
		</div>
	)
}

export default ArgoFilter