function VideoItem({ video, onVideoSelect }) {
	return (
		<div onClick={() => onVideoSelect(video)} className="video-item-container">
			<div className="video-image">
				<img src={video.snippet.thumbnails.medium.url} alt="thumbnials" />
			</div>

			<div className="video-info">
				<h4 className="title">{video.snippet.title}</h4>

				<h5 className="channel-title">{video.snippet.channelTitle}</h5>

				<p className="description">{video.snippet.description}</p>
			</div>
		</div>
	);
}

export default VideoItem;
