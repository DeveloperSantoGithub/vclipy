function VideoItem({ video }) {
	return (
		<div className="flex w-10/12 items-center gap-5 my-2 border-b-2">
			<div className="w-64 h-32 rounded-md  ">
				<img
					className=" object-cover w-80 h-32 "
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
