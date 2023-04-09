import React from 'react';
import Choropleth from '../../components/molecules/Choropleth/Choropleth';
import './HomePage.scss';

declare global {
  interface Window {
    __NX__: any;
  }
}

type MyState = {
  data: {
    geoKey?: string;
    key?: string;
    stateWiseData?: [];
    stateGeoObj?: {};
    usData?: {};
    stateGeoJSON?: {};
  };
};

type Val = {
  State: string;
};

class HomePage extends React.Component {
  state: MyState = {
    data: {},
  };

  componentDidMount() {
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
    const stateGeoJSON = data && data.stateGeoJSON;
    const geoKey = data && data.geoKey;
    const key = data && data.key;

    const values = stateData && stateData.filter((val: Val) => !!val.State);

    const geoData = values && {
      geoKey,
      key,
      data: [...values.map((v: Val) => ({ ...v, name: v.State }))],
    };

    return (
      <React.Fragment>
        <div className="flex-container">
          {stateData && (
            <section className="svg-container">
              <Choropleth
                data={{ geoData, geoJSON, stateGeoJSON }}
              ></Choropleth>
            </section>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;
