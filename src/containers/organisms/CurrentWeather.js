import React from 'react';
import StatusIcon from '../../components/atoms/StatusIcon';
import SolidCard from '../../components/atoms/SolidCard';
import { connect } from 'react-redux';

function CurrentWeather({ location, current }) {
	return (
		<div className="current-weather">
			
			<div className="row center">
				<span className="current-weather--temp">{current.temp}°</span>
				<StatusIcon 
					iconUrl={current.condition.icon} 
					text={current.condition.text}
				/>
			</div>

			<div className="current-weather--card">
				<SolidCard>
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
				</SolidCard>
			</div>
		</div>
	);
}

const mapStateToProps = state => ({
	location: state.location,
	current: state.current
})

export default connect(mapStateToProps, null)(CurrentWeather);