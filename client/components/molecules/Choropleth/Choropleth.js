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
  const updatedFeatures = injectDataToFeatures(stateFeatures, geoData);

  const svgRef = useRef(null);

  const maxValueObj = geoData.data.reduce(function (a, v, i, arr) {
    return a[geoData.key] > v[geoData.key] ? a : v;
  }, Number.NEGATIVE_INFINITY);

  const minValueObj = geoData.data.reduce(function (a, v, i, arr) {
    return a[geoData.key] < v[geoData.key] ? a : v;
  }, Number.POSITIVE_INFINITY);

  console.log('COLORS.choropleth ', COLORS.choropleth);

  // generate color scale
  const color = scaleQuantize()
    .range(COLORS.choropleth.yellowish)
    .domain([minValueObj[geoData.key], maxValueObj[geoData.key]]);

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
          {/* {!dejureFeatures && drawMap()}
          {!!dejureFeatures && drawStatesDejureMap()} */}
          {drawStatesMap()}
        </svg>
      </section>
      <section className="text-container">{writeText()}</section>
      {/* <DownloadWidget svgRef={svgRef} geoName="country" /> */}
    </>
  );

  function drawMap() {
    return features.map((feature, index) => (
      <path
        d={pathFunc(feature)}
        fill="pinkle"
        key={index}
        strokeWidth={0}
      ></path>
    ));
  }

  function drawStatesMap() {
    // geoKey is identifier sent from server
    // key is project (the attribute to be projected) from the server
    const { key, geoKey } = geoData;
    return updatedFeatures.map((feature, idx) => (
      <path
        d={pathFunc(feature)}
        fill={color(feature.properties[key])}
        stroke="#ffffff"
        strokeWidth={0.5}
        key={feature.properties[geoKey]}
        className={`animated-appear-path-${idx + 1}`}
      ></path>
    ));
  }

  function writeText() {
    return updatedFeatures.map((feature, idx) => (
      <span className={`text-box animated-appear-text-${idx + 1}`}>
        {feature.properties.name}
      </span>
    ));
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
    // geoKey is identifier sent from server
    // key is project (the attribute to be projected) from the server

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

    //sort so that it will be added to DOM in that order, lowest number being first and largest being last
    features.sort((f1, f2) => {
      return f1.properties[displayData.key] - f2.properties[displayData.key];
    });

    return features;
  }
}

export default Choropleth;
