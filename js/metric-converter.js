const answers = [
    "It is certain.",
    "Without a doubt.",
    "You may rely on it.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Don't count on it.",
    "My reply is no.",
    "Very doubtful."
];

function displayAnswer() {
    const randomIndex = Math.floor(Math.random() * answers.length);
    const circle = document.getElementById("circle");
    
    circle.innerHTML = answers[randomIndex];
    circle.style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
    const ball = document.getElementById("ball");
    const questionInput = document.getElementById("question");
    const resetButton = document.getElementById("reset");
    const addAnswerBtn = document.getElementById("add-answer-btn");

    if (ball) {
        ball.addEventListener("mousedown", function () {
            if (!questionInput || !questionInput.value.trim()) {
                alert("Please enter a question first!");
            } else {

                displayAnswer();
            }
        });
    }

    if (resetButton) {
        resetButton.addEventListener("click", function () {
            const circle = document.getElementById("circle");
            if (circle) {
                circle.style.display = "none";
            }
        });
    }

    // Bonus Challenge
    if (addAnswerBtn) {
        addAnswerBtn.addEventListener("click", function () {
            const newAnswer = prompt("Enter a new Magic Eight Ball response:");
            if (newAnswer && newAnswer.trim() !== "") {
                answers.push(newAnswer.trim());
                // Output response and total size to console
                console.log(`New Response Added: "${newAnswer.trim()}"`);
                console.log(`Current Total Responses: ${answers.length}`);
                alert(`Added! Total responses in array: ${answers.length}`);
            }
        });
    }
});


document.getElementById('convert-btn').addEventListener('click', function(event) {
    // Prevent form submission
    event.preventDefault();

    let rawInput = document.getElementById('val-input').value;
    let input_value = parseFloat(rawInput);

    // Get the selected conversion value 
    let selectElement = document.getElementById('conversion-select');
    let options = selectElement.getElementsByTagName('option');
    let conversion_type = options[selectElement.selectedIndex].value;

    let resultDiv = document.getElementById('converter-result');

    // Input validation
    if (isNaN(input_value)) {
        resultDiv.innerHTML = "<p>Please enter a valid numeric value.</p>";
        return;
    }

    let result = 0;
    let outputText = "";

    if (conversion_type === "in-to-cm") {
        result = input_value * 2.54;
        outputText = `${input_value} inches = ${result.toFixed(2)} cm`;
    } else if (conversion_type === "ft-to-cm") {
        result = input_value * 30.48;
        outputText = `${input_value} feet = ${result.toFixed(2)} cm`;
    } else if (conversion_type === "yd-to-m") {
        result = input_value * 0.91;
        outputText = `${input_value} yards = ${result.toFixed(2)} m`;
    } else if (conversion_type === "mi-to-km") {
        result = input_value * 1.61;
        outputText = `${input_value} miles = ${result.toFixed(2)} km`;
    } else if (conversion_type === "cm-to-in") {
        result = input_value * 0.39;
        outputText = `${input_value} cm = ${result.toFixed(2)} inches`;
    } else if (conversion_type === "cm-to-ft") {
        result = input_value * 0.0328;
        outputText = `${input_value} cm = ${result.toFixed(2)} feet`;
    } else if (conversion_type === "m-to-yd") {
        result = input_value * 1.09;
        outputText = `${input_value} meters = ${result.toFixed(2)} yards`;
    } else if (conversion_type === "km-to-mi") {
        result = input_value * 0.62;
        outputText = `${input_value} km = ${result.toFixed(2)} miles`;
    } else {
        outputText = "Invalid conversion type selected.";
    }

    // output 
    resultDiv.innerHTML = `<p>${outputText}</p>`;
});