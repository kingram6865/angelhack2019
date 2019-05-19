import React from 'react';
import Home from './components/Home';
import './App.css';


class App extends React.Component {
	// TODO:
	// Need to add Dashboard component
	// to hold page views as children
	// and enable menu selection to update
	// views on Dashboard
	render(){
	  return (
	    <Home />
	  );
	}
}

export default App;
