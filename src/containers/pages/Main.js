import React, { useEffect } from 'react';
import Navbar from '../organisms/Navbar';
import GlassCard from '../../components/atoms/GlassCard';
import CurrentWeather from '../organisms/CurrentWeather';
import TodayPred from '../organisms/TodayPred';
import Forecast from '../organisms/Forecast';

import { connect } from 'react-redux';
import { getLocation } from '../../config/weatherApi';
import { getCurrent } from '../../config/redux/actionCreators';

function Main(props) {
  
  const autoScanLoc = async () => {
    try {
      const location = await getLocation();
      console.log(location);
      await props.getCurrent(`${location.latitude},${location.longitude}`);
    } catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    autoScanLoc();
  }, [])

  return (
    <div className="Main">
      <Navbar />
      <div className="content container-lg">
        <GlassCard>
          <div className="col center">
            <div className="row center">
              <CurrentWeather />
              <TodayPred />
            </div>
            <Forecast />
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  getCurrent: (loc) => dispatch(getCurrent(loc)),
});

export default connect(null, mapDispatchToProps)(Main);
