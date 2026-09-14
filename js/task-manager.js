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

    // call weejkyGoal with form values
    weeklyGoal(userName, dailyGoal, bonusTasks);
});