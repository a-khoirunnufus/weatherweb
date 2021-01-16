import React from 'react';
import SolidCard from '../../components/atoms/SolidCard';
import weatherIconUrl from '../../assets/icons/weather/day/sunny.png';

export default function Forecast() {
	return (
		<div className="forecast">
			<SolidCard>
				<div className="forecast--item col">
					<div className="forecast--day row">
						<span>Wednesday, January 13</span>
						<span class="material-icons">
							expand_more
						</span>
					</div>
				</div>

				<div className="forecast--item col">
					<div className="forecast--day row">
						<span><b>Wednesday, January 13</b></span>
						<span class="material-icons">
							expand_more
						</span>
					</div>
					{
						[1,2,3,4,5,6,7,8].map(item => (
							<div key={item} className="forecast--hour row">
								<span>00:00</span>
								<span className="forecast--hour--temp">34°</span>
								<div className="forecast--hour--status row">
									<img src={weatherIconUrl} />
									<span>Sunny</span>
								</div>
								<div>
									<span>Wind</span>
									<span>2.9 mph</span>
								</div>
								<div>
									<span>Prec</span>
									<span>0.00 in</span>
								</div>
								<div>
									<span>Cloud</span>
									<span>63%</span>
								</div>
								<div>
									<span>Humidity</span>
									<span>93%</span>
								</div>
								<div>
									<span>Pressure</span>
									<span>30.3 in</span>
								</div>
							</div>		
						))
					}
				</div>

				<div className="forecast--item col">
					<div className="forecast--day row">
						<span>Wednesday, January 13</span>
						<span class="material-icons">
							expand_more
						</span>
					</div>
				</div>	
			</SolidCard>
		</div>
	);
}