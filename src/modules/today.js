'use strict';

import { switchPage } from '..';
import { taskArray } from '..';
import { isToday } from 'date-fns';

function checkDate(date, isOnce) {
    const dates = document.querySelectorAll('.date');
    if (isOnce)
        dates.forEach((d) => {
            if (d.textContent != date) d.parentNode.parentNode.style.display = 'none';
        });
    else
        dates.forEach((d) => {
            if (d.textContent === date) d.parentNode.parentNode.style.display = 'none';
        });
}

function showNoToday(text) {
    const noToday = document.getElementById('noToday');
    noToday.style.display = 'block';
    noToday.textContent = text
}

function filterToday() {
    checkDate('Today', true);
    if (taskArray.length === 0) {
        showNoToday('No task is due today');
        return;
    }
    if (!taskArray.some((task) => isToday(new Date(task.dueDate)))) showNoToday('No task is due today');
}

function initToday() {
    switchPage('Today ', false);
    const small = document.createElement('span');
    const title = document.getElementById('currentPageTitle');
    title.appendChild(small);
    small.id = 'small';
    small.textContent = new Date().toDateString();
    filterToday();
}

export { checkDate, initToday, showNoToday };
