import React from 'react';

export default function StatusIcon({ iconUrl, text }) {
	return (
		<div className="current-weather--icon col center">
			<img src={iconUrl} alt="weather icon"/>
			<span>{ text }</span>
		</div>
	);
}