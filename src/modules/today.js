'use strict';

import { switchPage } from '..';
import { getTask } from '..';
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

function showNoToday() {
    const noToday = document.getElementById('noToday');
    noToday.style.display = 'block';
    noToday.textContent = 'No task is due today';
}

function filterToday() {
    checkDate('Today', true);
    if (getTask().length === 0) {
        showNoToday();
        return;
    }
    if (!getTask().some((task) => isToday(new Date(task.dueDate)))) showNoToday();
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
