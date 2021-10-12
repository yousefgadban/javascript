class Task {
    constructor(key, topic, content, createDate, endDate, isActive) {
        this.key = key;
        this.topic = topic;
        this.content = content;
        this.createDate = createDate;
        this.endDate = endDate;
        this.isActive = isActive;
    }
}


const addTask = document.querySelector('.addTask');
const allTasks = document.querySelector('.allTasks');
const newTask = document.querySelector('.newTask');
const activeBtn = document.querySelector('.activeBtn');
const unactiveBtn = document.querySelector('.unactiveBtn');
const editBtn = document.querySelector('.editBtn');
const cancelBtn = document.querySelector('.cancelBtn');
const deleteBtn = document.querySelector('.deleteBtn');
const topic = document.querySelector('.topic');
const content = document.querySelector('.content');
const tasksList = document.querySelector('.tasksList');
const errMsg = document.querySelector('.errMsg');
const filterImg = document.querySelector('.filterImg');

let keyCounter = 1;
let tasksArray = [];
let isActive = true;
let addingTask = 'add';
let monthsArray = [];
let currentTask = null;


//  localStorage.removeItem("tasksArray");
//  localStorage.removeItem("keyCounter");



main()

function main() {

    getDataFromLocalStorage();
    //setTasksArray();

    addClickEvents();
    addTasksToList();

}


function setTasksArray() {
    for (let i = 0 ; i < 5 ; i++) {
        let isActive = i%2 == 0 ? true : false;
        let newTask = new Task(i, 'topic.value'+i, 'content.value'+i, 'dateFormate', '', isActive);
        tasksArray.push(newTask);
    }
}


function getDataFromLocalStorage() {

    if (localStorage.getItem('keyCounter')) {
        keyCounter = localStorage.getItem('keyCounter');
    }

    if (localStorage.getItem('tasksArray')) {
        tasksArray = JSON.parse(localStorage.getItem("tasksArray"));
    }

    console.log(keyCounter);
    console.log(tasksArray);

}

function addClickEvents() {

    addTask.addEventListener('click', addTaskClicked);
    activeBtn.addEventListener('click', activeBtnClicked);
    unactiveBtn.addEventListener('click', unactiveBtnClicked);

    editBtn.addEventListener('click', editBtnClicked);
    cancelBtn.addEventListener('click', cancelBtnClicked);
    deleteBtn.addEventListener('click', deleteBtnClicked);
    filterImg.addEventListener('click', filterImgClicked);

}

function addTaskClicked() {
    console.log('addTask clicked');
    allTasks.style.display = 'none';
    newTask.style.display = 'flex';

    errMsg.innerHTML = '';
    topic.value = '';
    content.value = '';
    isActive = true;

    addingTask = 'add';

    editBtn.value = 'Add';

    deleteBtn.style.display = 'none';

}

function filterImgClicked() {
    console.log('filterImgClicked clicked ');
}

function activeBtnClicked() {
    console.log('activeBtn clicked ' + isActive);
    removeAllSelected();
    this.classList.add('selected');
    isActive = true;
}

function unactiveBtnClicked() {
    console.log('unactiveBtn clicked ' + isActive);
    removeAllSelected();
    this.classList.add('selected');
    isActive = false;
}

function editBtnClicked() {
    console.log('editBtn clicked ' + isActive + ' ' + addingTask);

    if (addingTask == 'add') {

        if (topic.value == '' && content.value == '') {

            errMsg.innerHTML = 'Invalid Input';

        } else {

            let currentDate = new Date();
            let day = (+currentDate.getDate() < 10) ? ('0'+currentDate.getDate()) : (''+currentDate.getDate()) ;
            let month = ((+currentDate.getMonth() + 1) < 10) ? ('0'+(+currentDate.getMonth() + 1)) : (''+(+currentDate.getMonth() + 1));
            let year = currentDate.getFullYear();
            let dateFormate = day + '/' + month + '/' + year;

            let newTaskItem = new Task(keyCounter++, topic.value, content.value, dateFormate, '', isActive);
            tasksArray.push(newTaskItem);

            addTasksToList();

            allTasks.style.display = 'flex';
            newTask.style.display = 'none';
            
        }

    } else {

        console.log('edditing ' + currentTask.topic + ' ' + topic.value + ' ' + currentTask.content + ' ' + content.value);

        if (currentTask.topic == topic.value && currentTask.content == content.value && currentTask.isActive == isActive) {
            errMsg.innerHTML = 'Nothing change';
        } else {


            tasksArray.forEach(element => {
                if (element.key == currentTask.key) {
                    element.topic = topic.value;
                    element.content = content.value;
                    element.isActive = isActive;
                }
            });

            

            addTasksToList();

            allTasks.style.display = 'flex';
            newTask.style.display = 'none';

        }

    }

    console.log(tasksArray);

}


function addTasksToList() {

    window.localStorage.setItem('keyCounter', keyCounter);
    window.localStorage.setItem('tasksArray',JSON.stringify(tasksArray));

    console.log(tasksArray);

    let alltasks = document.querySelectorAll('.task');

    for (task of alltasks) {
        task.remove();
    }

    for (let i = 0; i < tasksArray.length ; i++) {

        console.log('addTasksToList ' + tasksArray.length + ' ' + i);

        let task = document.createElement('div');
        task.classList.add('task');
        task.id = 'task'+i;
        task.addEventListener('click', onTaskClicked)

        let leftSection = document.createElement('div');
        leftSection.classList.add('leftSection');

        let taskTopic = document.createElement('div');
        taskTopic.classList.add('taskTopic');
        taskTopic.innerHTML = tasksArray[i].topic;

        let taskDate = document.createElement('div');
        taskDate.classList.add('taskDate');
        taskDate.innerHTML = tasksArray[i].createDate;


        let rightSection = document.createElement('div');
        rightSection.classList.add('rightSection');

        let deleteImg = document.createElement('img');
        deleteImg.src="/ToDo/images/delete.png"
        deleteImg.classList.add('deleteImg');
        deleteImg.id = 'delete'+i;
        deleteImg.addEventListener('click', onTaskDeleteClicked)

        let activeIndicator = document.createElement('div');
        activeIndicator.classList.add('activeIndicator');
        if (!tasksArray[i].isActive) {
            activeIndicator.style.backgroundColor = 'white';
        }

        task.append(leftSection);
        task.append(rightSection);

        leftSection.append(taskTopic);
        leftSection.append(taskDate);

        rightSection.append(deleteImg);
        rightSection.append(activeIndicator);

        tasksList.append(task);
        
    }

}

function onTaskClicked() {

    let index = +this.id.replace('task', '');
    console.log('onTaskClicked ' + this.id + ' ' + index);

    allTasks.style.display = 'none';
    newTask.style.display = 'flex';

    currentTask = tasksArray[index];

    topic.value = tasksArray[index].topic;
    content.innerHTML = tasksArray[index].content;

    if (tasksArray[index].isActive) {
        activeBtn.click();
    } else {
        unactiveBtn.click();
    }

    addingTask = 'edit';
    errMsg.innerHTML = '';

    editBtn.value = 'Edit';

    deleteBtn.style.display = 'block';

}

function onTaskDeleteClicked(e) {
    e.stopPropagation()

    let index = +this.id.replace('delete', '');
    console.log('onTaskDeleteClicked ' + this.id + ' ' + index);

    deleteTaskAtIndex(index);
    

    // tasksArray.forEach((element, i) => {
    //     console.log(element.topic);
    // });

}

function deleteTaskAtIndex(index) {
    tasksArray.splice(index, 1);
    console.log(tasksArray);
    addTasksToList();
}

function cancelBtnClicked() {
    console.log('cancelBtn clicked ');

    allTasks.style.display = 'flex';
    newTask.style.display = 'none';

}


function deleteBtnClicked() {
    console.log('deleteBtn clicked ' + currentTask.key);

    let index = -1;
    tasksArray.forEach((element, i) => {
        if (element.key == currentTask.key) {
            index = i;
        }
    });

    if (index > -1) {
        deleteTaskAtIndex(index);
    }

    allTasks.style.display = 'flex';
    newTask.style.display = 'none';

}

function removeAllSelected() {
    let btns = document.querySelectorAll('.actBtn');
    for (btn of btns ) {
        btn.classList.remove('selected');
    }
}

function setMonthsArray() {
        
    monthsArray.push("January"); monthsArray.push("February"); monthsArray.push("March");
    monthsArray.push("April"); monthsArray.push("May"); monthsArray.push("June");
    monthsArray.push("July"); monthsArray.push("August"); monthsArray.push("September");
    monthsArray.push("October"); monthsArray.push("November"); monthsArray.push("December");

}