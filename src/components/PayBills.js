import React from 'react';
import Graphic from './Graphic';

class PayBills extends React.Component{
	constructor(props){
		super(props);
		var caption = "Creditor Name";
		var source = "assets/placeholder.png";
	}

	render(){
		return (
			<div>
				<Graphic image={this.props.source} title={this.props.caption} />
			</div>
		)
	}
}

export default PayBills;