import axios from 'axios';

const youtubeApi = async (keyword) => {
	const response = await axios.get(
		'https://www.googleapis.com/youtube/v3/search',
		{
			params: {
				part: 'snippet',
				maxResults: 5,
				key: process.env.REACT_APP_YOUTUBE_API_KEY,
				q: keyword,
				type: 'video',
			},
		},
	);

	console.log(response);
	return response.data.items;
};

export default youtubeApi;
