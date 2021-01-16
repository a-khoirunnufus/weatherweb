import React from 'react';
import graphUrl from '../../assets/img/graph-temp.png';
import SolidCard from '../../components/atoms/SolidCard';
import weatherIconUrl from '../../assets/icons/weather/day/sunny.png';

export default function TodayPred() {
	return (
		<div className="today-pred">
			<img className="today-pred--img" src={graphUrl} alt="graph weather"/>
			<div className="today-pred--card">
				<SolidCard>
					<div className="row">
						{
							[1,2,3,4,5].map((item) => (
								<div key={item} className="row">
									{ item === 1 ? null : <div className="divider"></div> }
									<div className="today-pred--card--item col center">
										<span>Now</span>
										<div className="row">
											<img src={weatherIconUrl} alt="weather icon"/>
											<div className="today-pred--card--item--text col center">
												<span>20°</span>
												<span>sunny</span>
											</div>
										</div>
									</div>								
								</div>
							))
						}
					</div>
				</SolidCard>
			</div>
		</div>
	);
}