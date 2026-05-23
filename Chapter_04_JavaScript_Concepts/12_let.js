// let - block Scoped
let a=10;
console.log(a);


// let a=20; // SyntaxError: Identifier 'a' has already been declared
// console.log(a);



let recount =0;
recount = recount + 1;
recount = recount + 1;
console.log("retry attempt", recount);

// let recount =5;
// SyntaxError: Identifier 'recount' has already been declared

let status = "success";
if(status === "success")
    {
        let executionTime = 1000;
        console.log("Execution time is", executionTime);
    }

    // ReferenceError: executionTime is not defined
 // console.log("Execution time is", executionTime);