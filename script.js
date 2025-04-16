const display = document.getElementById('display');

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value='';
}

function calculate(){
    try{
        display.value = eval(display.value);
    }catch(error){
        display.value='ERROR';
    }
}

document.addEventListener('keydown',function(event){
    if(isCalculatorKey(event.key)){
    event.preventDefault();
    }

    if(/[0-9]/.test(event.key)){
        appendToDisplay(event.key);
    }

    if(['+','-','*','/','.'].includes(event.key)){
        appendToDisplay(event.key);
    }

    if(event.key == 'Enter'){
        calculate();
    }

    if(event.key == 'Escape'){
        clearDisplay();
    }

    if(event.key == 'Backspace'){
        display.value = display.value.slice(0,-1);
    }
})

function isCalculatorKey(key){
    return /[0-9]/.test(key) ||
    ['+','-','*','/','.','Enter','Escape','Backspace'].includes(key);
}