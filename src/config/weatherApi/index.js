import { apiKey } from './apiKey';
import geolocation from 'geolocation';
import { ConvertToDate, ConvertToHour } from '../../utils/ConvertDate';

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

export function getDataFromAPI(location) {
	return new Promise((resolve, reject) => {
		fetch(`${url}/forecast.json?key=${apiKey}&q=${location}&days=3`)
			.then(res => res.json())
			.then(data => {
				let { location, current, forecast } = data;
				location = mapResToLoc(location);
				current = mapResToCurrent(current);
				forecast = mapResToForecast(forecast);
				resolve({ location, current, forecast });
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
	// 		location = mapResToLoc(location);
	// 		current = mapResToCurrent(current);
	// 		return { location, current };
	// 	} catch(err) {
	// 		console.log(err);
	// 	}
	// }
	// return fetchApi();

};

function mapResToLoc(loc) {
	return {
		country: loc.country,
		name: loc.name,
		region: loc.region
	};
}

function mapResToCurrent(current) {
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

function mapResToForecast(forecast) {
	let mapped = [];
	forecast.forecastday.map(item => {
		// convert date format
		let date = item.date;
		date = ConvertToDate(date);

		let rawHour = item.hour;
		let hour = [];
		rawHour.map(item => {
			let { 
				time,
				cloud,
				condition,
				humidity,
				temp_c,
				precip_in,
				pressure_in,
				wind_mph
			} = item;
			time = ConvertToHour(time);

			hour.push({
				time: time,
				cloud: cloud,
				condition: condition,
				humidity: humidity,
				temp: temp_c,
				precip: precip_in,
				pressure: pressure_in,
				wind: wind_mph
			});
		});

		mapped.push({
			date: date,
			hour: hour,
		});	
	});

	return mapped;
}
