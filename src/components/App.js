import React, { Component } from 'react';
import youtubeApi from '../Apis/youtubeApi';
import SearchBar from './SearchBar';
import VideoList from './VideoList';

class App extends Component {
	state = { videos: [] };

	handleSearchSubmit = async (keyword) => {
		const result = await youtubeApi(keyword);

		this.setState({ videos: result });
	};

	render() {
		return (
			<>
				<div className="flex items-center justify-center">
					<SearchBar onSubmit={this.handleSearchSubmit} />
				</div>
				<div>
					<VideoList videos={this.state.videos} />
				</div>
			</>
		);
	}
}
export default App;
