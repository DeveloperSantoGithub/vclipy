import VideoItem from './VideoItem';

function VideoList({ videos }) {
	const renderedVideos = videos.map((video) => {
		return <VideoItem key={video.id} video={video} />;
	});

	return (
		<div className="flex flex-col justify-center items-center ">
			{renderedVideos}
		</div>
	);
}

export default VideoList;
