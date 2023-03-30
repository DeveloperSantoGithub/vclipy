import React from 'react';
import { BiSearch } from 'react-icons/bi';

class SearchBar extends React.Component {
	state = { keyword: '' };

	handleChange = (event) => {
		this.setState({ keyword: event.target.value });
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
					<div className="flex items-center justify-center">
						<input
							type="text"
							value={this.state.keyword}
							onChange={this.handleChange}
							className="pl-4 text-xl  rounded-l-3xl outline-none py-1 w-11/12"
							placeholder="Search"
						/>

						<button className="text-2xl p-2">
							<BiSearch />
						</button>
					</div>
				</form>

				<div>
					<h4>User</h4>
				</div>
			</div>
		);
	}
}

export default SearchBar;
