import React from 'react'
import classes from './Modal.module.css'

export default class Modal extends React.Component {
	state = {
		isOpen: false
	}

	render() {
		return (
			<React.Fragment>
				<button
					onClick={() => this.setState({ isOpen: true })}
					className="btn-floating btn-large waves-effect waves-light"
				>
					<i className="material-icons">adb</i>
				</button>
				{this.state.isOpen && (
					<div className={classes.modal} onClick={() => this.setState({ isOpen: false })}>
						<div className={classes.modal_body} onClick={(e) => e.stopPropagation()}>
							<button
								onClick={() => this.setState({ isOpen: false })}
								className="waves-effect waves-light btn-small right"
							>
								<i className="material-icons">close</i> 
							</button>
							<p>Bonjour, je m'appelle <strong>{this.props.name}</strong> !</p>
							{/* <p>I am awesome</p> */}
							<img src={this.props.img} alt={`La belle gueule de ${this.props.name}`}/>
						</div>
					</div>
				)}
			</React.Fragment>
		)
	}
}