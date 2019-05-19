import React from 'react';

class Dashboard extends React.component{
	state ={
		addmoney: {},
			paybill: {},
			history: {},
			video: {},
			score: {}
	}

	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="dashboard" align="center">

			</div>
			);
	}
}


export default Dashboard;