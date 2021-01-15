import React, { useEffect } from 'react';
import Navbar from '../organisms/Navbar';
import GlassCard from '../../components/atoms/GlassCard';
import CurrentWeather from '../organisms/CurrentWeather';

//import { Provider } from 'react-redux';
//import { configureStore} from './config/redux/configureStore';
//import CurrentWeather from './components/currentWeather';
// test
//import { getCurrentFromAPI } from './config/weatherApi';

//const store = configureStore();

function Main() {
  return (
    <div className="Main">
      <Navbar />

      <div className="content container-lg">
        <GlassCard>
          <CurrentWeather />
        </GlassCard>
      </div>
    </div>
  );
}

export default Main;
