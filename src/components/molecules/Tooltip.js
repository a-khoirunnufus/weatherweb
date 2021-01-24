import React, { useEffect, useState } from 'react';

export default function Tooltip() {
	const [visible, setVisible] = useState('hide');
	useEffect(() => {
	 	setTimeout(() => {
	 		setVisible('show');
	 	}, 3000);
	 	setTimeout(() => {
	 		setVisible('hide');
	 	}, 6000);
	}, [])
	return (
		<div className={`tooltip col ${visible}`}>
			<span>Not your city?</span>
			<span>Try to search another city.</span>
		</div>
	)
}