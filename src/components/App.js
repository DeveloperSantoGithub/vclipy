import React, { Component } from 'react';
import SearchBar from './SearchBar';

export default class App extends Component {
	render() {
		return (
			<div className="flex items-center justify-center">
				<SearchBar />
			</div>
		);
	}
}
