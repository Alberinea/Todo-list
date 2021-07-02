'use strict';

const todo = (description, dueDate, priority, project) => {
    return { description, dueDate, priority, project };
};

const addTask = (() => {
    const taskArray = [];
    const showInterface = () => {
        document.getElementById('form').style.display = 'block';
        document.getElementById('formSubmit').style.display = 'flex';
        document.getElementById('add').style.display = 'none';
    };
    const hideInterface = () => {
        document.getElementById('form').style.display = 'none';
        document.getElementById('formSubmit').style.display = 'none';
        document.getElementById('add').style.display = 'flex';
    };
    const getTask = () => {
        const description = document.getElementById('taskText').value;
        const dueDate = 'Today';
        const priority = '!';
        const project = 'default';
        return todo(description, dueDate, priority, project);
    };
    const taskDone = function () {
        this.parentNode.parentNode.remove();
    };
    const changeOpacity = () => {
        if (getTask().description === '' || document.getElementById('taskText').value === '')
            document.getElementById('submit').style.opacity = 0.5;
        else document.getElementById('submit').style.opacity = 1;
    };
    const pushArray = () => {
        taskArray.push(getTask());
    };
    const addTaskToDoc = () => {
        if (getTask().description === '') return;
        document.getElementById('form').before(document.createElement('li'));
        const lastList = document.querySelectorAll('li')[document.querySelectorAll('li').length - 1];
        const div1 = lastList.appendChild(document.createElement('div'));
        const div2 = lastList.appendChild(document.createElement('div'));
        const bullet = div1.appendChild(document.createElement('div'));
        const text = div1.appendChild(document.createElement('p'));
        const project = div2.appendChild(document.createElement('div'));
        const date = div2.appendChild(document.createElement('p'));
        const priority = div2.appendChild(document.createElement('p'));
        div1.className = 'listInside';
        div2.className = 'listInside';
        bullet.className = 'bullet';
        project.className = 'project';
        date.className = 'date';
        priority.className = 'priority';
        text.textContent = getTask().description;
        project.textContent = getTask().project;
        date.textContent = getTask().dueDate;
        priority.textContent = getTask().priority;
        priority.style.color =
            getTask().priority.length === 1 ? 'green' : getTask().priority.length === 2 ? 'yellow' : 'red';
        pushArray();
        changeOpacity();
        document.getElementById('taskText').value = '';
        bullet.addEventListener('click', taskDone);
    };
    const addListener = () => {
        document.getElementById('add').addEventListener('click', showInterface);
        document.getElementById('cancel').addEventListener('click', hideInterface);
        document.getElementById('submit').addEventListener('click', addTaskToDoc);
        document.getElementById('taskText').addEventListener('keyup', changeOpacity);
    };
    return { addListener };
})();

addTask.addListener();
