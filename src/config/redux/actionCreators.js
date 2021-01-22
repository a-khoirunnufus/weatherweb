import { getDataFromAPI } from '../weatherApi';

export const getData = inputLoc => dispatch => {
	dispatch({ type: 'SET_LOADING', payload: true });
	getDataFromAPI(inputLoc)
		.finally(
			dispatch({ type: 'SET_LOADING', payload: false })
		)
		.then(({ location, current, forecast }) => {
			console.log('hasil api call:',{ location, current, forecast });
			dispatch({ type: 'SET_LOC', payload: location});
			dispatch({ type: 'SET_CURRENT', payload: current});
			dispatch({ type: 'SET_FORECAST', payload: forecast});
			dispatch({ type: 'SET_FORECAST-TODAY', payload: forecast[0]});
			dispatch({ type: 'SET_CHART-DATASET', payload: [
				forecast[0].hour[6].temp,
				forecast[0].hour[0].temp,
				forecast[0].hour[3].temp,
				forecast[0].hour[9].temp,
				forecast[0].hour[12].temp,
				forecast[0].hour[15].temp,
				forecast[0].hour[18].temp,
				forecast[0].hour[21].temp,
			] });
		})
		.catch(err => {
			console.log(err);
		});	
}
