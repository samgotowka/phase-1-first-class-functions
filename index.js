function receivesAFunction(callback){
    callback()
        return("receives a function and calls it");
    }
function returnsANamedFunction(){
    namedFunction()
    return('returns a function')
}

returnsAnAnonymousFunction(() =>{
    return('returns an anonymous function')
})