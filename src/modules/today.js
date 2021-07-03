'use strict';

import { switchPage } from "..";

function filterToday() {
    const dates = document.querySelectorAll('.date');
    dates.forEach((date) => {
        if (date.textContent != 'Today') date.parentNode.parentNode.style.display = 'none';
    });
    if (document.getElementsByClassName('taskList').length === 0) {
        const noToday = document.getElementById('noToday');
        noToday.style.display = 'block';
        noToday.textContent = 'No task for today';
    }
}

function initToday() {
    switchPage('Today ', false)
    const small = document.createElement('span');
    const title = document.getElementById('currentPageTitle');
    title.appendChild(small)
    small.id = 'small'
    small.textContent = new Date().toDateString();
    filterToday();
}

export default initToday;
