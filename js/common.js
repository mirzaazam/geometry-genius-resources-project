function setAreaElementById(element, value, inputIdName){
    const formula = document.getElementById(element);
    const getInputValue = getInputValueById(value);
    formula.innerText = getInputValue;
    
    //For input field blank
    const getInputField = document.getElementById(inputIdName);
    getInputField.value = '';
}

//get input value from all input field
function getInputValueById(value){
    const inputField = document.getElementById(value);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    return inputFieldValue;
}

//set notification in calculate area
function setNotification(notification, className){
    const triangleNotification = document.getElementById(notification);
    triangleNotification.classList.remove(className);
}

//calculate three input value
function calculateAreaForThreeInput(value1, value2, set){
    const setValue = document.getElementById(set);
    const commonValue = 0.5;
    const formulaValue1 = document.getElementById(value1).innerText;
    const formulaValue2 = document.getElementById(value2).innerText;
    
    const area = commonValue * formulaValue1 * formulaValue2;
    setValue.innerText = area;
}

//calculate two input value
function calculateAreaForTwoInput(value1, value2, set){
    const setValue = document.getElementById(set);
    const formulaValue1 = document.getElementById(value1).innerText;
    const formulaValue2 = document.getElementById(value2).innerText;
    
    const area = formulaValue1 * formulaValue2;
    setValue.innerText = area;
}

//set random hex code and set bg color
function setRandomBgColor(cardName) {
    const getRandomCode = Math.floor(Math.random()*16777215).toString(16);
    const card = document.getElementById(cardName);
    card.style.backgroundColor = "#" + getRandomCode;
    card.style.transition = ".8s";
    
 }

 //remove hover function
 function removeHover(cardName){
    const cardRemoveHover = document.getElementById(cardName);
    cardRemoveHover.style.backgroundColor = 'white';
 }

 //hover moseOver and mouseOut function.
 function hover(cardHover, cardName){
    document.getElementById(cardHover).addEventListener('mouseover',function(){
        setRandomBgColor(cardHover);   
        
    })
    document.getElementById(cardHover).addEventListener('mouseout',function(){
        removeHover(cardName);
    })
}

//remove notification from area calculate
function removeNoti(crossBtn, attribute, notification){
    document.getElementById(crossBtn).addEventListener('click', function(){
        const setClass = document.getElementById(notification);
        setClass.classList.add(attribute);
    })
}

