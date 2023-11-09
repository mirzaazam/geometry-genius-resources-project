function setAreaElementById(element, value, inputIdName){
    const formula = document.getElementById(element);
    const getInputValue = getInputValueById(value);
    formula.innerText = getInputValue;
    
    //For input field blank
    const getInputField = document.getElementById(inputIdName);
    getInputField.value = '';
}

function getInputValueById(value){
    const inputField = document.getElementById(value);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    return inputFieldValue;
}

function setNotification(notification, className){
    const triangleNotification = document.getElementById(notification);
    triangleNotification.classList.remove(className);
}


function calculateAreaForThreeInput(value1, value2, set){
    const setValue = document.getElementById(set);
    const commonValue = 0.5;
    const formulaValue1 = document.getElementById(value1).innerText;
    const formulaValue2 = document.getElementById(value2).innerText;
    
    const area = commonValue * formulaValue1 * formulaValue2;
    setValue.innerText = area;
}

function calculateAreaForTwoInput(value1, value2, set){
    const setValue = document.getElementById(set);
    const formulaValue1 = document.getElementById(value1).innerText;
    const formulaValue2 = document.getElementById(value2).innerText;
    
    const area = formulaValue1 * formulaValue2;
    setValue.innerText = area;
}

