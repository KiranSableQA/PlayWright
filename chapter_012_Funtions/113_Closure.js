function outer() {
    let message = "hello";
    console.log("Outer CALLED!");
    
    function inner() {
        console.log(message);
    }
    return inner;
}


let Krn = outer();
Krn();

// inner(); // ReferenceError: inner is not defined