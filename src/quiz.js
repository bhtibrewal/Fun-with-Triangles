const submit = document.querySelector("#btn-primary");
const quizForm = document.querySelector(".quiz-form");
const output = document.querySelector(".output");
const radios = document.querySelectorAll("input[type=radio]:checked");


const correctAns = ["90", "right angled", "60", "a+b+c", "40"];

function calculateScore() {
    const radios = document.querySelectorAll("input[type=radio]:checked");  
    
    var score = 0;
    var index = 0;
    const formResults = new FormData(quizForm);
    if (radios.length === correctAns.length) {
        for (let value of formResults.values()) {

            if (value === correctAns[index])
                score++;
            index++;

        }
        output.innerHTML = `Your score is : ${score} 
    Correct Answers: Question 1 = 90°,
    Question 2 = right angled,
    Question 3 = 60°
    Question 4 = a+b+c
    Question5 = 40
    `;
    }
    else alert("Its Compulsory to attempt all the ques..");
}
console.log(radios);
submit.addEventListener("click", calculateScore);