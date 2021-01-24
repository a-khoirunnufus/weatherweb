import React from 'react';
import Brand from '../../components/atoms/Brand';
import SearchBox from '../../components/molecules/SearchBox';
import { connect } from 'react-redux';
import { getData } from '../../config/redux/actionCreators';

function Navbar({ search }) {
	const handleSearch = e => {
		e.key === 'Enter' &&	search(e.target.value);
	}

	return (
		<div className="navbar row space-between wrap">
			<Brand />
			<div className="col-12-sm d-flex">
				<SearchBox handleSearch={handleSearch} />
			</div>
		</div>
	);
}

const mapDispatchToProps = dispatch => ({
	search: loc => dispatch(getData(loc))
});

export default connect(null, mapDispatchToProps)(Navbar);