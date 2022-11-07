// clear function
function clearScreen() {
    let displayBox = document.getElementById("result");
    displayBox.value = "";
}

// display function
function display(value) {
    let displayBox = document.getElementById("result");
    displayBox.value += value;
}
// calculate function
function calculate() {
    //gets the value of what's in the display box
    let displayBox = document.getElementById("result").value;
    //the eval() function will evaluates JavaScript code represented as a string and returns its completion value
    let answer = eval(displayBox);
    //replace what is on the display box with the answer previously caluclated
    document.getElementById("result").value = answer;
}