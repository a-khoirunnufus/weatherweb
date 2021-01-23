import React, { useEffect, useState } from 'react';
import Navbar from '../organisms/Navbar';
import GlassCard from '../../components/atoms/GlassCard';
import CurrentWeather from '../organisms/CurrentWeather';
import TodayPred from '../organisms/TodayPred';
import TodayGraph from '../organisms/TodayGraph';
import Forecast from '../organisms/Forecast';

import { connect } from 'react-redux';
import { getLocation } from '../../config/weatherApi';
import { getData } from '../../config/redux/actionCreators';

function Main({ isLoading, getData, forecast }) {
  const [show, setShow] = useState(false);

  const autoScanLoc = async () => {
    try {
      const inputLoc = await getLocation();
      console.log(inputLoc);
      await getData(`${inputLoc.latitude},${inputLoc.longitude}`);
      // get forecast

    } catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    autoScanLoc();
  }, [])

  useEffect(() => {
    if(!isLoading) {
      console.log('loading berhenti', isLoading);
      console.log('forecast', forecast)
      setShow(!show);
    }
  }, [isLoading])

  return (
    <div className="Main">
      <Navbar />
      { 
        show ?
          <div className="content container-lg">
            <GlassCard>
              <div className="col center">
                <div className="row center bottom">
                  <CurrentWeather />
                  <TodayGraph />
                </div>
                <div className="row center">
                  <TodayPred />
                </div>
                <Forecast />
              </div>
            </GlassCard>
          </div>
        : null
      }
    </div>
  );
}

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  forecast: state.forecast
});

const mapDispatchToProps = dispatch => ({
  getData: (loc) => dispatch(getData(loc)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
