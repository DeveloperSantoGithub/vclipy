function VideoDetails({ video }) {
	if (!video) {
		return <div>Loading...</div>;
	}

	return (
		<div className="w-10/12">
			<div className="flex flex-col justify-between gap-4">
				<h4>{video.snippet.title}</h4>
				<p>{video.snippet.description}</p>
			</div>
		</div>
	);
}

export default VideoDetails;
