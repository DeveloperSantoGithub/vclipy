import React from 'react';
import { BiSearch } from 'react-icons/bi';

class SearchBar extends React.Component {
	render() {
		return (
			<div className="bg-blue-200 flex flex-row items-center justify-center w-11/12  ">
				<from className="bg-white rounded-lg m-2 ">
					<div>
						<input className=" outline-none rounded-l-lg" />
						<button className=" p-0">
							<BiSearch className="mx-2 m-o p-0" />
						</button>
					</div>
				</from>
			</div>
		);
	}
}

export default SearchBar;
