
//function numbers(input) {
//Calculation.Textbox.value += input
//}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".number-btn").forEach(button => {
        button.addEventListener("click", function () {
            document.getElementById("Textbox").value += this.textContent;
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("equal").addEventListener("click", function () {
        var textbox = document.getElementById("Textbox");
        var exp = textbox.value;

        if (exp) {
            try {
                textbox.value = eval(exp); 
            } catch {
                textbox.value = "Error"; 
            }
        }
    });
});
  
function Clear() {
    document.getElementById("Textbox").value = " "

}

