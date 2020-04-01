import * as d3 from 'd3';
const D3Barchart = {};

import { SVG } from '../../../constants';

D3Barchart.create = (el, data, configuration) => {
  const { current: parentNode } = el;
  const { height: chartHeight, width: chartWidth, viewBox } = SVG;
  const bar = d3
    .select(parentNode)
    .append('svg')
    .attr('viewBox', viewBox);
  const noOfBars = data.length;
  const barWidth =
    (SVG.width - SVG.BAR.spaceBetween * (noOfBars - 1)) / noOfBars;
  bar
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('width', barWidth)
    .attr('x', (d, i) => {
      return i * (barWidth + SVG.BAR.spaceBetween);
    })
    .attr('y', (d, i) => {
      return chartHeight - d.data;
    })
    .attr('height', d => d.data);
  console.log('bar ', bar);

  bar
    .selectAll('text')
    .data(data)
    .enter()
    .append('text')
    .text(d => d.labelText)
    .attr('x', (d, i) => {
      return i * (barWidth + SVG.BAR.spaceBetween);
    })
    .attr('y', (d, i) => {
      return chartHeight - d.data + 20;
    });
  // d3.select(el).append(bar);
};

D3Barchart.update = (el, data, configuration, chart) => {
  //D3 code to update the chart
};

D3Barchart.destroy = (el, data, configuration, chart) => {
  //cleaning code here
};

export default D3Barchart;
