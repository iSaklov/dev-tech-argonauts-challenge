import React from "react"
import classes from './Modal.module.css'

export default class Modal extends React.Component {
	state = {
		isOpen: false
	}

	render() {
		return (
			<React.Fragment>
				<button onClick={() => this.setState({ isOpen: true })}>
					Open modal
				</button>
				{this.state.isOpen && (
					<div className={classes.modal} onClick={() => this.setState({ isOpen: false })}>
						<div className={classes.modal_body} onClick={(e) => e.stopPropagation()}>
							<button onClick={() => this.setState({ isOpen: false })}>
								Close
							</button>
							<h1>Modal Title</h1>
							<p>I am awesome</p>
						</div>
					</div>
				)}
			</React.Fragment>
		)
	}
}