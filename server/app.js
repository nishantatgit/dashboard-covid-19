import express from 'express';
import bodyParser from 'body-parser';
import configs from './serverConfigs';
import template from './template';
import fs from 'fs';
import UTILS from './utils';
import { NORMALIZATION_METHOD_TYEPES } from './constants';

const app = express();
const { port, lang, dir } = configs;

let countrySelected;
const defaultCountry = 'Afghanistan';
const joinKey = 'name';

let scriptName;
app.use(express.static('./public'));

app.use(
  bodyParser.urlencoded({
    extended: true,
    type: '*/*',
  })
);

app.all('/*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Content-type,Accept,X-Access-Token,X-Key'
  );
  next();
});

app.get('/:country_name', function (req, res) {
  console.log(`You requested data for ${req.params.country_name}.`);
  countrySelected = req.params.country_name || defaultCountry;
  scriptName = 'client';
  res.statusCode = 200;
  const homePageData = getHomePageData(countrySelected);
  res.send(getHtml('client', homePageData));
});

function getHomePageData(countrySelected) {
  const geoJSONPATH = `./data/${countrySelected}.json`;
  const geoStateJSONPath = `./data/geojson/states/${countrySelected}-states.json`;
  const geoJSONDejurePath = `./data/geojson/dejure/${countrySelected}.json`;

  let stateJSON = '{}';

  if (fs.existsSync(geoJSONPATH)) {
    stateJSON = fs.readFileSync(geoJSONPATH);
  } else {
    console.log('No data file found for this');
  }

  let stateAdmin3LevelJSON = '{}';

  if (fs.existsSync(geoStateJSONPath)) {
    stateAdmin3LevelJSON = fs.readFileSync(geoStateJSONPath);
  } else {
    console.log('State Level details not available');
  }

  let stateJSONDejure;

  if (fs.existsSync(geoJSONDejurePath)) {
    stateJSONDejure = fs.readFileSync(geoJSONDejurePath);
  }

  let stateGeoJSON = fs.readFileSync(
    `./data/geojson/defacto/${countrySelected}.json`,
    'utf-8'
  );

  let stateObj = JSON.parse(stateJSON);
  let stateArray = stateObj.list || [];
  let identifier = stateObj.identifier;
  let project = stateObj.project;
  console.log(
    `Identifier for this request is ${identifier} and project is ${project}`
  );
  let states = [];
  let normalisedStateData = [];

  if (stateArray.length > 0) {
    states = [...stateArray];
    // let transformedObject = UTILS.boxCoxTransformation(states, project);
    // normalisedStateData = transformedObject.transformedData;
    normalisedStateData = states;
  }

  const homePageData = {
    geoKey: identifier,
    key: project,
    stateWiseData: normalisedStateData,
    stateGeoObj: JSON.parse(stateGeoJSON),
    stateGeoJSON: JSON.parse(stateAdmin3LevelJSON),
  };

  if (stateJSONDejure) {
    homePageData.stateJSONDejure = JSON.parse(stateJSONDejure);
  }

  return homePageData;
}

function getHtml(scriptName, data) {
  const html = template(lang, dir, scriptName, data);

  return html;
}

app.listen(port);

console.log(`server listening on port: ${port}`);
