// If you give me a list of -> inputs
// I will give you a list of -> outputs

import { useEffect, useState } from 'react';

const useVideos = () => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		handleSearchSubmit('Figma');
	}, []);

	const handleSearchSubmit = async (keyword) => {
		const result = await youtubeApi(keyword);

		setVideos(result);
	};
	return;
};

export default useVideos;
