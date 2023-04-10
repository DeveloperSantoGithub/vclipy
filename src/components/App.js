import React, { useState } from 'react';
import useVideos from '../Hooks/useVideos';
import CopyRight from './CopyRight';
import SearchBar from './SearchBar';
import VideoDetails from './VideoDetails';
import VideoList from './VideoList';

const App = () => {
	const [selectedVideo, setSelectedVideo] = useState(null);

	const [videos, search] = useVideos('Figma');

	// setSelectedVideo(result[0]);

	return (
		<>
			<div>
				<SearchBar onSubmit={search} />
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
