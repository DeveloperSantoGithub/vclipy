import React, { Component } from 'react';
import youtubeApi from '../Apis/youtubeApi';
import SearchBar from './SearchBar';
import VideoDetails from './VideoDetails';
import VideoList from './VideoList';

class App extends Component {
	state = { videos: [], selectedVideo: null };

	handleSearchSubmit = async (keyword) => {
		const result = await youtubeApi(keyword);

		this.setState({ videos: result });
	};

	onVideoSelect = (video) => {
		this.setState({ selectedVideo: video });
	};

	render() {
		return (
			<>
				<div className="flex items-center justify-center">
					<SearchBar onSubmit={this.handleSearchSubmit} />
				</div>

				<VideoDetails />

				<div>
					<VideoList
						onVideoSelect={this.onVideoSelect}
						videos={this.state.videos}
					/>
				</div>
			</>
		);
	}
}
export default App;
