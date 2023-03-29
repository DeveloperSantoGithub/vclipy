import React, { Component } from 'react';
import SearchBar from './SearchBar';

class App extends Component {
	state = { videos: [] };

	handleSearchSubmit = (keyword) => {
		console.log(keyword);
	};

	render() {
		return (
			<div className="flex items-center justify-center">
				<SearchBar onSubmit={this.handleSearchSubmit} />
			</div>
		);
	}
}
export default App;
