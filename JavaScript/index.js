let numbers = [1,2,3,4,5,6,7,8,9];
let doubledNumbers = numbers.map(double);
let tripledNumbers = numbers.map(triple);

console.log("Doubled Numbers:");
console.log(doubledNumbers);
console.log("Tripled Numbers:");
console.log(tripledNumbers);
function double(element) {
    return element * 2 ;
}
function triple(element) {
    return element * 3 ;
}
function displayNumbers(num) {
    console.log(num);
}