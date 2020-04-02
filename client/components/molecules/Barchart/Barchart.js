import React from 'react';
import D3Barchart from './D3Barchart';
import './Barchart.scss';
export default class Barchart extends React.Component {
  constructor(props) {
    super(props);
    this.barChartRef = React.createRef();
  }

  componentDidMount() {
    const {
      props: { data }
    } = this;
    console.log('bar chart data --> ', data);
    D3Barchart.create(
      this.barChartRef,
      data.map(v => ({ data: v['Confirmed'], labelText: v.State })),
      {
        labelX: 'State',
        labelY: 'Total cases'
      }
    );
  }

  render() {
    const {
      props: { className }
    } = this;
    return (
      <section className="barchart-container" ref={this.barChartRef}></section>
    );
  }
}
