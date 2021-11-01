const submit = document.querySelector("#btn-primary");
const quizForm = document.querySelector(".quiz-form");
const output = document.querySelector(".output");

const correctAns = ["90", "right angled"];

function calculateScore() {

    var score = 0;
    var index = 0;
    const formResults = new FormData(quizForm);

    for (let value of formResults.values()) {
        if (value === correctAns[index])
            score++;
        index++;
        
    }
    output.innerHTML="Your score is : "+ score + " Correct Answers Question 1 = 90°, Question 2 = right angled";
}
submit.addEventListener("click", calculateScore);