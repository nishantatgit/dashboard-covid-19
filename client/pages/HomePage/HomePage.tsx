import React from 'react';

import MaterialTable from '../../components/molecules/MaterialTable/MaterialTable';
import BarChart from '../../components/molecules/Barchart/Barchart';
import Choropleth from '../../components/molecules/Choropleth/Choropleth';
import  './HomePage.scss';
declare global {
  interface Window {
      __NX__ :any;
  }
}

type MyState ={
  data: {
    stateWiseData?: {};
    stateGeoObj?: {}
    usData?: {}
  };
}

type Val = {
  State: string;
}


class HomePage extends React.Component {
  state: MyState = {
    data : {}
  } 
 
  componentDidMount() {
    console.log('window.__NX__', window.__NX__);
    try {
      const data = { ...window.__NX__ };
      this.setState({
        data: { ...data },
      });
    } catch (e) {
      console.warn('Invalid json data');
    }
  }
  render() {
    const {
      state: { data },
    } = this;
    const stateData = data && data.stateWiseData;
    const geoJSON = data && data.stateGeoObj;
    const states = stateData && Object.keys(stateData).filter((val) => !!val);
    const values  =
      stateData && Object.values(stateData).filter((val: Val) => !!val.State);
    const headers =
      stateData && values.length && values[0] && Object.keys(values[0]);

    const geoData = values && {
      geoKey: 'name',
      key: 'Confirmed',
      data: [...values.map((v: Val) => ({ ...v, name: v.State }))],
    };

    const usData = data && data.usData;
    console.log('usData --- ', usData);
    return (
      <React.Fragment>
        <div className="flex-container">
          <section className="table-container">
            {stateData && (
              <MaterialTable
                states={states}
                values={values}
                headers={headers}
                options={{ pageSize: 30 }}
              ></MaterialTable>
            )}
          </section>
          {stateData && (
            <section className="svg-container">
              <Choropleth data={{ geoData, geoJSON }}></Choropleth>
              <BarChart
                data={values
                  .sort((a, b) => b['Confirmed'] - a['Confirmed'])
                  .slice(0, 7)}
              ></BarChart>
            </section>
          )}
        </div>
        <a href="/usa" title="COVID in USA">
          Covid in USA
        </a>
      </React.Fragment>
    );
  }
}

export default HomePage;
