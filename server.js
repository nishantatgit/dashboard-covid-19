/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/app.js":
/*!***********************!*\
  !*** ./server/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _serverConfigs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./serverConfigs */ \"./server/serverConfigs.js\");\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template */ \"./server/template.js\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_4__);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nvar port = _serverConfigs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].port,\n    lang = _serverConfigs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].lang,\n    dir = _serverConfigs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].dir;\nvar countrySelected;\nvar defaultCountry = 'Afghanistan';\nvar joinKey = 'name';\nvar scriptName;\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"]('./public'));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.urlencoded({\n  extended: true\n}));\napp.all('/*', function (req, res, next) {\n  res.header('Access-Control-Allow-Origin', '*');\n  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');\n  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');\n  next();\n});\napp.get('/:country_name', function (req, res) {\n  console.log(\"You requested data for \".concat(req.params.country_name, \".\"));\n  countrySelected = req.params.country_name || defaultCountry;\n  scriptName = 'client';\n  res.statusCode = 200;\n  var homePageData = getHomePageData(countrySelected);\n  res.send(getHtml('client', homePageData));\n});\n\nfunction getHomePageData(countrySelected) {\n  var geoJSONPATH = \"./data/\".concat(countrySelected, \".json\");\n  var geoStateJSONPath = \"./data/geojson/states/\".concat(countrySelected, \"-states.json\");\n  var geoJSONDejurePath = \"./data/geojson/dejure/\".concat(countrySelected, \".json\");\n  var stateJSON = '{}';\n\n  if (fs__WEBPACK_IMPORTED_MODULE_4___default.a.existsSync(geoJSONPATH)) {\n    stateJSON = fs__WEBPACK_IMPORTED_MODULE_4___default.a.readFileSync(geoJSONPATH);\n  } else {\n    console.log('No file found for this');\n  }\n\n  var stateAdmin3LevelJSON = '{}';\n\n  if (fs__WEBPACK_IMPORTED_MODULE_4___default.a.existsSync(geoStateJSONPath)) {\n    stateAdmin3LevelJSON = fs__WEBPACK_IMPORTED_MODULE_4___default.a.readFileSync(geoStateJSONPath);\n  } else {\n    console.log('State Level details not available');\n  }\n\n  var stateJSONDejure;\n\n  if (fs__WEBPACK_IMPORTED_MODULE_4___default.a.existsSync(geoJSONDejurePath)) {\n    stateJSONDejure = fs__WEBPACK_IMPORTED_MODULE_4___default.a.readFileSync(geoJSONDejurePath);\n  }\n\n  var stateGeoJSON = fs__WEBPACK_IMPORTED_MODULE_4___default.a.readFileSync(\"./data/geojson/defacto/\".concat(countrySelected, \".json\"), 'utf-8');\n  var stateObj = JSON.parse(stateJSON);\n  var stateArray = stateObj.list || [];\n  var states = stateArray.map(function (v) {\n    var _ref;\n\n    return _ref = {}, _defineProperty(_ref, joinKey, v[stateObj.identifier]), _defineProperty(_ref, \"State\", v[stateObj.identifier]), _defineProperty(_ref, \"Deaths\", v.Deaths), _defineProperty(_ref, \"Recovered\", v.Recovered), _defineProperty(_ref, \"Active\", v.Active), _defineProperty(_ref, \"Confirmed\", v.Confirmed), _defineProperty(_ref, \"POPULATION\", v.POPULATION), _ref;\n  });\n  var homePageData = {\n    geoKey: joinKey,\n    key: 'POPULATION',\n    stateWiseData: states,\n    stateGeoObj: JSON.parse(stateGeoJSON),\n    stateGeoJSON: JSON.parse(stateAdmin3LevelJSON)\n  };\n\n  if (stateJSONDejure) {\n    homePageData.stateJSONDejure = JSON.parse(stateJSONDejure);\n  }\n\n  return homePageData;\n}\n\nfunction getHtml(scriptName, data) {\n  var html = Object(_template__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(lang, dir, scriptName, data);\n  return html;\n}\n\napp.listen(port);\nconsole.log(\"server listening on port: \".concat(port));\n\n//# sourceURL=webpack:///./server/app.js?");

/***/ }),

/***/ "./server/serverConfigs.js":
/*!*********************************!*\
  !*** ./server/serverConfigs.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  port: 9001,\n  lang: 'en',\n  dir: 'ltr'\n});\n\n//# sourceURL=webpack:///./server/serverConfigs.js?");

/***/ }),

/***/ "./server/template.js":
/*!****************************!*\
  !*** ./server/template.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (lang, dir, scriptName, data) {\n  return \"<!doctype html>\\n<html lang=\\\"\".concat(lang, \"\\\" dir=\\\"\").concat(dir, \"\\\">\\n  <head>\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1\\\">\\n    <link rel=\\\"stylesheet\\\" href=\\\"simple-grid.css\\\"></link>\\n    <link\\n  rel=\\\"stylesheet\\\"\\n  href=\\\"https://fonts.googleapis.com/icon?family=Material+Icons\\\"\\n/>\\n    <style></style>\\n  </head>\\n  <body>\\n    <div id=\\\"react-app\\\"></div>\\n    <script> window.__NX__ = \").concat(JSON.stringify(data), \"</script>\\n    <script src=\\\"vendor.js\\\"></script>\\n    <script src=\\\"\").concat(scriptName, \".js\\\"></script>\\n  </body>\\n</html>\");\n});\n\n//# sourceURL=webpack:///./server/template.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ })

/******/ });