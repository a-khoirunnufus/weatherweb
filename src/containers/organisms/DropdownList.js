import React, { Fragment } from 'react';
import Dropdown from '../../components/molecules/Dropdown';
import { connect } from 'react-redux';

function DropdownList({ forecast }) {
	const [first, second, third] = forecast;

	return (
		<Fragment>
			<Dropdown listItem={first} />
			<Dropdown listItem={second} />
			<Dropdown listItem={third} />
		</Fragment>
	)
}

const mapStateToProps = state => ({
	forecast: state.forecast
});

export default connect(mapStateToProps, null)(DropdownList);