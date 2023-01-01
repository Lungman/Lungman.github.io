function runTheSums (input1, input2) {
    return input1*input2;
}
function reynolds (speed, dia) {
    let density = 1000;
    let dynamicVisc = 0.001299537; //water @ 10C
    return (density*speed*dia/(dynamicVisc));
}
function haaland (absoluteRoughness, speed, dia){
    let reynoldNum = reynolds(speed, dia/1000);
    console.log(reynoldNum);
    return ((-1.8*Math.log((absoluteRoughness/(3.7*dia)**1.11)+(6.9/reynoldNum)))**-2);
}