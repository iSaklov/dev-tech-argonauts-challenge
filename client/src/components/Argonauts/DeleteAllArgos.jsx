import React from 'react'
import { Modal, Button, Icon } from 'react-materialize'

const DeleteAllArgos = ({ onDeleteAll }) => {
	return (
		<Modal
			actions={[
				<div>
					<Button flat modal="close" node="button" waves="red" onClick={onDeleteAll.bind(null)}>Supprimer</Button>
					<Button flat modal="close" node="button" waves="green">Annuler</Button>
				</div>
			]}
			bottomSheet={false}
			fixedFooter={false}
			header="Suppression des données"
			id="Modal-10"
			open={false}
			options={{
				dismissible: true,
				endingTop: '10%',
				inDuration: 250,
				onCloseEnd: null,
				onCloseStart: null,
				onOpenEnd: null,
				onOpenStart: null,
				opacity: 0.5,
				outDuration: 250,
				preventScrolling: true,
				startingTop: '4%'
			}}
			// root={[object HTMLBodyElement]}
			// trigger={<Button node="button">MODAL</Button>}
			trigger={
			<Button
				className="red"
				floating
				icon={<Icon>delete_forever</Icon>}
				large
				node="button"
				waves="light"
			/>
			}
		>
			<div>
				<h5> <i className="material-icons">warning</i> Avertissement :</h5>
				<p>Si vous confirmez cette action, toutes les données seront supprimées. Cette action est irréversible.</p>
			</div>
		</Modal>
	)
}

export default DeleteAllArgos