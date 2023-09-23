function receivesAFunction(callbackFunction){
    return callbackFunction();
}

function returnsANamedFunction(){
    return function add(num1, num2){
        return num1 + num2;
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        return `am anonymous`;
    }
}