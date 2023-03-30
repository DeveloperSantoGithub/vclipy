function VideoDetails({ video }) {
	if (!video) {
		return <div>Loading...</div>;
	}

	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

	return (
		<div className="video-display-container">
			<div className="video-iframe-container">
				<iframe
					src={videoSrc}
					title={video.snippet.title}
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope;"
					allowfullscreen
				/>
			</div>

			<div className="video-info-card">
				<h4>{video.snippet.title}</h4>
				<p>{video.snippet.description}</p>
			</div>
		</div>
	);
}

export default VideoDetails;
