/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const todo = (description, dueDate, priority, project) => {\n    return { description, dueDate, priority, project };\n};\n\nconst addTask = (() => {\n    const showInterface = () => {\n        document.getElementById('form').style.display = 'block';\n        document.getElementById('formSubmit').style.display = 'flex';\n        document.getElementById('add').style.display = 'none';\n    };\n    const hideInterface = () => {\n        document.getElementById('form').style.display = 'none';\n        document.getElementById('formSubmit').style.display = 'none';\n        document.getElementById('add').style.display = 'flex';\n    };\n    const addListener = () => {\n        document.getElementById('add').addEventListener('click', showInterface);\n        document.getElementById('cancel').addEventListener('click', hideInterface);\n    };\n    return { addListener };\n})();\n\naddTask.addListener();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;