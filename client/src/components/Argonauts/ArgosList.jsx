import React, { useState } from 'react'
import MySelect from '../UI/MySelect'
import ArgoItem from './ArgoItem'

const ArgosList = ({ argonauts }) => {
	// const [selectedSort, setSelectedSort] = useState('')

	// const sortArgos = (sort) => {
	// 	setSelectedSort(sort)
	// 	setArgos([...argonauts].sort((a, b) => a[sort].localeCompare(b[sort])))
	// }

	if (!argonauts.length) {
		return (
				<p className="center">La liste de membres de l'équipage est vide</p>
		)
	}

	return (
		<>
			<h4>Membres de l'équipage</h4>
			{/* <div style={{margin: '5rem'}}>
				<MySelect
					value={selectedSort}
					onChange={sort => setSelectedSort(sort)}
					defaultValue={'Сортировка'}
					options={[
						{value: "name", name: "по имени"},
						{value: "date", name: "по дате"},
					]}
				/>
			</div> */}
			<table>
				<thead>
				<tr>
					<th>#</th>
					<th>Nom d'argonaut</th>
					<th>Date d'embarquation</th>
					<th>Voir sa belle gueule</th>
				</tr>
				</thead>
				<tbody>
					{ argonauts.map((argonaut, index) =>
						<ArgoItem argonaut={argonaut} index={index + 1} key={argonaut._id} />
					)}
				</tbody>
			</table>
		</>
	)
}

export default ArgosList