const input = document.querySelectorAll(".input");
const checkBtn = document.querySelector("#check-btn");
const outputText = document.querySelector("#output");

function clickHandler() {
    if (input[0].value === "" || input[1].value==="")
        alert("Enter the sides of triangle!");
    else {
        var a = Number(input[0].value);
        var b = Number(input[1].value);
        var sum = a * a + b * b;
        var h = Math.sqrt(sum);
        outputText.innerHTML = "Length of hypotenuese is equal to " + h.toFixed(3);
    }

}

checkBtn.addEventListener("click", clickHandler)