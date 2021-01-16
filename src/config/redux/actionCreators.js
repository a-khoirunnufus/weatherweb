import { getCurrentFromAPI } from '../weatherApi';

export const getCurrent = location => dispatch => {
	getCurrentFromAPI(location)
		.then(({ location, current }) => {
			console.log('hasil api call:',{ location, current });
			dispatch({ type: 'SET_LOC', payload: location});
			dispatch({ type: 'SET_CURRENT', payload: current});
		})
		.catch(err => {
			console.log(err);
		})
	
}