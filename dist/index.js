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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/data/alphabet.js":
/*!*************************************!*\
  !*** ./src/assets/data/alphabet.js ***!
  \*************************************/
/*! exports provided: data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"data\", function() { return data; });\nconst data = [\r\n  [\r\n    { code: 192, en: '`' },\r\n    { code: 49, en: '1' },\r\n    { code: 50, en: '2' },\r\n    { code: 51, en: '3' },\r\n    { code: 52, en: '4' },\r\n    { code: 53, en: '5' },\r\n    { code: 54, en: '6' },\r\n    { code: 55, en: '7' },\r\n    { code: 56, en: '8' },\r\n    { code: 57, en: '9' },\r\n    { code: 48, en: '0' },\r\n    { code: 189, en: '-' },\r\n    { code: 187, en: '=' },\r\n    { code: 8, en: 'Backspace' }\r\n  ],\r\n  [\r\n    { code: 9, en: 'Tab' },\r\n    { code: 81, en: 'q', ru: 'й' },\r\n    { code: 87, en: 'w', ru: 'ц' },\r\n    { code: 69, en: 'e', ru: 'у' },\r\n    { code: 82, en: 'r', ru: 'к' },\r\n    { code: 84, en: 't', ru: 'е' },\r\n    { code: 89, en: 'y', ru: 'н' },\r\n    { code: 85, en: 'u', ru: 'г' },\r\n    { code: 73, en: 'i', ru: 'ш' },\r\n    { code: 79, en: 'o', ru: 'щ' },\r\n    { code: 80, en: 'p', ru: 'з' },\r\n    { code: 219, en: '[' },\r\n    { code: 221, en: ']' }\r\n  ],\r\n  [\r\n    { code: 20, en: 'Caps Lock' },\r\n    { code: 65, en: 'a', ru: 'ф' },\r\n    { code: 83, en: 's', ru: 'ы' },\r\n    { code: 68, en: 'd', ru: 'в' },\r\n    { code: 70, en: 'f', ru: 'а' },\r\n    { code: 71, en: 'g', ru: 'п' },\r\n    { code: 72, en: 'h', ru: 'р' },\r\n    { code: 74, en: 'j', ru: 'о' },\r\n    { code: 75, en: 'k', ru: 'л' },\r\n    { code: 76, en: 'l', ru: 'д' },\r\n    { code: 186, en: ';', ru: 'ж' },\r\n    { code: 222, en: '\\'', ru: 'э' },\r\n    { code: 13, en: 'Enter' }\r\n  ],\r\n  [\r\n    { code: 16, en: 'Shift' },\r\n    { code: 90, en: 'z', ru: 'я' },\r\n    { code: 88, en: 'x', ru: 'ч' },\r\n    { code: 67, en: 'c', ru: 'с' },\r\n    { code: 86, en: 'v', ru: 'м' },\r\n    { code: 66, en: 'b', ru: 'и' },\r\n    { code: 78, en: 'n', ru: 'т' },\r\n    { code: 77, en: 'm', ru: 'ь' },\r\n    { code: 188, en: ',', ru: 'б' },\r\n    { code: 190, en: '.', ru: 'ю' },\r\n    { code: 191, en: '/', ru: '.' }\r\n  ],\r\n  [\r\n    { code: 17, en: 'Ctrl' },\r\n    { code: 18, en: 'Alt' },\r\n    { code: 32, en: 'Space' },\r\n    { code: 0, en: 'Lang' }\r\n  ]\r\n];\n\n//# sourceURL=webpack:///./src/assets/data/alphabet.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _site_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site.scss */ \"./src/site.scss\");\n/* harmony import */ var _site_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_site_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_data_alphabet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/data/alphabet */ \"./src/assets/data/alphabet.js\");\n\r\n\r\n\r\nconst keyboard = {\r\n  elements: {\r\n    root: null,\r\n    textarea: null,\r\n    keyboard: null,\r\n    keys: []     \r\n  },\r\n\r\n  properties: {\r\n    languages: ['en', 'ru'],\r\n    currentLang: null,\r\n    capsLock: false\r\n  },\r\n\r\n  init() {\r\n    let defaultLang = localStorage.getItem('lang');\r\n    if (!defaultLang) {\r\n      defaultLang = this.properties.languages[0];\r\n      localStorage.setItem('lang', defaultLang);\r\n    }\r\n    this.properties.currentLang = defaultLang;\r\n\r\n    this.elements.root = document.getElementById('root');\r\n    this.elements.textarea = document.createElement('textarea');\r\n    this.elements.textarea.classList.add('textarea');\r\n    this.elements.textarea.setAttribute('placeholder', 'Click here');\r\n\r\n    this.elements.keyboard = document.createElement('div');\r\n    this.elements.keyboard.classList.add('keyboard');\r\n    this.elements.keyboard.appendChild(this.setKeys());\r\n    this.elements.keys = this.elements.keyboard.querySelectorAll(\".keyboard__button\");\r\n\r\n    this.elements.root.appendChild(this.elements.textarea);\r\n    this.elements.root.appendChild(this.elements.keyboard);\r\n  },\r\n\r\n  setKeys() {\r\n    const fragment = document.createDocumentFragment();\r\n    const longButtons = [ 8, 9, 20, 16, 17, 18, 13, 0 ];\r\n    const maxButtons = [ 32 ];\r\n\r\n    _assets_data_alphabet__WEBPACK_IMPORTED_MODULE_1__[\"data\"].forEach((row, index) => {\r\n      const rowElement = document.createElement('div');\r\n      rowElement.classList.add('keyboard__row');\r\n\r\n      row.forEach((button) => {\r\n        const btn = document.createElement('button');\r\n        btn.classList.add('keyboard__button');\r\n\r\n        if (longButtons.includes(button.code)) {\r\n          btn.classList.add('keyboard__button--long');\r\n        } else if (maxButtons.includes(button.code)) {\r\n          btn.classList.add('keyboard__button--max');\r\n        }\r\n\r\n        btn.setAttribute('id', button.code);\r\n        \r\n        switch (button.code) {\r\n          case 0:\r\n            btn.textContent = button.en; \r\n            btn.addEventListener(\"click\", () => this.changeLang());\r\n            break;\r\n          case 16:\r\n          case 17:\r\n          case 18:\r\n            btn.textContent = button.en;\r\n            break;\r\n          case 8:\r\n            btn.textContent = button.en;\r\n            const backSpaceClicked = () => {\r\n              let value = this.elements.textarea.value;\r\n              this.elements.textarea.value = value.substring(0, value.length - 1);\r\n            };\r\n            btn.addEventListener(\"click\", backSpaceClicked);\r\n            break;\r\n          case 13:\r\n            btn.textContent = button.en;\r\n            const enterClicked = () => {\r\n              this.elements.textarea.value += '\\n';\r\n            };\r\n            btn.addEventListener(\"click\", enterClicked);\r\n            break;\r\n          case 20:\r\n            btn.textContent = button.en;\r\n            const capsLockClicked = () => {\r\n              this.toggleCapsLock();\r\n              btn.classList.toggle(\"keyboard__button--active\", this.properties.capsLock);\r\n            };\r\n            btn.addEventListener(\"click\", capsLockClicked);\r\n            break;\r\n          case 9:\r\n          case 32:\r\n            btn.textContent = button.en;\r\n            const spaceClicked = () => {\r\n              this.elements.textarea.value += button.code === 0 ? '   ' : ' ';\r\n            };\r\n            btn.addEventListener(\"click\", spaceClicked);\r\n            break;\r\n          default:\r\n            let letter = (button.code > 64 && button.code < 91) || [186, 222].includes(button.code) ?\r\n              this.properties.currentLang === this.properties.languages[0] ?\r\n                button.en : button.ru : button.en;\r\n\r\n            btn.textContent = letter.toLowerCase();\r\n            btn.setAttribute('data-en', button.en);\r\n            btn.setAttribute('data-ru', button.ru);\r\n            const buttonClicked = () => {\r\n              let code = (button.code > 64 && button.code < 91) || [186, 222].includes(button.code) ?\r\n              this.properties.currentLang === this.properties.languages[0] ?\r\n                button.en : button.ru : button.en;\r\n              this.elements.textarea.value += this.properties.capsLock ? code.toUpperCase() : code.toLowerCase();;\r\n            };\r\n\r\n            btn.addEventListener(\"click\", buttonClicked);\r\n            break;\r\n        }\r\n\r\n        rowElement.appendChild(btn);\r\n      });\r\n\r\n      fragment.appendChild(rowElement);\r\n    });\r\n    return fragment;\r\n  },\r\n\r\n  changeLang() {\r\n    this.properties.currentLang = this.properties.currentLang === this.properties.languages[0] ?\r\n      this.properties.languages[1] : this.properties.languages[0];\r\n    localStorage.setItem('lang', this.properties.currentLang);\r\n\r\n    for (const key of this.elements.keys) {\r\n      if ((+key.id > 64 && +key.id < 91) || [186, 222].includes(+key.id)) {\r\n        key.textContent = this.properties.currentLang === this.properties.languages[0] ?\r\n          key.dataset.en : key.dataset.ru;\r\n      }\r\n    }\r\n  },\r\n\r\n  toggleCapsLock() {\r\n    this.properties.capsLock = !this.properties.capsLock;\r\n    const controlButtons = [ 8, 9, 20, 16, 17, 18, 13, 32, 0];\r\n\r\n    for (const key of this.elements.keys) {\r\n      if (!controlButtons.includes(+key.id)) {\r\n        key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();\r\n      }\r\n    }\r\n  }\r\n};\r\n\r\nconst selectedButtonClass = 'keyboard__button--active';\r\n\r\nconst keyUpEvent = (event) => {\r\n  const button = document.getElementById(event.keyCode);\r\n  if (!!button) {\r\n    button.classList.remove(selectedButtonClass);\r\n  }\r\n  button.click();\r\n};\r\n\r\nconst keyDownEvent = (event) => {\r\n  const button = document.getElementById(event.keyCode);\r\n  if (!!button && !button.classList.contains(selectedButtonClass)) {\r\n    button.classList.add(selectedButtonClass);\r\n  }\r\n};\r\n\r\nwindow.addEventListener(\"DOMContentLoaded\", () => keyboard.init());\r\nwindow.addEventListener(\"keyup\", keyUpEvent, false);\r\nwindow.addEventListener(\"keydown\", keyDownEvent, false);\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/site.scss":
/*!***********************!*\
  !*** ./src/site.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/site.scss?");

/***/ })

/******/ });