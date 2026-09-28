// Put your JavaScript code in this file
const answers = [
    "Yes.",
    "Without a doubt.",
    "No.",
    "Not really",
    "Perhaps",
    "Sometimes.",
    "Yeah.",
    "Perchance."
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
});
