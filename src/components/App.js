import React, { Component } from 'react';
import youtubeApi from '../Apis/youtubeApi';
import SearchBar from './SearchBar';

class App extends Component {
	state = { videos: [] };

	handleSearchSubmit = (keyword) => {
		youtubeApi(keyword);
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
