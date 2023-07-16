"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
}

#windy{
    width: 100%;
    height: 300px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,aAAa;AACjB","sourcesContent":["body {\n    width: 100vw;\n    height: 100vh;\n    background-size: cover;\n}\n\n#windy{\n    width: 100%;\n    height: 300px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCoordinate: () => (/* binding */ getCoordinate),
/* harmony export */   getFormInput: () => (/* binding */ getFormInput),
/* harmony export */   getWeatherPromise: () => (/* binding */ getWeatherPromise)
/* harmony export */ });
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
    url = url.concat(location);

    const response = await fetch(url, {mode: "cors", headers: { 'X-Api-Key': 'SKQddcY0gwMgsYsXyZgHjw==LXqrkdAui3lta99z'}});
    const geocodeData = await response.json();

    const coordinate = {
        latitude: geocodeData[0].latitude,
        longitude: geocodeData[0].longitude
    }
    return coordinate;
}

async function getWeatherPromise(latitude, longitude){
    let url = "https://api.pirateweather.net/forecast/2076VPUwHo5rFjS0/";
    url = url.concat(latitude + ",");
    url = url.concat(longitude + "?units=us");
    url = url.concat('&tz=[precise]');

    const response = await fetch(url, { mode: 'cors' })
    const weather = await response.json();

    return weather;
}




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _apiFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiFunctions */ "./src/apiFunctions.js");
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
/* harmony import */ var _images_humidity_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/humidity.svg */ "./src/images/humidity.svg");
/* harmony import */ var _images_rainchance_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./images/rainchance.svg */ "./src/images/rainchance.svg");
//Imports


















/*
To do list
-----------
-Add search town button functionality and update doms (Finished)
-Fix time locality depending on town location

*/

//-------------------------
//Functions
//-------------------------
//Create mainWeatherContainer
async function createMainContainer(latitude, longitude) {
    //If container already exists, wipe it out
    if (document.querySelector('#mainWeatherContainer')){
        const mainWeatherContainer = document.querySelector('#mainWeatherContainer');
        mainWeatherContainer.textContent = '';
        mainWeatherContainer.remove();
    }

    const weather = await _apiFunctions__WEBPACK_IMPORTED_MODULE_1__.getWeatherPromise(latitude,longitude);

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
    let currentTime = date.toLocaleTimeString('en-US', {timeZone : `${weather.timezone}`});
    if (currentTime.length == 11){
        currentTime = currentTime.slice(0,5) + ' ' + currentTime.slice(8,11);
    }
    else {
        currentTime = currentTime.slice(0,4) + ' ' + currentTime.slice(7,10);
    }

    //Get location name
    let reverseGeocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDbXcxX3nPlmvxH1PGA5fEL1qKLweQmkEY`
    const reverseResponse = await fetch(reverseGeocodeUrl, {mode: "cors"})
    const addressData = await reverseResponse.json();
    console.log(addressData);
    const address = await addressData.results[0].address_components[2].long_name;

    //Creating the HTML element
    const weatherContainer = document.createElement('div');
    weatherContainer.id = 'mainWeatherContainer';

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

    if(!document.querySelector('#form')){
        weatherContainer.appendChild(createForm());
    }

    //Return HTML element
    container.appendChild(weatherContainer);
};

async function createSecondContainer(latitude, longitude) {
    //Get weather API data
    const weather = await _apiFunctions__WEBPACK_IMPORTED_MODULE_1__.getWeatherPromise(latitude, longitude);

    //Create a container that displays humidity, chance of rain and wind speed
    const secondContainer = document.createElement('div');
    secondContainer.className = 'secondContainer';

    const humidityContainer = document.createElement('div');
    humidityContainer.className = 'humidityContainer';
    const humidityIcon = document.createElement('img');
    humidityIcon.src = _images_humidity_svg__WEBPACK_IMPORTED_MODULE_14__;
    const humidityInfo = document.createElement('div');
    humidityInfo.className = 'info';
    const humidityLabel = document.createElement('h1');
    humidityLabel.innerHTML = 'Humidity';
    const humidityValue = document.createElement('h1');
    humidityValue.innerHTML = weather.currently.humidity * 100 + '%';
    
    humidityInfo.appendChild(humidityLabel);
    humidityInfo.appendChild(humidityValue);
    humidityContainer.appendChild(humidityInfo);
    humidityContainer.appendChild(humidityIcon);
    
    const rainContainer = document.createElement('div');
    rainContainer.className = 'rainContainer';
    const rainIcon = document.createElement('img');
    rainIcon.src = _images_rainchance_svg__WEBPACK_IMPORTED_MODULE_15__;
    const rainInfo = document.createElement('div');
    rainInfo.className = 'info';
    const rainLabel = document.createElement('h1');
    rainLabel.innerHTML = 'Chance of Rain';
    const rainValue = document.createElement('h1');
    rainValue.innerHTML = weather.currently.precipProbability * 100 + '%';

    rainInfo.appendChild(rainLabel);
    rainInfo.appendChild(rainValue);
    rainContainer.appendChild(rainInfo);
    rainContainer.appendChild(rainIcon);

    const windContainer = document.createElement('div');
    windContainer.className = 'windContainer';
    const windIcon = document.createElement('img');
    windIcon.src = _images_wind_svg__WEBPACK_IMPORTED_MODULE_12__;
    const windInfo = document.createElement('div');
    windInfo.className = 'info';
    const windLabel = document.createElement('h1');
    windLabel.innerHTML = 'Wind Speed';
    const windValue = document.createElement('h1');
    windValue.innerHTML = weather.currently.windSpeed + ' m/h';

    windInfo.appendChild(windLabel);
    windInfo.appendChild(windValue);
    windContainer.appendChild(windIcon);
    windContainer.appendChild(windInfo);

    //Put into second container
    secondContainer.appendChild(humidityContainer);
    secondContainer.appendChild(rainContainer);
    secondContainer.appendChild(windContainer);

    container.appendChild(secondContainer);
}

//Create form for location input
function createForm(){
    //Search Location Bar
    const formContainer = document.createElement('form');
    formContainer.id = 'form';
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
    formButton.setAttribute('type','button');
    formButton.addEventListener('click', async () => {
        const location = _apiFunctions__WEBPACK_IMPORTED_MODULE_1__.getFormInput();

        const coordinate = await _apiFunctions__WEBPACK_IMPORTED_MODULE_1__.getCoordinate(location)

        createMainContainer(coordinate.latitude, coordinate.longitude);
    });
    formContainer.appendChild(formLabel);
    formContainer.appendChild(formInput);
    formContainer.appendChild(formButton);

    return formContainer;
}

async function getUserLocation(){
    async function success(pos){
        const crd = pos.coords;

        createMainContainer(crd.latitude, crd.longitude);
        createSecondContainer(crd.latitude, crd.longitude);
    }
    
    navigator.geolocation.getCurrentPosition(success);
    
}

//Windy API
const options = {
    key: 'ebSZBZu6R9ZeRHMnzS6WrSOEFLZnLEsV',
    verbose: true,

    //Optional: Initial state of the map
    lat: 50.4,
    lon: 14.3,
    zoom: 5,
}

//-------------------------
//Logic Application
//-------------------------
//Body Container
const container = document.createElement('div');
container.id = "container";

//Setting background image
document.body.style.backgroundImage = `url(${_images_wallpaperalt_jpg__WEBPACK_IMPORTED_MODULE_2__})`;

//Creating initial Main Weather Window Container
getUserLocation();

//Initialize Windy API
windyInit(options, windyAPI => {
    const {map} = windyAPI;

    L.popup()
        .setLatLng([50.4, 14.3])
        .setContent('Hello World')
        .openOn(map);
});

//Finally adding main container to body
document.body.appendChild(container);


/***/ }),

/***/ "./src/images/clear-day.svg":
/*!**********************************!*\
  !*** ./src/images/clear-day.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3aecb97c3dc851ec934f.svg";

/***/ }),

/***/ "./src/images/clear-night.svg":
/*!************************************!*\
  !*** ./src/images/clear-night.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c790ea9b8c8aaaecd871.svg";

/***/ }),

/***/ "./src/images/cloudy.svg":
/*!*******************************!*\
  !*** ./src/images/cloudy.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "096f5f16d5949493f4a8.svg";

/***/ }),

/***/ "./src/images/fog.svg":
/*!****************************!*\
  !*** ./src/images/fog.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "98de810706cbea3975de.svg";

/***/ }),

/***/ "./src/images/humidity.svg":
/*!*********************************!*\
  !*** ./src/images/humidity.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f9cc19722b6217111ee5.svg";

/***/ }),

/***/ "./src/images/partly-cloudy-day.svg":
/*!******************************************!*\
  !*** ./src/images/partly-cloudy-day.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a057093100b69ada2b00.svg";

/***/ }),

/***/ "./src/images/partly-cloudy-night.svg":
/*!********************************************!*\
  !*** ./src/images/partly-cloudy-night.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "565681bb2457f834005b.svg";

/***/ }),

/***/ "./src/images/rain.svg":
/*!*****************************!*\
  !*** ./src/images/rain.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0a6edab5f17b6cf6802b.svg";

/***/ }),

/***/ "./src/images/rainchance.svg":
/*!***********************************!*\
  !*** ./src/images/rainchance.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "21eb764a2af3cf7a5114.svg";

/***/ }),

/***/ "./src/images/search.svg":
/*!*******************************!*\
  !*** ./src/images/search.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "84b9a72fde3c2843819e.svg";

/***/ }),

/***/ "./src/images/sleet.svg":
/*!******************************!*\
  !*** ./src/images/sleet.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "69557f9e9d8f8458fc71.svg";

/***/ }),

/***/ "./src/images/snow.svg":
/*!*****************************!*\
  !*** ./src/images/snow.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a9b0192b7cb0794732cc.svg";

/***/ }),

/***/ "./src/images/wallpaperalt.jpg":
/*!*************************************!*\
  !*** ./src/images/wallpaperalt.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bb8f0adea617611964b5.jpg";

/***/ }),

/***/ "./src/images/wind.svg":
/*!*****************************!*\
  !*** ./src/images/wind.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7ea9fe38bd7673d48eaa.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxLQUFLOztBQUVoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2FwaUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuI3dpbmR5e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzAwcHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4jd2luZHl7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy9HZXQgZm9ybSBpbnB1dFxuZnVuY3Rpb24gZ2V0Rm9ybUlucHV0KCl7XG4gICAgLy9HZXQgaW5wdXQgZGF0YVxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1JbnB1dCcpO1xuICAgIGNvbnN0IGxvY2F0aW9uID0gaW5wdXQudmFsdWU7XG5cbiAgICAvL0Zvcm1hdCBsb2NhdGlvbiBuYW1lIGZvciBhcGkgY2FsbFxuICAgIGlmIChsb2NhdGlvbil7XG4gICAgICByZXR1cm4gbG9jYXRpb25cbiAgICAgIC5yZXBsYWNlKC8oXFxzKyR8XlxccyspL2csICcnKVxuICAgICAgLnJlcGxhY2UoLygsXFxzKykvZywgJywnKVxuICAgICAgLnJlcGxhY2UoLyhcXHMrLCkvZywgJywnKVxuICAgICAgLnJlcGxhY2UoL1xccysvZywgJysnKTsgXG4gICAgfVxuICAgIHJldHVybiAnJztcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q29vcmRpbmF0ZShsb2NhdGlvbil7XG4gICAgbGV0IHVybCA9IFwiaHR0cHM6Ly9hcGkuYXBpLW5pbmphcy5jb20vdjEvZ2VvY29kaW5nP2NpdHk9XCJcbiAgICB1cmwgPSB1cmwuY29uY2F0KGxvY2F0aW9uKTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7bW9kZTogXCJjb3JzXCIsIGhlYWRlcnM6IHsgJ1gtQXBpLUtleSc6ICdTS1FkZGNZMGd3TWdzWXNYeVpnSGp3PT1MWHFya2RBdWkzbHRhOTl6J319KTtcbiAgICBjb25zdCBnZW9jb2RlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIGNvbnN0IGNvb3JkaW5hdGUgPSB7XG4gICAgICAgIGxhdGl0dWRlOiBnZW9jb2RlRGF0YVswXS5sYXRpdHVkZSxcbiAgICAgICAgbG9uZ2l0dWRlOiBnZW9jb2RlRGF0YVswXS5sb25naXR1ZGVcbiAgICB9XG4gICAgcmV0dXJuIGNvb3JkaW5hdGU7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJQcm9taXNlKGxhdGl0dWRlLCBsb25naXR1ZGUpe1xuICAgIGxldCB1cmwgPSBcImh0dHBzOi8vYXBpLnBpcmF0ZXdlYXRoZXIubmV0L2ZvcmVjYXN0LzIwNzZWUFV3SG81ckZqUzAvXCI7XG4gICAgdXJsID0gdXJsLmNvbmNhdChsYXRpdHVkZSArIFwiLFwiKTtcbiAgICB1cmwgPSB1cmwuY29uY2F0KGxvbmdpdHVkZSArIFwiP3VuaXRzPXVzXCIpO1xuICAgIHVybCA9IHVybC5jb25jYXQoJyZ0ej1bcHJlY2lzZV0nKTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1vZGU6ICdjb3JzJyB9KVxuICAgIGNvbnN0IHdlYXRoZXIgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICByZXR1cm4gd2VhdGhlcjtcbn1cblxuXG5leHBvcnQge1xuICAgIGdldEZvcm1JbnB1dCxcbiAgICBnZXRDb29yZGluYXRlLFxuICAgIGdldFdlYXRoZXJQcm9taXNlXG59IiwiLy9JbXBvcnRzXG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0ICogYXMgYXBpRnVuYyBmcm9tICcuL2FwaUZ1bmN0aW9ucyc7XG5pbXBvcnQgV2FsbHBhcGVyIGZyb20gJy4vaW1hZ2VzL3dhbGxwYXBlcmFsdC5qcGcnXG5pbXBvcnQgY2xlYXJkYXkgZnJvbSAnLi9pbWFnZXMvY2xlYXItZGF5LnN2ZydcbmltcG9ydCBjbGVhcm5pZ2h0IGZyb20gJy4vaW1hZ2VzL2NsZWFyLW5pZ2h0LnN2ZydcbmltcG9ydCBjbG91ZHkgZnJvbSAnLi9pbWFnZXMvY2xvdWR5LnN2ZydcbmltcG9ydCBmb2cgZnJvbSAnLi9pbWFnZXMvZm9nLnN2ZydcbmltcG9ydCBwYXJ0bHljbG91ZHlkYXkgZnJvbSAnLi9pbWFnZXMvcGFydGx5LWNsb3VkeS1kYXkuc3ZnJ1xuaW1wb3J0IHBhcnRseWNsb3VkeW5pZ2h0IGZyb20gJy4vaW1hZ2VzL3BhcnRseS1jbG91ZHktbmlnaHQuc3ZnJ1xuaW1wb3J0IHJhaW4gZnJvbSAnLi9pbWFnZXMvcmFpbi5zdmcnXG5pbXBvcnQgc2xlZXQgZnJvbSAnLi9pbWFnZXMvc2xlZXQuc3ZnJ1xuaW1wb3J0IHNub3cgZnJvbSAnLi9pbWFnZXMvc25vdy5zdmcnXG5pbXBvcnQgd2luZCBmcm9tICcuL2ltYWdlcy93aW5kLnN2ZydcbmltcG9ydCBzZWFyY2ggZnJvbSAnLi9pbWFnZXMvc2VhcmNoLnN2ZydcbmltcG9ydCBodW1pZGl0eSBmcm9tICcuL2ltYWdlcy9odW1pZGl0eS5zdmcnXG5pbXBvcnQgcmFpbmNoYW5jZSBmcm9tICcuL2ltYWdlcy9yYWluY2hhbmNlLnN2ZydcblxuXG4vKlxuVG8gZG8gbGlzdFxuLS0tLS0tLS0tLS1cbi1BZGQgc2VhcmNoIHRvd24gYnV0dG9uIGZ1bmN0aW9uYWxpdHkgYW5kIHVwZGF0ZSBkb21zIChGaW5pc2hlZClcbi1GaXggdGltZSBsb2NhbGl0eSBkZXBlbmRpbmcgb24gdG93biBsb2NhdGlvblxuXG4qL1xuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vRnVuY3Rpb25zXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vQ3JlYXRlIG1haW5XZWF0aGVyQ29udGFpbmVyXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVNYWluQ29udGFpbmVyKGxhdGl0dWRlLCBsb25naXR1ZGUpIHtcbiAgICAvL0lmIGNvbnRhaW5lciBhbHJlYWR5IGV4aXN0cywgd2lwZSBpdCBvdXRcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW5XZWF0aGVyQ29udGFpbmVyJykpe1xuICAgICAgICBjb25zdCBtYWluV2VhdGhlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluV2VhdGhlckNvbnRhaW5lcicpO1xuICAgICAgICBtYWluV2VhdGhlckNvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBtYWluV2VhdGhlckNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBjb25zdCB3ZWF0aGVyID0gYXdhaXQgYXBpRnVuYy5nZXRXZWF0aGVyUHJvbWlzZShsYXRpdHVkZSxsb25naXR1ZGUpO1xuXG4gICAgLy9HZXQgZGF0ZSBhbmQgZm9ybWF0IGl0IGNvcnJlY3RseSBcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUod2VhdGhlci5jdXJyZW50bHkudGltZSAqIDEwMDApO1xuXG4gICAgLy9XZSAlIDEwMCBiZWNhdXNlIEkgb25seSB3YW50IHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgdGhlIHllYXIuXG4gICAgbGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCkgJSAxMDA7XG4gICAgbGV0IGRheURhdGUgPSBkYXRlLmdldERhdGUoKTtcblxuICAgIC8vR2V0cyB0aGUgJ3N0LCBuZCwgcmQsIHRoJyBlbmQgZm9yIG51bWJlcnNcbiAgICBjb25zdCBkYXkgPSBmdW5jdGlvbiAoZCkge1xuICAgICAgICBpZiAoZCA+IDMgJiYgZCA8IDIxKSByZXR1cm4gJ3RoJztcbiAgICAgICAgc3dpdGNoIChkICUgMTApIHtcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFwic3RcIjtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIFwibmRcIjtcbiAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFwicmRcIjtcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBcInRoXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL0dldCBkYXkgYW5kIG1vbnRoIG5hbWUuXG4gICAgbGV0IGRheXMgPSBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J107XG4gICAgbGV0IG1vbnRocyA9IFtcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLCBcIk5vdlwiLCBcIkRlY1wiXTtcbiAgICBsZXQgZGF5TmFtZSA9IGRheXNbZGF0ZS5nZXREYXkoKV07XG4gICAgbGV0IG1vbnRoID0gbW9udGhzW2RhdGUuZ2V0TW9udGgoKV07XG5cbiAgICAvL0Zvcm1hdCBjdXJyZW50IGRhdGUgYW5kIHB1dCBpbnRvIG9iamVjdFxuICAgIGxldCBjdXJyZW50RGF0ZSA9IGAke2RheU5hbWV9LCAke2RheURhdGV9JHtkYXkoZGF5RGF0ZSl9ICR7bW9udGh9ICcke3llYXJ9YDtcblxuICAgIC8vRm9ybWF0IHRpbWVcbiAgICBsZXQgY3VycmVudFRpbWUgPSBkYXRlLnRvTG9jYWxlVGltZVN0cmluZygnZW4tVVMnLCB7dGltZVpvbmUgOiBgJHt3ZWF0aGVyLnRpbWV6b25lfWB9KTtcbiAgICBpZiAoY3VycmVudFRpbWUubGVuZ3RoID09IDExKXtcbiAgICAgICAgY3VycmVudFRpbWUgPSBjdXJyZW50VGltZS5zbGljZSgwLDUpICsgJyAnICsgY3VycmVudFRpbWUuc2xpY2UoOCwxMSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjdXJyZW50VGltZSA9IGN1cnJlbnRUaW1lLnNsaWNlKDAsNCkgKyAnICcgKyBjdXJyZW50VGltZS5zbGljZSg3LDEwKTtcbiAgICB9XG5cbiAgICAvL0dldCBsb2NhdGlvbiBuYW1lXG4gICAgbGV0IHJldmVyc2VHZW9jb2RlVXJsID0gYGh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9nZW9jb2RlL2pzb24/bGF0bG5nPSR7bGF0aXR1ZGV9LCR7bG9uZ2l0dWRlfSZrZXk9QUl6YVN5RGJYY3hYM25QbG12eEgxUEdBNWZFTDFxS0x3ZVFta0VZYFxuICAgIGNvbnN0IHJldmVyc2VSZXNwb25zZSA9IGF3YWl0IGZldGNoKHJldmVyc2VHZW9jb2RlVXJsLCB7bW9kZTogXCJjb3JzXCJ9KVxuICAgIGNvbnN0IGFkZHJlc3NEYXRhID0gYXdhaXQgcmV2ZXJzZVJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhhZGRyZXNzRGF0YSk7XG4gICAgY29uc3QgYWRkcmVzcyA9IGF3YWl0IGFkZHJlc3NEYXRhLnJlc3VsdHNbMF0uYWRkcmVzc19jb21wb25lbnRzWzJdLmxvbmdfbmFtZTtcblxuICAgIC8vQ3JlYXRpbmcgdGhlIEhUTUwgZWxlbWVudFxuICAgIGNvbnN0IHdlYXRoZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3ZWF0aGVyQ29udGFpbmVyLmlkID0gJ21haW5XZWF0aGVyQ29udGFpbmVyJztcblxuICAgIGNvbnN0IHN1bW1hcnlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBzdW1tYXJ5RWxlbWVudC5pbm5lckhUTUwgPSB3ZWF0aGVyLmN1cnJlbnRseS5zdW1tYXJ5O1xuICAgIHdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc3VtbWFyeUVsZW1lbnQpO1xuXG4gICAgY29uc3QgbG9jYXRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBsb2NhdGlvbkVsZW1lbnQuaW5uZXJIVE1MID0gYWRkcmVzcztcbiAgICB3ZWF0aGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uRWxlbWVudCk7XG5cbiAgICBjb25zdCBkYXRlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkYXRlRWxlbWVudC5pbm5lckhUTUwgPSBjdXJyZW50RGF0ZTtcbiAgICB3ZWF0aGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVFbGVtZW50KTtcblxuICAgIGNvbnN0IHRpbWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRpbWVFbGVtZW50LmlubmVySFRNTCA9IGN1cnJlbnRUaW1lO1xuICAgIHdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodGltZUVsZW1lbnQpO1xuXG4gICAgY29uc3QgdGVtcGVyYXR1cmVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICB0ZW1wZXJhdHVyZUVsZW1lbnQuaW5uZXJIVE1MID0gd2VhdGhlci5jdXJyZW50bHkudGVtcGVyYXR1cmUgKyBcIsKwRlwiO1xuICAgIHdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodGVtcGVyYXR1cmVFbGVtZW50KTtcblxuICAgIGNvbnN0IHdlYXRoZXJJY29uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnN0IGljb24gPSBgJHt3ZWF0aGVyLmN1cnJlbnRseS5pY29ufWA7XG4gICAgaWYgKGljb24gPT0gJ2NsZWFyLWRheScpIHtcbiAgICAgICAgd2VhdGhlckljb25FbGVtZW50LnNyYyA9IGNsZWFyZGF5O1xuICAgIH0gZWxzZSBpZiAoaWNvbiA9PSAnY2xlYXItbmlnaHQnKSB7XG4gICAgICAgIHdlYXRoZXJJY29uRWxlbWVudC5zcmMgPSBjbGVhcm5pZ2h0O1xuICAgIH0gZWxzZSBpZiAoaWNvbiA9PSAnY2xvdWR5Jykge1xuICAgICAgICB3ZWF0aGVySWNvbkVsZW1lbnQuc3JjID0gY2xvdWR5O1xuICAgIH0gZWxzZSBpZiAoaWNvbiA9PSAnZm9nJykge1xuICAgICAgICB3ZWF0aGVySWNvbkVsZW1lbnQuc3JjID0gZm9nO1xuICAgIH0gZWxzZSBpZiAoaWNvbiA9PSAncGFydGx5LWNsb3VkeS1kYXknKSB7XG4gICAgICAgIHdlYXRoZXJJY29uRWxlbWVudC5zcmMgPSBwYXJ0bHljbG91ZHlkYXk7XG4gICAgfSBlbHNlIGlmIChpY29uID09ICdwYXJ0bHktY2xvdWR5LW5pZ2h0Jykge1xuICAgICAgICB3ZWF0aGVySWNvbkVsZW1lbnQuc3JjID0gcGFydGx5Y2xvdWR5bmlnaHQ7XG4gICAgfSBlbHNlIGlmIChpY29uID09ICdyYWluJykge1xuICAgICAgICB3ZWF0aGVySWNvbkVsZW1lbnQuc3JjID0gcmFpbjtcbiAgICB9IGVsc2UgaWYgKGljb24gPT0gJ3NsZWV0Jykge1xuICAgICAgICB3ZWF0aGVySWNvbkVsZW1lbnQuc3JjID0gc2xlZXQ7XG4gICAgfSBlbHNlIGlmIChpY29uID09ICdzbm93Jykge1xuICAgICAgICB3ZWF0aGVySWNvbkVsZW1lbnQuc3JjID0gc25vdztcbiAgICB9IGVsc2UgaWYgKGljb24gPT0gJ3dpbmQnKSB7XG4gICAgICAgIHdlYXRoZXJJY29uRWxlbWVudC5zcmMgPSB3aW5kO1xuICAgIH1cbiAgICB3ZWF0aGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHdlYXRoZXJJY29uRWxlbWVudCk7XG5cbiAgICBpZighZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0nKSl7XG4gICAgICAgIHdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRm9ybSgpKTtcbiAgICB9XG5cbiAgICAvL1JldHVybiBIVE1MIGVsZW1lbnRcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckNvbnRhaW5lcik7XG59O1xuXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVTZWNvbmRDb250YWluZXIobGF0aXR1ZGUsIGxvbmdpdHVkZSkge1xuICAgIC8vR2V0IHdlYXRoZXIgQVBJIGRhdGFcbiAgICBjb25zdCB3ZWF0aGVyID0gYXdhaXQgYXBpRnVuYy5nZXRXZWF0aGVyUHJvbWlzZShsYXRpdHVkZSwgbG9uZ2l0dWRlKTtcblxuICAgIC8vQ3JlYXRlIGEgY29udGFpbmVyIHRoYXQgZGlzcGxheXMgaHVtaWRpdHksIGNoYW5jZSBvZiByYWluIGFuZCB3aW5kIHNwZWVkXG4gICAgY29uc3Qgc2Vjb25kQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2Vjb25kQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdzZWNvbmRDb250YWluZXInO1xuXG4gICAgY29uc3QgaHVtaWRpdHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBodW1pZGl0eUNvbnRhaW5lci5jbGFzc05hbWUgPSAnaHVtaWRpdHlDb250YWluZXInO1xuICAgIGNvbnN0IGh1bWlkaXR5SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGh1bWlkaXR5SWNvbi5zcmMgPSBodW1pZGl0eTtcbiAgICBjb25zdCBodW1pZGl0eUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBodW1pZGl0eUluZm8uY2xhc3NOYW1lID0gJ2luZm8nO1xuICAgIGNvbnN0IGh1bWlkaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGh1bWlkaXR5TGFiZWwuaW5uZXJIVE1MID0gJ0h1bWlkaXR5JztcbiAgICBjb25zdCBodW1pZGl0eVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBodW1pZGl0eVZhbHVlLmlubmVySFRNTCA9IHdlYXRoZXIuY3VycmVudGx5Lmh1bWlkaXR5ICogMTAwICsgJyUnO1xuICAgIFxuICAgIGh1bWlkaXR5SW5mby5hcHBlbmRDaGlsZChodW1pZGl0eUxhYmVsKTtcbiAgICBodW1pZGl0eUluZm8uYXBwZW5kQ2hpbGQoaHVtaWRpdHlWYWx1ZSk7XG4gICAgaHVtaWRpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQoaHVtaWRpdHlJbmZvKTtcbiAgICBodW1pZGl0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChodW1pZGl0eUljb24pO1xuICAgIFxuICAgIGNvbnN0IHJhaW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByYWluQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdyYWluQ29udGFpbmVyJztcbiAgICBjb25zdCByYWluSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHJhaW5JY29uLnNyYyA9IHJhaW5jaGFuY2U7XG4gICAgY29uc3QgcmFpbkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByYWluSW5mby5jbGFzc05hbWUgPSAnaW5mbyc7XG4gICAgY29uc3QgcmFpbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICByYWluTGFiZWwuaW5uZXJIVE1MID0gJ0NoYW5jZSBvZiBSYWluJztcbiAgICBjb25zdCByYWluVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHJhaW5WYWx1ZS5pbm5lckhUTUwgPSB3ZWF0aGVyLmN1cnJlbnRseS5wcmVjaXBQcm9iYWJpbGl0eSAqIDEwMCArICclJztcblxuICAgIHJhaW5JbmZvLmFwcGVuZENoaWxkKHJhaW5MYWJlbCk7XG4gICAgcmFpbkluZm8uYXBwZW5kQ2hpbGQocmFpblZhbHVlKTtcbiAgICByYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhaW5JbmZvKTtcbiAgICByYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhaW5JY29uKTtcblxuICAgIGNvbnN0IHdpbmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3aW5kQ29udGFpbmVyLmNsYXNzTmFtZSA9ICd3aW5kQ29udGFpbmVyJztcbiAgICBjb25zdCB3aW5kSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHdpbmRJY29uLnNyYyA9IHdpbmQ7XG4gICAgY29uc3Qgd2luZEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3aW5kSW5mby5jbGFzc05hbWUgPSAnaW5mbyc7XG4gICAgY29uc3Qgd2luZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB3aW5kTGFiZWwuaW5uZXJIVE1MID0gJ1dpbmQgU3BlZWQnO1xuICAgIGNvbnN0IHdpbmRWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgd2luZFZhbHVlLmlubmVySFRNTCA9IHdlYXRoZXIuY3VycmVudGx5LndpbmRTcGVlZCArICcgbS9oJztcblxuICAgIHdpbmRJbmZvLmFwcGVuZENoaWxkKHdpbmRMYWJlbCk7XG4gICAgd2luZEluZm8uYXBwZW5kQ2hpbGQod2luZFZhbHVlKTtcbiAgICB3aW5kQ29udGFpbmVyLmFwcGVuZENoaWxkKHdpbmRJY29uKTtcbiAgICB3aW5kQ29udGFpbmVyLmFwcGVuZENoaWxkKHdpbmRJbmZvKTtcblxuICAgIC8vUHV0IGludG8gc2Vjb25kIGNvbnRhaW5lclxuICAgIHNlY29uZENvbnRhaW5lci5hcHBlbmRDaGlsZChodW1pZGl0eUNvbnRhaW5lcik7XG4gICAgc2Vjb25kQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhaW5Db250YWluZXIpO1xuICAgIHNlY29uZENvbnRhaW5lci5hcHBlbmRDaGlsZCh3aW5kQ29udGFpbmVyKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWNvbmRDb250YWluZXIpO1xufVxuXG4vL0NyZWF0ZSBmb3JtIGZvciBsb2NhdGlvbiBpbnB1dFxuZnVuY3Rpb24gY3JlYXRlRm9ybSgpe1xuICAgIC8vU2VhcmNoIExvY2F0aW9uIEJhclxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybUNvbnRhaW5lci5pZCA9ICdmb3JtJztcbiAgICBjb25zdCBmb3JtTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGZvcm1MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2xvY2F0aW9uJyk7XG5cbiAgICBjb25zdCBmb3JtSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGZvcm1JbnB1dC5jbGFzc05hbWUgPSBcImZvcm1JbnB1dFwiO1xuICAgIGZvcm1JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0Jyk7XG4gICAgZm9ybUlucHV0LmlkID0gXCJsb2NhdGlvblwiO1xuICAgIGZvcm1JbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdsb2NhdGlvbicpO1xuXG4gICAgY29uc3QgZm9ybUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGJ1dHRvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgIGJ1dHRvbkljb24uc3JjID0gc2VhcmNoO1xuICAgIGZvcm1CdXR0b24uYXBwZW5kQ2hpbGQoYnV0dG9uSWNvbik7XG4gICAgZm9ybUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcbiAgICBmb3JtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBsb2NhdGlvbiA9IGFwaUZ1bmMuZ2V0Rm9ybUlucHV0KCk7XG5cbiAgICAgICAgY29uc3QgY29vcmRpbmF0ZSA9IGF3YWl0IGFwaUZ1bmMuZ2V0Q29vcmRpbmF0ZShsb2NhdGlvbilcblxuICAgICAgICBjcmVhdGVNYWluQ29udGFpbmVyKGNvb3JkaW5hdGUubGF0aXR1ZGUsIGNvb3JkaW5hdGUubG9uZ2l0dWRlKTtcbiAgICB9KTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1MYWJlbCk7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtSW5wdXQpO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUJ1dHRvbik7XG5cbiAgICByZXR1cm4gZm9ybUNvbnRhaW5lcjtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckxvY2F0aW9uKCl7XG4gICAgYXN5bmMgZnVuY3Rpb24gc3VjY2Vzcyhwb3Mpe1xuICAgICAgICBjb25zdCBjcmQgPSBwb3MuY29vcmRzO1xuXG4gICAgICAgIGNyZWF0ZU1haW5Db250YWluZXIoY3JkLmxhdGl0dWRlLCBjcmQubG9uZ2l0dWRlKTtcbiAgICAgICAgY3JlYXRlU2Vjb25kQ29udGFpbmVyKGNyZC5sYXRpdHVkZSwgY3JkLmxvbmdpdHVkZSk7XG4gICAgfVxuICAgIFxuICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oc3VjY2Vzcyk7XG4gICAgXG59XG5cbi8vV2luZHkgQVBJXG5jb25zdCBvcHRpb25zID0ge1xuICAgIGtleTogJ2ViU1pCWnU2UjlaZVJITW56UzZXclNPRUZMWm5MRXNWJyxcbiAgICB2ZXJib3NlOiB0cnVlLFxuXG4gICAgLy9PcHRpb25hbDogSW5pdGlhbCBzdGF0ZSBvZiB0aGUgbWFwXG4gICAgbGF0OiA1MC40LFxuICAgIGxvbjogMTQuMyxcbiAgICB6b29tOiA1LFxufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vTG9naWMgQXBwbGljYXRpb25cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9Cb2R5IENvbnRhaW5lclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb250YWluZXIuaWQgPSBcImNvbnRhaW5lclwiO1xuXG4vL1NldHRpbmcgYmFja2dyb3VuZCBpbWFnZVxuZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7V2FsbHBhcGVyfSlgO1xuXG4vL0NyZWF0aW5nIGluaXRpYWwgTWFpbiBXZWF0aGVyIFdpbmRvdyBDb250YWluZXJcbmdldFVzZXJMb2NhdGlvbigpO1xuXG4vL0luaXRpYWxpemUgV2luZHkgQVBJXG53aW5keUluaXQob3B0aW9ucywgd2luZHlBUEkgPT4ge1xuICAgIGNvbnN0IHttYXB9ID0gd2luZHlBUEk7XG5cbiAgICBMLnBvcHVwKClcbiAgICAgICAgLnNldExhdExuZyhbNTAuNCwgMTQuM10pXG4gICAgICAgIC5zZXRDb250ZW50KCdIZWxsbyBXb3JsZCcpXG4gICAgICAgIC5vcGVuT24obWFwKTtcbn0pO1xuXG4vL0ZpbmFsbHkgYWRkaW5nIG1haW4gY29udGFpbmVyIHRvIGJvZHlcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==