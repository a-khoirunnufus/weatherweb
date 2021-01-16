export const initialState = {
	theme: 'day-sunny',
	location: {
		country: '',
		name: '',
		region: ''
	},
	current: {
		cloud: 0,
		condition: {},
		humidity: 0,
		temp: 0,
		precip: 0,
		pressure: 0,
		wind: 0,
	},
	forecast: [
		{
			date: ''
		}
	]
}

export const Reducer = (state = initialState, action) => {
	switch(action.type) {
		case 'SET_LOC':
			return {
				...state,
				location: action.payload
			}
		case 'SET_CURRENT':
			return {
				...state,
				current: action.payload
			}
		default:
			return state;
	}
}