import React, { useEffect, useState, Fragment } from 'react';
import Navbar from '../organisms/Navbar';
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
      <div className="main-container glass-card col">
        <Tooltip />
        <Navbar />
        { 
          show ?
            <div className="content">
              {
                showError ?
                  <div className="error col center">
                    <span className="material-icons md-48">
                      error
                    </span>
                    <span>Error! , Failed to Get Data<br />Try to Input Another City</span>
                  </div>
                  :
                  <Fragment>
                    <div className="current-weather col">
                      <div className="row wrap stretch">
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
              <span className="material-icons md-48">
                hourglass_empty
              </span>
              <span>Please Wait , Fetching Data...</span>
            </div>
        }
        <Footer />
      </div>
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
