function VideoItem({ video }) {
	return (
		<div className="flex w-10/12 items-center gap-5 my-2 border-b-2 pb-4">
			<div className="">
				<img
					className="rounded-md max-w-full max-h-full object-cover"
					src={video.snippet.thumbnails.medium.url}
					alt="thumbnials"
				/>
			</div>

			<div>
				<div>{video.snippet.title}</div>
				<div>{video.snippet.channelTitle}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
}

export default VideoItem;
