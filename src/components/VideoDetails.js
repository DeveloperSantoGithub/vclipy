function VideoDetails({ video }) {
	if (!video) {
		return <div>Loading...</div>;
	}

	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

	return (
		<div className=" flex flex-col items-center justify-center">
			<div className="w-9/12 h-11/12 mt-4">
				<iframe
					className=" shadow-md w-full h-full lg:aspect-video md:aspect-video sm:aspect-auto rounded-md"
					src={videoSrc}
					title={video.snippet.title}
				/>
			</div>

			<div className="flex flex-col justify-between gap-3 w-9/12 p-3 my-2 border shadow-md rounded-md">
				<h4 className="font-bold text-md">{video.snippet.title}</h4>
				<p className="text-sm">{video.snippet.description}</p>
			</div>
		</div>
	);
}

export default VideoDetails;
