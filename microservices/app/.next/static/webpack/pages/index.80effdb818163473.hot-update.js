"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bluelibs_x_ui_guardian_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bluelibs/x-ui-guardian-bundle */ \"./node_modules/@bluelibs/x-ui-guardian-bundle/dist/index.js\");\n/* harmony import */ var _bluelibs_x_ui_guardian_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_bluelibs_x_ui_guardian_bundle__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"C:\\\\Users\\\\SaadB\\\\Documents\\\\bluelibsplay\\\\ground\\\\microservices\\\\app\\\\src\\\\pages\\\\index.tsx\",\n    _this = undefined,\n    _s3 = $RefreshSig$();\n\n\n\n\n\nvar Home = function Home() {\n  _s3();\n\n  var _s, _s2;\n\n  var guardian = (0,_bluelibs_x_ui_guardian_bundle__WEBPACK_IMPORTED_MODULE_0__.useGuardian)();\n  useEffect(function () {\n    guardian.login(\"szahid@agencybox.com\", \"test@123\").then(function (data) {\n      console.log(data);\n      console.log(\"loggedin\");\n    });\n  }, [guardian]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n    children: [!loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\"Roles: \", (_s = s) === null || _s === void 0 ? void 0 : _s.UsersFind.map(function (user) {\n          return user === null || user === void 0 ? void 0 : user.roles.map(function (role) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n              children: role\n            }, role, false, {\n              fileName: _jsxFileName,\n              lineNumber: 22,\n              columnNumber: 40\n            }, _this);\n          });\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 18\n    }, _this), !loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\"Books: \", (_s2 = s) === null || _s2 === void 0 ? void 0 : _s2.UsersFind.map(function (user) {\n          return user === null || user === void 0 ? void 0 : user.Books.map(function (book) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n              children: book === null || book === void 0 ? void 0 : book.name\n            }, book === null || book === void 0 ? void 0 : book.name, false, {\n              fileName: _jsxFileName,\n              lineNumber: 28,\n              columnNumber: 40\n            }, _this);\n          });\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 18\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 10\n  }, _this);\n};\n\n_s3(Home, \"ba1uS10yOb0D4LqCxaXTleC0BDE=\", false, function () {\n  return [_bluelibs_x_ui_guardian_bundle__WEBPACK_IMPORTED_MODULE_0__.useGuardian];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFJQTs7O0FBRUEsSUFBTUUsSUFBYyxHQUFHLFNBQWpCQSxJQUFpQixHQUFNO0VBQUE7O0VBQUE7O0VBRTNCLElBQU1DLFFBQVEsR0FBR0gsMkVBQVcsRUFBNUI7RUFHQUksU0FBUyxDQUFDLFlBQU07SUFDZEQsUUFBUSxDQUFDRSxLQUFULENBQWUsc0JBQWYsRUFBdUMsVUFBdkMsRUFBbURDLElBQW5ELENBQXdELFVBQUNDLElBQUQsRUFBVTtNQUNoRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7TUFDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtJQUNELENBSEQ7RUFJRCxDQUxRLEVBS04sQ0FBQ04sUUFBRCxDQUxNLENBQVQ7RUFPQSxvQkFBTztJQUFLLFNBQVMsRUFBRUYsMEVBQWhCO0lBQUEsV0FDSixDQUFDVSxPQUFELGlCQUFZO01BQUEsdUJBQ1g7UUFBQSw0QkFBYUMsQ0FBYix1Q0FBYSxHQUFHQyxTQUFILENBQWFDLEdBQWIsQ0FBaUIsVUFBQ0MsSUFBRCxFQUFVO1VBQ3RDLE9BQU9BLElBQVAsYUFBT0EsSUFBUCx1QkFBT0EsSUFBSSxDQUFFQyxLQUFOLENBQVlGLEdBQVosQ0FBZ0IsVUFBQUcsSUFBSTtZQUFBLG9CQUFJO2NBQUEsVUFBa0JBO1lBQWxCLEdBQVdBLElBQVg7Y0FBQTtjQUFBO2NBQUE7WUFBQSxTQUFKO1VBQUEsQ0FBcEIsQ0FBUDtRQUNELENBRlksQ0FBYjtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFEVztNQUFBO01BQUE7TUFBQTtJQUFBLFNBRFIsRUFPSixDQUFDTixPQUFELGlCQUFZO01BQUEsdUJBQ1g7UUFBQSw2QkFBYUMsQ0FBYix3Q0FBYSxJQUFHQyxTQUFILENBQWFDLEdBQWIsQ0FBaUIsVUFBQ0MsSUFBRCxFQUFVO1VBQ3RDLE9BQU9BLElBQVAsYUFBT0EsSUFBUCx1QkFBT0EsSUFBSSxDQUFFRyxLQUFOLENBQVlKLEdBQVosQ0FBZ0IsVUFBQUssSUFBSTtZQUFBLG9CQUFJO2NBQUEsVUFBd0JBLElBQXhCLGFBQXdCQSxJQUF4Qix1QkFBd0JBLElBQUksQ0FBRUM7WUFBOUIsR0FBV0QsSUFBWCxhQUFXQSxJQUFYLHVCQUFXQSxJQUFJLENBQUVDLElBQWpCO2NBQUE7Y0FBQTtjQUFBO1lBQUEsU0FBSjtVQUFBLENBQXBCLENBQVA7UUFDRCxDQUZZLENBQWI7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBRFc7TUFBQTtNQUFBO01BQUE7SUFBQSxTQVBSO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQUFQO0FBY0QsQ0ExQkQ7O0lBQU1sQjtVQUVhRjs7O0tBRmJFO0FBNEJOLCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VHdWFyZGlhbiB9IGZyb20gXCJAYmx1ZWxpYnMveC11aS1ndWFyZGlhbi1idW5kbGVcIjtcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgdXNlVXNlckdldExhenlRdWVyeSwgdXNlVXNlckdldFF1ZXJ5IH0gZnJvbSBcIi4uL2J1bmRsZXMvVUlBcHBCdW5kbGUvcXVlcmllcy9nZW5lcmF0ZWQvZ3JhcGhxbFwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuXG4gIGNvbnN0IGd1YXJkaWFuID0gdXNlR3VhcmRpYW4oKTtcbiAgXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBndWFyZGlhbi5sb2dpbihcInN6YWhpZEBhZ2VuY3lib3guY29tXCIsIFwidGVzdEAxMjNcIikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICBjb25zb2xlLmxvZyhcImxvZ2dlZGluXCIpXG4gICAgfSkgIFxuICB9LCBbZ3VhcmRpYW5dKVxuXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgeyFsb2FkaW5nICYmIDxzZWN0aW9uPlxuICAgICAgPGRpdj5Sb2xlczoge3M/LlVzZXJzRmluZC5tYXAoKHVzZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIHVzZXI/LnJvbGVzLm1hcChyb2xlID0+IDxzcGFuIGtleT17cm9sZX0+e3JvbGV9PC9zcGFuPilcbiAgICAgIH0pfTwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgICB9XG4gICAgeyFsb2FkaW5nICYmIDxzZWN0aW9uPlxuICAgICAgPGRpdj5Cb29rczoge3M/LlVzZXJzRmluZC5tYXAoKHVzZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIHVzZXI/LkJvb2tzLm1hcChib29rID0+IDxzcGFuIGtleT17Ym9vaz8ubmFtZX0+e2Jvb2s/Lm5hbWV9PC9zcGFuPilcbiAgICAgIH0pfTwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgICB9XG4gIDwvZGl2Pjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsidXNlR3VhcmRpYW4iLCJzdHlsZXMiLCJIb21lIiwiZ3VhcmRpYW4iLCJ1c2VFZmZlY3QiLCJsb2dpbiIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNvbnRhaW5lciIsImxvYWRpbmciLCJzIiwiVXNlcnNGaW5kIiwibWFwIiwidXNlciIsInJvbGVzIiwicm9sZSIsIkJvb2tzIiwiYm9vayIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});