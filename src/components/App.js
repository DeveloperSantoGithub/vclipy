import React, { Component } from 'react';
import youtubeApi from '../Apis/youtubeApi';
import CopyRight from './CopyRight';
import SearchBar from './SearchBar';
import VideoDetails from './VideoDetails';
import VideoList from './VideoList';

class App extends Component {
	state = { videos: [], selectedVideo: null };

	componentDidMount() {
		this.handleSearchSubmit('Figma');
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
				<div>
					<SearchBar onSubmit={this.handleSearchSubmit} />
				</div>

				<div className="main-display-comtainer">
					<div className="video-details">
						<VideoDetails video={this.state.selectedVideo} />
					</div>

					<div className="video-list">
						<VideoList
							onVideoSelect={this.onVideoSelect}
							videos={this.state.videos}
						/>
					</div>
				</div>
				<CopyRight />
			</>
		);
	}
}
export default App;
