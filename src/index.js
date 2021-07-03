'use strict';

import { initToday, showNoToday } from './modules/today';
import initUpcoming from './modules/upcoming';
import { format, isYesterday, isPast, isToday } from 'date-fns';

const todo = (description, dueDate, priority, project) => {
    return { description, dueDate, priority, project };
};

function switchPage(title, isInbox) {
    document.getElementById('currentPageTitle').textContent = title;
    document.getElementById('noToday').style.display = 'none';
    if (isInbox) {
        document.getElementById('add').style.display = 'flex';
    } else {
        document.getElementById('add').style.display = 'none';
        document.getElementById('form').style.display = 'none';
        document.getElementById('formSubmit').style.display = 'none';
    }
}

function initInbox() {
    switchPage('Inbox', true);
    const showAllTasks = () => {
        document.querySelectorAll('.taskList').forEach((task) => (task.style.display = 'flex'));
    };
    showAllTasks();
}

const addTask = (() => {
    const taskArray = [];
    const projectArray = [];
    const showInterface = () => {
        document.getElementById('form').style.display = 'block';
        document.getElementById('formSubmit').style.display = 'flex';
        document.getElementById('add').style.display = 'none';
    };
    const reset = () => {
        document.getElementById('taskText').value = '';
        document.getElementById('datepicker').value = '';
        document.getElementById('priorityChooserText').textContent = '!';
        document.getElementById('projectChooserText').textContent = 'Default';
    };
    const manageDate = () => {
        const oldDate = new Date(document.getElementById('datepicker').value || 1111 - 11 - 11);
        let oldDateFormatted = format(oldDate, 'yyyy-MM-dd');
        let date = format(oldDate, 'd/M/yyyy');
        if (isYesterday(oldDate)) date = 'Yesterday';
        if (date === format(new Date(), 'd/M/yyyy')) date = 'Today';
        if (date === '1/1/1970') date = '';
        if (oldDateFormatted === '1970-01-01') oldDateFormatted = '';
        return { date, oldDateFormatted, oldDate };
    };
    const createTask = () => {
        const description = document.getElementById('taskText').value;
        const dueDate = manageDate().oldDateFormatted;
        const priority = document.getElementById('priorityChooserText').textContent;
        const project = document.getElementById('projectChooserText').textContent;
        return todo(description, dueDate, priority, project);
    };
    const changeOpacity = () => {
        if (document.getElementById('taskText').value === '') document.getElementById('submit').style.opacity = 0.5;
        else document.getElementById('submit').style.opacity = 1;
    };
    const hideInterface = () => {
        document.getElementById('form').style.display = 'none';
        document.getElementById('formSubmit').style.display = 'none';
        document.getElementById('add').style.display = 'flex';
        reset();
        changeOpacity();
    };
    const removeTask = function () {
        const checkTitleToday = () => {
            if (document.getElementById('currentPageTitle').innerText === `Today ${new Date().toDateString()}`) {
                if (!taskArray.some((task) => isToday(new Date(task.dueDate)))) showNoToday();
            }
        };
        this.parentNode.parentNode.remove();
        for (let i = 0; i < taskArray.length; i++) {
            if (taskArray[i].description === this.nextSibling.textContent) taskArray.splice(i, 1);
        }
        checkTitleToday();
    };
    const pushArray = () => {
        taskArray.push(createTask());
    };
    const collapseContent = function (e) {
        if (e.target.className === 'projectChooser' || e.target.className.includes('projectCreatorInput'))
            document.getElementById('projectChooserCol').style.display = 'block';
        else document.getElementById('projectChooserCol').style.display = 'none';
        if (e.target.id === 'priorityChooserText')
            document.getElementById('priorityChooserCol').style.display = 'block';
        else document.getElementById('priorityChooserCol').style.display = 'none';
    };
    const selectChildPriority = function () {
        document.getElementById('priorityChooserText').textContent =
            this.textContent === 'Priority Low' ? '!' : this.textContent === 'Priority Medium' ? '!!' : '!!!';
    };
    const selectProject = function () {
        document.getElementById('projectChooserText').textContent = this.textContent;
    };
    const initProject = () => {
        for (const iterator of projectArray) {
            const element = document.createElement('li');
            document.getElementById('projectChooserCol').appendChild(element);
            element.className = 'projectChoice projectList';
            const span = element.appendChild(document.createElement('span'));
            span.textContent = iterator;
        }
    };
    const pushProject = () => {
        projectArray.push(document.getElementById('projectCreatorInput').value);
        document.getElementById('projectCreatorInput').value = '';
        const createProject = () => {
            const element = document.createElement('li');
            document.getElementById('projectChooserCol').appendChild(element);
            element.className = 'projectChoice projectList';
            const span = element.appendChild(document.createElement('span'));
            span.textContent = projectArray[projectArray.length - 1];
            element.addEventListener('click', selectProject);
        };
        createProject();
    };
    const DOMTask = () => {
        if (createTask().description === '') return;
        const list = document.createElement('li');
        document.getElementById('form').before(list);
        list.className = 'taskList';

        const div1 = list.appendChild(document.createElement('div'));
        const div2 = list.appendChild(document.createElement('div'));
        const bullet = div1.appendChild(document.createElement('div'));
        const text = div1.appendChild(document.createElement('p'));
        const date = div2.appendChild(document.createElement('p'));
        const project = div2.appendChild(document.createElement('div'));
        const priority = div2.appendChild(document.createElement('p'));

        div1.className = 'listInside';
        div2.className = 'listInside';
        bullet.className = 'bullet';
        project.className = 'project';
        date.className = 'date';
        priority.className = 'priority';
        text.textContent = createTask().description;
        date.textContent = manageDate().date;
        project.textContent = createTask().project;
        priority.textContent = createTask().priority;

        const changeColor = () => {
            priority.style.color =
                createTask().priority.length === 1 ? 'green' : createTask().priority.length === 2 ? 'blue' : 'red';
            date.style.color = manageDate().date === 'Today' ? 'blue' : isPast(manageDate().oldDate) ? 'red' : 'black';
        };
        changeColor();
        pushArray();
        reset();
        changeOpacity();
        bullet.addEventListener('click', removeTask);
    };
    const addListener = () => {
        document.getElementById('add').addEventListener('click', showInterface);
        document.getElementById('cancel').addEventListener('click', hideInterface);
        document.getElementById('submit').addEventListener('click', DOMTask);
        document.getElementById('today').addEventListener('click', initToday);
        document.getElementById('upcoming').addEventListener('click', initUpcoming);
        document.getElementById('inbox').addEventListener('click', initInbox);
        document.getElementById('projectCreatorPlus').addEventListener('click', pushProject);
        document.querySelectorAll('.projectList').forEach((p) => p.addEventListener('click', selectProject));
        document
            .querySelectorAll('.priorityChooserColChoice')
            .forEach((p) => p.addEventListener('click', selectChildPriority));
        document.getElementById('taskText').addEventListener('keyup', changeOpacity);
        document.addEventListener('click', collapseContent);
    };
    return { addListener, taskArray, projectArray };
})();

function getTask() {
    return addTask.taskArray;
}

function getProject() {
    return addTask.projectArray;
}

addTask.addListener();

export { getTask, getProject, switchPage };
