import { getCurrentFromAPI } from '../weatherApi';

export const getCurrent = () => {
	const data = getCurrentFromAPI();
	return {
		type: 'GET_CURRENT',
		payload: data
	}
}