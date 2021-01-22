import React, { useState, useEffect } from 'react';
import graphUrl from '../../assets/img/graph-temp.png';
import SolidCard from '../../components/atoms/SolidCard';
import PredItem from '../../components/atoms/predItem';
import weatherIconUrl from '../../assets/icons/weather/day/sunny.png';
import { connect } from 'react-redux';
import { Line, Bar } from 'react-chartjs-2';

function TodayPred({ forecastToday, chartDataset, isLoading }) {
	let chartData = {
    labels: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'],
    datasets: [{
      label: 'Temperature',
      data: chartDataset,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  };

	useEffect(() => {
		console.log('jalan',forecastToday);
	}, [forecastToday, isLoading]);

	return (
		<div className="today-pred">
			{isLoading ? null :
			<Line
				data={chartData}
				width={100}
				height={50}
				options={{
					title : {
						display: true,
						text: 'Temperature Chart',
						fontSize: 16,
					},
					legend: { display: false },
					scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
        	}
				}}
			/>
			}
			
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
	isLoading: state.isLoading,
	chartDataset: state.chartDataset
});

export default connect(mapStateToProps, null)(TodayPred);