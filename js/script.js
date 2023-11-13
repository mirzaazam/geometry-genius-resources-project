//Tringale
document.getElementById('triangle-btn').addEventListener('click', function () {
    const triangleInputLeft = getInputValueById('triangle-input-left');
    const triangleInputRight = getInputValueById('triangle-input-right');

    if (isNaN(triangleInputLeft) || isNaN(triangleInputRight)) {
        window.alert('Invalid input! Please enter valid numbers.');
        return true;
    }

    else if (triangleInputLeft <= 0 || triangleInputRight <= 0) {
        alert('Please enter positive values!');
        return false;
    }

    else if (triangleInputLeft.trim() === '' || triangleInputRight.trim() === '') {
        alert('Please enter values in both fields!');
        return false;
    }

    else {
        //set value from input field
        setAreaElementById('triangle-b', triangleInputLeft);
        setAreaElementById('triangle-h', triangleInputRight);

        //calculate
        calculateAreaForThreeInput('triangle-area', 'triangle-b', 'triangle-h');

        //set notification
        setNotification('triangle-notification', 'd-none');
    }
});


//Rectengle
document.getElementById('rectangle-btn').addEventListener('click', function () {
    //Rectengle left input
    const rectangleInputLeft = getInputValueById('rectangle-input-left');

    //Rectengle right input
    const rectangleInputRight = getInputValueById('rectangle-input-right');

    if (isNaN(rectangleInputLeft) || isNaN(rectangleInputRight)) {
        window.alert('Invalid input! Please enter valid numbers.');
        return true;
    }

    else if (rectangleInputLeft <= 0 || rectangleInputRight <= 0) {
        alert('Please enter positive values!');
        return false;
    }

    else if (rectangleInputLeft.trim() === '' || rectangleInputRight.trim() === '') {
        alert('Please enter values in both fields!');
        return false;
    }

    else {

        //set value from input field
        setAreaElementById('rectangle-w', 'rectangle-input-left', 'rectangle-input-left');
        setAreaElementById('rectangle-i', 'rectangle-input-right', 'rectangle-input-right');

        //calculate
        calculateAreaForTwoInput('rectangle-area', 'rectangle-w', 'rectangle-i');

        //set notification
        setNotification('rectangle-notification', 'd-none');
    }
});


//parallelogram
document.getElementById('parallelogram-btn').addEventListener('click', function () {
    //parallelogram left input
    const parallelogramInputLeft = getInputValueById('parallelogram-input-left');

    //parallelogram right input
    const parallelogramInputRight = getInputValueById('parallelogram-input-right');

    if (isNaN(parallelogramInputLeft) || isNaN(parallelogramInputRight)) {
        window.alert('Invalid input! Please enter valid numbers.');
        return true;
    }

    else if (parallelogramInputLeft <= 0 || parallelogramInputRight <= 0) {
        alert('Please enter positive values!');
        return false;
    }

    else if (parallelogramInputLeft.trim() === '' || parallelogramInputRight.trim() === '') {
        alert('Please enter values in both fields!');
        return false;
    }

    else {
        // set value from input field
        setAreaElementById('parallelogram-b', 'parallelogram-input-left', 'parallelogram-input-left');
        setAreaElementById('parallelogram-h', 'parallelogram-input-right', 'parallelogram-input-right');
        //calculate
        calculateAreaForTwoInput('parallelogram-area', 'parallelogram-b', 'parallelogram-h');

        //set notification
        setNotification('parallelogram-notification', 'd-none')
    }

});


//Rhombus
document.getElementById('rhombus-btn').addEventListener('click', function () {
    //Tringale left input
    const rhombusInputLeft = getInputValueById('rhombus-input-left');

    //Tringale right input
    const rhombusInputRight = getInputValueById('rhombus-input-right');

    if (isNaN(rhombusInputLeft) || isNaN(rhombusInputRight)) {
        window.alert('Invalid input! Please enter valid numbers.');
        return true;
    }

    else if (rhombusInputLeft <= 0 || rhombusInputRight <= 0) {
        alert('Please enter positive values!');
        return false;
    }

    else if (rhombusInputLeft.trim() === '' || rhombusInputRight.trim() === '') {
        alert('Please enter values in both fields!');
        return false;
    }

    else {
        //set value from input field
        setAreaElementById('rhombus-d1', 'rhombus-input-left', 'rhombus-input-left');
        setAreaElementById('rhombus-d2', 'rhombus-input-right', 'rhombus-input-right');
        //calculate
        calculateAreaForThreeInput('rhombus-area', 'rhombus-d1', 'rhombus-d2');

        //set notification
        setNotification('rhombus-notification', 'd-none');
    }

});


//Pentagon
document.getElementById('Pentagon-btn').addEventListener('click', function () {
    //Tringale left input
    const pentagonInputLeft = getInputValueById('pentagon-input-left');

    //Tringale right input
    const pentagonInputRight = getInputValueById('pentagon-input-right');

    if (isNaN(pentagonInputLeft) || isNaN(pentagonInputRight)) {
        window.alert('Invalid input! Please enter valid numbers.');
        return true;
    }

    else if (pentagonInputLeft <= 0 || pentagonInputRight <= 0) {
        alert('Please enter positive values!');
        return false;
    }

    else if (pentagonInputLeft.trim() === '' || pentagonInputRight.trim() === '') {
        alert('Please enter values in both fields!');
        return false;
    }

    else {

        setAreaElementById('pentagon-p', 'pentagon-input-left', 'pentagon-input-left');
        setAreaElementById('pentagon-b', 'pentagon-input-right', 'pentagon-input-right');
        //calculate
        calculateAreaForThreeInput('pentagon-area', 'pentagon-p', 'pentagon-b');

        //set notification
        setNotification('pentagon-notification', 'd-none')
    }
});


//ellipse
document.getElementById('ellipse-btn').addEventListener('click', function () {
    //Tringale left input
    const ellipseInputLeft = getInputValueById('ellipse-input-left');

    //Tringale right input
    const ellipseInputRight = getInputValueById('ellipse-input-right');

    if (isNaN(ellipseInputLeft) || isNaN(ellipseInputRight)) {
        window.alert('Invalid input! Please enter valid numbers.');
        return true;
    }

    else if (ellipseInputLeft <= 0 || ellipseInputRight <= 0) {
        alert('Please enter positive values!');
        return false;
    }

    else if (ellipseInputLeft.trim() === '' || ellipseInputRight.trim() === '') {
        alert('Please enter values in both fields!');
        return false;
    }

    else {
        //set value from input field
        setAreaElementById('ellipse-b', 'ellipse-input-right', 'ellipse-input-right');
        setAreaElementById('ellipse-a', 'ellipse-input-left', 'ellipse-input-left');

        //calculate
        const pi = 3.1416;
        const setValue = document.getElementById('ellipse-area');
        const formulaValue1 = document.getElementById('ellipse-a').innerText;
        const formulaValue2 = document.getElementById('ellipse-b').innerText;
        const area = pi * formulaValue1 * formulaValue2;
        const p = setValue.innerText = area;

        //set notification
        setNotification('ellipse-notification', 'd-none')
    }
});

//hover add and remove 
hover('card-triangle', 'card-triangle');
hover('card-rectangle', 'card-rectangle');
hover('card-parallelogram', 'card-parallelogram');
hover('card-rhombus', 'card-rhombus');
hover('card-pentagon', 'card-pentagon');
hover('card-ellipse', 'card-ellipse');

//try for remove card bg when hover the mouse on calculate btn.
document.getElementById('triangle-btn').addEventListener('mouseover', function () {
    const card = document.getElementById('card-triangle');
    card.style.backgroundColor = 'red';

})

// //remove notification from area calculate
removeNotificationFromCalArea('cross-triangle', 'triangle-notification', 'd-none')
removeNotificationFromCalArea('cross-rectangle', 'rectangle-notification', 'd-none')
removeNotificationFromCalArea('cross-parallelogram', 'parallelogram-notification', 'd-none')
removeNotificationFromCalArea('cross-rhombus', 'rhombus-notification', 'd-none')
removeNotificationFromCalArea('cross-pentagon', 'pentagon-notification', 'd-none')
removeNotificationFromCalArea('cross-ellipse', 'ellipse-notification', 'd-none')