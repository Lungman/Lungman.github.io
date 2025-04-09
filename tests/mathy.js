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
    return haaland2 ({Re:reynoldNum, relRough:(absoluteRoughness/dia)});
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
function fang (foo){
    if (foo.Re<2000){
        return 64/foo.Re;
    } else {
        return 1.613*(Math.log((0.234*foo.relRough**1.1007-(60.525/foo.Re**1.1105)+(56.291/foo.Re**1.0712))))**-2;
    }
}
