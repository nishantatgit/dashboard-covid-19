const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const port = 4001;
const app = express();

const fs = require("fs");

let hotelData;

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.all("/*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-type,Accept,X-Access-Token,X-Key"
  );
  next();
});

app.get("/", function(req, res) {
  console.log("request recieved ....");
  fs.readFile("eurohotels.json", "utf8", function(err, data) {
    if (err) throw err;
    res.send(data);
  });
});

app.get("/hotels/:from/:to", function(req, res) {
  let { from, to } = req.params;

  fs.readFile("eurohotels.json", "utf8", function(err, data) {
    if (err) throw err;
    res.send(JSON.stringify(JSON.parse(data).slice(from, ++to)));
  });
});

app.get("/ratings/:from/:to", function(req, res) {
  let { from, to } = req.params;

  let hotelsData;

  fs.readFile("eurohotels.json", "utf8", function(err, data) {
    if (err) throw err;
    hotelsData = sortByRating(JSON.parse(data));
    slicedData = hotelsData.slice(from, ++to);
    console.log("returned array length ", slicedData.length);
    slicedData.forEach(val => {
      console.log(val.Name);
    });
    res.send(JSON.stringify(slicedData));
  });
});

app.listen(port);

console.log(`server listening on port: ${port}`);
