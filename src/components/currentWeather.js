import React from 'react';
import { connect } from 'react-redux';
import { getCurrent } from '../config/redux/actionCreators';

const mapStateToProps = state => ({
	wind: state.current.wind,
	prec: state.current.prec,
	cloud: state.current.cloud,
	humidity: state.current.humidity,
	pressure: state.current.pressure
});

const mapDispatchToProps = dispatch => ({
	getCurrent: () => dispatch(getCurrent())
});

function currentWeather(props) {
	return (
		<ul>
			<li>Wind: {props.wind}</li>
			<li>Precipitation: {props.prec}</li>
			<li>Cloud: {props.cloud}</li>
			<li>Humidity: {props.humidity}</li>
			<li>Pressure: {props.pressure}</li>
		</ul>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(currentWeather);