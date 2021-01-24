import React, { useState } from 'react';

export default function Dropdown({ listItem }) {
	const [open, setOpen] = useState(false);
	const toggle = () => setOpen(!open);

	return (
		<div className="dropdown">
			<div onClick={ () => toggle() } role="button" className="dropdown--button row space-between">
				<span>{listItem.date}</span>
				<span className="material-icons">
					{ open ? 'expand_less' : 'expand_more'}
				</span>
			</div>
			{ 
				open ?
					<ul className="dropdown--list">
						{
							listItem.hour.map((item, key) => {
								if(key % 3 === 0) {
									return (
										<li key={key} className="dropdown--list--item-wrapper row">
											<span className="dropdown--list--item-time">{item.time}</span>
											<span className="dropdown--list--item-temp">{item.temp}°C</span>
											<div className="dropdown--list--item-status row">
												<img src={item.condition.icon} alt="weather icon"/>
												<span>{item.condition.text}</span>
											</div>
											<div className="dropdown--list--item-wind">
												<span>Wind</span>
												<span>{item.wind} mph</span>
											</div>
											<div className="dropdown--list--item-precip">
												<span>Precip</span>
												<span>{item.precip} in</span>
											</div>
											<div className="dropdown--list--item-cloud">
												<span>Cloud</span>
												<span>{item.cloud}%</span>
											</div>
											<div className="dropdown--list--item-humidity">
												<span>Humidity</span>
												<span>{item.humidity}%</span>
											</div>
											<div className="dropdown--list--item-pressure">
												<span>Pressure</span>
												<span>{item.pressure} in</span>
											</div>
										</li>
									)
								}
								return null;
							})
						}
					</ul>
					: null
			}
		</div>
	)
}