import React from 'react';

class Graphic extends React.Component {
	render() {
		return (
			<img src={this.props.source} alt={this.props.title} height="100" width="100" />
		);
	}

}

export default Graphic;