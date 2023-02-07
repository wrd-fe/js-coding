const { flatten1, flatten2, flatten3, flatten4, flatten5 } = require("./index");

const arr1 = [0, 1, 2, [[[3, 4]]]];
const arr2 = [0, 1, 2, [[[3, 4]]]];
const arr3 = [0, 1, 2, [[[3, 4]]]];
const arr4 = [0, 1, 2, [[[3, 4]]]];
const arr5 = [0, 1, 2, [[[3, 4]]]];

const res1 = flatten1(arr1);
const res2 = flatten2(arr2);
const res3 = flatten3(arr3);
const res4 = flatten4(arr4);
const res5 = flatten5(arr5);

console.log("res1:", res1, arr1);
console.log("res2:", res2, arr2);
console.log("res3:", res3, arr3);
console.log("res4:", res4, arr4);
console.log("res5:", res5, arr5);
