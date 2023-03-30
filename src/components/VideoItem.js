function VideoItem({ video, onVideoSelect }) {
	return (
		<div
			onClick={() => onVideoSelect(video)}
			className="flex w-10/12 items-center gap-5 my-2 border-b-2 pb-4 cursor-pointer"
		>
			<div>
				<img
					className="rounded-md max-w-full max-h-full object-cover"
					src={video.snippet.thumbnails.medium.url}
					alt="thumbnials"
				/>
			</div>

			<div className="flex flex-col justify-between h-36">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.channelTitle}</div>
				<div className="bg-gray-200 from-transparent p-2 rounded-md border-black ">
					{video.snippet.description}
				</div>
			</div>
		</div>
	);
}

export default VideoItem;
