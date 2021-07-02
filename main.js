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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\nconst todo = (description, dueDate, priority, project) => {\n    return { description, dueDate, priority, project };\n};\n\nconst addTask = (() => {\n    const taskArray = [];\n    const showInterface = () => {\n        document.getElementById('form').style.display = 'block';\n        document.getElementById('formSubmit').style.display = 'flex';\n        document.getElementById('add').style.display = 'none';\n    };\n    const reset = () => {\n        document.getElementById('taskText').value = '';\n        document.getElementById('datepicker').value = '';\n        document.getElementById('priorityChooserText').textContent = '!';\n    };\n    const getTask = () => {\n        const description = document.getElementById('taskText').value;\n        const dueDate =\n            new Date()\n                .toLocaleDateString(undefined, {\n                    year: 'numeric',\n                    month: '2-digit',\n                    day: '2-digit',\n                })\n                .replace(/\\//g, '-') === document.getElementById('datepicker').value\n                ? 'Today'\n                : document.getElementById('datepicker').value;\n        const priority = document.getElementById('priorityChooserText').textContent;\n        const project = document.getElementById('projectChooserText').textContent;\n        return todo(description, dueDate, priority, project);\n    };\n    const changeOpacity = () => {\n        if (getTask().description === '' || document.getElementById('taskText').value === '')\n            document.getElementById('submit').style.opacity = 0.5;\n        else document.getElementById('submit').style.opacity = 1;\n    };\n    const hideInterface = () => {\n        document.getElementById('form').style.display = 'none';\n        document.getElementById('formSubmit').style.display = 'none';\n        document.getElementById('add').style.display = 'flex';\n        reset();\n        changeOpacity();\n    };\n    const taskDone = function () {\n        this.parentNode.parentNode.remove();\n    };\n    const pushArray = () => {\n        taskArray.push(getTask());\n    };\n    const collapseContent = function (e) {\n        if (e.target.className === 'projectChooser' || e.target.className.includes('projectCreatorInput'))\n            document.getElementById('projectChooserCol').style.display = 'block';\n        else document.getElementById('projectChooserCol').style.display = 'none';\n        if (e.target.id === 'priorityChooserText')\n            document.getElementById('priorityChooserCol').style.display = 'block';\n        else document.getElementById('priorityChooserCol').style.display = 'none';\n    };\n    const selectChildPriority = function () {\n        document.getElementById('priorityChooserText').textContent =\n            this.textContent === 'Priority Low' ? '!' : this.textContent === 'Priority Medium' ? '!!' : '!!!';\n    };\n    const DOMTask = () => {\n        if (getTask().description === '') return;\n        const list = document.createElement('li');\n        document.getElementById('form').before(list);\n        list.className = 'taskList';\n        const div1 = list.appendChild(document.createElement('div'));\n        const div2 = list.appendChild(document.createElement('div'));\n        const bullet = div1.appendChild(document.createElement('div'));\n        const text = div1.appendChild(document.createElement('p'));\n        const date = div2.appendChild(document.createElement('p'));\n        const project = div2.appendChild(document.createElement('div'));\n        const priority = div2.appendChild(document.createElement('p'));\n        div1.className = 'listInside';\n        div2.className = 'listInside';\n        bullet.className = 'bullet';\n        project.className = 'project';\n        date.className = 'date';\n        priority.className = 'priority';\n        text.textContent = getTask().description;\n        date.textContent = getTask().dueDate;\n        project.textContent = getTask().project;\n        priority.textContent = getTask().priority;\n        priority.style.color =\n            getTask().priority.length === 1 ? 'green' : getTask().priority.length === 2 ? 'blue' : 'red';\n        pushArray();\n        reset();\n        changeOpacity();\n        bullet.addEventListener('click', taskDone);\n    };\n    const addListener = () => {\n        document.getElementById('add').addEventListener('click', showInterface);\n        document.getElementById('cancel').addEventListener('click', hideInterface);\n        document.getElementById('submit').addEventListener('click', DOMTask);\n        document\n            .querySelectorAll('.priorityChooserColChoice')\n            .forEach((p) => p.addEventListener('click', selectChildPriority));\n        document.getElementById('taskText').addEventListener('keyup', changeOpacity);\n        document.addEventListener('click', collapseContent);\n    };\n    return { addListener };\n})();\n\naddTask.addListener();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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