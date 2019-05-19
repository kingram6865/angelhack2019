import React from 'react';

class Menu extends React.component{
	constructor(props){
		super(props);
	}


	render(){
		return(
			<div className="menu" align="center">
					<ul class="nodefault">
						<li><button>Add Money</button></li>
						<li><button>Pay Bills</button></li>
						<li><button>Payment History</button></li>
						<li><button>Videos</button></li>
						<li><button>Credit Score</button></li>
					</ul>
			</div>

		);
	}
}