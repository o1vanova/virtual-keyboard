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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst data = [\n  [\n    { code: 192, en: '`' },\n    { code: 49, en: '1' },\n    { code: 50, en: '2' },\n    { code: 51, en: '3' },\n    { code: 52, en: '4' },\n    { code: 53, en: '5' },\n    { code: 54, en: '6' },\n    { code: 55, en: '7' },\n    { code: 56, en: '8' },\n    { code: 57, en: '9' },\n    { code: 48, en: '0' },\n    { code: 189, en: '-' },\n    { code: 187, en: '=' },\n    { code: 8, en: 'Backspace' },\n  ],\n  [\n    { code: 9, en: 'Tab' },\n    { code: 81, en: 'q', ru: 'й' },\n    { code: 87, en: 'w', ru: 'ц' },\n    { code: 69, en: 'e', ru: 'у' },\n    { code: 82, en: 'r', ru: 'к' },\n    { code: 84, en: 't', ru: 'е' },\n    { code: 89, en: 'y', ru: 'н' },\n    { code: 85, en: 'u', ru: 'г' },\n    { code: 73, en: 'i', ru: 'ш' },\n    { code: 79, en: 'o', ru: 'щ' },\n    { code: 80, en: 'p', ru: 'з' },\n    { code: 219, en: '[' },\n    { code: 221, en: ']' },\n  ],\n  [\n    { code: 20, en: 'Caps Lock' },\n    { code: 65, en: 'a', ru: 'ф' },\n    { code: 83, en: 's', ru: 'ы' },\n    { code: 68, en: 'd', ru: 'в' },\n    { code: 70, en: 'f', ru: 'а' },\n    { code: 71, en: 'g', ru: 'п' },\n    { code: 72, en: 'h', ru: 'р' },\n    { code: 74, en: 'j', ru: 'о' },\n    { code: 75, en: 'k', ru: 'л' },\n    { code: 76, en: 'l', ru: 'д' },\n    { code: 186, en: ';', ru: 'ж' },\n    { code: 222, en: '\\'', ru: 'э' },\n    { code: 13, en: 'Enter' },\n  ],\n  [\n    { code: 16, en: 'Shift' },\n    { code: 90, en: 'z', ru: 'я' },\n    { code: 88, en: 'x', ru: 'ч' },\n    { code: 67, en: 'c', ru: 'с' },\n    { code: 86, en: 'v', ru: 'м' },\n    { code: 66, en: 'b', ru: 'и' },\n    { code: 78, en: 'n', ru: 'т' },\n    { code: 77, en: 'm', ru: 'ь' },\n    { code: 188, en: ',', ru: 'б' },\n    { code: 190, en: '.', ru: 'ю' },\n    { code: 191, en: '/', ru: '.' },\n  ],\n  [\n    { code: 17, en: 'Ctrl' },\n    { code: 18, en: 'Alt' },\n    { code: 32, en: 'Space' },\n    { code: 0, en: 'Lang' },\n  ],\n];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (data);\n\n\n//# sourceURL=webpack:///./src/assets/data/alphabet.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _site_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site.scss */ \"./src/site.scss\");\n/* harmony import */ var _site_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_site_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_data_alphabet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/data/alphabet */ \"./src/assets/data/alphabet.js\");\n\n\n\nconst keyboard = {\n  elements: {\n    root: null,\n    textarea: null,\n    keyboard: null,\n    keys: [],\n  },\n\n  properties: {\n    currentLang: null,\n    capsLock: false,\n  },\n\n  constants: {\n    letterCodes: [\n      65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76,\n      77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88,\n      89, 90, 186, 222],\n    ru: 'ru',\n    en: 'en',\n    languages: ['ru', 'en'],\n  },\n\n  init() {\n    let defaultLang = localStorage.getItem('lang');\n    if (!defaultLang) {\n      defaultLang = this.constants.en;\n      localStorage.setItem('lang', defaultLang);\n    }\n    this.properties.currentLang = defaultLang;\n\n    this.elements.root = document.getElementById('root');\n    this.elements.textarea = document.createElement('textarea');\n    this.elements.textarea.classList.add('textarea');\n    this.elements.textarea.setAttribute('placeholder', 'Click here');\n\n    this.elements.keyboard = document.createElement('div');\n    this.elements.keyboard.classList.add('keyboard');\n    this.elements.keyboard.appendChild(this.setKeys());\n    this.elements.keys = this.elements.keyboard.querySelectorAll('.keyboard__button');\n\n    this.elements.root.appendChild(this.elements.textarea);\n    this.elements.root.appendChild(this.elements.keyboard);\n  },\n\n  setKeys() {\n    const fragment = document.createDocumentFragment();\n    const longButtons = [8, 9, 20, 16, 17, 18, 13, 0];\n    const maxButtons = [32];\n\n    _assets_data_alphabet__WEBPACK_IMPORTED_MODULE_1__[\"default\"].forEach((row) => {\n      const rowElement = document.createElement('div');\n      rowElement.classList.add('keyboard__row');\n\n      row.forEach((button) => {\n        const btn = document.createElement('button');\n        btn.classList.add('keyboard__button');\n\n        if (longButtons.includes(button.code)) {\n          btn.classList.add('keyboard__button--long');\n        } else if (maxButtons.includes(button.code)) {\n          btn.classList.add('keyboard__button--max');\n        }\n\n        btn.setAttribute('id', button.code);\n\n        switch (button.code) {\n          case 0:\n            btn.textContent = button.en;\n            btn.addEventListener('click', () => this.changeLang());\n            break;\n          case 16:\n          case 17:\n          case 18:\n            btn.textContent = button.en;\n            break;\n          case 8:\n            btn.textContent = button.en;\n            btn.addEventListener('click', () => {\n              const { value } = this.elements.textarea;\n              this.elements.textarea.value = value.substring(0, value.length - 1);\n            });\n            break;\n          case 13:\n            btn.textContent = button.en;\n            btn.addEventListener('click', () => {\n              this.elements.textarea.value += '\\n';\n            });\n            break;\n          case 20:\n            btn.textContent = button.en;\n            btn.addEventListener('click', () => {\n              this.toggleCapsLock();\n              btn.classList.toggle('keyboard__button--active', this.properties.capsLock);\n            });\n            break;\n          case 9:\n          case 32:\n            btn.textContent = button.en;\n            btn.addEventListener('click', () => {\n              this.elements.textarea.value += button.code === 9 ? '   ' : ' ';\n            });\n            break;\n          default:\n            if (this.constants.letterCodes.includes(button.code)) {\n              btn.textContent = this.properties.currentLang === this.constants.en\n                ? button.en : button.ru;\n            } else {\n              btn.textContent = button.en;\n            }\n\n            btn.setAttribute('data-en', button.en);\n            btn.setAttribute('data-ru', button.ru);\n\n            btn.addEventListener('click', () => {\n              let code = button.en;\n              if (this.constants.letterCodes.includes(button.code)) {\n                code = this.properties.currentLang === this.constants.en\n                  ? button.en : button.ru;\n              }\n\n              this.elements.textarea.value += this.properties.capsLock\n                ? code.toUpperCase() : code.toLowerCase();\n            });\n            break;\n        }\n\n        rowElement.appendChild(btn);\n      });\n\n      fragment.appendChild(rowElement);\n    });\n    return fragment;\n  },\n\n  changeLang() {\n    this.properties.currentLang = this.properties.currentLang === this.constants.en\n      ? this.constants.ru : this.constants.en;\n    localStorage.setItem('lang', this.properties.currentLang);\n\n    this.elements.keys.forEach((key) => {\n      const btn = key;\n      if (this.constants.letterCodes.includes(+btn.id)) {\n        const code = this.properties.currentLang === this.constants.en\n          ? btn.dataset.en : btn.dataset.ru;\n        btn.textContent = this.properties.capsLock\n          ? code.toUpperCase() : code.toLowerCase();\n      }\n    });\n  },\n\n  toggleCapsLock() {\n    this.properties.capsLock = !this.properties.capsLock;\n    const controlButtons = [8, 9, 20, 16, 17, 18, 13, 32, 0];\n\n    this.elements.keys.forEach((key) => {\n      if (!controlButtons.includes(+key.id)) {\n        const btn = key;\n        btn.textContent = this.properties.capsLock\n          ? btn.textContent.toUpperCase()\n          : btn.textContent.toLowerCase();\n      }\n    });\n  },\n};\n\nconst selectedButtonClass = 'keyboard__button--active';\n\nconst keyUpEvent = (event) => {\n  const button = document.getElementById(event.keyCode);\n  if (button) {\n    button.classList.remove(selectedButtonClass);\n    button.click();\n  }\n};\n\nconst keyDownEvent = (event) => {\n  const button = document.getElementById(event.keyCode);\n  if (!!button && !button.classList.contains(selectedButtonClass)) {\n    button.classList.add(selectedButtonClass);\n  }\n};\n\nwindow.addEventListener('DOMContentLoaded', () => keyboard.init());\nwindow.addEventListener('keyup', keyUpEvent, false);\nwindow.addEventListener('keydown', keyDownEvent, false);\n\n\n//# sourceURL=webpack:///./src/index.js?");

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