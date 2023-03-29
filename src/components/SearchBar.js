import React from 'react';
import { BiSearch } from 'react-icons/bi';

class SearchBar extends React.Component {
	render() {
		return (
			<div>
				<from>
					<div>
						<input />
						<button>
							<BiSearch />
						</button>
					</div>
				</from>
			</div>
		);
	}
}

export default SearchBar;
