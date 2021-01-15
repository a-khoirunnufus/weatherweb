import React from 'react';
import StatusIcon from '../../components/atoms/StatusIcon';
import SolidCard from '../../components/atoms/SolidCard';

export default function CurrentWeather() {
	return (
		<div className="current-weather">
			
			<div className="row center">
				<span className="current-weather--temp">34°</span>
				<StatusIcon />
			</div>

			<div className="current-weather--card">
				<SolidCard>
					<span className="current-weather--loc-city">Liwa</span>
					<span className="current-weather--loc-region">Lampung, Indonesia</span>
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
								<span>2.9 mph</span>
								<span>0.00 in</span>
								<span>63%</span>
								<span>93%</span>
								<span>30.3 in</span>
							</div>
						</div>
					</div>
				</SolidCard>
			</div>
		</div>
	);
}