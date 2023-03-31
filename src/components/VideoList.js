import VideoItem from './VideoItem';

function VideoList({ videos, onVideoSelect }) {
	const renderedVideos = videos.map((video) => {
		return (
			<VideoItem
				onVideoSelect={onVideoSelect}
				key={video.id.videoId}
				video={video}
			/>
		);
	});

	return <div className="video-list-container">{renderedVideos}</div>;
}

export default VideoList;
