function runTheSums (input1, input2) {
    return input1*input2;
}
function reynolds (speed, dia) {
    let density = 1000;
    let dynamicVisc = 0.001299537; //water @ 10C
    return (density*speed*dia/(dynamicVisc));
}
function haaland (absoluteRoughness, speed, dia) {
    let reynoldNum = reynolds(speed, dia/1000);
    if (reynoldNum >= 2000) {
    return ((-1.8*Math.log10((absoluteRoughness/(3.7*dia)**1.11)+(6.9/reynoldNum)))**-2);
    } else {
        return 64/reynoldNum;
    }
}
function haaland2 (foo){
    if (foo.Re<2000){
        return 64/foo.Re;
    } else {
        return ((-1.8*Math.log10(((foo.relRough/3.7)**1.11)+(6.9/foo.Re)))**-2);
    }
}
function flowToSpeed (litreRate, dia) {
    return ((litreRate/1000)/(Math.PI*(dia/2)**2));
}
function volCalc (dia, length) {
    return (Math.PI*(dia/2)**2)*length;
}
function updateElemHTML (value, destination) {
    document.getElementById(destination).innerHTML=value;
}
