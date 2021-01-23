import React from 'react';
import SolidCard from '../../components/atoms/SolidCard';
import DropdownList from './DropdownList';
import weatherIconUrl from '../../assets/icons/weather/day/sunny.png';
import { connect } from 'react-redux';

function Forecast() {
	return (
		<div className="forecast">
			<SolidCard>
				<span className="forecast--title">3 Day Weather Forecast</span>
				<DropdownList />	
			</SolidCard>
		</div>
	);
}

export default Forecast;