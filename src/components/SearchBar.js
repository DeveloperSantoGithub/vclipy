import React from 'react';
import { BiSearch } from 'react-icons/bi';

class SearchBar extends React.Component {
	state = { keyword: '' };

	handleChange = (event) => {
		this.setState({ keyword: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();

		this.props.onSubmit(this.state.keyword);
	};

	render() {
		return (
			<div className="bg-gray-300 flex flex-row items-center justify-between w-full h-14 px-3">
				<div>
					<h2 className="font-semibold">Vclipy</h2>
				</div>

				<from
					onSubmit={this.handleSubmit}
					className="bg-white rounded-3xl w-5/12 shadow-sm hover:shadow-md"
				>
					<div className="flex items-center justify-center">
						<input
							type="text"
							value={this.state.keyword}
							onChange={this.handleChange}
							className="pl-4 text-xl  rounded-l-3xl outline-none py-2 w-11/12"
							placeholder="Search"
						/>

						<button className="text-2xl p-2">
							<BiSearch />
						</button>
					</div>
				</from>

				<div>
					<h4>User</h4>
				</div>
			</div>
		);
	}
}

export default SearchBar;
