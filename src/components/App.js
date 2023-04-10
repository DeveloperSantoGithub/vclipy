import React, { useEffect, useState } from 'react';
import youtubeApi from '../Apis/youtubeApi';
import CopyRight from './CopyRight';
import SearchBar from './SearchBar';
import VideoDetails from './VideoDetails';
import VideoList from './VideoList';

const App = () => {
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);

	useEffect(() => {
		handleSearchSubmit('Figma');
	}, []);

	const handleSearchSubmit = async (keyword) => {
		const result = await youtubeApi(keyword);

		setVideos(result);
		setSelectedVideo(result[0]);
	};

	return (
		<>
			<div>
				<SearchBar onSubmit={handleSearchSubmit} />
			</div>

			<div className="main-display-comtainer">
				<div className="video-details">
					<VideoDetails video={selectedVideo} />
				</div>

				<div className="video-list">
					<VideoList onVideoSelect={setSelectedVideo} videos={videos} />
				</div>
			</div>
			<CopyRight />
		</>
	);
};

export default App;
