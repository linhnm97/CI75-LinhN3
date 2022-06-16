// b1
let input = "abcdef";
let output = reverseString(input);
document.write(`Input: ${input} <br>`);
document.write(`Output: ${output}`);
function reverseString(str) {
  return str.split("").reverse().join("");
}

//b2
let input2 = [1,2,3,5,4,2,6,4];
let output2 =  input2.filter((value, index) => {
  return input2.indexOf(value) === index;
})
console.log(output2);

//b3 
let input3 = [1,2,3,5,6,4,2,1,6,3,5,3];
let output3 =  input3.filter((value, index) => {
  return input3.indexOf(value) !== index;
})