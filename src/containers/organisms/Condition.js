import React, { Fragment } from 'react';
import StatusIcon from '../../components/atoms/StatusIcon';
import SolidCard from '../../components/atoms/SolidCard';
import { connect } from 'react-redux';

function Condition({ current }) {
	return (
		<div className="current-weather--condition col p-2">
			<span className="current-weather--condition-temp">{current.temp}°</span>
			<div className="current-weather--condition-icon-wrapper">
				<img src={current.condition.icon} className="current-weather--condition-icon"></img>
				<span className="current-weather--condition-text">{current.condition.text}</span>
			</div>
		</div>
	);
}

const mapStateToProps = state => ({
	current: state.current
})

export default connect(mapStateToProps, null)(Condition);

