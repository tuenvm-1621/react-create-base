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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/actions/leagueTable.js":
/*!*******************************************!*\
  !*** ./src/client/actions/leagueTable.js ***!
  \*******************************************/
/*! exports provided: getLeagueTable, saveLeagueTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLeagueTable\", function() { return getLeagueTable; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveLeagueTable\", function() { return saveLeagueTable; });\n/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-actions */ \"redux-actions\");\n/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./src/client/constants/index.js\");\n\n\nconst {\n  getLeagueTable,\n  saveLeagueTable\n} = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__[\"createActions\"])({\n  [_constants__WEBPACK_IMPORTED_MODULE_1__[\"ActionTypes\"].GET_LEAGUE_TABLE]: function (leagueId) {\n    return leagueId;\n  },\n  [_constants__WEBPACK_IMPORTED_MODULE_1__[\"ActionTypes\"].SAVE_LEAGUE_TABLE]: function (payload) {\n    return payload;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/actions/leagueTable.js?");

/***/ }),

/***/ "./src/client/components/Child.js":
/*!****************************************!*\
  !*** ./src/client/components/Child.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _premierLeague__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./premierLeague */ \"./src/client/components/premierLeague.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"English Premier League Table\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_premierLeague__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    league: \"Premier League\",\n    leagueId: 524\n  }));\n});\n\n//# sourceURL=webpack:///./src/client/components/Child.js?");

/***/ }),

/***/ "./src/client/components/index.js":
/*!****************************************!*\
  !*** ./src/client/components/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist/integration/react */ \"redux-persist/integration/react\");\n/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Child__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Child */ \"./src/client/components/Child.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ \"./src/client/store/index.js\");\n\n\n\n\n\nconst {\n  store,\n  persistor\n} = Object(_store__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"Provider\"], {\n    store: store\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Child__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null));\n});\n\n//# sourceURL=webpack:///./src/client/components/index.js?");

/***/ }),

/***/ "./src/client/components/premierLeague.js":
/*!************************************************!*\
  !*** ./src/client/components/premierLeague.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actions_leagueTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/leagueTable */ \"./src/client/actions/leagueTable.js\");\n/* harmony import */ var _selectors_leagueTableSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../selectors/leagueTableSelector */ \"./src/client/selectors/leagueTableSelector.js\");\n\n\n\n\n\nconst League = function ({\n  leagueId,\n  leagueTable,\n  getLeagueTable\n}) {\n  debugger;\n  console.log('I AM HERE', react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    console.log('AAAAAA');\n    getLeagueTable({\n      leagueId\n    });\n  }, []);\n\n  if (typeof window !== `undefined`) {\n    console.log('GEK');\n    Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n      console.log('BBBBBB');\n      getLeagueTable({\n        leagueId\n      });\n    }, []);\n  }\n\n  console.log(leagueTable);\n  debugger;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, leagueTable.api.standings[0].map(function (team) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: team.rank\n    }, team.teamName);\n  })); // return (\n  //   <div>\n  //     SERVERSIDE RENDERING\n  //   </div>\n  // );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(_selectors_leagueTableSelector__WEBPACK_IMPORTED_MODULE_3__[\"leagueTableSelector\"], {\n  getLeagueTable: _actions_leagueTable__WEBPACK_IMPORTED_MODULE_2__[\"getLeagueTable\"]\n})(League));\n\n//# sourceURL=webpack:///./src/client/components/premierLeague.js?");

/***/ }),

/***/ "./src/client/constants/index.js":
/*!***************************************!*\
  !*** ./src/client/constants/index.js ***!
  \***************************************/
/*! exports provided: ActionTypes, FOOTBALL_API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ActionTypes\", function() { return ActionTypes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FOOTBALL_API\", function() { return FOOTBALL_API; });\n/* harmony import */ var fbjs_lib_keyMirror__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fbjs/lib/keyMirror */ \"fbjs/lib/keyMirror\");\n/* harmony import */ var fbjs_lib_keyMirror__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_keyMirror__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ActionTypes = fbjs_lib_keyMirror__WEBPACK_IMPORTED_MODULE_0___default()({\n  GET_LEAGUE_TABLE: undefined,\n  SAVE_LEAGUE_TABLE: undefined\n});\nconst FOOTBALL_API = 'https://api-football-v1.p.rapidapi.com/v2';\n\n//# sourceURL=webpack:///./src/client/constants/index.js?");

/***/ }),

/***/ "./src/client/reducers/index.js":
/*!**************************************!*\
  !*** ./src/client/reducers/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _leagueTableReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leagueTableReducer */ \"./src/client/reducers/leagueTableReducer.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  leagueTable: _leagueTableReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}));\n\n//# sourceURL=webpack:///./src/client/reducers/index.js?");

/***/ }),

/***/ "./src/client/reducers/leagueTableReducer.js":
/*!***************************************************!*\
  !*** ./src/client/reducers/leagueTableReducer.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-actions */ \"redux-actions\");\n/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions_leagueTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/leagueTable */ \"./src/client/actions/leagueTable.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__[\"handleActions\"])({\n  [_actions_leagueTable__WEBPACK_IMPORTED_MODULE_1__[\"saveLeagueTable\"]]: function (state, action) {\n    return { ...state,\n      ...action.payload\n    };\n  }\n}, {}));\n\n//# sourceURL=webpack:///./src/client/reducers/leagueTableReducer.js?");

/***/ }),

/***/ "./src/client/sagas/index.js":
/*!***********************************!*\
  !*** ./src/client/sagas/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _leagueTableSaga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leagueTableSaga */ \"./src/client/sagas/leagueTableSaga.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function* () {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(_leagueTableSaga__WEBPACK_IMPORTED_MODULE_1__[\"default\"])]);\n});\n\n//# sourceURL=webpack:///./src/client/sagas/index.js?");

/***/ }),

/***/ "./src/client/sagas/leagueTableSaga.js":
/*!*********************************************!*\
  !*** ./src/client/sagas/leagueTableSaga.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions_leagueTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/leagueTable */ \"./src/client/actions/leagueTable.js\");\n/* harmony import */ var _services_leagueTableApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/leagueTableApi */ \"./src/client/services/leagueTableApi.js\");\n\n\n\n\nfunction* getLeagueTableSaga(action) {\n  console.log(action);\n  debugger;\n\n  try {\n    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])([_services_leagueTableApi__WEBPACK_IMPORTED_MODULE_2__[\"LeagueTableApi\"], _services_leagueTableApi__WEBPACK_IMPORTED_MODULE_2__[\"LeagueTableApi\"].getLeagueTable], action.payload);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])(Object(_actions_leagueTable__WEBPACK_IMPORTED_MODULE_1__[\"saveLeagueTable\"])(response.data));\n  } catch (e) {\n    // do nothing\n    console.log(action);\n    debugger;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function* () {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_actions_leagueTable__WEBPACK_IMPORTED_MODULE_1__[\"getLeagueTable\"], getLeagueTableSaga)]);\n});\n\n//# sourceURL=webpack:///./src/client/sagas/leagueTableSaga.js?");

/***/ }),

/***/ "./src/client/selectors/leagueTableSelector.js":
/*!*****************************************************!*\
  !*** ./src/client/selectors/leagueTableSelector.js ***!
  \*****************************************************/
/*! exports provided: selector, leagueTableSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selector\", function() { return selector; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"leagueTableSelector\", function() { return leagueTableSelector; });\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ \"reselect\");\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);\n\nconst selector = function (state) {\n  return state.leagueTable;\n};\nconst leagueTableSelector = function (state) {\n  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__[\"createSelector\"])(selector, function (leagueTable) {\n    return {\n      leagueTable: leagueTable || {}\n    };\n  })(state);\n};\n\n//# sourceURL=webpack:///./src/client/selectors/leagueTableSelector.js?");

/***/ }),

/***/ "./src/client/services/leagueTableApi.js":
/*!***********************************************!*\
  !*** ./src/client/services/leagueTableApi.js ***!
  \***********************************************/
/*! exports provided: LeagueTableApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LeagueTableApi\", function() { return LeagueTableApi; });\n/* harmony import */ var _v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v1 */ \"./src/client/services/v1.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nclass LeagueTable extends _v1__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(...args) {\n    var _this;\n\n    super(...args);\n    _this = this;\n\n    _defineProperty(this, \"getLeagueTable\", function (params) {\n      const {\n        leagueId\n      } = params;\n      return _this.client.get(`/leagueTable/${leagueId}`);\n    });\n  }\n\n}\n\nconst LeagueTableApi = new LeagueTable();\n\n//# sourceURL=webpack:///./src/client/services/leagueTableApi.js?");

/***/ }),

/***/ "./src/client/services/v1.js":
/*!***********************************!*\
  !*** ./src/client/services/v1.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return V1; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ \"./src/client/constants/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconst DEFAULT_API_CONFIG = {\n  baseURL: _constants__WEBPACK_IMPORTED_MODULE_2__[\"FOOTBALL_API\"],\n  timeout: 30000,\n  apiVersion: 'v1',\n  headers: {\n    'X-RapidAPI-Key': 'nXQoIhbW6FmshLRcYL1P8vGm8r8vp1MbUu6jsn1P7usxJ4pht0'\n  }\n};\n\nfunction deepMapKeys(obj, mapFunc) {\n  return Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"transform\"])(obj, function (r, v, k) {\n    let value = v;\n\n    if (v instanceof Array) {\n      value = v.map(function (o) {\n        return deepMapKeys(o, mapFunc);\n      });\n    } else if (v instanceof Object) {\n      value = deepMapKeys(v, mapFunc);\n    }\n\n    r[mapFunc(k)] = value;\n  });\n}\n\nconst customeSnakeCase = function (key) {\n  const matches = key.match(/\\d+$/);\n  let number = '';\n  let convertKey = key;\n\n  if (matches) {\n    number = matches[0]; // eslint-disable-line\n\n    convertKey = key.substring(0, matches.index);\n  }\n\n  return Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"snakeCase\"])(convertKey) + number;\n};\n\nclass V1 {\n  constructor(config = {}) {\n    _defineProperty(this, \"client\", void 0);\n\n    this.client = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({ ...DEFAULT_API_CONFIG,\n      ...config\n    });\n  }\n\n  _requestInterceptor() {\n    var _this = this;\n\n    this.client.interceptors.request.use(function (config) {\n      if (!_this._isFormDataRequest(config)) {\n        const keyMapper = function (key) {\n          return customeSnakeCase(key);\n        };\n\n        config.data = deepMapKeys(config.data, keyMapper);\n      }\n\n      return config;\n    });\n  }\n\n  _isFormDataRequest(config) {\n    return config.data && config.data.toString().includes('FormData');\n  }\n\n  _responseInterceptor() {\n    this.client.interceptors.response.use(function (res) {\n      if (res.data) res.data = deepMapKeys(res.data, function (key) {\n        return Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"camelCase\"])(key);\n      });\n      return res;\n    }, function (error) {\n      if (!error.response || error.response.status === 500) {\n        throw Object.assign({\n          errror_code: 700,\n          messsage: 'Something went wrong!'\n        });\n      }\n\n      throw error.response.data;\n    });\n  }\n\n}\n\n//# sourceURL=webpack:///./src/client/services/v1.js?");

/***/ }),

/***/ "./src/client/store/index.js":
/*!***********************************!*\
  !*** ./src/client/store/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist */ \"redux-persist\");\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-persist/lib/storage */ \"redux-persist/lib/storage\");\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var redux_persist_lib_stateReconciler_autoMergeLevel2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-persist/lib/stateReconciler/autoMergeLevel2 */ \"redux-persist/lib/stateReconciler/autoMergeLevel2\");\n/* harmony import */ var redux_persist_lib_stateReconciler_autoMergeLevel2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_stateReconciler_autoMergeLevel2__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers */ \"./src/client/reducers/index.js\");\n/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sagas */ \"./src/client/sagas/index.js\");\n\n\n\n\n\n\n\nconst PERSIST_KEY = 'root';\nconst persistConfig = {\n  key: PERSIST_KEY,\n  storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3___default()),\n  stateReconciler: redux_persist_lib_stateReconciler_autoMergeLevel2__WEBPACK_IMPORTED_MODULE_4___default.a,\n  transforms: [Object(redux_persist__WEBPACK_IMPORTED_MODULE_2__[\"createTransform\"])(function (inboundState) {\n    return { ...inboundState,\n      error: ''\n    };\n  }, function (outboundState) {\n    return { ...outboundState,\n      error: ''\n    };\n  })]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();\n\n  const configStore = function () {\n    return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(Object(redux_persist__WEBPACK_IMPORTED_MODULE_2__[\"persistReducer\"])(persistConfig, _reducers__WEBPACK_IMPORTED_MODULE_5__[\"default\"]), (process.browser && window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_0__[\"compose\"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(sagaMiddleware)));\n  };\n\n  const store = configStore();\n  const persistor = Object(redux_persist__WEBPACK_IMPORTED_MODULE_2__[\"persistStore\"])(store);\n  sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n  return {\n    store,\n    persistor\n  };\n});\n\n//# sourceURL=webpack:///./src/client/store/index.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _client_components_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../client/components/index */ \"./src/client/components/index.js\");\n\n\n\n\n\n\nconst PORT = 4000;\nconst app = express__WEBPACK_IMPORTED_MODULE_3___default()();\nconst router = express__WEBPACK_IMPORTED_MODULE_3___default.a.Router(); // app.use(express.static('../../build'));\n\nconst serverSide = function (req, res) {\n  const indexFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve('./build/index.html');\n  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(indexFile, 'utf8', function (err, data) {\n    if (err) {\n      console.error('Something went wrong', err);\n      return res.status(500).send('Wrong response');\n    }\n\n    let replaced_data = data;\n    replaced_data = replaced_data.replace('<div id=\"root\"></div>', `<div id=\"root\">${react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToString(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_client_components_index__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null))}</div>`);\n    replaced_data = replaced_data.replace('(<head>)', `$1\\n<meta http-equiv=\"Content-Security-Policy\" content=\"default-src *; img-src * 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' *; style-src 'self' 'unsafe-inline' *\">\n    `);\n    return res.send(replaced_data);\n  });\n};\n\nrouter.use('^/$', serverSide);\nrouter.use(express__WEBPACK_IMPORTED_MODULE_3___default.a.static(path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(__dirname, '..', 'build'), {\n  maxAge: '30d'\n}));\napp.use(router);\napp.listen(PORT, function () {\n  console.log(`SERVERSIDE IS RUNNING IN ${PORT}`);\n});\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fbjs/lib/keyMirror":
/*!*************************************!*\
  !*** external "fbjs/lib/keyMirror" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fbjs/lib/keyMirror\");\n\n//# sourceURL=webpack:///external_%22fbjs/lib/keyMirror%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

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

/***/ "redux-actions":
/*!********************************!*\
  !*** external "redux-actions" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-actions\");\n\n//# sourceURL=webpack:///external_%22redux-actions%22?");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-persist\");\n\n//# sourceURL=webpack:///external_%22redux-persist%22?");

/***/ }),

/***/ "redux-persist/integration/react":
/*!**************************************************!*\
  !*** external "redux-persist/integration/react" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-persist/integration/react\");\n\n//# sourceURL=webpack:///external_%22redux-persist/integration/react%22?");

/***/ }),

/***/ "redux-persist/lib/stateReconciler/autoMergeLevel2":
/*!********************************************************************!*\
  !*** external "redux-persist/lib/stateReconciler/autoMergeLevel2" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-persist/lib/stateReconciler/autoMergeLevel2\");\n\n//# sourceURL=webpack:///external_%22redux-persist/lib/stateReconciler/autoMergeLevel2%22?");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-persist/lib/storage\");\n\n//# sourceURL=webpack:///external_%22redux-persist/lib/storage%22?");

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

/***/ }),

/***/ "reselect":
/*!***************************!*\
  !*** external "reselect" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"reselect\");\n\n//# sourceURL=webpack:///external_%22reselect%22?");

/***/ })

/******/ });