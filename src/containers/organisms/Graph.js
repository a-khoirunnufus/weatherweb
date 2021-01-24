import React from 'react';
import SolidCard from '../../components/atoms/SolidCard';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';

function Graph({ chartDataset }) {
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

  return (
  	<div className="current-weather--graph solid-card p-1">
	  	<Line
				data={chartData}
				options={{
					title : {
						display: true,
						text: 'TEMPERATURE CHART ( °C )',
						fontSize: 16
					},
					legend: { display: false },
					scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
        	},
        	responsive: true,
        	maintainAspectRatio: false
				}}
			/>
		</div>
  );
}

const mapStateToProps = state => ({
	chartDataset: state.chartDataset
});

export default connect(mapStateToProps, null)(Graph);