const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
    cats;
}

function destructivelyPrependCat(){
    cats.unshift("Bob");
    cats;
}
function destructivelyRemoveLastCat(){
    cats.pop();
    cats;
}

function destructivelyRemoveFirstCat() {
    cats.shift();
    cats;
}

function appendCat(name) {
    return[...cats, name];
}

function prependCat(name) {
    return[name, ...cats];
}

function removeLastCat(name){
    return cats.slice(0,cats.length-1);
}

function removeFirstCat() {
    return cats.slice(1);
}
