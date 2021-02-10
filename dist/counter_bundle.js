/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!********************!*\
  !*** ./counter.js ***!
  \********************/
eval("//Counter\n\nconst btns = document.querySelectorAll('.buy-button'),\n    mainCount = document.querySelector('.icon-busket p');\n\nfunction addToBusket(event) {\n    let count = +mainCount.textContent;\n    mainCount.className = 'normal';\n    count += 1;\n    if (count < 9) {\n        mainCount.textContent = count;\n        if (count === 1) {\n            mainCount.className = 'one';\n        }\n    } else {\n        mainCount.textContent = '9+';\n        mainCount.className = 'plus';\n    }\n    event.target.removeEventListener('click', addToBusket);\n}\n\nbtns.forEach(item => {\n     item.addEventListener('click', addToBusket);\n})\n\n\n//# sourceURL=webpack:///./counter.js?");
/******/ })()
;