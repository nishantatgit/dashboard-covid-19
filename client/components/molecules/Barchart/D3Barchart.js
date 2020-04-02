import * as d3 from 'd3';
const D3Barchart = {};

import { SVG } from '../../../constants';

D3Barchart.create = (el, data, configuration) => {
  const { current: parentNode } = el;
  const {
    height: chartHeight,
    width: chartWidth,
    viewBox,
    spaceTop = 0,
    BAR: { paddingInner }
  } = SVG;
  const bar = d3
    .select(parentNode)
    .append('svg')
    .attr('viewBox', viewBox);
  const noOfBars = data.length;

  //create x scale function
  const xScale = d3
    .scaleBand()
    .domain(d3.range(noOfBars))
    .range([0, chartWidth])
    .paddingInner(paddingInner);

  // create y scale function
  const yScale = d3
    .scaleLinear()
    .domain([0, data[0].data])
    .range([0, chartHeight]);

  const yAxisScale = d3
    .scaleLinear()
    .domain([0, data[0].data])
    .range([chartHeight, 0]);
  //const xAxisScale = d3.
  const yAxis = d3.axisLeft(yAxisScale);

  bar.append('g').call(yAxis);
  bar
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('width', xScale.bandwidth())
    .attr('x', (d, i) => {
      return xScale(i);
    })
    .attr('y', (d, i) => {
      return chartHeight - yScale(d.data);
    })
    .attr('height', d => yScale(d.data));

  bar
    .append('g')
    .selectAll('text')
    .data(data)
    .enter()
    .append('text')
    .attr('class', 'x-data')
    .text(d => d.data)
    .attr('x', (d, i) => {
      return xScale(i) + xScale.bandwidth() / 2;
    })
    .attr('y', (d, i) => {
      return chartHeight - yScale(d.data) + 20;
    });
  bar
    .append('g')
    .selectAll('text')
    .data(data)
    .enter()
    .append('text')
    .attr('class', 'x-label')
    .text(d => d.labelText)
    .attr('x', (d, i) => {
      return xScale(i) + xScale.bandwidth() / 2;
    })
    .attr('y', (d, i) => {
      return chartHeight - yScale(d.data) + 50;
  //   }).attr('transform',``);
  // transform = 'translate(180,200)rotate(100)';
  // d3.select(el).append(bar);
};

D3Barchart.update = (el, data, configuration, chart) => {
  //D3 code to update the chart
};

D3Barchart.destroy = (el, data, configuration, chart) => {
  //cleaning code here
};

export default D3Barchart;
