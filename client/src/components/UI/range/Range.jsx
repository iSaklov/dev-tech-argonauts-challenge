import React, {useEffect} from 'react'
import Nouislider from 'nouislider-react'
import wNumb from 'wnumb'
import 'nouislider/distribute/nouislider.css'
import M from 'materialize-css'

// const Range = () => {

// 	return (
// 		<div>
// 			<Nouislider
// 				// start={[20, 80]}
// 				start={[0, 25]}
// 				connect
// 				step={1}
// 				orientation={'horizontal'}
// 				range={{
// 					min: 0,
// 					max: 100
// 				}}
// 				format={wNumb({
// 					decimals: 0
// 				})}
//         tooltips
// 			/>
// 		</div>
// 	)
// }

class Range extends React.Component {
  state = { value: 0 };

  handleClick = () => {
    this.setState(prevState => ({ value: prevState + 10 }));
  };

	componentDidMount(){
		M.AutoInit();
	}

  render() {
    return (
      // <div>
      //   <button onClick={this.handleClick}>Change state</button>
      //   <Nouislider
      //     start={this.state.value}
      //     range={{
      //       min: 0,
      //       max: 100
      //     }}
      //   />
			// 	<div>{this.value}</div>
      // </div>

			<form action="#">
				<p className="range-field">
					<input type="range" id="test5" min="0" max="100" />
				</p>
			</form>
    );
  }
}

export default Range;