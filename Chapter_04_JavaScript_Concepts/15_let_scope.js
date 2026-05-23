let a = 10; // Global Scope

console.log(a);

// Defination of the function
function printHello() {
    console.log("Hello kiran");

    let a = 20; // Local Scope
    console.log(a);

    if (true) {
        let a = 30;
        console.log("B -> ",a); // 30
    }
    console.log("F ->", a);
}

console.log("G ->", a);

printHello();