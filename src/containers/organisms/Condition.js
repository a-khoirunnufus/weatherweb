import React from 'react';
import { connect } from 'react-redux';

function Condition({ current }) {
	return (
		<div className="current-weather--condition col p-2 col-6-md col-12-sm">
			<span className="current-weather--condition-temp">{current.temp}°C</span>
			<div className="current-weather--condition-icon-wrapper">
				<img src={current.condition.icon} className="current-weather--condition-icon" alt="weather icon"></img>
				<span className="current-weather--condition-text">{current.condition.text}</span>
			</div>
		</div>
	);
}

const mapStateToProps = state => ({
	current: state.current
})

export default connect(mapStateToProps, null)(Condition);

