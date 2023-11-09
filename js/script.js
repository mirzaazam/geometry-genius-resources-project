//Tringale
document.getElementById('triangle-btn').addEventListener('click', function(){
    //Tringale left input
    getInputValueById('triangle-input-left');
    setAreaElementById('triangle-b', 'triangle-input-left', 'triangle-input-left');

    //Tringale right input
    getInputValueById('triangle-input-right');
    setAreaElementById('triangle-h', 'triangle-input-right', 'triangle-input-right');

});

//Rectengle
document.getElementById('rectangle-btn').addEventListener('click', function(){
    //Rectengle left input
    getInputValueById('rectangle-input-left');
    setAreaElementById('rectangle-w', 'rectangle-input-left', 'rectangle-input-left');

    //Rectengle right input
    getInputValueById('rectangle-input-right');
    setAreaElementById('rectangle-i', 'rectangle-input-right', 'rectangle-input-right');

});


//parallelogram
document.getElementById('parallelogram-btn').addEventListener('click', function(){
    //parallelogram left input
    getInputValueById('parallelogram-input-left');
    setAreaElementById('parallelogram-b', 'parallelogram-input-left', 'parallelogram-input-left');

    //parallelogram right input
    getInputValueById('parallelogram-input-right');
    setAreaElementById('parallelogram-h', 'parallelogram-input-right', 'parallelogram-input-right');

});


//Rhombus
document.getElementById('rhombus-btn').addEventListener('click', function(){
    //Tringale left input
    getInputValueById('rhombus-input-left');
    setAreaElementById('rhombus-d1', 'rhombus-input-left', 'rhombus-input-left');

    //Tringale right input
    getInputValueById('rhombus-input-right');
    setAreaElementById('rhombus-d2', 'rhombus-input-right', 'rhombus-input-right');

});


//Pentagon
document.getElementById('Pentagon-btn').addEventListener('click', function(){
    //Tringale left input
    getInputValueById('pentagon-input-left');
    setAreaElementById('pentagon-p', 'pentagon-input-left', 'pentagon-input-left');

    //Tringale right input
    getInputValueById('pentagon-input-right');
    setAreaElementById('pentagon-b', 'pentagon-input-right', 'pentagon-input-right');

});

document.getElementById('ellipse-btn').addEventListener('click', function(){
    //Tringale left input
    getInputValueById('ellipse-input-left');
    setAreaElementById('ellipse-a', 'ellipse-input-left', 'ellipse-input-left');

    //Tringale right input
    getInputValueById('ellipse-input-right');
    setAreaElementById('ellipse-b', 'ellipse-input-right', 'ellipse-input-right');

});