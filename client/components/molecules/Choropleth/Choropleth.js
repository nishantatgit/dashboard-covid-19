import React from 'react';
import { geoMercator, geoPath } from 'd3-geo';
import { scaleQuantize } from 'd3-scale';
import './Choropleth.scss';
import { SVG, COLORS } from '../../../constants';

function Choropleth(props) {
  const { data } = props;
  const { geoData, geoJSON, stateGeoJSON } = data;
  const { features } = geoJSON;
  const { features: stateFeatures } = stateGeoJSON;

  const { height: mapHeight, width: mapWidth, viewBox, strokeWidth } = SVG;
  const updatedFeatures = injectDataToFeatures(features, geoData);

  const maxValueObj = geoData.data.reduce(function (a, v, i, arr) {
    return a[geoData.key] > v[geoData.key] ? a : v;
  }, 1);

  console.log(' maxValueObj ', maxValueObj);
  // generate color scale
  const color = scaleQuantize()
    .range(COLORS.choropleth)
    .domain([0, maxValueObj[geoData.key]]);

  const projection = geoMercator().fitSize([mapWidth, mapHeight], geoJSON);
  const pathFunc = geoPath().projection(projection);

  return (
    <section className="choropleth-map-container">
      <svg viewBox={viewBox} stroke={COLORS.white} strokeWidth={strokeWidth}>
        {drawMap()}
        {drawStatesMap()}
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

  function drawStatesMap() {
    return stateFeatures.map((feature, index) => {
      {
        console.log('drawStatesMap ', feature);
      }
      return (
        <path
          d={pathFunc(feature)}
          fill="pinkle"
          stroke="#ffffff"
          strokeWidth={0.2}
          key={index}
        ></path>
      );
    });
  }

  function injectDataToFeatures(features, displayData) {
    console.log('features -- ', features);
    console.log('display data ', displayData);
    const { geoKey: key, data } = displayData;
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
    console.log('features ', features);
    return features;
  }
}

export default Choropleth;
