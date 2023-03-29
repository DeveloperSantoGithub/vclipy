import React, { Component } from 'react';
import SearchBar from './SearchBar';

export default class App extends Component {
	state = { videos: [] };

	onSubmit = (keyword) => {
		console.log(keyword);
	};

	render() {
		return (
			<div className="flex items-center justify-center">
				<SearchBar onSubmit={this.onSubmit} />
			</div>
		);
	}
}
