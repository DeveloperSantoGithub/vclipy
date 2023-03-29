import React, { Component } from 'react';
import youtubeApi from '../Apis/youtubeApi';
import SearchBar from './SearchBar';

class App extends Component {
	state = { videos: [] };

	handleSearchSubmit = async (keyword) => {
		const result = await youtubeApi(keyword);

		this.setState({ videos: result });
	};

	render() {
		console.log(this.state.videos);
		return (
			<div className="flex items-center justify-center">
				<SearchBar onSubmit={this.handleSearchSubmit} />
			</div>
		);
	}
}
export default App;
