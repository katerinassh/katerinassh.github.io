/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!*****************!*\
  !*** ./tabs.js ***!
  \*****************/
eval("//Tabs\n\nconst tabMainHeader = document.querySelector('.tab-all-headers'),\ntabHeaders = document.querySelectorAll('.tab-header'),\ntabBodies = document.querySelectorAll('.tab-body'),\ngreenLine = document.querySelector('.line-green');;\n\nfunction openTab(index) {\ngreenLine.className = 'line-green';\ngreenLine.classList.add('tab-' + (index + 1));\ntabBodies.forEach((item, i) => {\n    if (i === index) {\n        item.classList.add('active');\n    } else {\n        item.classList.remove('active');\n    }\n})\n}\n\ntabMainHeader.addEventListener('click', event => {\ntabHeaders.forEach((item, i) => {\n    if (event.target === item || event.target.parentElement === item) {\n        openTab(i);\n    }\n})\n});\n\n\n//# sourceURL=webpack:///./tabs.js?");
/******/ })()
;