//Tringale
document.getElementById('triangle-btn').addEventListener('click', function(){
    //Tringale left input
    getInputValueById('triangle-input-left');
    setAreaElementById('triangle-b', 'triangle-input-left', 'triangle-input-left');

    //Tringale right input
    getInputValueById('triangle-input-right');
    setAreaElementById('triangle-h', 'triangle-input-right', 'triangle-input-right');

    //calculate
    calculateAreaForThreeInput('triangle-b', 'triangle-h', 'triangle-area');

    //set notification
    setNotification('triangle-notification', 'd-none')
});

//Rectengle
document.getElementById('rectangle-btn').addEventListener('click', function(){
    //Rectengle left input
    getInputValueById('rectangle-input-left');
    setAreaElementById('rectangle-w', 'rectangle-input-left', 'rectangle-input-left');

    //Rectengle right input
    getInputValueById('rectangle-input-right');
    setAreaElementById('rectangle-i', 'rectangle-input-right', 'rectangle-input-right');

    //calculate
    calculateAreaForTwoInput('rectangle-w', 'rectangle-i', 'rectangle-area');

    //set notification
    setNotification('rectangle-notification', 'd-none');
});


//parallelogram
document.getElementById('parallelogram-btn').addEventListener('click', function(){
    //parallelogram left input
    getInputValueById('parallelogram-input-left');
    setAreaElementById('parallelogram-b', 'parallelogram-input-left', 'parallelogram-input-left');

    //parallelogram right input
    getInputValueById('parallelogram-input-right');
    setAreaElementById('parallelogram-h', 'parallelogram-input-right', 'parallelogram-input-right');
    
    //calculate
    calculateAreaForThreeInput('parallelogram-b', 'parallelogram-h', 'parallelogram-area');

    //set notification
    setNotification('parallelogram-notification', 'd-none')

});


//Rhombus
document.getElementById('rhombus-btn').addEventListener('click', function(){
    //Tringale left input
    getInputValueById('rhombus-input-left');
    setAreaElementById('rhombus-d1', 'rhombus-input-left', 'rhombus-input-left');

    //Tringale right input
    getInputValueById('rhombus-input-right');
    setAreaElementById('rhombus-d2', 'rhombus-input-right', 'rhombus-input-right');

    //calculate
    calculateAreaForThreeInput('rhombus-d1', 'rhombus-d1', 'rhombus-area');

    //set notification
    setNotification('rhombus-notification', 'd-none')
});


//Pentagon
document.getElementById('Pentagon-btn').addEventListener('click', function(){
    //Tringale left input
    getInputValueById('pentagon-input-left');
    setAreaElementById('pentagon-p', 'pentagon-input-left', 'pentagon-input-left');

    //Tringale right input
    getInputValueById('pentagon-input-right');
    setAreaElementById('pentagon-b', 'pentagon-input-right', 'pentagon-input-right');

    //calculate
    calculateAreaForThreeInput('pentagon-p', 'pentagon-b', 'pentagon-area');

    //set notification
    setNotification('pentagon-notification', 'd-none')
});

document.getElementById('ellipse-btn').addEventListener('click', function(){
    //Tringale left input
    getInputValueById('ellipse-input-left');
    setAreaElementById('ellipse-a', 'ellipse-input-left', 'ellipse-input-left');

    //Tringale right input
    getInputValueById('ellipse-input-right');
    setAreaElementById('ellipse-b', 'ellipse-input-right', 'ellipse-input-right');

    //calculate
    const pi = 3.1416;
    const setValue = document.getElementById('ellipse-area');
    const formulaValue1 = document.getElementById('ellipse-a').innerText;
    const formulaValue2 = document.getElementById('ellipse-b').innerText;
    
    const area = pi * formulaValue1 * formulaValue2;
    setValue.innerText = area;

    //set notificationx
    setNotification('ellipse-notification', 'd-none')
});