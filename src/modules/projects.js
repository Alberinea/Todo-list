'use strict';

import { switchPage } from '..';
import { showNoToday } from './today';

function filterProject() {
    const title = document.getElementById('currentPageTitle').innerText;
    const local = JSON.parse(localStorage.getItem('task'))
    if (!local.some((task) => title.includes(task.project))) showNoToday('No current project');
    document
        .querySelectorAll('.project')
        .forEach((p) => (!title.includes(p.textContent) ? (p.parentNode.parentNode.style.display = 'none') : p));
}

function initProject() {
    switchPage(`${this.firstElementChild.innerText} Project`, false);
    filterProject();
}


export { initProject };
