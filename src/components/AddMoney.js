import React from 'react';

class AddMoney extends React.Component {
	render(){
		return(
			<div className="addmoney">
				<form id="increaseFunds">
					<label for="amount">Amount</label>
					<input id="amount" type="number" size="5" min="1" />
					<button>Add Money</button>
				</form>
			</div>
		)
	}
}

export default AddMoney;