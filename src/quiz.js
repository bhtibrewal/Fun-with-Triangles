const submit = document.querySelector("#btn-primary");
const quizForm = document.querySelector(".quiz-form");
const output = document.querySelector(".output");

const correctAns = ["90", "right angled", "60"];

function calculateScore() {

    var score = 0;
    var index = 0;
    const formResults = new FormData(quizForm);

    for (let value of formResults.values()) {
        if (value === undefined);
        if (value === correctAns[index])
            score++;
        index++;

    }
    output.innerHTML = `Your score is : ${score} 
    Correct Answers: Question 1 = 90°,
    Question 2 = right angled,
    Question 3 = 60°`;
}
submit.addEventListener("click", calculateScore);