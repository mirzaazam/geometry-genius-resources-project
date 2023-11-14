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
function calculateAreaForThreeInput(set, value1, value2){
    const setValue = document.getElementById(set);
    const commonValue = 0.5;
    const formulaValue1 = document.getElementById(value1).innerText;
    const formulaValue2 = document.getElementById(value2).innerText;
    
    const areaClaculation = commonValue * formulaValue1 * formulaValue2;
    const areaClaculationValue = parseFloat(areaClaculation).toFixed(2);
    setValue.innerText = areaClaculationValue;
}

//calculate two input value
function calculateAreaForTwoInput( set, value1, value2){
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

// //remove notification from area calculate
function removeNotificationFromCalArea(removeBtn, getNotification, addClass){
    document.getElementById(removeBtn).addEventListener('click', function(){
        const triangleNoti = document.getElementById(getNotification);
        triangleNoti.classList.add(addClass);
    })
}

// function forEmptyInput(inputF1, inputF2){
//     const inputField1 = document.getElementById(inputF1);
//     const inputField2 = document.getElementById(inputF2);
//     const inputValue1 = inputField1.value;
//     const inputValue2 = inputField2.value;
//     inputValue1.value = '';
//     inputValue2.value = '';
// }