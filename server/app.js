import express from 'express';
import bodyParser from 'body-parser';
import configs from './serverConfigs';
import template from './template';
import fs from 'fs';
import path from 'path';
import * as d3 from 'd3';

const app = express();
const { port, lang, dir } = configs;

let scriptName;
app.use(express.static('./public'));

app.use(
  bodyParser.urlencoded({
    extended: true,
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

app.get('/', function (req, res) {
  console.log('request recieved...');
  scriptName = 'client';
  res.statusCode = 200;
  res.send(getHtml('client'));
});

app.get('/usa', function (req, res) {
  console.log('request recieved for usa');
  scriptName = 'america';
  res.statusCode = 200;
  res.send(getHtml('america'));
});

// read the json data once before starting the server

let data = fs.readFileSync(`./data/covid19india.json`, 'utf-8');
let stateJSON = fs.readFileSync(`./data/covid19states.json`, 'utf-8');
let stateGeoJSON = fs.readFileSync(`./data/geojson/india_test.json`, 'utf-8');
let usData = fs.readFileSync(`./data/json/covid19usstates.json`, 'utf-8');
data = data && JSON.parse(data);
const stateWiseData = {};
const stateData = data.forEach((node) => {
  // current state values --> Recovered, Hospitalized, Deceased
  const currentState = node['Detected State'];
  if (!stateWiseData[currentState]) {
    stateWiseData[currentState] = {
      State: currentState,
      Recovered: 0,
      Hospitalized: 0,
      Deceased: 0,
      'Total Cases': 0,
    };
  }

  const currentStateData = stateWiseData[currentState];
  currentStateData[node['Current Status']] =
    currentStateData[node['Current Status']] + 1;
  currentStateData['Total Cases'] = currentStateData['Total Cases'] + 1;
  stateWiseData[currentState] = currentStateData;
});

//console.log('stateWiseData ', stateWiseData);

let stateObj = JSON.parse(stateJSON);
let states = stateObj.map((v) => ({
  State: v.State,
  Deaths: v.Deaths,
  Recovered: v.Recovered,
  Active: v.Active,
  Confirmed: v.Confirmed,
}));
//console.log('data ', data);
//console.log('geoJSON', stateGeoJSON);
function getHtml(scriptName) {
  const html = template(lang, dir, scriptName, {
    data,
    stateWiseData: states,
    stateGeoObj: JSON.parse(stateGeoJSON),
    usData: JSON.parse(usData),
  });

  return html;
}

app.listen(port);

console.log(`server listening on port: ${port}`);
