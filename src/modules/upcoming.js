'use strict';

import { checkDate } from './today';
import { switchPage } from '..';
import { getTask } from '..';

function filterOverdue() {
    console.log(getTask());
}

function initUpcoming() {
    checkDate('', false);
    switchPage('Upcoming tasks', false);
    filterOverdue();
}

export default initUpcoming;
