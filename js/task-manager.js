
// Global array to track tasks
let myTasks = [];

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

document.getElementById("add-task").addEventListener("click", function(event) {
    event.preventDefault();

    // Capture the string from the input
    const taskInput = document.getElementById("task-name");
    const taskValue = taskInput.value.trim();

    if (taskValue !== "") {
        // Add to the global array
        myTasks.push(taskValue);

        // Create a new list item element
        const listItem = document.createElement("li");
        listItem.textContent = taskValue;

        // Append the <li> to <ul>
        userTasksUl.appendChild(listItem);

        // Clear the input field for the next task
        taskInput.value = "";
    }
});