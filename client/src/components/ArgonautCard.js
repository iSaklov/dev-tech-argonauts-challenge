import React from 'react'

export const ArgonautCard = ({ argonaut }) => {
	return (
		<>
			<h1>Argonaut {argonaut.name}</h1>
			<p>Embarqué {new Date(argonaut.date).toLocaleDateString()} par {argonaut.owner}</p>
		</>
	)
}