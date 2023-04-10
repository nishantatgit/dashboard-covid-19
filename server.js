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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _serverConfigs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./serverConfigs */ \"./server/serverConfigs.js\");\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template */ \"./server/template.js\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ \"./server/utils/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ \"./server/constants.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nvar port = _serverConfigs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].port,\n    lang = _serverConfigs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].lang,\n    dir = _serverConfigs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].dir;\nvar countrySelected;\nvar defaultCountry = 'Afghanistan';\nvar joinKey = 'name';\nvar scriptName;\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"]('./public'));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.urlencoded({\n  extended: true,\n  type: '*/*'\n}));\napp.all('/*', function (req, res, next) {\n  res.header('Access-Control-Allow-Origin', '*');\n  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');\n  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');\n  next();\n});\napp.get('/:country_name', function (req, res) {\n  console.log(\"You requested data for \".concat(req.params.country_name, \".\"));\n  countrySelected = req.params.country_name || defaultCountry;\n  scriptName = 'client';\n  res.statusCode = 200;\n  var homePageData = getHomePageData(countrySelected);\n  res.send(getHtml('client', homePageData));\n});\n\nfunction getHomePageData(countrySelected) {\n  var geoJSONPATH = \"./data/\".concat(countrySelected, \".json\");\n  var geoStateJSONPath = \"./data/geojson/states/\".concat(countrySelected, \"-states.json\");\n  var geoJSONDejurePath = \"./data/geojson/dejure/\".concat(countrySelected, \".json\");\n  var stateJSON = '{}';\n\n  if (fs__WEBPACK_IMPORTED_MODULE_4___default.a.existsSync(geoJSONPATH)) {\n    stateJSON = fs__WEBPACK_IMPORTED_MODULE_4___default.a.readFileSync(geoJSONPATH);\n  } else {\n    console.log('No data file found for this');\n  }\n\n  var stateAdmin3LevelJSON = '{}';\n\n  if (fs__WEBPACK_IMPORTED_MODULE_4___default.a.existsSync(geoStateJSONPath)) {\n    stateAdmin3LevelJSON = fs__WEBPACK_IMPORTED_MODULE_4___default.a.readFileSync(geoStateJSONPath);\n  } else {\n    console.log('State Level details not available');\n  }\n\n  var stateJSONDejure;\n\n  if (fs__WEBPACK_IMPORTED_MODULE_4___default.a.existsSync(geoJSONDejurePath)) {\n    stateJSONDejure = fs__WEBPACK_IMPORTED_MODULE_4___default.a.readFileSync(geoJSONDejurePath);\n  }\n\n  var stateGeoJSON = fs__WEBPACK_IMPORTED_MODULE_4___default.a.readFileSync(\"./data/geojson/defacto/\".concat(countrySelected, \".json\"), 'utf-8');\n  var stateObj = JSON.parse(stateJSON);\n  var stateArray = stateObj.list || [];\n  var identifier = stateObj.identifier;\n  var project = stateObj.project;\n  console.log(\"Identifier for this request is \".concat(identifier, \" and project is \").concat(project));\n  var states = [];\n  var normalisedStateData = [];\n\n  if (stateArray.length > 0) {\n    states = _toConsumableArray(stateArray); // let transformedObject = UTILS.boxCoxTransformation(states, project);\n    // normalisedStateData = transformedObject.transformedData;\n\n    normalisedStateData = states;\n  }\n\n  var homePageData = {\n    geoKey: identifier,\n    key: project,\n    stateWiseData: normalisedStateData,\n    stateGeoObj: JSON.parse(stateGeoJSON),\n    stateGeoJSON: JSON.parse(stateAdmin3LevelJSON)\n  };\n\n  if (stateJSONDejure) {\n    homePageData.stateJSONDejure = JSON.parse(stateJSONDejure);\n  }\n\n  return homePageData;\n}\n\nfunction getHtml(scriptName, data) {\n  var html = Object(_template__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(lang, dir, scriptName, data);\n  return html;\n}\n\napp.listen(port);\nconsole.log(\"server listening on port: \".concat(port));\n\n//# sourceURL=webpack:///./server/app.js?");

/***/ }),

/***/ "./server/constants.js":
/*!*****************************!*\
  !*** ./server/constants.js ***!
  \*****************************/
/*! exports provided: NORMALIZATION_METHOD_TYEPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NORMALIZATION_METHOD_TYEPES\", function() { return NORMALIZATION_METHOD_TYEPES; });\nvar NORMALIZATION_METHODS = {\n  MIN_MAX: 'min-max',\n  Z_SCORE: 'z-score',\n  LOG: 'log',\n  BOX_COX: 'box-cox'\n};\nvar NORMALIZATION_METHOD_TYEPES = [NORMALIZATION_METHODS.BOX_COX, NORMALIZATION_METHODS.Z_SCORE, NORMALIZATION_METHODS.LOG, NORMALIZATION_METHODS.MIN_MAX];\n\n//# sourceURL=webpack:///./server/constants.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (lang, dir, scriptName, data) {\n  return \"<!doctype html>\\n<html lang=\\\"\".concat(lang, \"\\\" dir=\\\"\").concat(dir, \"\\\">\\n  <head>\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1\\\">\\n  <link href=\\\"https://fonts.googleapis.com/css2?family=Anton&display=swap\\\" rel=\\\"stylesheet\\\">\\n  </head>\\n  <body>\\n    <div id=\\\"react-app\\\"></div><script> window.__NX__ = \").concat(JSON.stringify(data), \"</script>\\n    <script src=\\\"vendor.js\\\"></script>\\n    <script src=\\\"\").concat(scriptName, \".js\\\"></script>\\n  </body>\\n</html>\");\n});\n\n//# sourceURL=webpack:///./server/template.js?");

/***/ }),

/***/ "./server/utils/boxCoxTransformation.js":
/*!**********************************************!*\
  !*** ./server/utils/boxCoxTransformation.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return boxCoxTransformation; });\n/* harmony import */ var simple_statistics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-statistics */ \"simple-statistics\");\n/* harmony import */ var simple_statistics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(simple_statistics__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction boxCoxTransformation(data, key) {\n  var transformedData = [];\n  var originalValues = data.map(function (obj) {\n    return obj[key];\n  }); // Check for skewness\n\n  var skewnessBefore = simple_statistics__WEBPACK_IMPORTED_MODULE_0___default.a.sampleSkewness(originalValues);\n  var isSkewed = Math.abs(skewnessBefore) > 0.5; // Perform Box-Cox Transformation if data is skewed\n\n  var skewnessAfter;\n  var lambda;\n\n  if (isSkewed) {\n    lambda = simple_statistics__WEBPACK_IMPORTED_MODULE_0___default.a.findBestBoxCox(originalValues);\n\n    for (var i = 0; i < data.length; i++) {\n      var transformedValue = (Math.pow(data[i][key], lambda) - 1) / lambda;\n      data[i][key] = transformedValue;\n      transformedData.push(data[i]);\n    }\n\n    var transformedValues = transformedData.map(function (obj) {\n      return obj[key];\n    });\n    skewnessAfter = simple_statistics__WEBPACK_IMPORTED_MODULE_0___default.a.sampleSkewness(transformedValues);\n  } // Return transformed data and skewness information\n\n\n  return {\n    isSkewed: isSkewed,\n    originalValues: originalValues,\n    transformedData: transformedData,\n    lambda: lambda,\n    skewnessBefore: skewnessBefore,\n    skewnessAfter: skewnessAfter\n  };\n}\n\n//# sourceURL=webpack:///./server/utils/boxCoxTransformation.js?");

/***/ }),

/***/ "./server/utils/index.js":
/*!*******************************!*\
  !*** ./server/utils/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _boxCoxTransformation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boxCoxTransformation */ \"./server/utils/boxCoxTransformation.js\");\n // import normalizeData from './normalizeData';\n\nvar UTILS = {\n  boxCoxTransformation: _boxCoxTransformation__WEBPACK_IMPORTED_MODULE_0__[\"default\"] // normalizeData,\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (UTILS);\n\n//# sourceURL=webpack:///./server/utils/index.js?");

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

/***/ }),

/***/ "simple-statistics":
/*!************************************!*\
  !*** external "simple-statistics" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"simple-statistics\");\n\n//# sourceURL=webpack:///external_%22simple-statistics%22?");

/***/ })

/******/ });