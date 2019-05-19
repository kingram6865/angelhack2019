import React from 'react';
import CreditRatingBar from './CreditRatingBar';

class Profile extends React.Component {
	constructor(props){
		super(props);
		// Retrieve user data from datastore
		// and populate the object props
	}

	render() {
		return (
			<div className="user">
				<span>{this.props.name}</span>
				<CreditRatingBar rating={this.props.cr} />				
			</div>
			);
	}
}

export default Profile;