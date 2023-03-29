function VideoList({ videos }) {
	const renderedVideos = videos.map((video) => {
		return <div>{video.snippet.title}</div>;
	});

	return <div>{renderedVideos}</div>;
}

export default VideoList;
