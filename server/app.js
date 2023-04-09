import express from 'express';
import bodyParser from 'body-parser';
import configs from './serverConfigs';
import template from './template';
import fs from 'fs';

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

  let stateJSON = '{}';

  if (fs.existsSync(geoJSONPATH)) {
    stateJSON = fs.readFileSync(geoJSONPATH);
  } else {
    console.log('No file found for this');
  }

  let stateAdmin3LevelJSON = '{}';

  if (fs.existsSync(geoStateJSONPath)) {
    stateAdmin3LevelJSON = fs.readFileSync(geoStateJSONPath);
  } else {
    console.log('State Level details not available');
  }

  let stateGeoJSON = fs.readFileSync(
    `./data/geojson/${countrySelected}.json`,
    'utf-8'
  );

  let stateObj = JSON.parse(stateJSON);
  let stateArray = stateObj.list || [];
  let states = stateArray.map((v) => ({
    [joinKey]: v[stateObj.identifier],
    State: v[stateObj.identifier],
    Deaths: v.Deaths,
    Recovered: v.Recovered,
    Active: v.Active,
    Confirmed: v.Confirmed,
    POPULATION: v.POPULATION,
  }));

  const homePageData = {
    geoKey: joinKey,
    key: 'POPULATION',
    stateWiseData: states,
    stateGeoObj: JSON.parse(stateGeoJSON),
    stateGeoJSON: JSON.parse(stateAdmin3LevelJSON),
  };

  return homePageData;
}

function getHtml(scriptName, data) {
  const html = template(lang, dir, scriptName, data);

  return html;
}

app.listen(port);

console.log(`server listening on port: ${port}`);
