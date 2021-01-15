export const initialState = {
	theme: 'day-sunny',
	location: 'Jakarta, Indonesia',
	current: {
		wind: 0,
		prec: 0,
		cloud: 0,
		humidity: 0,
		pressure: 0
	},
	forecast: [
		{
			date: ''
		}
	]
}

export const Reducer = (state = initialState, action) => {
	switch(action.type) {
		case 'GET_CURRENT':
			return {
				...state,
				current: action.payload
			}
		default:
			return state;
	}
}