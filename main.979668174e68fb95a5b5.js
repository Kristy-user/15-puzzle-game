/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \**********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Montserrat-Light.ttf */ "./src/assets/fonts/Montserrat-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Montserrat-Medium.ttf */ "./src/assets/fonts/Montserrat-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Montserrat-Bold.ttf */ "./src/assets/fonts/Montserrat-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/background.webp */ "./src/assets/images/background.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/sound.png */ "./src/assets/images/sound.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/mute.png */ "./src/assets/images/mute.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 300;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 400;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n@font-face {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 600;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: \"Montserrat\", sans-serif;\n}\n\nbutton {\n  border: none;\n  overflow: visible;\n  background-color: inherit;\n}\n\nbody {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") center no-repeat;\n  background-size: cover;\n  min-height: 100vh;\n  font-size: 16px;\n  text-align: center;\n}\nbody.lock {\n  background-color: rgba(14, 14, 14, 0.3803921569);\n}\nbody.lock .container {\n  pointer-events: none;\n  opacity: 0.7;\n}\n\n.container {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 30px;\n}\n\n.title {\n  font-size: 46px;\n  text-transform: uppercase;\n  letter-spacing: 5px;\n  text-shadow: 3px 3px 20px #210b55, -2px 1px 30px #c599ff;\n  letter-spacing: 10px;\n  color: #2c2c2c;\n  letter-spacing: 0.05em;\n  text-shadow: 4px 4px 0px #d5d5d5, 7px 7px 0px rgba(0, 0, 0, 0.2);\n}\n\n.sound {\n  margin: 0 auto;\n  margin-top: 10px;\n  width: 40px;\n  height: 36px;\n  border: 1px solid rgba(162, 162, 162, 0.616);\n  background-color: rgba(255, 255, 255, 0.711);\n  border-radius: 8px;\n  background-size: 32px 32px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  cursor: pointer;\n}\n.sound.mute {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n  background-position: right;\n}\n.sound:hover {\n  background-color: #ffffff;\n  box-shadow: 1px 0 10px rgba(0, 0, 0, 0.408);\n}\n\n.gem {\n  display: grid;\n  margin: 30px auto;\n  margin-top: 15px;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  min-width: 266px;\n  min-height: 266px;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  border: 14px solid rgb(224, 227, 233);\n  border-radius: 8px;\n  background-color: #cfd3da;\n  box-shadow: 5px 5px 10px 10px rgba(0, 0, 0, 0.2);\n}\n.gem.box-3 {\n  grid-template-columns: repeat(3, 1fr);\n}\n.gem.box-4 {\n  grid-template-columns: repeat(4, 1fr);\n}\n.gem.box-5 {\n  grid-template-columns: repeat(5, 1fr);\n}\n.gem.box-6 {\n  grid-template-columns: repeat(6, 1fr);\n}\n.gem.box-7 {\n  grid-template-columns: repeat(7, 1fr);\n}\n.gem.box-8 {\n  grid-template-columns: repeat(8, 1fr);\n}\n.gem .gem-ceil {\n  position: relative;\n  width: 80px;\n  height: 80px;\n  cursor: pointer;\n  background-color: #cfd3da;\n  color: #12272a;\n  text-shadow: 2px 2px 3px #787878;\n  box-shadow: -2px -2px 3px 3px rgba(16, 15, 17, 0.3) inset, 3px 3px 5px 2px rgba(49, 61, 71, 0.49);\n  border-radius: 8px;\n  margin: 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 1;\n  transition: opacity 0.5s ease-in-out;\n  z-index: 10;\n}\n.gem .gem-ceil::after {\n  position: absolute;\n  display: block;\n  content: \"\";\n  width: 65px;\n  height: 65px;\n  background-color: rgb(140, 221, 108);\n  background: radial-gradient(circle, rgb(140, 221, 108) 0%, rgb(116, 167, 96) 100%);\n  border-radius: 50%;\n  z-index: 0;\n  transition: background-color 0.5s ease-out;\n}\n.gem .gem-ceil:hover::after {\n  background-color: rgb(170, 251, 138);\n  background: radial-gradient(circle, rgb(170, 251, 138) 0%, rgb(146, 197, 126) 100%);\n}\n.gem .gem-ceil.ceil-0 {\n  opacity: 0;\n  cursor: default;\n}\n.gem .gem-ceil:hover {\n  background-color: #ffffff;\n  border-color: rgb(230, 255, 253);\n  box-shadow: -2px -2px 3px 3px rgba(16, 15, 17, 0.3) inset, 3px 3px 15px 5px rgba(49, 61, 71, 0.59);\n}\n.gem .gem-ceil .gem-ceil-text {\n  text-align: center;\n  font-size: 36px;\n  position: relative;\n  z-index: 10;\n}\n\n.button,\n.sizes-box label {\n  font-size: 14px;\n  text-align: center;\n  text-transform: uppercase;\n  font-weight: 600;\n  background-color: rgb(207, 211, 218);\n  box-shadow: 3px 3px 10px rgba(18, 17, 17, 0.4039215686);\n  width: -moz-fit-content;\n  width: fit-content;\n  font-size: 16px;\n  padding: 8px;\n  text-shadow: 1px 1px 13px #e6fbeb;\n  color: rgb(120, 122, 121);\n  border-radius: 8px;\n  margin: 5px;\n  cursor: pointer;\n  border: 1px solid rgba(6, 41, 55, 0.123);\n}\n.button:hover, .button.active,\n.sizes-box label:hover,\n.sizes-box label.active {\n  background-color: rgba(247, 248, 247, 0.95);\n  color: rgba(2, 2, 2, 0.7411764706);\n  text-shadow: 1px 1px 13px #f8fdf9;\n  border: 1px solid rgba(247, 248, 247, 0.95);\n}\n\n.sizes-box input[type=radio] {\n  opacity: 0;\n  position: fixed;\n  width: 0;\n}\n\n.sizes-box label {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 2px 3px;\n}\n\n.sizes-box input[type=radio]:checked + label,\n.sizes-box input[type=radio]:focus + label {\n  background-color: rgb(255, 255, 255);\n  color: rgba(2, 2, 2, 0.7411764706);\n  text-shadow: 1px 1px 13px #f8fdf9;\n  border: 1px solid rgba(247, 248, 247, 0.95);\n  box-shadow: 1px 1px 8px 7px rgba(18, 17, 17, 0.7);\n}\n\n.control-panel-box {\n  margin-bottom: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.modal {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  min-width: 500px;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 60vh;\n  background-color: rgba(81, 81, 81, 0.95);\n  padding: 20px;\n  font-size: 28px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: beige;\n  border-radius: 8px;\n  z-index: 12;\n}\n.modal .title-sm {\n  font-size: 18px;\n}\n.modal .modal-text {\n  margin-bottom: 20px;\n}\n.modal .text-message {\n  margin-top: 20px;\n  font-size: 14px;\n}\n.modal .game-result {\n  letter-spacing: normal;\n  font-size: 16px;\n  margin-bottom: 5px;\n}\n.modal .game-result:first-child {\n  margin-top: 20px;\n}\n.modal .context-wrapper {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n.modal .button.return {\n  margin-top: 10px;\n}\n\n.progress-container {\n  display: flex;\n  justify-content: center;\n}\n\n.time,\n.count {\n  width: -moz-fit-content;\n  width: fit-content;\n  display: flex;\n  justify-content: center;\n  border: 1px solid #cdc5d4;\n  background-color: #fefefe;\n  border-radius: 8px;\n  padding: 3px;\n  letter-spacing: 2px;\n  min-width: 160px;\n  margin: 10px;\n  box-shadow: inset 1px 0 3px 1px rgba(0, 0, 0, 0.4705882353);\n}\n.time .time-title,\n.time .time-now,\n.time .count-now,\n.time .count-title,\n.count .time-title,\n.count .time-now,\n.count .count-now,\n.count .count-title {\n  font-size: 18px;\n  color: rgb(65, 9, 82);\n}\n.time .time-now,\n.time .count-now,\n.count .time-now,\n.count .count-now {\n  font-weight: 600;\n}\n\n@media (max-width: 768px) {\n  .gem {\n    min-width: -moz-fit-content;\n    min-width: fit-content;\n    min-height: -moz-fit-content;\n    min-height: fit-content;\n  }\n  .gem.box-6 .gem-ceil, .gem.box-7 .gem-ceil, .gem.box-8 .gem-ceil {\n    width: 50px;\n    height: 50px;\n  }\n  .gem.box-6 .gem-ceil:after, .gem.box-7 .gem-ceil:after, .gem.box-8 .gem-ceil:after {\n    width: 38px;\n    height: 38px;\n  }\n  .gem.box-6 .gem-ceil:after .gem-ceil-text, .gem.box-7 .gem-ceil:after .gem-ceil-text, .gem.box-8 .gem-ceil:after .gem-ceil-text {\n    font-size: 16px;\n  }\n  .modal {\n    min-width: 80%;\n    padding: 8px;\n    font-size: 24px;\n  }\n  .modal .context-wrapper {\n    justify-content: center;\n  }\n  .modal .context-wrapper .modal-text {\n    font-size: 16px;\n    margin-bottom: 10px;\n  }\n  .modal .context-wrapper .game-result {\n    font-size: 13px;\n    margin-bottom: 3px;\n  }\n}\n@media (max-width: 520px) {\n  .gem {\n    min-width: -moz-fit-content;\n    min-width: fit-content;\n    min-height: -moz-fit-content;\n    min-height: fit-content;\n  }\n  .gem.box-6 .gem-ceil, .gem.box-7 .gem-ceil, .gem.box-8 .gem-ceil {\n    width: 30px;\n    height: 30px;\n  }\n  .gem.box-6 .gem-ceil:after, .gem.box-7 .gem-ceil:after, .gem.box-8 .gem-ceil:after {\n    width: 22px;\n    height: 22px;\n    left: 3px;\n    top: 2.5px;\n  }\n  .gem.box-6 .gem-ceil .gem-ceil-text, .gem.box-7 .gem-ceil .gem-ceil-text, .gem.box-8 .gem-ceil .gem-ceil-text {\n    font-size: 14px;\n    left: -1.5px;\n    top: -1.5px;\n  }\n}\n@media (max-width: 460px) {\n  .container {\n    padding: 10px;\n  }\n  .title {\n    font-size: 32px;\n  }\n  .time,\n.count {\n    min-width: 120px;\n  }\n  .time .time-title,\n.time .count-title,\n.time .time-now,\n.time .count-now,\n.count .time-title,\n.count .count-title,\n.count .time-now,\n.count .count-now {\n    font-size: 14px;\n  }\n  .gem {\n    min-width: -moz-fit-content;\n    min-width: fit-content;\n    min-height: -moz-fit-content;\n    min-height: fit-content;\n  }\n  .gem.box-3 .gem-ceil, .gem.box-4 .gem-ceil, .gem.box-5 .gem-ceil {\n    width: 50px;\n    height: 50px;\n  }\n  .gem.box-3 .gem-ceil:after, .gem.box-4 .gem-ceil:after, .gem.box-5 .gem-ceil:after {\n    width: 38px;\n    height: 38px;\n    left: 4px;\n    top: 4px;\n  }\n  .gem.box-3 .gem-ceil .gem-ceil-text, .gem.box-4 .gem-ceil .gem-ceil-text, .gem.box-5 .gem-ceil .gem-ceil-text {\n    font-size: 16px;\n    left: -2.5px;\n    top: -1px;\n  }\n  .button {\n    font-size: 14px;\n    padding: 5px;\n  }\n  .sizes-box label {\n    font-size: 12px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/fonts.scss","webpack://./src/styles/style.scss"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 300;\n  src: url('../assets/fonts/Montserrat-Light.ttf');\n}\n@font-face {\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 400;\n  src: url('../assets/fonts/Montserrat-Medium.ttf');\n}\n@font-face {\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 600;\n  src: url('../assets/fonts/Montserrat-Bold.ttf');\n}\n","@import './fonts.scss';\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: 'Montserrat', sans-serif;\n}\nbutton {\n  border: none;\n  overflow: visible;\n  background-color: inherit;\n}\nbody {\n  background: url('../assets/images/background.webp') center no-repeat;\n  background-size: cover;\n  min-height: 100vh;\n  font-size: 16px;\n  text-align: center;\n  &.lock {\n    background-color: #0e0e0e61;\n    .container {\n      pointer-events: none;\n      opacity: 0.7;\n    }\n  }\n}\n.container {\n  max-width: 1100px;\n\n  margin: 0 auto;\n  padding: 30px;\n}\n.title {\n  font-size: 46px;\n  text-transform: uppercase;\n  letter-spacing: 5px;\n  text-shadow: 3px 3px 20px #210b55, -2px 1px 30px #c599ff;\n  letter-spacing: 10px;\n  color: #2c2c2c;\n\n  letter-spacing: 0.05em;\n  text-shadow: 4px 4px 0px #d5d5d5, 7px 7px 0px rgba(0, 0, 0, 0.2);\n}\n.sound {\n  margin: 0 auto;\n  margin-top: 10px;\n  width: 40px;\n  height: 36px;\n  border: 1px solid rgba(162, 162, 162, 0.616);\n  background-color: rgba(255, 255, 255, 0.711);\n  border-radius: 8px;\n  background-size: 32px 32px;\n  background-image: url('../assets/images/sound.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  cursor: pointer;\n  &.mute {\n    background-image: url('../assets/images/mute.png');\n    background-position: right;\n  }\n  &:hover {\n    background-color: #ffffff;\n    box-shadow: 1px 0 10px rgba(0, 0, 0, 0.408);\n  }\n}\n\n.gem {\n  display: grid;\n  margin: 30px auto;\n  margin-top: 15px;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  min-width: 266px;\n  min-height: 266px;\n  max-width: fit-content;\n  border: 14px solid rgb(224 227 233);\n  border-radius: 8px;\n  background-color: #cfd3da;\n  box-shadow: 5px 5px 10px 10px rgb(0 0 0 / 20%);\n  &.box-3 {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  &.box-4 {\n    grid-template-columns: repeat(4, 1fr);\n  }\n  &.box-5 {\n    grid-template-columns: repeat(5, 1fr);\n  }\n  &.box-6 {\n    grid-template-columns: repeat(6, 1fr);\n  }\n  &.box-7 {\n    grid-template-columns: repeat(7, 1fr);\n  }\n  &.box-8 {\n    grid-template-columns: repeat(8, 1fr);\n  }\n  & .gem-ceil {\n    position: relative;\n    width: 80px;\n    height: 80px;\n    cursor: pointer;\n    background-color: #cfd3da;\n    color: #12272a;\n    text-shadow: 2px 2px 3px #787878;\n    box-shadow: -2px -2px 3px 3px rgb(16 15 17 / 30%) inset,\n      3px 3px 5px 2px rgb(49 61 71 / 49%);\n    border-radius: 8px;\n    margin: 2px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    opacity: 1;\n    transition: opacity 0.5s ease-in-out;\n    z-index: 10;\n    &::after {\n      position: absolute;\n      display: block;\n      content: '';\n      width: 65px;\n      height: 65px;\n      background-color: rgb(140, 221, 108);\n      background: radial-gradient(\n        circle,\n        rgba(140, 221, 108, 1) 0%,\n        rgba(116, 167, 96, 1) 100%\n      );\n      border-radius: 50%;\n      z-index: 0;\n      transition: background-color 0.5s ease-out;\n    }\n    &:hover::after {\n      background-color: rgb(170, 251, 138);\n      background: radial-gradient(\n        circle,\n        rgba(170, 251, 138, 1) 0%,\n        rgba(146, 197, 126, 1) 100%\n      );\n    }\n    &.ceil-0 {\n      opacity: 0;\n      cursor: default;\n    }\n    &:hover {\n      background-color: #ffffff;\n      border-color: rgb(230 255 253 / 100%);\n      box-shadow: -2px -2px 3px 3px rgb(16 15 17 / 30%) inset,\n        3px 3px 15px 5px rgb(49 61 71 / 59%);\n    }\n    & .gem-ceil-text {\n      text-align: center;\n      font-size: 36px;\n      position: relative;\n      z-index: 10;\n    }\n  }\n}\n.button,\n.sizes-box label {\n  font-size: 14px;\n  text-align: center;\n  text-transform: uppercase;\n  font-weight: 600;\n  background-color: rgb(207 211 218);\n  box-shadow: 3px 3px 10px #12111167;\n  width: fit-content;\n  font-size: 16px;\n  padding: 8px;\n  text-shadow: 1px 1px 13px #e6fbeb;\n  color: rgb(120 122 121);\n  border-radius: 8px;\n  margin: 5px;\n  cursor: pointer;\n  border: 1px solid rgba(6, 41, 55, 0.123);\n  &:hover,\n  &.active {\n    background-color: rgba(247, 248, 247, 0.95);\n    color: #020202bd;\n    text-shadow: 1px 1px 13px #f8fdf9;\n    border: 1px solid rgba(247, 248, 247, 0.95);\n  }\n}\n\n.sizes-box input[type='radio'] {\n  opacity: 0;\n  position: fixed;\n  width: 0;\n}\n\n.sizes-box label {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 2px 3px;\n}\n\n.sizes-box input[type='radio']:checked + label,\n.sizes-box input[type='radio']:focus + label {\n  background-color: rgb(255 255 255);\n  color: rgba(2, 2, 2, 0.7411764706);\n  text-shadow: 1px 1px 13px #f8fdf9;\n  border: 1px solid rgba(247, 248, 247, 0.95);\n  box-shadow: 1px 1px 8px 7px rgb(18 17 17 / 70%);\n}\n\n.control-panel-box {\n  margin-bottom: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.modal {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  min-width: 500px;\n  width: fit-content;\n  height: 60vh;\n  background-color: rgb(81 81 81 / 95%);\n  padding: 20px;\n  font-size: 28px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: beige;\n  border-radius: 8px;\n  z-index: 12;\n  & .title-sm {\n    font-size: 18px;\n  }\n  .modal-text {\n    margin-bottom: 20px;\n  }\n  & .text-message {\n    margin-top: 20px;\n    font-size: 14px;\n  }\n  .game-result {\n    letter-spacing: normal;\n    font-size: 16px;\n    margin-bottom: 5px;\n    &:first-child {\n      margin-top: 20px;\n    }\n  }\n  & .context-wrapper {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n  }\n  & .button.return {\n    margin-top: 10px;\n  }\n}\n.progress-container {\n  display: flex;\n  justify-content: center;\n}\n\n.time,\n.count {\n  width: fit-content;\n  display: flex;\n  justify-content: center;\n  border: 1px solid #cdc5d4;\n  background-color: #fefefe;\n  border-radius: 8px;\n  padding: 3px;\n  letter-spacing: 2px;\n  min-width: 160px;\n  margin: 10px;\n\n  box-shadow: inset 1px 0 3px 1px #00000078;\n  & .time-title,\n  .time-now,\n  .count-now,\n  .count-title {\n    font-size: 18px;\n\n    color: rgb(65, 9, 82);\n  }\n  & .time-now,\n  .count-now {\n    font-weight: 600;\n  }\n}\n\n@media (max-width: 768px) {\n  .gem {\n    min-width: fit-content;\n    min-height: fit-content;\n    &.box-6,\n    &.box-7,\n    &.box-8 {\n      .gem-ceil {\n        width: 50px;\n        height: 50px;\n\n        &:after {\n          width: 38px;\n          height: 38px;\n\n          .gem-ceil-text {\n            font-size: 16px;\n          }\n        }\n      }\n    }\n  }\n  .modal {\n    min-width: 80%;\n    padding: 8px;\n    font-size: 24px;\n    .context-wrapper {\n      justify-content: center;\n      .modal-text {\n        font-size: 16px;\n        margin-bottom: 10px;\n      }\n      .game-result {\n        font-size: 13px;\n        margin-bottom: 3px;\n      }\n    }\n  }\n}\n@media (max-width: 520px) {\n  .gem {\n    min-width: fit-content;\n    min-height: fit-content;\n    &.box-6,\n    &.box-7,\n    &.box-8 {\n      .gem-ceil {\n        width: 30px;\n        height: 30px;\n\n        &:after {\n          width: 22px;\n          height: 22px;\n          left: 3px;\n          top: 2.5px;\n        }\n        .gem-ceil-text {\n          font-size: 14px;\n          left: -1.5px;\n          top: -1.5px;\n        }\n      }\n    }\n  }\n}\n\n@media (max-width: 460px) {\n  .container {\n    padding: 10px;\n  }\n  .title {\n    font-size: 32px;\n  }\n  .time,\n  .count {\n    min-width: 120px;\n    .time-title,\n    .count-title,\n    .time-now,\n    .count-now {\n      font-size: 14px;\n    }\n  }\n  .gem {\n    min-width: fit-content;\n    min-height: fit-content;\n    &.box-3,\n    &.box-4,\n    &.box-5 {\n      .gem-ceil {\n        width: 50px;\n        height: 50px;\n\n        &:after {\n          width: 38px;\n          height: 38px;\n          left: 4px;\n          top: 4px;\n        }\n        .gem-ceil-text {\n          font-size: 16px;\n          left: -2.5px;\n          top: -1px;\n        }\n      }\n    }\n  }\n  .button {\n    font-size: 14px;\n    padding: 5px;\n  }\n  .sizes-box label {\n    font-size: 12px;\n  }\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_4_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_4_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_4_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_4_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_4_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");
const createView_1 = __webpack_require__(/*! ./js/createView */ "./src/js/createView.js");
const showModal_1 = __webpack_require__(/*! ./js/showModal */ "./src/js/showModal.js");
const localStorage_1 = __webpack_require__(/*! ./js/localStorage */ "./src/js/localStorage.js");
const moveCeil_1 = __importDefault(__webpack_require__(/*! ./js/moveCeil */ "./src/js/moveCeil.js"));
const timer_1 = __webpack_require__(/*! ./js/timer */ "./src/js/timer.js");
(0, createView_1.createView)();
document.addEventListener('DOMContentLoaded', () => {
    (0, moveCeil_1.default)();
    (0, timer_1.start)();
    document.body.classList.add('lock');
    let enterContext = (0, showModal_1.createModalContext)('Hello, friend!', [
        'new-game',
        'continue-game',
    ]);
    (0, showModal_1.showModal)(enterContext);
    let soundPanel = document.querySelector('.sound');
    soundPanel.addEventListener('click', (e) => e.target.classList.toggle('mute'));
});
addEventListener('beforeunload', (event) => {
    event.preventDefault();
    (0, localStorage_1.setLocalStorage)();
});


/***/ }),

/***/ "./src/js/audio.js":
/*!*************************!*\
  !*** ./src/js/audio.js ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const playSound = (src) => {
    let soundMute = document.querySelector('.sound.mute');
    const audio = new Audio();
    audio.src = src;
    !soundMute ? audio.play() : null;
};
exports["default"] = playSound;


/***/ }),

/***/ "./src/js/checkResult.js":
/*!*******************************!*\
  !*** ./src/js/checkResult.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const showModal_1 = __webpack_require__(/*! ./showModal */ "./src/js/showModal.js");
const timer_1 = __webpack_require__(/*! ./timer */ "./src/js/timer.js");
const applause_mp3_1 = __importDefault(__webpack_require__(/*! ../assets/audio/applause.mp3 */ "./src/assets/audio/applause.mp3"));
const audio_1 = __importDefault(__webpack_require__(/*! ./audio */ "./src/js/audio.js"));
const localStorage_1 = __webpack_require__(/*! ./localStorage */ "./src/js/localStorage.js");
const checkOrder = (sortedArr) => {
    const time = document.querySelector('.time-now').textContent;
    const count = document.querySelector('.count-now').textContent;
    const size = document.querySelector('.size-item:checked').id.slice(-1);
    const listValues = document.querySelectorAll('.gem-ceil-text');
    const currentValues = [];
    listValues.forEach((item) => currentValues.push(item.textContent));
    const result = currentValues.find((item, i) => item !== sortedArr[i]);
    if (!result) {
        (0, localStorage_1.saveResults)(time, count, size);
        (0, audio_1.default)(applause_mp3_1.default);
        let winContext = (0, showModal_1.createModalContext)(`Hooray! You solved the puzzle in '${time}' and the number of moves = ${count}!`, ['results', 'return']);
        (0, showModal_1.showModal)(winContext);
        (0, timer_1.pause)();
    }
};
exports["default"] = checkOrder;


/***/ }),

/***/ "./src/js/createView.js":
/*!******************************!*\
  !*** ./src/js/createView.js ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createResultsList = exports.createGemBox = exports.createNewElement = exports.createView = void 0;
const timer_1 = __webpack_require__(/*! ./timer */ "./src/js/timer.js");
const showModal_1 = __webpack_require__(/*! ./showModal */ "./src/js/showModal.js");
const localStorage_1 = __webpack_require__(/*! ./localStorage */ "./src/js/localStorage.js");
const shuffleArray_1 = __webpack_require__(/*! ./shuffleArray */ "./src/js/shuffleArray.js");
const createNewElement = (el, className) => {
    const element = document.createElement(el);
    element.classList.add(...className);
    return element;
};
exports.createNewElement = createNewElement;
const createInputElement = (className, name, id, value, sizeChecked) => {
    const input = document.createElement('input');
    input.type = 'radio';
    input.classList.add(...className);
    input.id = id;
    input.id === `item-${sizeChecked}` ? (input.checked = true) : null;
    input.setAttribute('name', `${name}`);
    input.setAttribute('value', `${value}`);
    return input;
};
const createGemBox = (size, previousNumbers) => {
    const gemBox = document.querySelector('.gem');
    let previousSize = gemBox.classList[1];
    previousSize ? gemBox.classList.remove(previousSize) : null;
    gemBox.classList.add(`box-${size}`);
    gemBox.innerHTML = '';
    (0, shuffleArray_1.createGemCeils)(size, gemBox, previousNumbers);
};
exports.createGemBox = createGemBox;
const createProgressBar = () => {
    const progressBarContainer = createNewElement('div', ['progress-container']);
    const timeSection = createNewElement('time', ['time']);
    const countSection = createNewElement('div', ['count']);
    const countTitle = createNewElement('p', ['count-title']);
    countTitle.textContent = 'Count: ';
    const countNow = createNewElement('p', ['count-now']);
    countNow.textContent = '0';
    countSection.append(countTitle, countNow);
    const timeTitle = createNewElement('p', ['time-title']);
    timeTitle.textContent = 'Time: ';
    const currentTime = createNewElement('p', ['time-now']);
    timeSection.append(timeTitle, currentTime);
    progressBarContainer.append(timeSection, countSection);
    return progressBarContainer;
};
const createControlPanel = (buttons) => {
    const controlPanelBox = createNewElement('div', ['control-panel-box']);
    buttons.forEach((name) => {
        const button = createNewElement('button', ['button', `${name}`]);
        button.textContent = name.split('-').join(' ');
        controlPanelBox.append(button);
    });
    controlPanelBox.addEventListener('click', (e) => {
        const classList = e.target.classList;
        switch (true) {
            case classList.contains('pause'):
                (0, timer_1.pause)();
                (0, localStorage_1.setLocalStorage)();
                document.body.classList.add('lock');
                let pauseContext = (0, showModal_1.createModalContext)('Pause game', [
                    'continue-game',
                    'save-game',
                ]);
                (0, showModal_1.showModal)(pauseContext);
                break;
            case classList.contains('save'):
                (0, timer_1.pause)();
                document.body.classList.add('lock');
                (0, localStorage_1.setLocalStorage)();
                let saveContext = (0, showModal_1.createModalContext)('Your game have been saved successfully.', ['continue-game', 'new-game']);
                (0, showModal_1.showModal)(saveContext);
                break;
            case classList.contains('restart'):
                let size = document.querySelector('.size-item:checked').id;
                createGemBox(size.slice(-1));
                let count = document.querySelector('.count-now');
                count.textContent = '0';
                (0, timer_1.reset)();
                (0, timer_1.pause)();
                (0, timer_1.start)();
                break;
            case classList.contains('results'):
                let modalContainer = createNewElement('div', ['context-wrapper']);
                let results = (0, localStorage_1.getGemResults)();
                if (results && results.length > 0) {
                    let resultsList = createResultsList(results);
                    modalContainer.append(resultsList);
                    (0, showModal_1.showModal)(modalContainer);
                }
                else {
                    let message = createNewElement('p', ['text-message']);
                    message.textContent = 'No results yet...';
                    let buttonReturn = createNewElement('button', ['button', 'return']);
                    buttonReturn.textContent = 'return';
                    modalContainer.append(message, buttonReturn);
                    (0, showModal_1.showModal)(modalContainer);
                }
                break;
            default:
                break;
        }
    });
    return controlPanelBox;
};
const createSizePanel = (sizeChecked) => {
    const sizeButtonsBox = createNewElement('div', ['sizes-box']);
    for (let i = 3; i < 9; i++) {
        const sizeButton = createInputElement(['size-item'], 'sizes', `item-${i}`, `size-${i}`, `${sizeChecked}`);
        const label = document.createElement('label');
        label.setAttribute('for', `item-${i}`);
        label.innerHTML = `${i} × ${i}`;
        sizeButtonsBox.append(sizeButton, label);
    }
    sizeButtonsBox.addEventListener('click', (e) => {
        if (e.target.checked) {
            let size = document.querySelector('.size-item:checked').id;
            createGemBox(size.slice(-1));
            let count = document.querySelector('.count-now');
            count.textContent = '0';
            (0, timer_1.reset)();
        }
    });
    return sizeButtonsBox;
};
const createView = () => {
    const mainContainer = createNewElement('main', ['container']);
    const gemBox = createNewElement('div', ['gem']);
    const title = createNewElement('h1', ['title']);
    title.textContent = 'Gem Puzzle';
    let currentSize = document.querySelector('size-item:checked')
        ? document.querySelector('.size-item:checked').id.slice(-1)
        : 4;
    const sizePanel = createSizePanel(currentSize);
    const sound = createNewElement('div', ['sound']);
    const progressBar = createProgressBar();
    const controlPanel = createControlPanel([
        'pause',
        'restart',
        'save',
        'results',
    ]);
    document.body.classList.add('root');
    document.body.append(mainContainer);
    mainContainer.append(title, sound, progressBar, gemBox, controlPanel, sizePanel);
};
exports.createView = createView;
const createResultsList = (results) => {
    const listResults = createNewElement('div', ['list-results']);
    results.forEach((result, ind) => {
        let textResult = createNewElement('p', ['game-result']);
        textResult.textContent = `${ind + 1}. Movies: ${result.count}, time: ${result.time}, size: ${result.size}x${result.size}`;
        listResults.append(textResult);
    });
    const resultsInner = (0, showModal_1.createModalContext)('Top 10 results:', ['return'], listResults);
    return resultsInner;
};
exports.createResultsList = createResultsList;


/***/ }),

/***/ "./src/js/localStorage.js":
/*!********************************!*\
  !*** ./src/js/localStorage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getGemResults = exports.saveResults = exports.getLocalStorage = exports.setLocalStorage = void 0;
const setLocalStorage = () => {
    const time = document.querySelector('.time-now').textContent;
    const count = document.querySelector('.count-now').textContent;
    const size = document.querySelector('.size-item:checked').id.slice(-1);
    const listValues = document.querySelectorAll('.gem-ceil-text');
    const currentValues = [];
    listValues.forEach((item) => currentValues.push(item.textContent));
    let gemPuzzle = {
        time,
        count,
        currentValues: currentValues.reverse(),
        size,
    };
    localStorage.setItem('gemPuzzle', JSON.stringify(gemPuzzle));
};
exports.setLocalStorage = setLocalStorage;
const getLocalStorage = () => {
    let gemPuzzle = JSON.parse(localStorage.getItem('gemPuzzle'));
    return gemPuzzle;
};
exports.getLocalStorage = getLocalStorage;
getLocalStorage();
const saveResults = (time, count, size) => {
    let previousResults = JSON.parse(localStorage.getItem('gemPuzzleResults'));
    let newResults = [];
    let newResult = { time, count, size };
    if (previousResults && previousResults.length < 10) {
        newResults = [...previousResults];
        newResults.sort((a, b) => a.count - b.count);
        newResults.push(newResult);
    }
    else if (previousResults && previousResults.length === 10) {
        newResults = [...previousResults];
        newResults.sort((a, b) => a.count - b.count);
        newResults[newResult.length - 1] > newResult.count;
        newResults.pop();
        newResults.push(newResult);
    }
    else {
        newResults = [newResult];
    }
    localStorage.setItem('gemPuzzleResults', JSON.stringify(newResults.sort((a, b) => a.count - b.count)));
};
exports.saveResults = saveResults;
const getGemResults = () => {
    let results = JSON.parse(localStorage.getItem('gemPuzzleResults'));
    return results;
};
exports.getGemResults = getGemResults;


/***/ }),

/***/ "./src/js/moveCeil.js":
/*!****************************!*\
  !*** ./src/js/moveCeil.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const audio_1 = __importDefault(__webpack_require__(/*! ./audio */ "./src/js/audio.js"));
const checkResult_1 = __importDefault(__webpack_require__(/*! ./checkResult */ "./src/js/checkResult.js"));
const move_mp3_1 = __importDefault(__webpack_require__(/*! ../assets/audio/move.mp3 */ "./src/assets/audio/move.mp3"));
const sortedValues = () => {
    const ceilsList = document.querySelectorAll('.gem-ceil');
    const sortedCeilList = [];
    ceilsList.forEach((item) => item.textContent !== ' ' ? sortedCeilList.push(item.textContent) : null);
    sortedCeilList.sort((a, b) => a - b);
    sortedCeilList.push(' ');
    return sortedCeilList;
};
const changeElementsInner = (current, empty) => {
    const currentCeilValue = current.innerHTML;
    const classNameCurrent = [...current.classList];
    const classNameEmpty = [...empty.classList];
    current.innerHTML = '<p class="gem-ceil-text"> </p>';
    current.classList.remove(...classNameCurrent);
    empty.classList.remove(...classNameEmpty);
    empty.classList.add(...classNameCurrent);
    current.classList.add(...classNameEmpty);
    empty.innerHTML = currentCeilValue;
};
const moveOnClick = () => {
    const gemBox = document.querySelector('.gem');
    const countValue = document.querySelector('.count-now');
    gemBox.addEventListener('click', (e) => {
        let count = Number(document.querySelector('.count-now').textContent);
        const currentCeil = e.target.closest('div');
        const emptyCeil = document.querySelector('.ceil-0');
        const widthCeil = 2 * parseInt(getComputedStyle(emptyCeil).margin, 10) +
            parseInt(getComputedStyle(emptyCeil).width, 10) +
            1;
        const sortedCeils = sortedValues();
        let isAllowedMoving = isAllowedMove(currentCeil, emptyCeil, widthCeil);
        if (isAllowedMoving) {
            (0, audio_1.default)(move_mp3_1.default);
            count++;
            changeElementsInner(currentCeil, emptyCeil);
            (0, checkResult_1.default)(sortedCeils);
            countValue.textContent = count;
        }
    });
    gemBox.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains('gem-ceil')) {
            const emptyCeil = document.querySelector('.ceil-0');
            dragAndDrop(e.target, emptyCeil);
        }
    });
};
function dragAndDrop(current, empty) {
    let dragged;
    current.draggable = true;
    const countValue = document.querySelector('.count-now');
    const widthCeil = 2 * parseInt(getComputedStyle(empty).margin, 10) +
        parseInt(getComputedStyle(empty).width, 10) +
        1;
    current.addEventListener('drag', (e) => { });
    current.addEventListener('dragstart', function (e) {
        const current = e.target.closest('div');
        const empty = document.querySelector('.ceil-0');
        let isAllowedMoving = isAllowedMove(current, empty, widthCeil);
        if (isAllowedMoving) {
            dragged = e.target;
            e.target.classList.add('dragging');
        }
    });
    current.addEventListener('dragend', (e) => {
        e.target.classList.remove('dragging');
    });
    empty.addEventListener('dragover', (event) => {
        const emptyCeil = document.querySelector('.ceil-0');
        emptyCeil.classList.add('drop');
        event.preventDefault();
    }, false);
    empty.addEventListener('dragleave', (event) => {
        const emptyCeil = document.querySelector('.ceil-0');
        emptyCeil.classList.remove('drop');
    });
    empty.addEventListener('drop', (e) => {
        e.preventDefault();
        if (current.classList.contains('dragging') &&
            e.target.classList.contains('drop')) {
            let count = Number(document.querySelector('.count-now').textContent);
            count++;
            changeElementsInner(current, e.target);
            (0, audio_1.default)(move_mp3_1.default);
            current.classList.remove('dragging');
            empty.classList.remove('dragging');
            countValue.textContent = count;
        }
    });
}
function isAllowedMove(current, empty, width) {
    if ((Math.abs(current.getBoundingClientRect().left - empty.getBoundingClientRect().left) === 0 &&
        Math.abs(current.getBoundingClientRect().right -
            empty.getBoundingClientRect().right) === 0 &&
        Math.abs(current.getBoundingClientRect().top - empty.getBoundingClientRect().top) < width &&
        Math.abs(current.getBoundingClientRect().bottom -
            empty.getBoundingClientRect().bottom) < width) ||
        (Math.abs(current.getBoundingClientRect().top - empty.getBoundingClientRect().top) === 0 &&
            Math.abs(current.getBoundingClientRect().bottom -
                empty.getBoundingClientRect().bottom) === 0 &&
            Math.abs(current.getBoundingClientRect().left -
                empty.getBoundingClientRect().left) < width &&
            Math.abs(current.getBoundingClientRect().right -
                empty.getBoundingClientRect().right) < width)) {
        return true;
    }
    else
        return false;
}
exports["default"] = moveOnClick;


/***/ }),

/***/ "./src/js/showModal.js":
/*!*****************************!*\
  !*** ./src/js/showModal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createModalContext = exports.showModal = void 0;
const createView_1 = __webpack_require__(/*! ./createView */ "./src/js/createView.js");
const localStorage_1 = __webpack_require__(/*! ./localStorage */ "./src/js/localStorage.js");
const startGame_1 = __webpack_require__(/*! ./startGame */ "./src/js/startGame.js");
const createModalContext = (text, buttons, el) => {
    const contextWrapper = (0, createView_1.createNewElement)('div', ['context-wrapper']);
    const textModalWindow = (0, createView_1.createNewElement)('p', ['modal-text']);
    textModalWindow.textContent = text;
    const div = document.createElement('div');
    buttons.forEach((name) => {
        const button = (0, createView_1.createNewElement)('button', ['button', `${name}`]);
        button.textContent = name.split('-').join(' ');
        div.append(button);
    });
    contextWrapper.append(textModalWindow, el ? el : '', div);
    return contextWrapper;
};
exports.createModalContext = createModalContext;
const showModal = (context) => {
    const modalWindow = (0, createView_1.createNewElement)('div', ['modal']);
    modalWindow.append(context);
    document.body.append(modalWindow);
    modalWindow.addEventListener('click', (e) => {
        const classList = e.target.classList;
        const modalContainer = document.querySelector('.context-wrapper');
        const currentSize = document.querySelector('.size-item:checked');
        switch (true) {
            case classList.contains('new-game'):
                let size = currentSize ? currentSize.id.slice(-1) : 4;
                modalWindow.remove();
                (0, createView_1.createGemBox)(size);
                (0, startGame_1.startGame)();
                break;
            case classList.contains('continue-game'):
                let previousGame = (0, localStorage_1.getLocalStorage)();
                if (previousGame && previousGame.currentValues.length > 0) {
                    let { time, count, currentValues, size } = previousGame;
                    (0, startGame_1.startPreviousGame)(size, time, count, currentValues);
                    modalWindow.remove();
                }
                else {
                    const message = (0, createView_1.createNewElement)('p', ['text-message']);
                    message.textContent = 'You haven`t saved game';
                    modalContainer.append(message);
                }
                break;
            case classList.contains('save-game'):
                (0, localStorage_1.setLocalStorage)();
                message = (0, createView_1.createNewElement)('p', ['text-message']);
                message.textContent = 'Your game have been saved successfully.';
                modalContainer.append(message);
                break;
            case classList.contains('results'):
                let results = (0, localStorage_1.getGemResults)();
                if (results && results.length > 0) {
                    modalContainer.innerHTML = '';
                    let resultsList = (0, createView_1.createResultsList)(results);
                    modalContainer.append(resultsList);
                }
                else {
                    let message = (0, createView_1.createNewElement)('p', ['text-message']);
                    message.textContent = 'No results yet...';
                    modalContainer.append(message);
                }
                break;
            case classList.contains('return'):
                modalWindow.remove();
                document.body.classList.remove('lock');
                break;
            default:
                break;
        }
    });
};
exports.showModal = showModal;


/***/ }),

/***/ "./src/js/shuffleArray.js":
/*!********************************!*\
  !*** ./src/js/shuffleArray.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createGemCeils = void 0;
const createView_js_1 = __webpack_require__(/*! ./createView.js */ "./src/js/createView.js");
const utils_js_1 = __webpack_require__(/*! ./utils.js */ "./src/js/utils.js");
const createRandomNumbers = (count) => {
    let numbers = [];
    while (numbers.length < count) {
        const randomNumber = (0, utils_js_1.getRandomNum)(0, count);
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    return numbers;
};
const getZeroRowPosition = (randomArr, count) => {
    let index = randomArr.indexOf(0);
    let row = 1 + Math.floor(index / count);
    return row;
};
const checkForSolvability = (count, length) => {
    let result = 0;
    let sumInv = 0;
    let randomArray = createRandomNumbers(length);
    while (result == 0) {
        sumInv = 0;
        randomArray = createRandomNumbers(length);
        for (let i = 0; i < length - 1; i++) {
            for (let j = i + 1; j < length; j++) {
                if (randomArray[i] != 0 &&
                    randomArray[j] != 0 &&
                    randomArray[i] > randomArray[j]) {
                    sumInv++;
                }
            }
        }
        if (count % 2 == 0) {
            let zeroPosition = getZeroRowPosition(randomArray, count);
            sumInv += zeroPosition;
            if (sumInv % 2 == 0) {
                result = 1;
                return randomArray;
            }
        }
        if (count % 2 != 0) {
            if (sumInv % 2 == 0) {
                result = 1;
                return randomArray;
            }
        }
    }
};
const createGemCeils = (sizeBox, container, savedNumbers) => {
    let count = sizeBox ** 2;
    let numbers = [];
    if (savedNumbers) {
        numbers = [...savedNumbers];
    }
    else {
        while (numbers.length < count) {
            const checkedNumbers = checkForSolvability(sizeBox, count);
            numbers = [...checkedNumbers].reverse();
        }
    }
    const { length } = numbers;
    for (let i = 0; i < length; i++) {
        const innerValue = numbers.pop();
        const gemCeil = (0, createView_js_1.createNewElement)('div', [
            'gem-ceil',
            `ceil-${innerValue === ' ' ? '0' : innerValue}`,
        ]);
        const innerText = (0, createView_js_1.createNewElement)('p', ['gem-ceil-text']);
        innerText.textContent = innerValue;
        gemCeil.append(innerText);
        container.append(gemCeil);
    }
};
exports.createGemCeils = createGemCeils;


/***/ }),

/***/ "./src/js/startGame.js":
/*!*****************************!*\
  !*** ./src/js/startGame.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.startPreviousGame = exports.startGame = void 0;
const createView_1 = __webpack_require__(/*! ./createView */ "./src/js/createView.js");
const timer_1 = __webpack_require__(/*! ./timer */ "./src/js/timer.js");
const startGame = () => {
    document.body.classList.remove('lock');
    let count = document.querySelector('.count-now');
    count.textContent = '0';
    (0, timer_1.reset)();
};
exports.startGame = startGame;
const startPreviousGame = (size, time, count, numbers) => {
    document.body.classList.remove('lock');
    let timeText = document.querySelector('.time-now');
    let countText = document.querySelector('.count-now');
    (0, createView_1.createGemBox)(size, numbers);
    timeText.innerHTML = '';
    timeText.textContent = time;
    countText.textContent = count;
    let currentButtonSize = document.querySelector(`#item-${size}`);
    currentButtonSize.checked = true;
    (0, timer_1.pause)();
    (0, timer_1.start)();
};
exports.startPreviousGame = startPreviousGame;


/***/ }),

/***/ "./src/js/timer.js":
/*!*************************!*\
  !*** ./src/js/timer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resume = exports.reset = exports.pause = exports.start = void 0;
let sec;
let min;
let timerInterval;
function start() {
    let currentTime = document.querySelector('.time-now').textContent;
    let [minute = 0, seconds = 0] = currentTime.split(':');
    min = Number(minute);
    sec = Number(seconds);
    timerInterval = setInterval(add, 1000);
}
exports.start = start;
function add() {
    let currentTime = document.querySelector('.time-now');
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
        if (min >= 60) {
            min = 0;
        }
    }
    let timeStr = (min > 9 ? min : '0' + min) + ':' + (sec > 9 ? sec : '0' + sec);
    currentTime.textContent = timeStr;
}
function pause() {
    clearTimeout(timerInterval);
}
exports.pause = pause;
function reset() {
    let currentTime = document.querySelector('.time-now');
    currentTime.textContent = '00:00';
    sec = 0;
    min = 0;
}
exports.reset = reset;


/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getRandomNum = void 0;
const getRandomNum = (min, max) => {
    const rand = Math.random() * (max - min) + min;
    return Math.floor(rand);
};
exports.getRandomNum = getRandomNum;


/***/ }),

/***/ "./src/assets/audio/applause.mp3":
/*!***************************************!*\
  !*** ./src/assets/audio/applause.mp3 ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/3ab5d2c470f743cf8ebb.mp3";

/***/ }),

/***/ "./src/assets/audio/move.mp3":
/*!***********************************!*\
  !*** ./src/assets/audio/move.mp3 ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/636452ba2be81ac37657.mp3";

/***/ }),

/***/ "./src/assets/fonts/Montserrat-Bold.ttf":
/*!**********************************************!*\
  !*** ./src/assets/fonts/Montserrat-Bold.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/2c155811b35513d5beaa.ttf";

/***/ }),

/***/ "./src/assets/fonts/Montserrat-Light.ttf":
/*!***********************************************!*\
  !*** ./src/assets/fonts/Montserrat-Light.ttf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/6fcc9263a21be961d246.ttf";

/***/ }),

/***/ "./src/assets/fonts/Montserrat-Medium.ttf":
/*!************************************************!*\
  !*** ./src/assets/fonts/Montserrat-Medium.ttf ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/c86e3b9010ff63c99166.ttf";

/***/ }),

/***/ "./src/assets/images/background.webp":
/*!*******************************************!*\
  !*** ./src/assets/images/background.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/12ceff292d254e4bab38.webp";

/***/ }),

/***/ "./src/assets/images/mute.png":
/*!************************************!*\
  !*** ./src/assets/images/mute.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/d36734b84af0979ca796.png";

/***/ }),

/***/ "./src/assets/images/sound.png":
/*!*************************************!*\
  !*** ./src/assets/images/sound.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/be7fcf685577e52c6220.png";

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.979668174e68fb95a5b5.js.map