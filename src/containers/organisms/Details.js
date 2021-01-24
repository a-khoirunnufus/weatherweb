import React from 'react';
import { connect } from 'react-redux';

function Details({ current, location }) {
	return (
		<div className="current-weather--details solid-card col p-2 col-6-md col-12-sm">
			<div className="current-weather--details-wrapper">
				<span className="current-weather--loc-city">{location.name}</span>
				<span className="current-weather--loc-region">{location.region}, {location.country}</span>
				<div className="current-weather--detail">
					<div className="row">
						<div className="current-weather--detail--key">
							<span>Wind</span>
							<span>Precipitation</span>
							<span>Cloud</span>
							<span>Humidity</span>
							<span>Pressure</span>
						</div>
						<div className="current-weather--detail--value">
							<span>{current.wind} mph</span>
							<span>{current.precip} in</span>
							<span>{current.cloud}%</span>
							<span>{current.humidity}%</span>
							<span>{current.pressure} in</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = state => ({
	current: state.current,
	location: state.location
})

export default connect(mapStateToProps, null)(Details);
