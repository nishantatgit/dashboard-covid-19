import * as d3 from 'd3';
const D3Choropleth = {};

import { SVG, COLORS } from '../../../constants';

D3Choropleth.create = (el, data, configuration) => {
  const { statesData, geoJSON } = data;
  const { features } = geoJSON;
  const updatedFeatures = injectDataToFeatures(features, statesData);
  const { height: mapHeight, width: mapWidth, viewBox } = SVG;
  const color = d3.scaleQuantize().range(COLORS.choropleth).domain([0, 537]);
  console.log(
    'statesData[statesData.length - 1].Confirmed',
    statesData[statesData.length - 1].Confirmed
  );
  window.color = color;
  const choropleth = d3
    .select(el.current)
    .append('svg')
    .attr('viewBox', viewBox);
  const projection = d3.geoMercator().fitSize([mapWidth, mapHeight], geoJSON);
  const path = d3.geoPath().projection(projection);
  console.log('path ', path);
  choropleth
    .selectAll('path')
    .data(updatedFeatures)
    .enter()
    .append('path')
    .attr('d', path)
    .attr('fill', (d) => {
      const confirmed = d.properties.Confirmed;
      return confirmed ? (() => color(confirmed))() : '#ddd';
    })
    .attr('stroke', COLORS.white)
    .attr('stroke-width', 0.5);

  function injectDataToFeatures(features, data) {
    features.forEach((feature) => {
      console.log('feature.properties.NAME_1', feature.properties.NAME_1);
      const correspondingData = data.filter(
        (item) => item.State === feature.properties.NAME_1
      )[0];
      console.log('correspondingData ', correspondingData);
      feature.properties.Confirmed =
        correspondingData && correspondingData.Confirmed;
      feature.properties.Active = correspondingData && correspondingData.Active;
      feature.properties.Deaths = correspondingData && correspondingData.Deaths;
    });
    return features;
  }
};

export default D3Choropleth;
