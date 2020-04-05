import React from 'react';

import MaterialTable from '../../components/molecules/MaterialTable/MaterialTable';
import BarChart from '../../components/molecules/Barchart/Barchart';
import Choropleth from '../../components/molecules/Choropleth/Choropleth';
import styles from './HomePage.scss';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
    const values =
      stateData && Object.values(stateData).filter((val) => !!val.State);
    const headers =
      stateData && values.length && values[0] && Object.keys(values[0]);
    return (
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
          <section>
            <Choropleth data={{ statesData: values, geoJSON }}></Choropleth>
            <BarChart
              data={values
                .sort((a, b) => b['Confirmed'] - a['Confirmed'])
                .slice(0, 7)}
            ></BarChart>
          </section>
        )}
      </div>
    );
  }
}

export default HomePage;
