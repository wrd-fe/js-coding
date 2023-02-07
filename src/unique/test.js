const { unique1, unique2, unique3, unique4, unique5 } = require("./index");

const arr1 = [1, 1, "1", "1"]
const arr2 = [1, 1, "1", "1"]
const arr3 = [1, 1, "1", "1"]
const arr4 = [1, 1, "1", "1"]
const arr5 = [1, 1, "1", "1"]

const res1 = unique1(arr1);
const res2 = unique2(arr2);
const res3 = unique3(arr3);
const res4 = unique4(arr4);
const res5 = unique5(arr5);

console.log("res1:", res1, arr1);
console.log("res2:", res2, arr2);
console.log("res3:", res3, arr3);
console.log("res4:", res4, arr4);
console.log("res5:", res5, arr5);
