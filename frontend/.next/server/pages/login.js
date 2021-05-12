(function() {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_reducers_authReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/reducers/authReducer */ "./redux/reducers/authReducer.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ms */ "ms");
/* harmony import */ var ms__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ms__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "D:\\Socket.io\\chat_application\\frontend\\pages\\login.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const Login = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    0: inputValue,
    1: setInputValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    email: "",
    password: ""
  });

  const inputValueTracker = e => {
    const name = e.target.name;
    setInputValue(_objectSpread(_objectSpread({}, inputValue), {}, {
      [name]: e.target.value
    }));
  };

  const signinUser = async () => {
    try {
      // login request
      const res = await fetch(`http://localhost:8000/signin`, {
        method: 'post',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: inputValue.email,
          password: inputValue.password
        })
      });
      const data = await res.json(); // checking login errors

      if (data.error) {
        return console.log(data.error);
      } // message here


      console.log(data.message); // set token

      await js_cookie__WEBPACK_IMPORTED_MODULE_5___default().set('token', data.token, {
        expires: new Date(Date.now() + ms__WEBPACK_IMPORTED_MODULE_6___default()('1h'))
      });
      dispatch((0,_redux_reducers_authReducer__WEBPACK_IMPORTED_MODULE_4__.set_token)(data.token)); // set user info to localstorage

      localStorage.setItem('userInfo', JSON.stringify(data === null || data === void 0 ? void 0 : data.userInfo)); // redurect to the main page

      router.push('/');
    } catch (error) {
      console.log('Please check your internet connection.');
    }
  }; // signup form handler


  const signinFormHandler = e => {
    e.preventDefault();
    signinUser();
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Login Page"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: signinFormHandler,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        value: inputValue.email,
        onChange: inputValueTracker,
        type: "email",
        name: "email",
        placeholder: "Email"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        value: inputValue.password,
        onChange: inputValueTracker,
        type: "password",
        name: "password",
        placeholder: "Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "submit",
        children: "Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./redux/reducers/authReducer.js":
/*!***************************************!*\
  !*** ./redux/reducers/authReducer.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authReducer": function() { return /* binding */ authReducer; },
/* harmony export */   "set_token": function() { return /* binding */ set_token; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const authReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'auth_token',
  initialState: {
    token: null
  },
  reducers: {
    set_token: (state, action) => {
      return _objectSpread(_objectSpread({}, state), {}, {
        token: action.payload
      });
    }
  }
}); // Action creators are generated for each case reducer function

const {
  set_token
} = authReducer.actions;
/* harmony default export */ __webpack_exports__["default"] = (authReducer.reducer);

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@reduxjs/toolkit");;

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("js-cookie");;

/***/ }),

/***/ "ms":
/*!*********************!*\
  !*** external "ms" ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = require("ms");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/login.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2xvZ2luLmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vcmVkdXgvcmVkdWNlcnMvYXV0aFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcIm1zXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJMb2dpbiIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsInVzZVN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsImlucHV0VmFsdWVUcmFja2VyIiwiZSIsIm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNpZ25pblVzZXIiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsIkNvb2tpZXMiLCJ0b2tlbiIsImV4cGlyZXMiLCJEYXRlIiwibm93IiwibXMiLCJzZXRfdG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidXNlckluZm8iLCJwdXNoIiwic2lnbmluRm9ybUhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsImF1dGhSZWR1Y2VyIiwiY3JlYXRlU2xpY2UiLCJpbml0aWFs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dGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgc2V0X3Rva2VuIH0gZnJvbSBcIi4uL3JlZHV4L3JlZHVjZXJzL2F1dGhSZWR1Y2VyXCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSdcclxuaW1wb3J0IG1zIGZyb20gJ21zJ1xyXG5cclxuXHJcbmNvbnN0IExvZ2luID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZSh7IGVtYWlsOiBcIlwiLCBwYXNzd29yZDogXCJcIiB9KTtcclxuXHJcbiAgICBjb25zdCBpbnB1dFZhbHVlVHJhY2tlciA9IGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBlLnRhcmdldC5uYW1lO1xyXG4gICAgICAgIHNldElucHV0VmFsdWUoeyAuLi5pbnB1dFZhbHVlLCBbbmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNpZ25pblVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIC8vIGxvZ2luIHJlcXVlc3RcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9zaWduaW5gLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IGlucHV0VmFsdWUuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IGlucHV0VmFsdWUucGFzc3dvcmQsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBjaGVja2luZyBsb2dpbiBlcnJvcnNcclxuICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhkYXRhLmVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gbWVzc2FnZSBoZXJlXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEubWVzc2FnZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBzZXQgdG9rZW5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGF3YWl0IENvb2tpZXMuc2V0KCd0b2tlbicsIGRhdGEudG9rZW4sIHtcclxuICAgICAgICAgICAgICAgIGV4cGlyZXM6IG5ldyBEYXRlKERhdGUubm93KCkgKyBtcygnMWgnKSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBkaXNwYXRjaChzZXRfdG9rZW4oZGF0YS50b2tlbikpO1xyXG5cclxuICAgICAgICAgICAgLy8gc2V0IHVzZXIgaW5mbyB0byBsb2NhbHN0b3JhZ2VcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJJbmZvJywgSlNPTi5zdHJpbmdpZnkoZGF0YT8udXNlckluZm8pKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHJlZHVyZWN0IHRvIHRoZSBtYWluIHBhZ2VcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1BsZWFzZSBjaGVjayB5b3VyIGludGVybmV0IGNvbm5lY3Rpb24uJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2lnbnVwIGZvcm0gaGFuZGxlclxyXG4gICAgY29uc3Qgc2lnbmluRm9ybUhhbmRsZXIgPSBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2lnbmluVXNlcigpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPkxvZ2luIFBhZ2U8L2gxPlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c2lnbmluRm9ybUhhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtpbnB1dFZhbHVlLmVtYWlsfSBvbkNoYW5nZT17aW5wdXRWYWx1ZVRyYWNrZXJ9IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtpbnB1dFZhbHVlLnBhc3N3b3JkfSBvbkNoYW5nZT17aW5wdXRWYWx1ZVRyYWNrZXJ9IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+TG9naW48L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpblxyXG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcblxyXG5leHBvcnQgY29uc3QgYXV0aFJlZHVjZXIgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiAnYXV0aF90b2tlbicsXHJcbiAgICBpbml0aWFsU3RhdGU6IHtcclxuICAgICAgICB0b2tlbjogbnVsbCxcclxuICAgIH0sXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIHNldF90b2tlbjogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHRva2VuOiBhY3Rpb24ucGF5bG9hZCB9XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn0pXHJcblxyXG4vLyBBY3Rpb24gY3JlYXRvcnMgYXJlIGdlbmVyYXRlZCBmb3IgZWFjaCBjYXNlIHJlZHVjZXIgZnVuY3Rpb25cclxuZXhwb3J0IGNvbnN0IHsgc2V0X3Rva2VuIH0gPSBhdXRoUmVkdWNlci5hY3Rpb25zXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhdXRoUmVkdWNlci5yZWR1Y2VyIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9