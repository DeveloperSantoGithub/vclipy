import React, { Component } from 'react';
import youtubeApi from '../Apis/youtubeApi';
import SearchBar from './SearchBar';
import VideoDetails from './VideoDetails';
import VideoList from './VideoList';

class App extends Component {
	state = { videos: [], selectedVideo: null };

	componentDidMount() {
		this.handleSearchSubmit('Ollyo');
	}

	handleSearchSubmit = async (keyword) => {
		const result = await youtubeApi(keyword);

		this.setState({ videos: result, selectedVideo: result[0] });
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

				<div>
					<div>
						<VideoDetails video={this.state.selectedVideo} />
					</div>
					<div>
						<VideoList
							onVideoSelect={this.onVideoSelect}
							videos={this.state.videos}
						/>
					</div>
				</div>
			</>
		);
	}
}
export default App;
