
// Global array to track tasks
let myTasks = [];
let nextId = 1;

//Create the <ul> element, assign an ID, and append to task_list
const taskListDiv = document.getElementById("task-list");
const userTasksUl = document.createElement("ul");
userTasksUl.id = "user-tasks";
taskListDiv.appendChild(userTasksUl);

function weeklyGoal(userName, dailyGoal, bonusTasks) {

    // calculations
    const weeklyGoalCount = Number(dailyGoal) * 5;
    const totalGoal = weeklyGoalCount + Number(bonusTasks);

    //assign output to variable
    const output = `User: ${userName}<br>Total Weekly Goal: ${totalGoal}`;
    
    //update innerHTML
    document.getElementById("goal-message").innerHTML = output;

}   
// add click event listener to "goal-btn"
document.getElementById("goal-btn").addEventListener("click", function(event) {
    
    // Prevent form submission
    event.preventDefault();

    // retrieve input values from form
    const userName = document.getElementById("userName").value;
    const dailyGoal = document.getElementById("dailyGoal").value;
    const bonusTasks = document.getElementById("bonusTasks").value;
    // call weeklyGoal with form values
    weeklyGoal(userName, dailyGoal, bonusTasks);
});

function renderTasks() {
    userTasksUl.innerHTML = "";

    myTasks.forEach(task => {
        const listItem = document.createElement("li");
        
        // Task text span to apply styling
        const taskSpan = document.createElement("span");
        taskSpan.textContent = `${task.name} [Priority: ${task.priority}]`;

        // Visual style
        if (task.isCompleted) {
            taskSpan.style.textDecoration = "line-through";
        }

        if (task.isImportant) {
            taskSpan.style.color = "red";
        }

        // Complete / Toggle button
        const completeBtn = document.createElement("button");
        completeBtn.textContent = task.isCompleted ? "Unmark" : "Complete";
        completeBtn.onclick = function() {
            task.isCompleted = !task.isCompleted;
            console.log(JSON.stringify(myTasks));
            renderTasks();
        };

        // Delete individual task button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = function() {
            myTasks = myTasks.filter(t => t.id !== task.id);
            // Log update
            console.log(JSON.stringify(myTasks));
            renderTasks();
        };

        listItem.appendChild(taskSpan);
        listItem.appendChild(completeBtn);
        listItem.appendChild(deleteBtn);
        userTasksUl.appendChild(listItem);
    });
}

document.getElementById("add-task").addEventListener("click", function(event) {
    event.preventDefault();

    // Capture the string from the input
    const taskInput = document.getElementById("task-name");
    const taskValue = taskInput.value.trim();

    const priorityInput = document.getElementById("task-priority");
    const importantInput = document.getElementById("task-important");
if (taskValue !== "") {
        // Create a task object
        const newTask = {
            id: nextId++,
            name: taskValue,
            priority: priorityInput ? priorityInput.value : "High",
            isImportant: importantInput ? importantInput.checked : false,
            isCompleted: false
        };

        // Add to the global array
        myTasks.push(newTask);

        // Log full task list
        console.log(JSON.stringify(myTasks));

        renderTasks();

        // Clear the input field
        taskInput.value = "";
        if (importantInput) importantInput.checked = false;
    }
});
const deleteListBtn = document.getElementById("delete-list-btn");
if (deleteListBtn) {
    deleteListBtn.addEventListener("click", function(event) {
        event.preventDefault();
        myTasks = [];
        // Log updated empty array
        console.log(JSON.stringify(myTasks));
        renderTasks();
    });
}
