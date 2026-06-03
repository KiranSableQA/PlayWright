function add(a, b, c) {
    return a + b + c;
}
let num = [1, 2, 3];
let result = add(...num);
console.log(result);



let responseCodes = [100, 201, 4];

function hasError(...codes) {
    return codes.some(c => c >= 400);
}
let result = hasError(...responseCodes); // true
console.log(result);