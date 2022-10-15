import React from 'react'
import wNumb from 'wnumb'
import Nouislider from 'nouislider-react'
import 'nouislider/distribute/nouislider.css'

class MyRange extends React.Component {
	constructor(props) {
		super(props)
		this.onChange = this.onChange.bind(this)
	}

	onChange(value) {
		this.props.onChange(value)
	}

  render() {
    return (
			<Nouislider
				start={this.props.value}
				range={{
					min: this.props.min,
					max: this.props.max
				}}
				step={1}
				connect={'lower'}
				tooltips
				pips={{ mode: "count", values: 5 }}
				clickablePips
				orientation={'horizontal'} // 'horizontal' or 'vertical' || Set dimensions! Vertical sliders don't assume a default height, so a height needs to be set. Any unit can be used, including px, em or rem.
				format={wNumb({
					decimals: 0
				})}
				onChange={this.onChange}
			/>
    )
  }
}

export default MyRange