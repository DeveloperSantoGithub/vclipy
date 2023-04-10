// If you give me a list of -> inputs
// I will give you a list of -> outputs

import { useEffect, useState } from 'react';
import youtubeApi from '../Apis/youtubeApi';

const useVideos = (defaultKeyword) => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		search(defaultKeyword);
	}, []);

	const search = async (keyword) => {
		const result = await youtubeApi(keyword);

		setVideos(result);
	};

	return [videos, search];
};

export default useVideos;
