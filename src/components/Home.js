import React from 'react';
import Graphic from './Graphic';
import Profile from './Profile';
import AddMoney from './AddMoney';
import PayBills from './PayBills';
import PaymentHistory from './PaymentHistory';
import Videos from './Videos';
import CreditScore from './CreditScore';


class Home extends React.Component {

	constructor(props){
		super(props);
	}

/*	setView(selection) {
		const appviews = {
			addmoney: <AddMoney />,
			paybill: <PayBills />,
			history: <PaymentHistory />,
			video: <Videos />,
			score: <CreditScore />
		}

		return appviews[selection];
	}	*/

	render(){
		return (
			<div className="home" align="center">
				<h2>My Dashboard</h2>
				<Graphic source="assets/icon.png" />
				<Profile name="Joan White" cr="575"/>
				<div className="menu" align="center">
					<ul class="nodefault">
						<li><button eventKey={1} onclick={ () => this.setView('addmoney')}>Add Money</button></li>
						<li><button>Pay Bills</button></li>
						<li><button>Payment History</button></li>
						<li><button>Videos</button></li>
						<li><button>Credit Score</button></li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Home;