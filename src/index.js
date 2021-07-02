const todo = (description, dueDate, priority, project) => {
    return { description, dueDate, priority, project };
};

const addTask = (() => {
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
    const addListener = () => {
        document.getElementById('add').addEventListener('click', showInterface);
        document.getElementById('cancel').addEventListener('click', hideInterface);
    };
    return { addListener };
})();

addTask.addListener();
