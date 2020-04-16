import React from 'react';
import { geoMercator, geoPath } from 'd3-geo';
import { scaleQuantize } from 'd3-scale';
import './Choropleth.scss';
import { SVG, COLORS } from '../../../constants';

function Choropleth(props) {
  const { data } = props;
  const { geoData, geoJSON } = data;
  const { features } = geoJSON;

  const { height: mapHeight, width: mapWidth, viewBox, strokeWidth } = SVG;
  const updatedFeatures = injectDataToFeatures(features, geoData);

  // generate color scale
  const color = scaleQuantize()
    .range(COLORS.choropleth)
    .domain([0, geoData.data[0][geoData.key]]);

  const projection = geoMercator().fitSize([mapWidth, mapHeight], geoJSON);
  const pathFunc = geoPath().projection(projection);

  return (
    <section className="choropleth-map-container">
      <svg viewBox={viewBox} stroke={COLORS.white} strokeWidth={strokeWidth}>
        {drawMap()}
      </svg>
    </section>
  );

  function drawMap() {
    const { key, geoKey } = geoData;
    return updatedFeatures.map((feature) => (
      <path
        d={pathFunc(feature)}
        fill={color(feature.properties[key])}
        key={feature.properties[geoKey]}
      ></path>
    ));
  }

  function injectDataToFeatures(features, geoData) {
    const { geoKey: key, data } = geoData;
    features.forEach((feature) => {
      const correspondingData = data.filter(
        (item) => item[key] === feature.properties[key]
      )[0];

      if (correspondingData) {
        const dataKeys = Object.keys(correspondingData);

        dataKeys.forEach(
          (key) => (feature.properties[key] = correspondingData[key])
        );
      }
    });
    return features;
  }
}

export default Choropleth;
