import React from 'react';
import SolidCard from '../../components/atoms/SolidCard';
import weatherIconUrl from '../../assets/icons/weather/day/sunny.png';
import { connect } from 'react-redux';

function Forecast({ forecast }) {
	return (
		<div className="forecast">
			<SolidCard>
				{
					forecast.map((item, key) => (
						<div key={key} className="forecast--item col">
							<div className="forecast--day row">
								<span>{item.date}</span>
								<span className="material-icons">
									expand_more
								</span>
							</div>

							{/* hour */}
							{
								item.hour.map((hour, key) => (
									<div key={key} className="forecast--hour row">
										<span className="forecast--hour--hour">{hour.time}</span>
										<span className="forecast--hour--temp">{hour.temp}°</span>
										<div className="forecast--hour--status row">
											<img src={hour.condition.icon} alt="weather icon"/>
											<span>{hour.condition.text}</span>
										</div>
										<div className="forecast--hour--wind">
											<span>Wind</span>
											<span>{hour.wind} mph</span>
										</div>
										<div className="forecast--hour--precip">
											<span>Precip</span>
											<span>{hour.precip} in</span>
										</div>
										<div className="forecast--hour--cloud">
											<span>Cloud</span>
											<span>{hour.cloud}%</span>
										</div>
										<div className="forecast--hour--humidity">
											<span>Humidity</span>
											<span>{hour.humidity}%</span>
										</div>
										<div className="forecast--hour--pressure">
											<span>Pressure</span>
											<span>{hour.pressure} in</span>
										</div>
									</div>
								))
							}
						</div>
					))
				}	
			</SolidCard>
		</div>
	);
}

const mapStateToProps = state => ({
	forecast: state.forecast,
});

export default connect(mapStateToProps, null)(Forecast);