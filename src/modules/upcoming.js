'use strict';

import { checkDate, showNoToday } from './today';
import { switchPage } from '..';
import { taskArray } from '..';
import { isPast, isToday } from 'date-fns';

function filterOverdue() {
    if (taskArray.length === 0) {
        showNoToday();
        document.getElementById('noToday').innerText = 'No upcoming tasks';
        return;
    }
    const notOverdue = taskArray.filter((task) => !isPast(new Date(task.dueDate)) || isToday(new Date(task.dueDate)));
    for (let i = 0; i < taskArray.length; i++) {
        const des = document.querySelectorAll('.description');
        if (notOverdue.find((o) => o.description === des[i].innerText) != undefined)
            des[i].parentNode.parentNode.style.display = 'none';
    }
    return notOverdue
}

function initUpcoming() {
    checkDate('', false);
    switchPage('Upcoming tasks', false);
    filterOverdue();
}

export default initUpcoming;
