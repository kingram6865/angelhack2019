import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';

class CreditScore extends React.Component {
	constructor(props){
		super(props);
	}


	render(){
		return(
			<div className="creditscore">
				<ReactSpeedometer minValue={350} maxValue={850} />
				<span>Your credit score is improving!</span>
			</div>
		)
	}
}

export default CreditScore;