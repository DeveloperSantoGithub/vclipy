import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { VscColorMode } from 'react-icons/vsc';

class SearchBar extends React.Component {
	state = { keyword: '', dark: false };

	handleChange = (event) => {
		this.setState({ keyword: event.target.value });
	};

	handleDarkMode = (event) => {
		this.setState({ dark: !this.state.dark });
		console.log(this.state.dark);

		if (this.state.dark) {
			document.body.style.backgroundColor = 'white';
		} else if (this.state.dark === false) {
			document.body.style.backgroundColor = '#230469d7';
		}
	};

	handleFormSubmit = (event) => {
		event.preventDefault();

		this.props.onSubmit(this.state.keyword);
		this.setState({ keyword: '' });
	};

	render() {
		return (
			<div className="navbar">
				<div className="logo">
					<h2>
						<span>V</span>clipy
					</h2>
				</div>

				<form onSubmit={this.handleFormSubmit} className="search-form">
					<div className="input-section">
						<input
							type="text"
							value={this.state.keyword}
							onChange={this.handleChange}
							placeholder="Search"
						/>

						<button>
							<BiSearch />
						</button>
					</div>
				</form>

				<div className="dark-mode" onClick={this.handleDarkMode}>
					<h2>
						<VscColorMode />
					</h2>
				</div>
			</div>
		);
	}
}

export default SearchBar;
