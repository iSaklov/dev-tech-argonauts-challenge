import React from "react"
import MyInput from "../UI/MyIput"
import MySelect from "../UI/MySelect"

const ArgoFilter = ({filter, setFilter, numPerPage, setNumPerPage}) => {
	return (
		<div className="row">
			<div className="input-field col s6 m4">
				<MyInput
					type="search" 
					value={filter.query}
					onChange={e => setFilter({...filter, query: e.target.value})}
					placeholder="Recherche ..."
				/>
			</div>
			<div className="col s6 m4">
				<MySelect
					value={filter.sort}
					onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
					defaultValue="Trier par"
					options={[
						{value: "nom", name: "by name"},
						{value: "date", name: "by date"},
					]}
				/>
			</div>
			<div className="col m4 hide-on-small-only">
				<MySelect
					value={numPerPage}
					onChange={value => setNumPerPage(parseInt(value))}
					defaultValue="Nombre par page"
					options={[
						{value: 10, name: "10"},
						{value: 25, name: "25"},
						{value: 50, name: "50"},
					]}
				/>
			</div>
		</div>
	)
}

export default ArgoFilter