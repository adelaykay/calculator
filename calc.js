let display = document.getElementById("calcDisplay");
let addition = document.getElementById("add");
let subtraction = document.getElementById("subtract");
let division = document.getElementById("divide");
let multiplication = document.getElementById("multiply");
let firstOperand;
let swtch=0;
let result;


const operation = (symbol) => {
    if (firstOperand!=undefined){
        display.value = firstOperand + calc + display.value;
        // console.log(display.value)
        display.value = eval(display.value);
        result = display.value;
    }
    firstOperand = display.value;
    calc = symbol;
    // console.log(calc, firstOperand);
    swtch = 1; //state for screen clearing.
}
const equals = () => {
    display.value = firstOperand + calc + display.value;
    // console.log(display.value)
    display.value = eval(display.value);
    result = display.value;
    firstOperand = 0;
    swtch = 1;
}
addition.addEventListener("click", function(){
    operation(addition.value);
});
subtraction.addEventListener("click", function(){
    operation(subtraction.value);
});
division.addEventListener("click", function(){
    operation(division.value);
});
multiplication.addEventListener("click", function(){
    operation("*");
});

const clearDisplay = () => {
    display.value = "0";
}
const sendToDisplay = (num) => {
    if (swtch>=1)
        {
            clearDisplay();
            swtch = 0;
        }
    display.value = eval(display.value + num);
}
const point = () => {
    if (!display.value.includes(".") ){
        display.value += ".";
    }
}

const backspace = () => {
    if (display.value == "") {
        display.value = "0";
    }
    else if (display.value != result){
        display.value = display.value.substr(0,(display.value.length-1));
    }
}
const negate = () => {
    display.value = eval(-(display.value));
}
