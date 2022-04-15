/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.cdnfonts.com/css/lato-light);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0%;\\r\\n  padding: 0%;\\r\\n  font-family: 'lato', sans-serif;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n\\r\\n/* width */\\r\\n::-webkit-scrollbar {\\r\\n  width: 10px;\\r\\n}\\r\\n\\r\\n/* Track */\\r\\n::-webkit-scrollbar-track {\\r\\n  box-shadow: inset 0 0 5px black;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n/* Handle */\\r\\n::-webkit-scrollbar-thumb {\\r\\n  background: black;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n:root {\\r\\n  --dark-light: black;\\r\\n}\\r\\n\\r\\n/* Handle on hover */\\r\\n::-webkit-scrollbar-thumb:hover {\\r\\n  background: #256eff;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background: var(--dark-light);\\r\\n  padding: 5% 5%;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\ninput {\\r\\n  background-color: #060606;\\r\\n  padding-left: 10px;\\r\\n  margin: 3vh 0;\\r\\n  height: 35px;\\r\\n  box-shadow: 3px 3px 6px #256eff;\\r\\n}\\r\\n\\r\\n::placeholder {\\r\\n  color: white;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  height: 35px;\\r\\n  padding: 0% 5px;\\r\\n  box-shadow: 3px 3px 6px #256eff;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nform button {\\r\\n  align-self: end;\\r\\n}\\r\\n\\r\\ninput,\\r\\nform button,\\r\\n#refresh {\\r\\n  background-color: #060606;\\r\\n  border: none;\\r\\n  border-radius: 10px;\\r\\n  font-weight: 900;\\r\\n}\\r\\n\\r\\nbutton:hover {\\r\\n  opacity: 0.7;\\r\\n  padding: 7px;\\r\\n}\\r\\n\\r\\nh2,\\r\\nh1 {\\r\\n  color: white;\\r\\n  text-shadow: 3px 3px 10px #256eff, 3px -3px 10px #256eff, -3px 3px 10px #256eff, -3px 3px 10px #256eff;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  margin: 10vh 6%;\\r\\n  height: 50vh;\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.scores_form {\\r\\n  display: block;\\r\\n  width: 30%;\\r\\n  margin: 0% 5%;\\r\\n}\\r\\n\\r\\n.scores_form h2 {\\r\\n  margin-bottom: 6vh;\\r\\n}\\r\\n\\r\\n.scores {\\r\\n  width: 60%;\\r\\n}\\r\\n\\r\\n@media (max-width: 778px) {\\r\\n  .container {\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n  }\\r\\n\\r\\n  .scores_form {\\r\\n    width: 80%;\\r\\n    margin: 0%;\\r\\n  }\\r\\n\\r\\n  .scores {\\r\\n    width: 80%;\\r\\n    margin-bottom: 5vh;\\r\\n  }\\r\\n}\\r\\n\\r\\nform {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.list_header {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  margin-bottom: 6vh;\\r\\n}\\r\\n\\r\\n.shadow {\\r\\n  padding: 18px;\\r\\n  border-radius: 20px;\\r\\n  box-shadow: inset 0 0 12px 12px var(--dark-light), inset 0 0 3px 2px var(--dark-light);\\r\\n  background: linear-gradient(to right, #256eff, #256eff);\\r\\n}\\r\\n\\r\\n.scores ul {\\r\\n  list-style: none;\\r\\n  border-radius: 4px;\\r\\n  padding: 3px;\\r\\n  height: 41vh;\\r\\n  overflow: hidden;\\r\\n  overflow-y: scroll;\\r\\n}\\r\\n\\r\\nli {\\r\\n  padding: 10px;\\r\\n  margin-top: 2px;\\r\\n  border-radius: 10px;\\r\\n  color: #f84f60;\\r\\n  font-weight: 600;\\r\\n  background-color: black;\\r\\n}\\r\\n\\r\\n.success_msg {\\r\\n  color: #256eff;\\r\\n  content: 'new score added successfully!';\\r\\n}\\r\\n\\r\\n.error_msg {\\r\\n  color: #f84f60;\\r\\n}\\r\\n\\r\\n.show_msg {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.fa-trophy {\\r\\n  color: #256eff;\\r\\n  font-size: x-large;\\r\\n  margin-right: 20px;\\r\\n}\\r\\n\\r\\n.fa-trophy:hover {\\r\\n  font-size: xx-large;\\r\\n  margin-right: 10px;\\r\\n}\\r\\n\\r\\n.fa-medal,\\r\\n.fa-sync,\\r\\n.fa-plus {\\r\\n  margin-left: 5px;\\r\\n  color: #256eff;\\r\\n}\\r\\n\\r\\n.gold {\\r\\n  color: yellow;\\r\\n  text-shadow: 3px 3px 50px yellow, 3px -3px 50px yellow, -3px 3px 50px yellow, -3px 3px 50px yellow;\\r\\n}\\r\\n\\r\\n.argent {\\r\\n  color: gainsboro;\\r\\n  text-shadow: 3px 3px 50px gainsboro, 3px -3px 50px gainsboro, -3px 3px 50px gainsboro, -3px 3px 50px gainsboro;\\r\\n}\\r\\n\\r\\n.bronze {\\r\\n  color: chocolate;\\r\\n  text-shadow: 3px 3px 50px chocolate, 3px -3px 50px chocolate, -3px 3px 50px chocolate, -3px 3px 50px chocolate;\\r\\n}\\r\\n\\r\\n.score_row {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.light,\\r\\n.night {\\r\\n  position: absolute;\\r\\n  margin-left: 90%;\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.light * {\\r\\n  color: yellow;\\r\\n}\\r\\n\\r\\n.night * {\\r\\n  color: #060606;\\r\\n}\\r\\n\\r\\n.show {\\r\\n  display: block;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_games_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/games.js */ \"./src/modules/games.js\");\n/* harmony import */ var _modules_request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/request.js */ \"./src/modules/request.js\");\n/* harmony import */ var _modules_addToDom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/addToDom.js */ \"./src/modules/addToDom.js\");\n// import _ from 'lodash';//eslint-disable-line\n\n\n\n\n\nconst id = 'QzuepOdb4S7f14QxmbA0';\nconst apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';\n\nconst game = new _modules_games_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](id);\nconst request = new _modules_request_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](apiUrl);\nconst user = document.getElementById('user');\nconst score = document.getElementById('score');\nconst addScoreBtn = document.getElementById('addScore');\nconst refresh = document.getElementById('refresh');\nconst scoreList = document.querySelector('.scores_list');\nconst msgContainer = document.querySelector('.msg');\nconst Light = document.querySelector('.light');\nconst Dark = document.querySelector('.night');\n\nLight.addEventListener('click', () => {\n  document.documentElement.style.setProperty('--dark-light', 'white');\n  Light.classList.toggle('show');\n  Dark.classList.toggle('show');\n});\n\nDark.addEventListener('click', () => {\n  document.documentElement.style.setProperty('--dark-light', 'black');\n  Light.classList.toggle('show');\n  Dark.classList.toggle('show');\n});\n\n(0,_modules_addToDom_js__WEBPACK_IMPORTED_MODULE_3__.addScoresToDom)(request, game, scoreList);\n\naddScoreBtn.addEventListener('click', async () => {\n  const response = await (0,_modules_addToDom_js__WEBPACK_IMPORTED_MODULE_3__.addNewScore)(game, user.value, score.value, request);\n\n  if (response.status <= 201) {\n    await (0,_modules_addToDom_js__WEBPACK_IMPORTED_MODULE_3__.displayMsg)('new score added successfully!', 'success_msg', msgContainer, 5000);\n  } else if (response.status < 500) {\n    await (0,_modules_addToDom_js__WEBPACK_IMPORTED_MODULE_3__.displayMsg)('Enter a valid username and a valid score!', 'error_msg', msgContainer, 5000);\n  } else {\n    await (0,_modules_addToDom_js__WEBPACK_IMPORTED_MODULE_3__.displayMsg)('Server doesn\\'t respond!', 'error_msg', msgContainer, 5000);\n  }\n});\n\nrefresh.addEventListener('click', async () => {\n  (0,_modules_addToDom_js__WEBPACK_IMPORTED_MODULE_3__.addScoresToDom)(request, game, scoreList);\n});\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ }),

/***/ "./src/modules/addToDom.js":
/*!*********************************!*\
  !*** ./src/modules/addToDom.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addNewScore\": () => (/* binding */ addNewScore),\n/* harmony export */   \"addScoresToDom\": () => (/* binding */ addScoresToDom),\n/* harmony export */   \"toggleMsg\": () => (/* binding */ toggleMsg),\n/* harmony export */   \"displayMsg\": () => (/* binding */ displayMsg)\n/* harmony export */ });\nconst addNewScore = async (game, user, score, request) => {\n  const response = await game.addScore(user, score, request);\n  return response;\n};\n\nconst createScoreElement = (score, medalColor) => `<li class=\"score_row\"><strong>${score.user}:${score.score}</strong><i class=\"fas fa-medal ${medalColor}\"></i></li>`;\n\nconst sort = (mscores) => {\n  mscores.sort((a, b) => a.score - b.score);\n  return mscores.reverse();\n};\n\nconst addScoresToDom = async (request, game, ulElement) => {\n  const response = await game.getScores(request);\n  const scores = sort(response.result);\n  ulElement.innerHTML = '';\n  ulElement.innerHTML += createScoreElement(scores[0], 'gold');\n  ulElement.innerHTML += createScoreElement(scores[1], 'argent');\n  ulElement.innerHTML += createScoreElement(scores[2], 'bronze');\n  scores.splice(0, 3);\n  scores.forEach((item) => {\n    ulElement.innerHTML += createScoreElement(item);\n  });\n};\n\nconst toggleMsg = (msg, classname, toggle, p) => {\n  if (toggle === 'show') {\n    p.classList.add(classname);\n    p.innerHTML = msg;\n  } else {\n    p.classList.remove(classname);\n    p.innerHTML = '';\n  }\n};\nconst displayMsg = async (msg, classname, p, delay) => new Promise((resolve) => {\n  toggleMsg(msg, classname, 'show', p);\n  setTimeout(() => {\n    resolve(toggleMsg('', classname, 'hide', p));\n  }, delay);\n});\n\n\n\n//# sourceURL=webpack://webpack/./src/modules/addToDom.js?");

/***/ }),

/***/ "./src/modules/games.js":
/*!******************************!*\
  !*** ./src/modules/games.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\nclass Game {\n  constructor(id) {\n    this.id = id;\n    this.scores = [];\n  }\n\n  addScore(user, score, request) {\n    return request.post([this.id, 'scores'].join('/'), { user, score });\n  }\n\n  async getScores(request) {\n    const response = await request.get([this.id, 'scores'].join('/'));\n    this.scores = response.json();\n    return this.scores;\n  }\n}\n\n//# sourceURL=webpack://webpack/./src/modules/games.js?");

/***/ }),

/***/ "./src/modules/request.js":
/*!********************************!*\
  !*** ./src/modules/request.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Request)\n/* harmony export */ });\nclass Request {\n  constructor(url) {\n    this.url = url;\n  }\n\n  post(endpoint, data) {\n    return fetch([this.url, endpoint].join(''), {\n      method: 'POST',\n      body: JSON.stringify(data),\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n    });\n  }\n\n  get(endpoint) {\n    return fetch([this.url, endpoint].join(''));\n  }\n}\n\n//# sourceURL=webpack://webpack/./src/modules/request.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;