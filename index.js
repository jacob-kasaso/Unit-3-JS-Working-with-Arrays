// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
      cats.unshift(name);
}

function destructivelyRemoveLastCat(name){
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}


function appendCat(name){
    return [name,...cats]
}
function prependCat(name){
    return [name,...cats]
}
function removeLastCat(){
    return cats.slice(0,cats.length - 1)
}
function removeFirstCat(){
    return cats.slice(1)
}
function destructivelyAppendCat(name){
    cats.push(name)
}
function destructivelyPrependCat(name){
    cats.unshift(name)
}
function appendCat(name){
    return [name,...cats]
}
function appendCat(name){
    let newVar = "Ralph"
    let newArray = cats.concat(newVar)
}
function appendCat(name){
    return [name,...cats]
}
function appendCat(name){
    cats.pop(name)
}
function removeLastCat(name){
    return cats.slice(0,cats.length - 1)
}
