const input = document.querySelectorAll(".input");
const checkBtn = document.querySelector("#check-btn");
const outputText = document.querySelector("#output");

function clickHandler() {
    sum=Number(input[0].value)+Number(input[1].value)+Number(input[2].value);
    if (sum === 180)
        outputText.innerHTML="Yes, the angles form a triangle.";
    else outputText.innerHTML="These angles do not form a triangle.";
}

checkBtn.addEventListener("click", clickHandler)