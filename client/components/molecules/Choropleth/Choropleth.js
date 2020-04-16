import React from 'react';
import * as d3 from 'd3';
import './Choropleth.scss';
import { SVG, COLORS } from '../../../constants';
import { useEffect } from 'react';

function Choropleth(props) {
  const { data } = props;
  const { geoData, geoJSON } = data;
  const { features } = geoJSON;
  const { height: mapHeight, width: mapWidth, viewBox } = SVG;
  const updatedFeatures = injectDataToFeatures(features, geoData);

  const color = d3
    .scaleQuantize()
    .range(COLORS.choropleth)
    .domain([0, geoData.data[0][geoData.key]]);
  const projection = d3.geoMercator().fitSize([mapWidth, mapHeight], geoJSON);
  const pathFunc = d3.geoPath().projection(projection);
  return (
    <section className="choropleth-map-container">
      <svg viewBox={viewBox} stroke={COLORS.white} strokeWidth={0.5}>
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
