import React, { useState, useEffect } from 'react';
import SolidCard from '../../components/atoms/SolidCard';
import PredItem from '../../components/atoms/predItem';
import { connect } from 'react-redux';

function TodayPred({ forecastToday, isLoading }) {
	useEffect(() => {
		console.log('jalan',forecastToday);
	}, [forecastToday, isLoading]);

	return (
		<div className="today-pred">
			<div className="today-pred--card">
				<SolidCard>
					{
						isLoading ? 
							<span>Loading...</span> :
							<div className="row">
								{
									forecastToday.hour.map((item, key) => {
										if([5, 12, 17, 20].includes(key)) {
											let label = '';
											switch(key) {
												case 5:
													label = 'Morning';
													break;
												case 12:
													label = 'Afternoon';
													break;
												case 17:
													label= 'Evening';
													break;
												case 20:
													label= 'Late night';
													break;
												default:
													label = 'Undefined';
											};

											return (
												<PredItem 
													key={key} 
													label={label}
													icon={item.condition.icon}
													temp={item.temp}
													text={item.condition.text}
												/>
											)
										}
									})
								}
							</div>
					}
				</SolidCard>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	forecastToday: state.forecastToday,
	isLoading: state.isLoading
});

export default connect(mapStateToProps, null)(TodayPred);