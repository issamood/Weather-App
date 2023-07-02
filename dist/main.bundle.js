(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    width: 100vw;
    height: 100vh;
    background-size: cover;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;AAC1B","sourcesContent":["body {\n    width: 100vw;\n    height: 100vh;\n    background-size: cover;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/apiFunctions.js":
/*!*****************************!*\
  !*** ./src/apiFunctions.js ***!
  \*****************************/
/***/ (() => {

//Get form input
function getFormInput(){
    //Get input data
    const input = document.querySelector('.formInput');
    const location = input.value;

    //Format location name for api call
    if (location){
      return location
      .replace(/(\s+$|^\s+)/g, '')
      .replace(/(,\s+)/g, ',')
      .replace(/(\s+,)/g, ',')
      .replace(/\s+/g, '+'); 
    }
    return '';
}

async function getCoordinate(location){
    let url = "https://api.api-ninjas.com/v1/geocoding?city="
    url.concat(location);

    const response = await fetch(url, {mode: "cors"});
    const geocodeData = await response.json();

    const coordinate = {
        latitude: geocodeData.latitude,
        longitude: geocodeData.longitude
    }

    return coordinate;
}

async function getAddress(lat, lon){
    let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=AIzaSyCKUXPKu7DxG7YMXnIiQ2T1ZcGcDkTo0Gs`
    const response = await fetch(url, {mode: "cors"})
    const addressData = await response.json();

    addressData.results[0]["address_components"][5]["long_name"];
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _apiFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiFunctions */ "./src/apiFunctions.js");
/* harmony import */ var _apiFunctions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apiFunctions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_wallpaperalt_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/wallpaperalt.jpg */ "./src/images/wallpaperalt.jpg");
/* harmony import */ var _images_clear_day_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/clear-day.svg */ "./src/images/clear-day.svg");
/* harmony import */ var _images_clear_night_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/clear-night.svg */ "./src/images/clear-night.svg");
/* harmony import */ var _images_cloudy_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/cloudy.svg */ "./src/images/cloudy.svg");
/* harmony import */ var _images_fog_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/fog.svg */ "./src/images/fog.svg");
/* harmony import */ var _images_partly_cloudy_day_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/partly-cloudy-day.svg */ "./src/images/partly-cloudy-day.svg");
/* harmony import */ var _images_partly_cloudy_night_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/partly-cloudy-night.svg */ "./src/images/partly-cloudy-night.svg");
/* harmony import */ var _images_rain_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/rain.svg */ "./src/images/rain.svg");
/* harmony import */ var _images_sleet_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/sleet.svg */ "./src/images/sleet.svg");
/* harmony import */ var _images_snow_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/snow.svg */ "./src/images/snow.svg");
/* harmony import */ var _images_wind_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/wind.svg */ "./src/images/wind.svg");
/* harmony import */ var _images_search_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/search.svg */ "./src/images/search.svg");
//Imports















/*
Figure out Weather API

How to get data for today
What kind of data to get
The day, temperature, the weather condition, high/low temps,
humidity, wind not as important but just extra data if needed

Search city function bar

Default location set to ip address location.

To do list
-----------
Change layout and maybe api too.
*/

//-------------------------
//Functions
//-------------------------
//Create mainWeatherContainer
async function createMainContainer(latitude, longitude) {
    let url = "https://api.pirateweather.net/forecast/2076VPUwHo5rFjS0/";
    url = url.concat(latitude + "%2C");
    url = url.concat(longitude + "?units=us");

    //Fetch API url response
    const response = await fetch(url, { mode: 'cors' })
    //Convert from JSON
    const weather = await response.json();

    //Get date and format it correctly 
    const date = new Date(weather.currently.time * 1000);

    //We % 100 because I only want the last two digits of the year.
    let year = date.getFullYear() % 100;
    let dayDate = date.getDate();

    //Gets the 'st, nd, rd, th' end for numbers
    const day = function (d) {
        if (d > 3 && d < 21) return 'th';
        switch (d % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    }

    //Get day and month name.
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let dayName = days[date.getDay()];
    let month = months[date.getMonth()];

    //Format current date and put into object
    let currentDate = `${dayName}, ${dayDate}${day(dayDate)} ${month} '${year}`;

    //Format time
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if(minutes < 10) {
        minutes = '0' + minutes;
    }
    let ampm = '';
    if (hours >= 12) {
        if (hours > 12) {
            hours -= 12;
        }
        ampm = 'p.m.'
    }
    else {
        ampm = 'a.m';
    }
    let currentTime = hours + ':' + minutes + ' ' + ampm;

    //Get location name
    let reverseGeocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyCKUXPKu7DxG7YMXnIiQ2T1ZcGcDkTo0Gs`
    const reverseResponse = await fetch(reverseGeocodeUrl, {mode: "cors"})
    const addressData = await reverseResponse.json();
    const address = addressData.results[7].address_components[0].long_name;
    //Creating the HTML element
    const weatherContainer = document.createElement('div');
    weatherContainer.classList.add('mainWeatherContainer');

    const summaryElement = document.createElement('h2');
    summaryElement.innerHTML = weather.currently.summary;
    weatherContainer.appendChild(summaryElement);

    const locationElement = document.createElement('h1');
    locationElement.innerHTML = address;
    weatherContainer.appendChild(locationElement);

    const dateElement = document.createElement('p');
    dateElement.innerHTML = currentDate;
    weatherContainer.appendChild(dateElement);

    const timeElement = document.createElement('p');
    timeElement.innerHTML = currentTime;
    weatherContainer.appendChild(timeElement);

    const temperatureElement = document.createElement('h3');
    temperatureElement.innerHTML = weather.currently.temperature + "°F";
    weatherContainer.appendChild(temperatureElement);

    const weatherIconElement = document.createElement('img');
    const icon = `${weather.currently.icon}`;
    if (icon == 'clear-day') {
        weatherIconElement.src = _images_clear_day_svg__WEBPACK_IMPORTED_MODULE_3__;
    } else if (icon == 'clear-night') {
        weatherIconElement.src = _images_clear_night_svg__WEBPACK_IMPORTED_MODULE_4__;
    } else if (icon == 'cloudy') {
        weatherIconElement.src = _images_cloudy_svg__WEBPACK_IMPORTED_MODULE_5__;
    } else if (icon == 'fog') {
        weatherIconElement.src = _images_fog_svg__WEBPACK_IMPORTED_MODULE_6__;
    } else if (icon == 'partly-cloudy-day') {
        weatherIconElement.src = _images_partly_cloudy_day_svg__WEBPACK_IMPORTED_MODULE_7__;
    } else if (icon == 'partly-cloudy-night') {
        weatherIconElement.src = _images_partly_cloudy_night_svg__WEBPACK_IMPORTED_MODULE_8__;
    } else if (icon == 'rain') {
        weatherIconElement.src = _images_rain_svg__WEBPACK_IMPORTED_MODULE_9__;
    } else if (icon == 'sleet') {
        weatherIconElement.src = _images_sleet_svg__WEBPACK_IMPORTED_MODULE_10__;
    } else if (icon == 'snow') {
        weatherIconElement.src = _images_snow_svg__WEBPACK_IMPORTED_MODULE_11__;
    } else if (icon == 'wind') {
        weatherIconElement.src = _images_wind_svg__WEBPACK_IMPORTED_MODULE_12__;
    }
    weatherContainer.appendChild(weatherIconElement);

    //Search Location Bar
    const formContainer = document.createElement('form');
    const formLabel = document.createElement('label');
    formLabel.setAttribute('for','location');

    const formInput = document.createElement('input');
    formInput.className = "formInput";
    formInput.setAttribute('type','text');
    formInput.id = "location";
    formInput.setAttribute('name','location');

    const formButton = document.createElement('button');
    const buttonIcon = document.createElement('img');

    buttonIcon.src = _images_search_svg__WEBPACK_IMPORTED_MODULE_13__;
    formButton.appendChild(buttonIcon);
    formButton.addEventListener('click', () => {
        const location = _apiFunctions__WEBPACK_IMPORTED_MODULE_1__.getFormInput();
        const coordinate = _apiFunctions__WEBPACK_IMPORTED_MODULE_1__.getCoordinate(location);


    });
    formContainer.appendChild(formLabel);
    formContainer.appendChild(formInput);
    formContainer.appendChild(formButton);

    weatherContainer.appendChild(formContainer);

    //Return HTML element
    container.appendChild(weatherContainer);
};

async function getUserLocation(){
    if (navigator.geolocation){
        const successCallback = (position) => {
            createMainContainer(position.coords.latitude, position.coords.longitude);
        }
        const errorCallback = (error) => {
            console.log(error);
        }
        await navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }
    else{
        console.log('Geolocation API is not supported on this browser');
    }

}

//Trying to convert address to lat lon
//Check if geolocation API exists in browser

//-------------------------
//Logic Application
//-------------------------
//Body Container
const container = document.createElement('div');
container.id = "container";

//Setting background image
document.body.style.backgroundImage = `url(${_images_wallpaperalt_jpg__WEBPACK_IMPORTED_MODULE_2__})`;

//Creating Main Weather Window Container
getUserLocation();

//Finally adding main container to body
document.body.appendChild(container);


/***/ }),

/***/ "./src/images/clear-day.svg":
/*!**********************************!*\
  !*** ./src/images/clear-day.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3aecb97c3dc851ec934f.svg";

/***/ }),

/***/ "./src/images/clear-night.svg":
/*!************************************!*\
  !*** ./src/images/clear-night.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c790ea9b8c8aaaecd871.svg";

/***/ }),

/***/ "./src/images/cloudy.svg":
/*!*******************************!*\
  !*** ./src/images/cloudy.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "096f5f16d5949493f4a8.svg";

/***/ }),

/***/ "./src/images/fog.svg":
/*!****************************!*\
  !*** ./src/images/fog.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "98de810706cbea3975de.svg";

/***/ }),

/***/ "./src/images/partly-cloudy-day.svg":
/*!******************************************!*\
  !*** ./src/images/partly-cloudy-day.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a057093100b69ada2b00.svg";

/***/ }),

/***/ "./src/images/partly-cloudy-night.svg":
/*!********************************************!*\
  !*** ./src/images/partly-cloudy-night.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "565681bb2457f834005b.svg";

/***/ }),

/***/ "./src/images/rain.svg":
/*!*****************************!*\
  !*** ./src/images/rain.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0a6edab5f17b6cf6802b.svg";

/***/ }),

/***/ "./src/images/search.svg":
/*!*******************************!*\
  !*** ./src/images/search.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "84b9a72fde3c2843819e.svg";

/***/ }),

/***/ "./src/images/sleet.svg":
/*!******************************!*\
  !*** ./src/images/sleet.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "69557f9e9d8f8458fc71.svg";

/***/ }),

/***/ "./src/images/snow.svg":
/*!*****************************!*\
  !*** ./src/images/snow.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a9b0192b7cb0794732cc.svg";

/***/ }),

/***/ "./src/images/wallpaperalt.jpg":
/*!*************************************!*\
  !*** ./src/images/wallpaperalt.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "53c35e316f75541cd3cd.jpg";

/***/ }),

/***/ "./src/images/wind.svg":
/*!*****************************!*\
  !*** ./src/images/wind.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7ea9fe38bd7673d48eaa.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGlDQUFpQyw2Q0FBSTtBQUNyQyxNQUFNO0FBQ04saUNBQWlDLCtDQUFLO0FBQ3RDLE1BQU07QUFDTixpQ0FBaUMsOENBQUk7QUFDckMsTUFBTTtBQUNOLGlDQUFpQyw4Q0FBSTtBQUNyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxxQkFBcUIsZ0RBQU07QUFDM0I7QUFDQTtBQUNBLHlCQUF5Qix1REFBb0I7QUFDN0MsMkJBQTJCLHdEQUFxQjs7O0FBR2hELEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLHFEQUFTLENBQUM7O0FBRXZEO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2FwaUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy9HZXQgZm9ybSBpbnB1dFxuZnVuY3Rpb24gZ2V0Rm9ybUlucHV0KCl7XG4gICAgLy9HZXQgaW5wdXQgZGF0YVxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1JbnB1dCcpO1xuICAgIGNvbnN0IGxvY2F0aW9uID0gaW5wdXQudmFsdWU7XG5cbiAgICAvL0Zvcm1hdCBsb2NhdGlvbiBuYW1lIGZvciBhcGkgY2FsbFxuICAgIGlmIChsb2NhdGlvbil7XG4gICAgICByZXR1cm4gbG9jYXRpb25cbiAgICAgIC5yZXBsYWNlKC8oXFxzKyR8XlxccyspL2csICcnKVxuICAgICAgLnJlcGxhY2UoLygsXFxzKykvZywgJywnKVxuICAgICAgLnJlcGxhY2UoLyhcXHMrLCkvZywgJywnKVxuICAgICAgLnJlcGxhY2UoL1xccysvZywgJysnKTsgXG4gICAgfVxuICAgIHJldHVybiAnJztcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q29vcmRpbmF0ZShsb2NhdGlvbil7XG4gICAgbGV0IHVybCA9IFwiaHR0cHM6Ly9hcGkuYXBpLW5pbmphcy5jb20vdjEvZ2VvY29kaW5nP2NpdHk9XCJcbiAgICB1cmwuY29uY2F0KGxvY2F0aW9uKTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7bW9kZTogXCJjb3JzXCJ9KTtcbiAgICBjb25zdCBnZW9jb2RlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIGNvbnN0IGNvb3JkaW5hdGUgPSB7XG4gICAgICAgIGxhdGl0dWRlOiBnZW9jb2RlRGF0YS5sYXRpdHVkZSxcbiAgICAgICAgbG9uZ2l0dWRlOiBnZW9jb2RlRGF0YS5sb25naXR1ZGVcbiAgICB9XG5cbiAgICByZXR1cm4gY29vcmRpbmF0ZTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0QWRkcmVzcyhsYXQsIGxvbil7XG4gICAgbGV0IHVybCA9IGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uP2xhdGxuZz0ke2xhdH0sJHtsb259JmtleT1BSXphU3lDS1VYUEt1N0R4RzdZTVhuSWlRMlQxWmNHY0RrVG8wR3NgXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHttb2RlOiBcImNvcnNcIn0pXG4gICAgY29uc3QgYWRkcmVzc0RhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBhZGRyZXNzRGF0YS5yZXN1bHRzWzBdW1wiYWRkcmVzc19jb21wb25lbnRzXCJdWzVdW1wibG9uZ19uYW1lXCJdO1xufSIsIi8vSW1wb3J0c1xuaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCAqIGFzIGFwaUZ1bmMgZnJvbSAnLi9hcGlGdW5jdGlvbnMnO1xuaW1wb3J0IFdhbGxwYXBlciBmcm9tICcuL2ltYWdlcy93YWxscGFwZXJhbHQuanBnJ1xuaW1wb3J0IGNsZWFyZGF5IGZyb20gJy4vaW1hZ2VzL2NsZWFyLWRheS5zdmcnXG5pbXBvcnQgY2xlYXJuaWdodCBmcm9tICcuL2ltYWdlcy9jbGVhci1uaWdodC5zdmcnXG5pbXBvcnQgY2xvdWR5IGZyb20gJy4vaW1hZ2VzL2Nsb3VkeS5zdmcnXG5pbXBvcnQgZm9nIGZyb20gJy4vaW1hZ2VzL2ZvZy5zdmcnXG5pbXBvcnQgcGFydGx5Y2xvdWR5ZGF5IGZyb20gJy4vaW1hZ2VzL3BhcnRseS1jbG91ZHktZGF5LnN2ZydcbmltcG9ydCBwYXJ0bHljbG91ZHluaWdodCBmcm9tICcuL2ltYWdlcy9wYXJ0bHktY2xvdWR5LW5pZ2h0LnN2ZydcbmltcG9ydCByYWluIGZyb20gJy4vaW1hZ2VzL3JhaW4uc3ZnJ1xuaW1wb3J0IHNsZWV0IGZyb20gJy4vaW1hZ2VzL3NsZWV0LnN2ZydcbmltcG9ydCBzbm93IGZyb20gJy4vaW1hZ2VzL3Nub3cuc3ZnJ1xuaW1wb3J0IHdpbmQgZnJvbSAnLi9pbWFnZXMvd2luZC5zdmcnXG5pbXBvcnQgc2VhcmNoIGZyb20gJy4vaW1hZ2VzL3NlYXJjaC5zdmcnXG5cbi8qXG5GaWd1cmUgb3V0IFdlYXRoZXIgQVBJXG5cbkhvdyB0byBnZXQgZGF0YSBmb3IgdG9kYXlcbldoYXQga2luZCBvZiBkYXRhIHRvIGdldFxuVGhlIGRheSwgdGVtcGVyYXR1cmUsIHRoZSB3ZWF0aGVyIGNvbmRpdGlvbiwgaGlnaC9sb3cgdGVtcHMsXG5odW1pZGl0eSwgd2luZCBub3QgYXMgaW1wb3J0YW50IGJ1dCBqdXN0IGV4dHJhIGRhdGEgaWYgbmVlZGVkXG5cblNlYXJjaCBjaXR5IGZ1bmN0aW9uIGJhclxuXG5EZWZhdWx0IGxvY2F0aW9uIHNldCB0byBpcCBhZGRyZXNzIGxvY2F0aW9uLlxuXG5UbyBkbyBsaXN0XG4tLS0tLS0tLS0tLVxuQ2hhbmdlIGxheW91dCBhbmQgbWF5YmUgYXBpIHRvby5cbiovXG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9GdW5jdGlvbnNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9DcmVhdGUgbWFpbldlYXRoZXJDb250YWluZXJcbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZU1haW5Db250YWluZXIobGF0aXR1ZGUsIGxvbmdpdHVkZSkge1xuICAgIGxldCB1cmwgPSBcImh0dHBzOi8vYXBpLnBpcmF0ZXdlYXRoZXIubmV0L2ZvcmVjYXN0LzIwNzZWUFV3SG81ckZqUzAvXCI7XG4gICAgdXJsID0gdXJsLmNvbmNhdChsYXRpdHVkZSArIFwiJTJDXCIpO1xuICAgIHVybCA9IHVybC5jb25jYXQobG9uZ2l0dWRlICsgXCI/dW5pdHM9dXNcIik7XG5cbiAgICAvL0ZldGNoIEFQSSB1cmwgcmVzcG9uc2VcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiAnY29ycycgfSlcbiAgICAvL0NvbnZlcnQgZnJvbSBKU09OXG4gICAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIC8vR2V0IGRhdGUgYW5kIGZvcm1hdCBpdCBjb3JyZWN0bHkgXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHdlYXRoZXIuY3VycmVudGx5LnRpbWUgKiAxMDAwKTtcblxuICAgIC8vV2UgJSAxMDAgYmVjYXVzZSBJIG9ubHkgd2FudCB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIHRoZSB5ZWFyLlxuICAgIGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpICUgMTAwO1xuICAgIGxldCBkYXlEYXRlID0gZGF0ZS5nZXREYXRlKCk7XG5cbiAgICAvL0dldHMgdGhlICdzdCwgbmQsIHJkLCB0aCcgZW5kIGZvciBudW1iZXJzXG4gICAgY29uc3QgZGF5ID0gZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgaWYgKGQgPiAzICYmIGQgPCAyMSkgcmV0dXJuICd0aCc7XG4gICAgICAgIHN3aXRjaCAoZCAlIDEwKSB7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBcInN0XCI7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBcIm5kXCI7XG4gICAgICAgICAgICBjYXNlIDM6IHJldHVybiBcInJkXCI7XG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gXCJ0aFwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9HZXQgZGF5IGFuZCBtb250aCBuYW1lLlxuICAgIGxldCBkYXlzID0gWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddO1xuICAgIGxldCBtb250aHMgPSBbXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIiwgXCJBcHJcIiwgXCJNYXlcIiwgXCJKdW5cIiwgXCJKdWxcIiwgXCJBdWdcIiwgXCJTZXBcIiwgXCJPY3RcIiwgXCJOb3ZcIiwgXCJEZWNcIl07XG4gICAgbGV0IGRheU5hbWUgPSBkYXlzW2RhdGUuZ2V0RGF5KCldO1xuICAgIGxldCBtb250aCA9IG1vbnRoc1tkYXRlLmdldE1vbnRoKCldO1xuXG4gICAgLy9Gb3JtYXQgY3VycmVudCBkYXRlIGFuZCBwdXQgaW50byBvYmplY3RcbiAgICBsZXQgY3VycmVudERhdGUgPSBgJHtkYXlOYW1lfSwgJHtkYXlEYXRlfSR7ZGF5KGRheURhdGUpfSAke21vbnRofSAnJHt5ZWFyfWA7XG5cbiAgICAvL0Zvcm1hdCB0aW1lXG4gICAgbGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGxldCBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCk7XG4gICAgaWYobWludXRlcyA8IDEwKSB7XG4gICAgICAgIG1pbnV0ZXMgPSAnMCcgKyBtaW51dGVzO1xuICAgIH1cbiAgICBsZXQgYW1wbSA9ICcnO1xuICAgIGlmIChob3VycyA+PSAxMikge1xuICAgICAgICBpZiAoaG91cnMgPiAxMikge1xuICAgICAgICAgICAgaG91cnMgLT0gMTI7XG4gICAgICAgIH1cbiAgICAgICAgYW1wbSA9ICdwLm0uJ1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgYW1wbSA9ICdhLm0nO1xuICAgIH1cbiAgICBsZXQgY3VycmVudFRpbWUgPSBob3VycyArICc6JyArIG1pbnV0ZXMgKyAnICcgKyBhbXBtO1xuXG4gICAgLy9HZXQgbG9jYXRpb24gbmFtZVxuICAgIGxldCByZXZlcnNlR2VvY29kZVVybCA9IGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uP2xhdGxuZz0ke2xhdGl0dWRlfSwke2xvbmdpdHVkZX0ma2V5PUFJemFTeUNLVVhQS3U3RHhHN1lNWG5JaVEyVDFaY0djRGtUbzBHc2BcbiAgICBjb25zdCByZXZlcnNlUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXZlcnNlR2VvY29kZVVybCwge21vZGU6IFwiY29yc1wifSlcbiAgICBjb25zdCBhZGRyZXNzRGF0YSA9IGF3YWl0IHJldmVyc2VSZXNwb25zZS5qc29uKCk7XG4gICAgY29uc3QgYWRkcmVzcyA9IGFkZHJlc3NEYXRhLnJlc3VsdHNbN10uYWRkcmVzc19jb21wb25lbnRzWzBdLmxvbmdfbmFtZTtcbiAgICAvL0NyZWF0aW5nIHRoZSBIVE1MIGVsZW1lbnRcbiAgICBjb25zdCB3ZWF0aGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2VhdGhlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYWluV2VhdGhlckNvbnRhaW5lcicpO1xuXG4gICAgY29uc3Qgc3VtbWFyeUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHN1bW1hcnlFbGVtZW50LmlubmVySFRNTCA9IHdlYXRoZXIuY3VycmVudGx5LnN1bW1hcnk7XG4gICAgd2VhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZChzdW1tYXJ5RWxlbWVudCk7XG5cbiAgICBjb25zdCBsb2NhdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGxvY2F0aW9uRWxlbWVudC5pbm5lckhUTUwgPSBhZGRyZXNzO1xuICAgIHdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb25FbGVtZW50KTtcblxuICAgIGNvbnN0IGRhdGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRhdGVFbGVtZW50LmlubmVySFRNTCA9IGN1cnJlbnREYXRlO1xuICAgIHdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZUVsZW1lbnQpO1xuXG4gICAgY29uc3QgdGltZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGltZUVsZW1lbnQuaW5uZXJIVE1MID0gY3VycmVudFRpbWU7XG4gICAgd2VhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aW1lRWxlbWVudCk7XG5cbiAgICBjb25zdCB0ZW1wZXJhdHVyZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHRlbXBlcmF0dXJlRWxlbWVudC5pbm5lckhUTUwgPSB3ZWF0aGVyLmN1cnJlbnRseS50ZW1wZXJhdHVyZSArIFwiwrBGXCI7XG4gICAgd2VhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wZXJhdHVyZUVsZW1lbnQpO1xuXG4gICAgY29uc3Qgd2VhdGhlckljb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3QgaWNvbiA9IGAke3dlYXRoZXIuY3VycmVudGx5Lmljb259YDtcbiAgICBpZiAoaWNvbiA9PSAnY2xlYXItZGF5Jykge1xuICAgICAgICB3ZWF0aGVySWNvbkVsZW1lbnQuc3JjID0gY2xlYXJkYXk7XG4gICAgfSBlbHNlIGlmIChpY29uID09ICdjbGVhci1uaWdodCcpIHtcbiAgICAgICAgd2VhdGhlckljb25FbGVtZW50LnNyYyA9IGNsZWFybmlnaHQ7XG4gICAgfSBlbHNlIGlmIChpY29uID09ICdjbG91ZHknKSB7XG4gICAgICAgIHdlYXRoZXJJY29uRWxlbWVudC5zcmMgPSBjbG91ZHk7XG4gICAgfSBlbHNlIGlmIChpY29uID09ICdmb2cnKSB7XG4gICAgICAgIHdlYXRoZXJJY29uRWxlbWVudC5zcmMgPSBmb2c7XG4gICAgfSBlbHNlIGlmIChpY29uID09ICdwYXJ0bHktY2xvdWR5LWRheScpIHtcbiAgICAgICAgd2VhdGhlckljb25FbGVtZW50LnNyYyA9IHBhcnRseWNsb3VkeWRheTtcbiAgICB9IGVsc2UgaWYgKGljb24gPT0gJ3BhcnRseS1jbG91ZHktbmlnaHQnKSB7XG4gICAgICAgIHdlYXRoZXJJY29uRWxlbWVudC5zcmMgPSBwYXJ0bHljbG91ZHluaWdodDtcbiAgICB9IGVsc2UgaWYgKGljb24gPT0gJ3JhaW4nKSB7XG4gICAgICAgIHdlYXRoZXJJY29uRWxlbWVudC5zcmMgPSByYWluO1xuICAgIH0gZWxzZSBpZiAoaWNvbiA9PSAnc2xlZXQnKSB7XG4gICAgICAgIHdlYXRoZXJJY29uRWxlbWVudC5zcmMgPSBzbGVldDtcbiAgICB9IGVsc2UgaWYgKGljb24gPT0gJ3Nub3cnKSB7XG4gICAgICAgIHdlYXRoZXJJY29uRWxlbWVudC5zcmMgPSBzbm93O1xuICAgIH0gZWxzZSBpZiAoaWNvbiA9PSAnd2luZCcpIHtcbiAgICAgICAgd2VhdGhlckljb25FbGVtZW50LnNyYyA9IHdpbmQ7XG4gICAgfVxuICAgIHdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckljb25FbGVtZW50KTtcblxuICAgIC8vU2VhcmNoIExvY2F0aW9uIEJhclxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgY29uc3QgZm9ybUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBmb3JtTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdsb2NhdGlvbicpO1xuXG4gICAgY29uc3QgZm9ybUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBmb3JtSW5wdXQuY2xhc3NOYW1lID0gXCJmb3JtSW5wdXRcIjtcbiAgICBmb3JtSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpO1xuICAgIGZvcm1JbnB1dC5pZCA9IFwibG9jYXRpb25cIjtcbiAgICBmb3JtSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywnbG9jYXRpb24nKTtcblxuICAgIGNvbnN0IGZvcm1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBidXR0b25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICBidXR0b25JY29uLnNyYyA9IHNlYXJjaDtcbiAgICBmb3JtQnV0dG9uLmFwcGVuZENoaWxkKGJ1dHRvbkljb24pO1xuICAgIGZvcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gYXBpRnVuYy5nZXRGb3JtSW5wdXQoKTtcbiAgICAgICAgY29uc3QgY29vcmRpbmF0ZSA9IGFwaUZ1bmMuZ2V0Q29vcmRpbmF0ZShsb2NhdGlvbik7XG5cblxuICAgIH0pO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUxhYmVsKTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1JbnB1dCk7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtQnV0dG9uKTtcblxuICAgIHdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG5cbiAgICAvL1JldHVybiBIVE1MIGVsZW1lbnRcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckNvbnRhaW5lcik7XG59O1xuXG5hc3luYyBmdW5jdGlvbiBnZXRVc2VyTG9jYXRpb24oKXtcbiAgICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKXtcbiAgICAgICAgY29uc3Qgc3VjY2Vzc0NhbGxiYWNrID0gKHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICBjcmVhdGVNYWluQ29udGFpbmVyKHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSwgcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZXJyb3JDYWxsYmFjayA9IChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgY29uc29sZS5sb2coJ0dlb2xvY2F0aW9uIEFQSSBpcyBub3Qgc3VwcG9ydGVkIG9uIHRoaXMgYnJvd3NlcicpO1xuICAgIH1cblxufVxuXG4vL1RyeWluZyB0byBjb252ZXJ0IGFkZHJlc3MgdG8gbGF0IGxvblxuLy9DaGVjayBpZiBnZW9sb2NhdGlvbiBBUEkgZXhpc3RzIGluIGJyb3dzZXJcblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL0xvZ2ljIEFwcGxpY2F0aW9uXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vQm9keSBDb250YWluZXJcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29udGFpbmVyLmlkID0gXCJjb250YWluZXJcIjtcblxuLy9TZXR0aW5nIGJhY2tncm91bmQgaW1hZ2VcbmRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke1dhbGxwYXBlcn0pYDtcblxuLy9DcmVhdGluZyBNYWluIFdlYXRoZXIgV2luZG93IENvbnRhaW5lclxuZ2V0VXNlckxvY2F0aW9uKCk7XG5cbi8vRmluYWxseSBhZGRpbmcgbWFpbiBjb250YWluZXIgdG8gYm9keVxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9