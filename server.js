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

/***/ "./client/actions/hotelIndex.action.js":
/*!*********************************************!*\
  !*** ./client/actions/hotelIndex.action.js ***!
  \*********************************************/
/*! exports provided: SET_INDEX, setIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_INDEX\", function() { return SET_INDEX; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setIndex\", function() { return setIndex; });\n/* harmony import */ var _utilities_makeActionCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/makeActionCreator */ \"./client/utilities/makeActionCreator.js\");\n\nvar SET_INDEX = 'SET_INDEX';\nvar setIndex = Object(_utilities_makeActionCreator__WEBPACK_IMPORTED_MODULE_0__[\"makeActionCreator\"])(SET_INDEX, 'payload');\n\n//# sourceURL=webpack:///./client/actions/hotelIndex.action.js?");

/***/ }),

/***/ "./client/components/molecules/Card/Card.js":
/*!**************************************************!*\
  !*** ./client/components/molecules/Card/Card.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Card_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.scss */ \"./client/components/molecules/Card/Card.scss\");\n/* harmony import */ var _Card_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ \"isomorphic-style-loader/withStyles\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\nvar Card =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Card, _React$Component);\n\n  function Card() {\n    _classCallCheck(this, Card);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Card).apply(this, arguments));\n  }\n\n  _createClass(Card, [{\n    key: \"render\",\n    value: function render() {\n      var className = classnames__WEBPACK_IMPORTED_MODULE_3___default()('card', {\n        'last-class': this.props.lastClass\n      });\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"article\", {\n        className: className\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n        className: \"name h4\"\n      }, this.props.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"city\"\n      }, this.props.city), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"rating\"\n      }, this.props.rating), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: \"no-of-reviews\"\n      }, this.props.reviewCount));\n    }\n  }]);\n\n  return Card;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_2___default()(_Card_scss__WEBPACK_IMPORTED_MODULE_1___default.a)(Card));\n\n//# sourceURL=webpack:///./client/components/molecules/Card/Card.js?");

/***/ }),

/***/ "./client/components/molecules/Card/Card.scss":
/*!****************************************************!*\
  !*** ./client/components/molecules/Card/Card.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/lib/loader.js!./Card.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/molecules/Card/Card.scss\");\n    var insertCss = __webpack_require__(/*! ../../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./client/components/molecules/Card/Card.scss?");

/***/ }),

/***/ "./client/components/organisms/CardList/CardList.actions.js":
/*!******************************************************************!*\
  !*** ./client/components/organisms/CardList/CardList.actions.js ***!
  \******************************************************************/
/*! exports provided: FETCH_CARD_LIST_DATA_FROM_API, SET_CARD_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_CARD_LIST_DATA_FROM_API\", function() { return FETCH_CARD_LIST_DATA_FROM_API; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_CARD_LIST\", function() { return SET_CARD_LIST; });\nvar FETCH_CARD_LIST_DATA_FROM_API = 'FETCH_CARD_LIST_DATA_FROM_API';\nvar SET_CARD_LIST = 'SET_CARD_LIST';\n\n//# sourceURL=webpack:///./client/components/organisms/CardList/CardList.actions.js?");

/***/ }),

/***/ "./client/components/organisms/CardList/CardList.js":
/*!**********************************************************!*\
  !*** ./client/components/organisms/CardList/CardList.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-style-loader/withStyles */ \"isomorphic-style-loader/withStyles\");\n/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _molecules_Card_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../molecules/Card/Card */ \"./client/components/molecules/Card/Card.js\");\n/* harmony import */ var _CardList_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CardList.scss */ \"./client/components/organisms/CardList/CardList.scss\");\n/* harmony import */ var _CardList_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_CardList_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _CardList_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CardList.actions */ \"./client/components/organisms/CardList/CardList.actions.js\");\n/* harmony import */ var _actions_hotelIndex_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../actions/hotelIndex.action */ \"./client/actions/hotelIndex.action.js\");\n/* harmony import */ var _utilities_setIntersectionObserver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utilities/setIntersectionObserver */ \"./client/utilities/setIntersectionObserver.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\n\n\nvar CardList =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(CardList, _React$Component);\n\n  function CardList(props) {\n    var _this;\n\n    _classCallCheck(this, CardList);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(CardList).call(this, props));\n    _this.getHotelIndex = _this.getHotelIndex.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(CardList, [{\n    key: \"componentWillMount\",\n    value: function componentWillMount() {// this.props.getCardListData([1,20]);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"card-menu\"\n      }, this.props.data.map(function (hotel, idx, hotels) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_molecules_Card_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          lastClass: idx === hotels.length - 1,\n          key: hotel.Name,\n          name: hotel.Name,\n          city: hotel.City,\n          rating: hotel.Rating\n        });\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", {\n        id: \"bottom-card-menu\",\n        style: {\n          visibility: 'hidden'\n        }\n      }));\n    }\n  }, {\n    key: \"getHotelIndex\",\n    value: function getHotelIndex() {\n      var hotelDisplayIndex = this.props.hotelDisplayIndex;\n      return hotelDisplayIndex;\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this$props = this.props,\n          getCardListData = _this$props.getCardListData,\n          setHotelIndex = _this$props.setHotelIndex;\n      var getHotelIndex = this.getHotelIndex;\n\n      var onTargetEnter = function onTargetEnter(props) {\n        var hotelIndexArray = getHotelIndex();\n        console.log('hotelIndexArray ', hotelIndexArray);\n        getCardListData(hotelIndexArray);\n        setHotelIndex([1, hotelIndexArray[1] + 20]);\n      };\n\n      Object(_utilities_setIntersectionObserver__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n        rootMargin: '10px'\n      }, 'bottom-card-menu', onTargetEnter);\n    }\n  }]);\n\n  return CardList;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  var data = state.hotels,\n      hotelDisplayIndex = state.hotelDisplayIndex;\n  return {\n    data: data,\n    hotelDisplayIndex: hotelDisplayIndex\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    getCardListData: function getCardListData(hotelDisplayIndex) {\n      return dispatch({\n        type: _CardList_actions__WEBPACK_IMPORTED_MODULE_5__[\"FETCH_CARD_LIST_DATA_FROM_API\"],\n        payload: hotelDisplayIndex\n      });\n    },\n    setHotelIndex: function setHotelIndex(hotelDisplayArray) {\n      return dispatch(Object(_actions_hotelIndex_action__WEBPACK_IMPORTED_MODULE_6__[\"setIndex\"])(hotelDisplayArray));\n    }\n  };\n};\n\nvar StyledCardList = isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1___default()(_CardList_scss__WEBPACK_IMPORTED_MODULE_4___default.a)(CardList);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, mapDispatchToProps)(StyledCardList));\n\n//# sourceURL=webpack:///./client/components/organisms/CardList/CardList.js?");

/***/ }),

/***/ "./client/components/organisms/CardList/CardList.reducer.js":
/*!******************************************************************!*\
  !*** ./client/components/organisms/CardList/CardList.reducer.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return cardListReducer; });\n/* harmony import */ var _CardList_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardList.actions */ \"./client/components/organisms/CardList/CardList.actions.js\");\n\nfunction cardListReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _CardList_actions__WEBPACK_IMPORTED_MODULE_0__[\"SET_CARD_LIST\"]:\n      state = action.payload.slice();\n      return state;\n\n    default:\n      return state;\n  }\n}\n\n//# sourceURL=webpack:///./client/components/organisms/CardList/CardList.reducer.js?");

/***/ }),

/***/ "./client/components/organisms/CardList/CardList.saga.js":
/*!***************************************************************!*\
  !*** ./client/components/organisms/CardList/CardList.saga.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return fetchCardListSaga; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CardList_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardList.actions */ \"./client/components/organisms/CardList/CardList.actions.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../constants */ \"./constants.js\");\nvar _marked =\n/*#__PURE__*/\nregeneratorRuntime.mark(fetchCardListSaga),\n    _marked2 =\n/*#__PURE__*/\nregeneratorRuntime.mark(fetchDataFromAPI);\n\n\n\n\n\nfunction fetchCardListSaga() {\n  return regeneratorRuntime.wrap(function fetchCardListSaga$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_CardList_actions__WEBPACK_IMPORTED_MODULE_2__[\"FETCH_CARD_LIST_DATA_FROM_API\"], fetchDataFromAPI);\n\n        case 2:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _marked);\n}\n\nfunction fetchDataFromAPI(action) {\n  var payload, response;\n  return regeneratorRuntime.wrap(function fetchDataFromAPI$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          payload = action.payload;\n          _context2.next = 3;\n          return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(\"\".concat(_constants__WEBPACK_IMPORTED_MODULE_3__[\"default\"].API_URL, \"/hotels/\").concat(payload[0], \"/\").concat(payload[1]));\n\n        case 3:\n          response = _context2.sent;\n          console.log('data recieved from api server', response.data.length);\n\n          if (!(response.status === 200)) {\n            _context2.next = 8;\n            break;\n          }\n\n          _context2.next = 8;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n            type: _CardList_actions__WEBPACK_IMPORTED_MODULE_2__[\"SET_CARD_LIST\"],\n            payload: response.data\n          });\n\n        case 8:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  }, _marked2);\n}\n\n//# sourceURL=webpack:///./client/components/organisms/CardList/CardList.saga.js?");

/***/ }),

/***/ "./client/components/organisms/CardList/CardList.scss":
/*!************************************************************!*\
  !*** ./client/components/organisms/CardList/CardList.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/lib/loader.js!./CardList.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/organisms/CardList/CardList.scss\");\n    var insertCss = __webpack_require__(/*! ../../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./client/components/organisms/CardList/CardList.scss?");

/***/ }),

/***/ "./client/pages/HomePage/HomePage.js":
/*!*******************************************!*\
  !*** ./client/pages/HomePage/HomePage.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_style_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-style-loader */ \"isomorphic-style-loader\");\n/* harmony import */ var isomorphic_style_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_organisms_CardList_CardList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/organisms/CardList/CardList */ \"./client/components/organisms/CardList/CardList.js\");\n/* harmony import */ var _HomePage_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HomePage.scss */ \"./client/pages/HomePage/HomePage.scss\");\n/* harmony import */ var _HomePage_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_HomePage_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/configureStore */ \"./client/store/configureStore.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\nvar HomePage =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(HomePage, _React$Component);\n\n  function HomePage(props) {\n    _classCallCheck(this, HomePage);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(HomePage).call(this, props));\n  }\n\n  _createClass(HomePage, [{\n    key: \"render\",\n    value: function render() {\n      console.log(this.state);\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_organisms_CardList_CardList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null));\n    }\n  }]);\n\n  return HomePage;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    getCategories: function getCategories() {\n      return dispatch({\n        type: 'GET_CATEGORIES'\n      });\n    }\n  };\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  var hotels = state.hotels;\n  console.log('hotels ', hotels);\n  return {\n    hotels: hotels\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps)(HomePage));\n\n//# sourceURL=webpack:///./client/pages/HomePage/HomePage.js?");

/***/ }),

/***/ "./client/pages/HomePage/HomePage.scss":
/*!*********************************************!*\
  !*** ./client/pages/HomePage/HomePage.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./HomePage.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/pages/HomePage/HomePage.scss\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./client/pages/HomePage/HomePage.scss?");

/***/ }),

/***/ "./client/reducer/hotelIndexReducer.js":
/*!*********************************************!*\
  !*** ./client/reducer/hotelIndexReducer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_hotelIndex_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/hotelIndex.action */ \"./client/actions/hotelIndex.action.js\");\n\n\nvar hotelIndexReducer = function hotelIndexReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_hotelIndex_action__WEBPACK_IMPORTED_MODULE_0__[\"SET_INDEX\"]:\n      console.log('action.payload ', action.payload);\n      return action.payload.slice();\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (hotelIndexReducer);\n\n//# sourceURL=webpack:///./client/reducer/hotelIndexReducer.js?");

/***/ }),

/***/ "./client/reducer/rootReducer.js":
/*!***************************************!*\
  !*** ./client/reducer/rootReducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_organisms_CardList_CardList_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/organisms/CardList/CardList.reducer */ \"./client/components/organisms/CardList/CardList.reducer.js\");\n/* harmony import */ var _hotelIndexReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hotelIndexReducer */ \"./client/reducer/hotelIndexReducer.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  hotels: _components_organisms_CardList_CardList_reducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  hotelDisplayIndex: _hotelIndexReducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}));\n\n//# sourceURL=webpack:///./client/reducer/rootReducer.js?");

/***/ }),

/***/ "./client/saga/getAllSagas.js":
/*!************************************!*\
  !*** ./client/saga/getAllSagas.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_organisms_CardList_CardList_saga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/organisms/CardList/CardList.saga */ \"./client/components/organisms/CardList/CardList.saga.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([_components_organisms_CardList_CardList_saga__WEBPACK_IMPORTED_MODULE_0__[\"default\"]]);\n\n//# sourceURL=webpack:///./client/saga/getAllSagas.js?");

/***/ }),

/***/ "./client/saga/spinSaga.js":
/*!*********************************!*\
  !*** ./client/saga/spinSaga.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (sagaMiddleware, sagas) {\n  if (sagaMiddleware) {\n    return sagas.map(function (saga) {\n      return sagaMiddleware.run(saga);\n    });\n  }\n});\n\n//# sourceURL=webpack:///./client/saga/spinSaga.js?");

/***/ }),

/***/ "./client/store/configureStore.js":
/*!****************************************!*\
  !*** ./client/store/configureStore.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return configureStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./initialState */ \"./client/store/initialState.js\");\n/* harmony import */ var _reducer_rootReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducer/rootReducer */ \"./client/reducer/rootReducer.js\");\n/* harmony import */ var _saga_spinSaga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../saga/spinSaga */ \"./client/saga/spinSaga.js\");\n/* harmony import */ var _saga_getAllSagas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../saga/getAllSagas */ \"./client/saga/getAllSagas.js\");\n\n\n\n\n\n\n\nfunction configureStore() {\n  var sagaMiddleWare = redux_saga__WEBPACK_IMPORTED_MODULE_2___default()();\n  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducer_rootReducer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _initialState__WEBPACK_IMPORTED_MODULE_3__[\"default\"], Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(sagaMiddleWare));\n  store.sagas = Object(_saga_spinSaga__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(sagaMiddleWare, _saga_getAllSagas__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n  return store;\n}\n\n//# sourceURL=webpack:///./client/store/configureStore.js?");

/***/ }),

/***/ "./client/store/initialState.js":
/*!**************************************!*\
  !*** ./client/store/initialState.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  hotelDisplayIndex: [1, 20],\n  hotels: []\n});\n\n//# sourceURL=webpack:///./client/store/initialState.js?");

/***/ }),

/***/ "./client/utilities/makeActionCreator.js":
/*!***********************************************!*\
  !*** ./client/utilities/makeActionCreator.js ***!
  \***********************************************/
/*! exports provided: makeActionCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeActionCreator\", function() { return makeActionCreator; });\nvar makeActionCreator = function makeActionCreator(type) {\n  for (var _len = arguments.length, argNames = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    argNames[_key - 1] = arguments[_key];\n  }\n\n  return function () {\n    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n      args[_key2] = arguments[_key2];\n    }\n\n    var action = {\n      type: type\n    };\n    argNames.forEach(function (arg, index) {\n      console.log('inside makeActionCreator ', args[index]);\n      action[argNames[index]] = args[index];\n    });\n    return action;\n  };\n};\n\n//# sourceURL=webpack:///./client/utilities/makeActionCreator.js?");

/***/ }),

/***/ "./client/utilities/setIntersectionObserver.js":
/*!*****************************************************!*\
  !*** ./client/utilities/setIntersectionObserver.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar setIntersectionObserver = function setIntersectionObserver() {\n  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var target = arguments.length > 1 ? arguments[1] : undefined;\n  var onTargetEntry = arguments.length > 2 ? arguments[2] : undefined;\n  var onTargetLeave = arguments.length > 3 ? arguments[3] : undefined;\n  var _options$rootMargin = options.rootMargin,\n      rootMargin = _options$rootMargin === void 0 ? '0px' : _options$rootMargin,\n      _options$threshold = options.threshold,\n      threshold = _options$threshold === void 0 ? 0 : _options$threshold,\n      _options$root = options.root,\n      root = _options$root === void 0 ? null : _options$root;\n\n  var wrappedCallback = function wrappedCallback(entries) {\n    var isIntersecting = entries[0].isIntersecting;\n\n    if (isIntersecting && onTargetEntry) {\n      onTargetEntry();\n    }\n\n    if (!isIntersecting && onTargetLeave) {\n      onTargetLeave();\n    }\n  };\n\n  var scrollArea = document.getElementById(root) || null;\n  var observer = new IntersectionObserver(wrappedCallback, {\n    root: scrollArea,\n    rootMargin: rootMargin,\n    threshold: threshold\n  });\n  var targetEl = document.getElementById(target);\n  observer.observe(targetEl);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setIntersectionObserver);\n\n//# sourceURL=webpack:///./client/utilities/setIntersectionObserver.js?");

/***/ }),

/***/ "./constants.js":
/*!**********************!*\
  !*** ./constants.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  API_URL: 'http://localhost:4001'\n});\n\n//# sourceURL=webpack:///./constants.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/molecules/Card/Card.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/molecules/Card/Card.scss ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".card {\\n  position: relative;\\n  width: 22%;\\n  height: 300px;\\n  border: 1px solid gray;\\n  border-radius: 5px;\\n  padding: 5px 0.5%;\\n  margin: 15px 0; }\\n  .card .name {\\n    text-align: center;\\n    margin: 10px auto; }\\n  .card .city {\\n    display: block;\\n    text-align: center;\\n    color: grey; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./client/components/molecules/Card/Card.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/organisms/CardList/CardList.scss":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/components/organisms/CardList/CardList.scss ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"body {\\n  max-width: 1200px;\\n  margin: 10px auto; }\\n\\n.card-menu {\\n  display: flex;\\n  flex-wrap: wrap;\\n  flex-direction: row;\\n  justify-content: space-around; }\\n\\n.root {\\n  background-color: black; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./client/components/organisms/CardList/CardList.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/pages/HomePage/HomePage.scss":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./client/pages/HomePage/HomePage.scss ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"body {\\n  max-width: 1200px;\\n  margin: auto; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./client/pages/HomePage/HomePage.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/isomorphic-style-loader/insertCss.js":
/*!***********************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/insertCss.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */\n\n\n\nvar inserted = {};\n\nfunction b64EncodeUnicode(str) {\n  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {\n    return String.fromCharCode(\"0x\" + p1);\n  }));\n}\n\nfunction removeCss(ids) {\n  ids.forEach(function (id) {\n    if (--inserted[id] <= 0) {\n      var elem = document.getElementById(id);\n\n      if (elem) {\n        elem.parentNode.removeChild(elem);\n      }\n    }\n  });\n}\n\nfunction insertCss(styles, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$replace = _ref.replace,\n      replace = _ref$replace === void 0 ? false : _ref$replace,\n      _ref$prepend = _ref.prepend,\n      prepend = _ref$prepend === void 0 ? false : _ref$prepend,\n      _ref$prefix = _ref.prefix,\n      prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;\n\n  var ids = [];\n\n  for (var i = 0; i < styles.length; i++) {\n    var _styles$i = styles[i],\n        moduleId = _styles$i[0],\n        css = _styles$i[1],\n        media = _styles$i[2],\n        sourceMap = _styles$i[3];\n    var id = \"\" + prefix + moduleId + \"-\" + i;\n    ids.push(id);\n\n    if (inserted[id]) {\n      if (!replace) {\n        inserted[id]++;\n        continue;\n      }\n    }\n\n    inserted[id] = 1;\n    var elem = document.getElementById(id);\n    var create = false;\n\n    if (!elem) {\n      create = true;\n      elem = document.createElement('style');\n      elem.setAttribute('type', 'text/css');\n      elem.id = id;\n\n      if (media) {\n        elem.setAttribute('media', media);\n      }\n    }\n\n    var cssText = css;\n\n    if (sourceMap && typeof btoa === 'function') {\n      cssText += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + b64EncodeUnicode(JSON.stringify(sourceMap)) + \"*/\";\n      cssText += \"\\n/*# sourceURL=\" + sourceMap.file + \"?\" + id + \"*/\";\n    }\n\n    if ('textContent' in elem) {\n      elem.textContent = cssText;\n    } else {\n      elem.styleSheet.cssText = cssText;\n    }\n\n    if (create) {\n      if (prepend) {\n        document.head.insertBefore(elem, document.head.childNodes[0]);\n      } else {\n        document.head.appendChild(elem);\n      }\n    }\n  }\n\n  return removeCss.bind(null, ids);\n}\n\nmodule.exports = insertCss;\n//# sourceMappingURL=insertCss.js.map\n\n\n//# sourceURL=webpack:///./node_modules/isomorphic-style-loader/insertCss.js?");

/***/ }),

/***/ "./server/app.js":
/*!***********************!*\
  !*** ./server/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-style-loader/StyleContext */ \"isomorphic-style-loader/StyleContext\");\n/* harmony import */ var isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _serverConfigs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./serverConfigs */ \"./server/serverConfigs.js\");\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./template */ \"./server/template.js\");\n/* harmony import */ var _client_pages_HomePage_HomePage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../client/pages/HomePage/HomePage */ \"./client/pages/HomePage/HomePage.js\");\n/* harmony import */ var _client_store_configureStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../client/store/configureStore */ \"./client/store/configureStore.js\");\n/* harmony import */ var _client_components_organisms_CardList_CardList_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../client/components/organisms/CardList/CardList.actions */ \"./client/components/organisms/CardList/CardList.actions.js\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _client_components_organisms_CardList_CardList_saga__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../client/components/organisms/CardList/CardList.saga */ \"./client/components/organisms/CardList/CardList.saga.js\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _client_reducer_rootReducer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../client/reducer/rootReducer */ \"./client/reducer/rootReducer.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n //runSaga signature\n// runSaga(iterator, {subscribe, dispatch}, [monitor])\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nvar port = _serverConfigs__WEBPACK_IMPORTED_MODULE_8__[\"default\"].port,\n    lang = _serverConfigs__WEBPACK_IMPORTED_MODULE_8__[\"default\"].lang,\n    dir = _serverConfigs__WEBPACK_IMPORTED_MODULE_8__[\"default\"].dir;\nvar store = Object(_client_store_configureStore__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(); //console.log('initialState ', initialState);\n// function * mySaga(){\n//   yield put( {\n//     type : FETCH_CARD_LIST_DATA_FROM_API,\n//     payload: [1,20]\n//   });\n// }\n//mySaga().next();\n\n/*const obj = {\n  dispatch : store.dispatch,\n  getState : store.getState,\n  context: null\n};\n\n\nconst sagaMiddleware = runSaga( obj ,fetchCardListSaga); */\n//console.log('sagaMiddleware ', sagaMiddleware.queue.getTasks());\n\n/*sagaMiddleware.then( function(){\n  console.log('resolved');\n}, function(){\n  console.log('rejected');\n})*/\n\nvar css = new Set(); // CSS for all rendered React components\n\nvar insertCss = function insertCss() {\n  for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {\n    styles[_key] = arguments[_key];\n  }\n\n  styles.forEach(function (style) {\n    css.add(style._getCss());\n  });\n};\n\nvar content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_7__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"Provider\"], {\n  store: store\n}, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_6___default.a.Provider, {\n  value: {\n    insertCss: insertCss\n  }\n}, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_client_pages_HomePage_HomePage__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null))));\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static(\"./public\"));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.urlencoded({\n  extended: true\n}));\napp.all(\"/*\", function (req, res, next) {\n  res.header(\"Access-Control-Allow-Origin\", \"*\");\n  res.header(\"Access-Control-Allow-Methods\", \"GET,PUT,POST,DELETE,OPTIONS\");\n  res.header(\"Access-Control-Allow-Headers\", \"Content-type,Accept,X-Access-Token,X-Key\");\n  next();\n});\napp.get(\"/\", function (req, res) {\n  var allTasks = store.sagas;\n  store.dispatch(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"END\"]);\n  console.log(\"allTasks: \", allTasks[0].toPromise());\n  Promise.all(allTasks.map(function (task) {\n    return task.toPromise();\n  })).then(function () {\n    console.log(\"store state \", store.getState());\n    res.send(Object(_template__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(lang, dir, content, css));\n  }); // store.dispatch({\n  //   type : FETCH_CARD_LIST_DATA_FROM_API,\n  //   payload: [1,20]\n  // });\n  // console.log('store state ', store.getState());\n  // setTimeout(function(){\n  //   console.log('store state ', store.getState());\n  // },5000);\n  // res.send(template(lang, dir, content, css));\n});\napp.listen(port);\nconsole.log(\"server listening on port: \".concat(port));\n/*[dispatch(fetchCountries())]\n    .map(async actions => await Promise.all(\n      (actions || []).map(p => p && new Promise(resolve => p.then(resolve).catch(resolve)))\n      )\n    );*/\n//  new Promise()\n\n//# sourceURL=webpack:///./server/app.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (lang, dir) {\n  var content = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'test server side rendering';\n  var css = arguments.length > 3 ? arguments[3] : undefined;\n  return \"<!doctype html>\\n<html lang=\\\"\".concat(lang, \"\\\" dir=\\\"\").concat(dir, \"\\\">\\n  <head>\\n    <link rel=\\\"stylesheet\\\" href=\\\"simple-grid.css\\\"></link>\\n    <style>\").concat(_toConsumableArray(css).join(''), \"</style>\\n  </head>\\n  <body>\\n    <div id=\\\"react-app\\\">\").concat(content, \"</div>\\n    <script src=\\\"client.js\\\"></script>\\n  </body>\\n</html>\");\n});\n\n//# sourceURL=webpack:///./server/template.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");\n\n//# sourceURL=webpack:///external_%22classnames%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "isomorphic-style-loader":
/*!******************************************!*\
  !*** external "isomorphic-style-loader" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-style-loader\");\n\n//# sourceURL=webpack:///external_%22isomorphic-style-loader%22?");

/***/ }),

/***/ "isomorphic-style-loader/StyleContext":
/*!*******************************************************!*\
  !*** external "isomorphic-style-loader/StyleContext" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-style-loader/StyleContext\");\n\n//# sourceURL=webpack:///external_%22isomorphic-style-loader/StyleContext%22?");

/***/ }),

/***/ "isomorphic-style-loader/withStyles":
/*!*****************************************************!*\
  !*** external "isomorphic-style-loader/withStyles" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-style-loader/withStyles\");\n\n//# sourceURL=webpack:///external_%22isomorphic-style-loader/withStyles%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga\");\n\n//# sourceURL=webpack:///external_%22redux-saga%22?");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga/effects\");\n\n//# sourceURL=webpack:///external_%22redux-saga/effects%22?");

/***/ })

/******/ });