'use strict';

import { switchPage, taskArray } from '..';
import { showNoToday } from './today';

function filterProject() {
    const title = document.getElementById('currentPageTitle').innerText;
    if (!taskArray.some((task) => title.includes(task.project))) showNoToday('No current project');
    document
        .querySelectorAll('.project')
        .forEach((p) => (!title.includes(p.textContent) ? (p.parentNode.parentNode.style.display = 'none') : p));
}

function initProject() {
    switchPage(`${this.firstElementChild.innerText} Project`, false);
    filterProject();
}

// function initProject() {
//     for (const iterator of projectArray) {
//         const element = document.createElement('li');
//         document.getElementById('projectChooserCol').appendChild(element);
//         element.className = 'projectChoice projectList';
//         const span = element.appendChild(document.createElement('span'));
//         span.textContent = iterator;
//     }
// }

export { initProject };
