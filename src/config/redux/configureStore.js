import { createStore, applyMiddleware } from 'redux';
import { initialState, Reducer } from './reducer';
import thunk from 'redux-thunk';

export const configureStore = () => {
	const store = createStore(
		Reducer,
		initialState,
		applyMiddleware(thunk)
	);
	return store;
}