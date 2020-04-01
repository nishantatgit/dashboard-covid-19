import React from 'react';
import MaterialTable from '../../components/molecules/MaterialTable/MaterialTable';
import BarChart from '../../components/molecules/Barchart/Barchart';
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
        data: { ...data }
      });
    } catch (e) {
      console.warn('Invalid json data');
    }
  }
  render() {
    const {
      state: { data }
    } = this;
    const stateData = data && data.stateWiseData;
    const states = stateData && Object.keys(stateData).filter(val => !!val);
    const values =
      stateData && Object.values(stateData).filter(val => !!val.State);
    const headers =
      stateData && values.length && values[0] && Object.keys(values[0]);
    return (
      <div>
        <h1> COVID-19 disease spread in India </h1>
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
          <BarChart
            data={values
              .sort((a, b) => b['Total Cases'] - a['Total Cases'])
              .slice(0, 15)}
          ></BarChart>
        )}
      </div>
    );
  }
}

export default HomePage;