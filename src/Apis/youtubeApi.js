import axios from 'axios';

const youtubeApi = async (keyword) => {
	const response = await axios.get(
		'https://www.googleapis.com/youtube/v3/search',
		{
			params: {
				part: 'snippet',
				maxResults: 10,
				key: process.env.REACT_APP_YOUTUBE_API_KEY,
				q: keyword,
			},
		},
	);

	console.log(response);
	return response.data.items;
};

export default youtubeApi;
