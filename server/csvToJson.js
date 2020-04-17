const csvToJson = require('csvtojson');
const fs = require('fs');

function transformerUSStateToJSON(data) {
  if (!(data && Array.isArray(data))) return;
  const returnObject = {};
  data.forEach((node) => {
    const { date, state, fips, cases, deaths } = node;
    if (!returnObject[date]) {
      returnObject[date] = [
        {
          state,
          fips,
          cases,
          deaths,
        },
      ];
    } else {
      returnObject[date].push({
        state,
        fips,
        cases,
        deaths,
      });
    }
  });

  return returnObject;
}

function transformerUSCountyToJSON(data) {
  if (!(data && Array.isArray(data))) return;
  const returnObject = {};
  data.forEach((node) => {
    const { date, state, fips, cases, deaths, county } = node;
    if (!returnObject[date]) {
      returnObject[date] = [
        {
          state,
          county,
          fips,
          cases,
          deaths,
        },
      ];
    } else {
      returnObject[date].push({
        state,
        county,
        fips,
        cases,
        deaths,
      });
    }
  });
  return returnObject;
}

const filePaths = [
  {
    input: '../data/csv/covid19uscounties.csv',
    output: '../data/json/covid19uscounties.json',
  },
  {
    input: '../data/csv/covid19usstates.csv',
    output: '../data/json/covid19usstates.json',
  },
];

const transformer = [transformerUSCountyToJSON, transformerUSStateToJSON];

async function getJson(transformer) {
  filePaths.forEach(async function test(file, index) {
    const inFile = `${__dirname}/${file.input}`;
    const outFile = `${__dirname}/${file.output}`;

    let jsonArray = await csvToJson().fromFile(inFile);

    if (transformer[index] && typeof transformer[index] === 'function') {
      jsonArray = transformer[index](jsonArray) || [];
    }

    //const readable = fs.createReadStream(inFile, { encoding: 'utf8' });
    const writable = fs.createWriteStream(outFile);
    writable.write(JSON.stringify(jsonArray));
    // readable.on('data', function (chunk) {
    //   console.log(chunk);
    //   writable.write(chunk);
    // });
    // readable.pipe(csvToJson()).pipe(writable);
  });
}

getJson(transformer);
