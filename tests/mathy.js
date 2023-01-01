function runTheSums (input1, input2) {
    return input1*input2;
}
function reynolds (speed, dia) {
    let density = 1000;
    let dynamicVisc = 0.001005; //water @ 10C
    console.log(speed, dia);
    return (density*speed*dia/(dynamicVisc));
}
function haaland (absoluteRoughness, speed, dia){
    let dia_m = dia/1000;
    let reynoldNum = reynolds(speed, dia_m);
    console.log(reynoldNum);
    return ((-1.8*Math.log((absoluteRoughness/(3.7*dia_m)^1.11)+(6.9/reynoldNum)))**-2);
}