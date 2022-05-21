import React from "react"
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
					className="waves-effect waves-light btn"
				>
					<i className="small material-icons">adb</i> 
				</button>
				{this.state.isOpen && (
					<div className={classes.modal} onClick={() => this.setState({ isOpen: false })}>
						<div className={classes.modal_body} onClick={(e) => e.stopPropagation()}>
							<button
								onClick={() => this.setState({ isOpen: false })}
								className="waves-effect waves-light btn"
							>
								<i className="tiny material-icons">close</i> 
							</button>
							<p>Bonjour, je m'appelle <strong>{this.props.name}</strong> !</p>
							{/* <p>I am awesome</p> */}
							<img src={this.props.img} />
						</div>
					</div>
				)}
			</React.Fragment>
		)
	}
}