// 38_confus_comp.js - Confusing Comparisons with == and ===

// == (loose equality) performs type coercion before comparison
// === (strict equality) checks both value and type without coercion

console.log("=== Examples ===");

// Strict equality: same value and type
console.log(5 === 5); // true
console.log(5 === '5'); // false (different types)
console.log(true === 1); // false
console.log(null === undefined); // false

console.log("\n== Examples ==");

// Loose equality: type coercion
console.log(5 == 5); // true
console.log(5 == '5'); // true (string '5' coerced to number 5)
console.log(true == 1); // true (true coerced to 1)
console.log(null == undefined); // true (both coerced to falsy)

console.log("\nConfusing Cases:");

// Empty string vs false
console.log('' == false); // true (both falsy)
console.log('' === false); // false (string vs boolean)

// Zero vs false
console.log(0 == false); // true (both falsy)
console.log(0 === false); // false (number vs boolean)

// NaN comparisons
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

// Array vs string
console.log([] == ''); // true ([] coerced to '')
console.log([] === ''); // false

// Object vs primitive
console.log({} == '[object Object]'); // true (object coerced to string)
console.log({} === '[object Object]'); // false

console.log("\nBest Practice: Use === for comparisons to avoid unexpected coercion!");