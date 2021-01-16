import React from 'react';
import { Provider } from 'react-redux';
import { configureStore} from '../../config/redux/configureStore';
import Main from './Main';

const store = configureStore();

export default function App() {
	return (
		<Provider store={store}>
			<Main />
		</Provider>
	);
}