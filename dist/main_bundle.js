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

/***/ "./css/style.scss":
/*!************************!*\
  !*** ./css/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./css/style.scss?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.scss */ \"./css/style.scss\");\n\n\n //Tabs\n\n const tabMainHeader = document.querySelector('.tab-all-headers'),\n    tabHeaders = document.querySelectorAll('.tab-header'),\n    tabBodies = document.querySelectorAll('.tab-body'),\n    greenLine = document.querySelector('.line-green');;\n\nfunction openTab(index) {\n    greenLine.className = 'line-green';\n    greenLine.classList.add('tab-' + (index + 1));\n    tabBodies.forEach((item, i) => {\n        if (i === index) {\n            item.classList.add('active');\n        } else {\n            item.classList.remove('active');\n        }\n    })\n}\n\ntabMainHeader.addEventListener('click', event => {\n    tabHeaders.forEach((item, i) => {\n        if (event.target === item || event.target.parentElement === item) {\n            openTab(i);\n        }\n    })\n});\n\n//Counter\n\nconst btn = document.querySelector('.buy-button'),\n    mainCount = document.querySelector('.icon-busket p');\n\nfunction addToBusket() {\n    let count = +mainCount.textContent;\n    count += 1;\n    if (count >= 0 && count < 9) {\n        mainCount.textContent = count;\n        if (count === 1) {\n            mainCount.classList.add('one');\n        } else {\n            mainCount.classList.remove('one');\n        }\n    } else {\n        mainCount.textContent = '9+';\n        mainCount.classList.add('more-than-nine');\n    }\n    btn.removeEventListener('click', addToBusket);\n}\n\nbtn.addEventListener('click', addToBusket);\n\n// btns.forEach(item => {\n//     item.addEventListener('click', addToBusket);\n// })\n\n// Modal window\nconst triggerModal = document.querySelector('.icon-busket'),\n    modal = document.querySelector('.modal'),\n    close = document.querySelector('.modal-close');\n\ntriggerModal.addEventListener('click', () => {\n    modal.classList.add('show');\n});\n\nclose.addEventListener('click', () => {\n    modal.classList.remove('show');\n})\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;