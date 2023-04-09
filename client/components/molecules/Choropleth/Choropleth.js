import React, { useRef } from 'react';
import { geoMercator, geoPath } from 'd3-geo';
import { scaleQuantize } from 'd3-scale';
import DownloadWidget from '../DownloadWidget/DownloadWidget';
import './Choropleth.scss';
import { SVG, COLORS } from '../../../constants';

function Choropleth(props) {
  const { data } = props;
  const { geoData, geoJSON, stateGeoJSON, stateJSONDejure = {} } = data;
  const { features } = geoJSON;
  const { features: stateFeatures } = stateGeoJSON;
  const { features: dejureFeatures } = stateJSONDejure;

  const { height: mapHeight, width: mapWidth, viewBox, strokeWidth } = SVG;
  const updatedFeatures = injectDataToFeatures(features, geoData);

  const svgRef = useRef(null);

  const maxValueObj = geoData.data.reduce(function (a, v, i, arr) {
    return a[geoData.key] > v[geoData.key] ? a : v;
  }, 1);

  // generate color scale
  const color = scaleQuantize()
    .range(COLORS.choropleth)
    .domain([0, maxValueObj[geoData.key]]);

  const projection = geoMercator().fitSize([mapWidth, mapHeight], geoJSON);
  const pathFunc = geoPath().projection(projection);

  return (
    <>
      <section className="choropleth-map-container">
        <svg
          ref={svgRef}
          viewBox={viewBox}
          stroke="#cf5252"
          fill="#cf5272"
          xmlns="http://www.w3.org/2000/svg"
        >
          {!dejureFeatures && drawMap()}
          {!!dejureFeatures && drawStatesDejureMap()}
          {drawStatesMap()}
        </svg>
      </section>
      <DownloadWidget svgRef={svgRef} geoName="country" />
    </>
  );

  function drawMap() {
    const { key, geoKey } = geoData;
    return updatedFeatures.map((feature) => (
      <path
        d={pathFunc(feature)}
        fill={color(feature.properties[key])}
        key={feature.properties[geoKey]}
        strokeWidth={0}
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
          strokeWidth={0.5}
          key={index}
        ></path>
      );
    });
  }

  function drawStatesDejureMap() {
    return dejureFeatures.map((feature, index) => {
      return (
        <path
          d={pathFunc(feature)}
          fill="pinkle"
          stroke="#ffffff"
          strokeWidth={0}
          key={index}
        ></path>
      );
    });
  }

  function injectDataToFeatures(features, displayData) {
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
    return features;
  }
}

export default Choropleth;
