import React from 'react';
import SolidCard from '../../components/atoms/SolidCard';

export default function Forecast() {
	return (
		<div className="forecast">
			<SolidCard>
			 <div className="box-temp"></div>
			</SolidCard>
		</div>
	);
}