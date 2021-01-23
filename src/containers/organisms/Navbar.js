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
		<GlassCard>
			<div className="navbar">
				<div className="container-lg row">
					<Brand />
					<SearchBox handleSearch={handleSearch} />
				</div>
			</div>
		</GlassCard>
	);
}

const mapDispatchToProps = dispatch => ({
	search: loc => dispatch(getData(loc))
});

export default connect(null, mapDispatchToProps)(Navbar);