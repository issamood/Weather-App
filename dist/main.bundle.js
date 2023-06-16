"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './src/style.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


//Setup Background



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
1.Figure out how to call the API and get data

*/



fetch('https://api.pirateweather.net/forecast/2076VPUwHo5rFjS0/40.7128%2C74.0060?units=us', {mode:'cors'})
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        console.log(response.currently.temperature);
    })

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBd0I7O0FBRXhCOzs7O0FBSUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQSw2RkFBNkYsWUFBWTtBQUN6RztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3NyYy9zdHlsZS5jc3MnXG5cbi8vU2V0dXAgQmFja2dyb3VuZFxuXG5cblxuLypcbkZpZ3VyZSBvdXQgV2VhdGhlciBBUElcblxuSG93IHRvIGdldCBkYXRhIGZvciB0b2RheVxuV2hhdCBraW5kIG9mIGRhdGEgdG8gZ2V0XG5UaGUgZGF5LCB0ZW1wZXJhdHVyZSwgdGhlIHdlYXRoZXIgY29uZGl0aW9uLCBoaWdoL2xvdyB0ZW1wcyxcbmh1bWlkaXR5LCB3aW5kIG5vdCBhcyBpbXBvcnRhbnQgYnV0IGp1c3QgZXh0cmEgZGF0YSBpZiBuZWVkZWRcblxuU2VhcmNoIGNpdHkgZnVuY3Rpb24gYmFyXG5cbkRlZmF1bHQgbG9jYXRpb24gc2V0IHRvIGlwIGFkZHJlc3MgbG9jYXRpb24uXG5cblRvIGRvIGxpc3Rcbi0tLS0tLS0tLS0tXG4xLkZpZ3VyZSBvdXQgaG93IHRvIGNhbGwgdGhlIEFQSSBhbmQgZ2V0IGRhdGFcblxuKi9cblxuXG5cbmZldGNoKCdodHRwczovL2FwaS5waXJhdGV3ZWF0aGVyLm5ldC9mb3JlY2FzdC8yMDc2VlBVd0hvNXJGalMwLzQwLjcxMjglMkM3NC4wMDYwP3VuaXRzPXVzJywge21vZGU6J2NvcnMnfSlcbiAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSlcbiAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmN1cnJlbnRseS50ZW1wZXJhdHVyZSk7XG4gICAgfSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=