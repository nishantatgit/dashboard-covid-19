import React from 'react';
import D3Choropleth from './D3Choropleth';
import './Choropleth.scss';
class Choropleth extends React.Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    const {
      props: { data },
    } = this;
    console.log('choropleth data --> ', data);
    D3Choropleth.create(this.mapRef, data);
  }

  render() {
    const {
      props: { className },
    } = this;
    return (
      <section className="choropleth-map-container" ref={this.mapRef}></section>
    );
  }
}

export default Choropleth;
