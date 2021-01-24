import React from 'react';
import SolidCard from '../../components/atoms/SolidCard';
import DropdownList from './DropdownList';

function Forecast() {
	return (
		<div className="forecast solid-card p-2">
			<div className="forecast--wrapper">
				<span className="forecast--title">3 Day Weather Forecast</span>
				<DropdownList />	
			</div>
		</div>
	);
}

export default Forecast;