import { apiKey } from './apiKey';
import geolocation from 'geolocation';

const url = 'http://api.weatherapi.com/v1';

export const getLocation = () => {
	return new Promise((resolve, reject) => {
		geolocation.getCurrentPosition((err, position) => {
  	  if (err) {
    	  reject(err);
    	} else {
    		const latitude = position.coords.latitude;
				const longitude = position.coords.longitude;
      	resolve( {latitude, longitude} );
    	}
  	});
	});
};

export function getCurrentFromAPI(location) {
	return new Promise((resolve, reject) => {
		fetch(`${url}/current.json?key=${apiKey}&q=${location}`)
			.then(res => res.json())
			.then(data => {
				let { location, current } = data;
				location = filterResToLoc(location);
				current = filterResToCurrent(current);
				resolve({ location, current });
			})
			.catch(err => {
				console.log(err);
			})
	});

	// async await version
	// const fetchApi = async () => {
	// 	try {
	// 		const data = await fetch(`${url}/current.json?key=${apiKey}&q=${location}`);
	// 		const { location, current } = data;
	// 		location = filterResToLoc(location);
	// 		current = filterResToCurrent(current);
	// 		return { location, current };
	// 	} catch(err) {
	// 		console.log(err);
	// 	}
	// }
	// return fetchApi();

};

function filterResToLoc(loc) {
	return {
		country: loc.country,
		name: loc.name,
		region: loc.region
	};
}

function filterResToCurrent(current) {
	return {
		cloud: current.cloud,
		condition: current.condition,
		humidity: current.humidity,
		temp: current.temp_c,
		precip: current.precip_in,
		pressure: current.pressure_in,
		wind: current.wind_mph
	};
}

