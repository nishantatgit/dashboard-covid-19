import * as d3 from 'd3';
const D3Barchart = {};

import { SVG, COLORS } from '../../../constants';

D3Barchart.create = (el, data, configuration) => {
  const { current: parentNode } = el;
  const {
    height: chartHeight,
    width: chartWidth,
    viewBox,
    spaceTop = 0,
    BAR: { paddingInner },
    padding
  } = SVG;
  const bar = d3
    .select(parentNode)
    .append('svg')
    .attr('viewBox', viewBox);
  const noOfBars = data.length;

  //create x scale function
  const xScale = d3
    .scaleBand()
    .domain(data.map(v => v.labelText))
    .range([padding, chartWidth - padding * 2])
    .paddingInner(paddingInner);

  // create y scale function
  const yScale = d3
    .scaleLinear()
    .domain([0, data[0].data])
    .range([padding, chartHeight - padding]);

  // const yAxisScale = d3
  //   .scaleLinear()
  //   .domain([0, data[0].data])
  //   .range([chartHeight, 0]);
  //const xAxisScale = d3.
  //const yAxis = d3.axisLeft(yAxisScale);

  //bar.append('g').call(yAxis);
  bar
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('width', xScale.bandwidth())
    .attr('x', d => {
      return xScale(d.labelText);
    })
    .attr('y', (d, i) => {
      return chartHeight - yScale(d.data) - padding;
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
    .attr('x', d => {
      return xScale(d.labelText) + xScale.bandwidth() / 2;
    })
    .attr('y', d => {
      return chartHeight - yScale(d.data) + 20 - padding;
    });

  const xAxis = d3.axisBottom(xScale);
  bar
    .append('g')
    .attr('class', 'x-axis')
    .attr('transform', `translate(0, ${chartHeight - padding})`)
    .call(xAxis);
  // bar
  //   .append('g')
  //   .selectAll('text')
  //   .data(data)
  //   .enter()
  //   .append('text')
  //   .attr('class', 'x-label')
  //   .text(d => d.labelText)
  //   .attr('x', (d, i) => {
  //     return xScale(d.labelText) + xScale.bandwidth() / 2;
  //   })
  //   .attr('y', (d, i) => {
  //     return chartHeight - yScale(d.data) + 50;
  //   });
};

D3Barchart.update = (el, data, configuration, chart) => {
  //D3 code to update the chart
};

D3Barchart.destroy = (el, data, configuration, chart) => {
  //cleaning code here
};

export default D3Barchart;
