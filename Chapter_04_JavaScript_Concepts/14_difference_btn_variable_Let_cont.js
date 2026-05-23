// 14_difference_btn_variable_Let_cont.js

// Example: Difference between var, let, and const

// var is function scoped, can be redeclared and reassigned
var browser = "Chrome";
var browser = "Firefox"; // Redeclaration allowed with var
browser = "Edge"; // Re-assignment allowed with var
console.log("var browser:", browser); // Edge

// let is block scoped, cannot be redeclared in the same scope, but can be reassigned
let username = "Kiran";
// let username = "Kumar"; // SyntaxError: Identifier 'username' has already been declared
username = "Kiran Kumar"; // Re-assignment allowed with let
console.log("let username:", username); // Kiran Kumar

// const is block scoped, cannot be redeclared or reassigned
const launchYear = 2026;
// const launchYear = 2027; // SyntaxError: Identifier 'launchYear' has already been declared
// launchYear = 2027; // TypeError: Assignment to constant variable.
console.log("const launchYear:", launchYear);

// Scope demonstration
function scopeExample() {
    var x = 100;
    let y = 200;
    const z = 300;

    if (true) {
        var x = 101; // same variable as outer scope inside function
        let y = 201; // new block-scoped variable
        const z = 301; // new block-scoped constant
        console.log("inner x:", x); // 101
        console.log("inner y:", y); // 201
        console.log("inner z:", z); // 301
    }

    console.log("outer x:", x); // 101, var changed in function scope
    console.log("outer y:", y); // 200, let unaffected outside block
    console.log("outer z:", z); // 300, const unaffected outside block
}

scopeExample();
