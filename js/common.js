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
