export const initialState = {
	isLoading: true,
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
			date: '',
			hour: [
				{
					time: '',
					temp: 0,
					condition: {
						code: 0,
						icon: '',
						text: '',
					},
					wind: 0,
					precip: 0,
					cloud: 0,
					humidity: 0,
					pressure: 0
				}
			],
		}
	],
	forecastToday: {
		date: '',
		hour: [
			{
				time: '',
				temp: 0,
				condition: {
					code: 0,
					icon: '',
					text: '',
				},
				wind: 0,
				precip: 0,
				cloud: 0,
				humidity: 0,
				pressure: 0
			}
		]
	},
	chartDataset: [0,0,0,0,0,0,0,0]
}

export const Reducer = (state = initialState, action) => {
	switch(action.type) {
		case 'SET_LOADING':
			return {
				...state,
				isLoading: action.payload
			}
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
		case 'SET_FORECAST':
			return {
				...state,
				forecast: action.payload
			}
		case 'SET_FORECAST-TODAY':
			return {
				...state,
				forecastToday: action.payload
			}
		case 'SET_CHART-DATASET':
			return {
				...state,
				chartDataset: action.payload
			}
		default:
			return state;
	}
}