import React, { useEffect, useState, Fragment } from 'react';
import Navbar from '../organisms/Navbar';
import GlassCard from '../../components/atoms/GlassCard';
import Condition from '../organisms/Condition';
import Details from '../organisms/Details';
import Graph from '../organisms/Graph';
import TodayPred from '../organisms/TodayPred';
import Forecast from '../organisms/Forecast';
import Footer from '../../components/molecules/Footer';
import Tooltip from '../../components/molecules/Tooltip';

import { connect } from 'react-redux';
import { getLocation } from '../../config/weatherApi';
import { getData } from '../../config/redux/actionCreators';

function Main({ isLoading, isError, getData }) {
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);

  const autoScanLoc = async () => {
    try {
      const inputLoc = await getLocation();
      // console.log(inputLoc);
      await getData(`${inputLoc.latitude},${inputLoc.longitude}`);
    } catch(err) {
      console.error(err);
    }
  }

  useEffect(() => {
    autoScanLoc();
  }, [])

  useEffect(() => {
    isLoading ? setShow(false) : setShow(true);
    isError ? setShowError(true) : setShowError(false);
  }, [isLoading, isError])

  return (
    <div className="Main">
      <div className="main-container">
        <GlassCard>
          <Tooltip />
          <Navbar />
          { 
            show ?
              <div className="content">
                {
                  showError ?
                    <div className="error col center">
                      <span class="material-icons md-48">
                        error
                      </span>
                      <span>Error! , Failed to Get Data<br />Try to Input Another City</span>
                    </div>
                    :
                    <Fragment>
                      <div className="current-weather col">
                        <div className="row stretch">
                          <Condition />
                          <Details />
                          <Graph />
                        </div>
                        <TodayPred />
                      </div>
                      <Forecast />
                    </Fragment>
                }
              </div>
              :
              <div className="loading col center">
                <span class="material-icons md-48">
                  hourglass_empty
                </span>
                <span>Please Wait , Fetching Data...</span>
              </div>
          }
          <Footer />
        </GlassCard>
      </div>
      {/*
      <div className="content container-lg">
        <GlassCard>
          { 
            show ?
              <Fragment>
                {
                  showError ?
                    <div className="error col center">
                      <span class="material-icons md-48">
                        error
                      </span>
                      <span>Error! , Failed to Get Data<br />Try to Input Another City</span>
                    </div>
                    :
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
                }
              </Fragment>
              :
              <div className="loading col center">
                <span class="material-icons md-48">
                  hourglass_empty
                </span>
                <span>Please Wait , Fetching Data...</span>
              </div>
          }
        </GlassCard>
      </div>
    */}
    </div>
  );
}

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  isError: state.isError
});

const mapDispatchToProps = dispatch => ({
  getData: (loc) => dispatch(getData(loc)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
