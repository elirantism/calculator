let sum = 0;
let startSymbol = false;
let canAdd = true;
let canMinus = true;
let canMult = true;
let canDiv = true;
let canDot = true;
let afterEqual = false;

function number(numUser) {
    if(document.getElementById("answer").innerHTML.length < 32){
        if(!afterEqual) {
            document.getElementById("answer").innerHTML += numUser;
            startSymbol = true;
            canAdd = true
            canMinus = true;
            canMult = true;
            canDiv = true;
            canDot = true;
        }
        else{
            document.getElementById("answer").innerHTML = numUser;
            sum = 0;
            startSymbol = true;
            canAdd = true;
            canMinus = true;
            canMult = true;
            canDiv = true;
            canDot = true;
            afterEqual = false;
        }
    }
}

function add(){
    if(canAdd && startSymbol){
        document.getElementById("answer").innerHTML += " + ";
        canAdd = false;
        canMinus = false;
        canMult = false;
        canDiv = false;
        canDot = false;
        afterEqual = false;
    }
}

function sub(){
    if(canMinus && startSymbol){
        document.getElementById("answer").innerHTML += " - ";
        canAdd = false;
        canMinus = false;
        canMult = false;
        canDiv = false;
        canDot = false;
        afterEqual = false;
    }
}

function mult(){
    if(canMult && startSymbol){
        document.getElementById("answer").innerHTML += " * ";
        canAdd = false;
        canMinus = false;
        canMult = false;
        canDiv = false;
        canDot = false;
        afterEqual = false;
    }
}

function div(){
    if(canDiv && startSymbol) {
        document.getElementById("answer").innerHTML += " / ";
        canAdd = false;
        canMinus = false;
        canMult = false;
        canDiv = false;
        canDot = false;
        afterEqual = false;
    }
}

function dot(){
    if(canDot) {
        document.getElementById("answer").innerHTML += ".";
        canDot = false;
        canAdd = false;
        canMinus = false;
        canMult = false;
        canDiv = false;
        afterEqual = false;
    }
}

function c() {
    document.getElementById("answer").innerHTML = "";
    sum = 0;
    startSymbol = false;
    canAdd = true;
    canMinus = true;
    canMult = true;
    canDiv = true;
    canDot = true;
    afterEqual = false;
}

function equal() {
    sum = eval(document.getElementById("answer").innerHTML);
    document.getElementById("answer").innerHTML = sum;
    afterEqual = true;
}

