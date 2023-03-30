function VideoDetails({ video }) {
	if (!video) {
		return <div>Loading...</div>;
	}

	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

	return (
		<div className="video-display-container">
			<div className="video-iframe-container">
				<iframe
					className=" shadow-md w-full h-full lg:aspect-video md:aspect-video sm:aspect-auto rounded-md"
					src={videoSrc}
					title={video.snippet.title}
					allowfullscreen
				/>
			</div>

			<div className="video-info-card">
				<h4 className="font-bold text-md">{video.snippet.title}</h4>
				<p className="text-sm">{video.snippet.description}</p>
			</div>
		</div>
	);
}

export default VideoDetails;
