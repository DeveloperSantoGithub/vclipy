import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { VscColorMode } from 'react-icons/vsc';

const SearchBar = ({ onSubmit }) => {
	const [keyword, setKeyword] = useState('');
	const [dark, setDark] = useState(false);

	const handleChange = (event) => {
		setKeyword(event.target.value);
	};

	const handleDarkMode = (event) => {
		setDark(!dark);

		if (dark) {
			document.body.style.backgroundColor = 'white';
		} else if (dark === false) {
			document.body.style.backgroundColor = '#230469d7';
		}
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();

		onSubmit(keyword);
		setKeyword('');
	};

	return (
		<div className="navbar">
			<div className="logo">
				<h2>
					<span>V</span>clipy
				</h2>
			</div>

			<form onSubmit={handleFormSubmit} className="search-form">
				<div className="input-section">
					<input
						type="text"
						value={keyword}
						onChange={handleChange}
						placeholder="Search"
					/>

					<button>
						<BiSearch />
					</button>
				</div>
			</form>

			<div className="dark-mode" onClick={handleDarkMode}>
				<h2>
					<VscColorMode />
				</h2>
			</div>
		</div>
	);
};

export default SearchBar;
