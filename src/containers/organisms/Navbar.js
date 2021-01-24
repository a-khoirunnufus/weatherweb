import React from 'react';
import Brand from '../../components/atoms/Brand';
import GlassCard from '../../components/atoms/GlassCard';
import SearchBox from '../../components/molecules/SearchBox';
import { connect } from 'react-redux';
import { getData } from '../../config/redux/actionCreators';

function Navbar({ search }) {
	const handleSearch = e => {
		e.key === 'Enter' &&	search(e.target.value);
	}

	return (
		<div className="navbar row space-between">
			<Brand />
			<SearchBox handleSearch={handleSearch} />
		</div>
	);
}

const mapDispatchToProps = dispatch => ({
	search: loc => dispatch(getData(loc))
});

export default connect(null, mapDispatchToProps)(Navbar);