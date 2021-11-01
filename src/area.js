const input = document.querySelectorAll(".input");
const checkBtn = document.querySelector("#check-btn");
const outputText = document.querySelector("#output");

function clickHandler() {
    if (input[0].value === "" || input[1].value === "")
        alert("Enter the sides of triangle!");
    else {
        var b = Number(input[0].value);
        var h = Number(input[1].value);
        var area = 0.5 * b * h;
        outputText.innerHTML = "Area of the triangle = " + area.toFixed(2);
    }

}

checkBtn.addEventListener("click", clickHandler)