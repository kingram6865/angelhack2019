import React, { Component } from 'react';
import HorizontalGauge from 'react-horizontal-gauge';

class CreditRatingBar extends Component {
	constructor(props){
		super(props);
	}


	render(){
		return(
			<div>
				<HorizontalGauge height={70} width={200} min={350} max={850} value={this.props.rating}/>
			</div>
		)
	}
}

export default CreditRatingBar;