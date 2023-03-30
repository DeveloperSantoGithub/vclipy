import VideoItem from './VideoItem';

function VideoList({ videos, onVideoSelect }) {
	const renderedVideos = videos.map((video) => {
		return (
			<VideoItem onVideoSelect={onVideoSelect} key={video.id} video={video} />
		);
	});

	return (
		<div className="flex flex-col justify-center items-center ">
			{renderedVideos}
		</div>
	);
}

export default VideoList;
