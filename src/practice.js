// let input = [2, 3, 10, 6, 4, 8, 1];
// function maxDifference(num) {
//   let arr = [];
//   for (let i = 0; i < num.length; i++) {
//     let dif = {};
//     dif = { a: num[i] - num[i + 1], b: num[i + 1] - num[i + 2] };
//     arr.push(dif);
//     return arr;
//   }
// }

// maxDifference(input).map((el) => console.log(el));

// let total = [
//   { id: 1, dpa: "Test DPA", dpa_color: "#a00b88s" },
//   { id: 2, dpa: "Test DPA", dpa_color: "#a00b88s" },
//   { id: 3, dpa: "Test DPA", dpa_color: "#a00b88s" },
//   { id: 4, dpa: "Test DPA", dpa_color: "#a00b88s" },
//   { id: 5, dpa: "Test DPA", dpa_color: "#a00b88s" },
//   { id: 6, dpa: "Test DPA", dpa_color: "#a00b88s" },
//   { id: 7, dpa: "Test DPA", dpa_color: "#a00b88s" },
//   { id: 8, dpa: "Test DPA", dpa_color: "#a00b88s" },
//   { id: 9, dpa: "Test DPA", dpa_color: "#a00b88s" },
//   { id: 10, dpa: "Test DPA", dpa_color: "#a00b88s" },
// ];

// let input = [
//   { dpa_id: 2, user_id: 1000 },
//   { dpa_id: 8, user_id: 1000 },
//   { dpa_id: 5, user_id: 1000 },
//   { dpa_id: 6, user_id: 1000 },
// ];

// let data = input.map((item) => {
//   const { dpa_id } = item;
//   return total.filter((el) => el.id == dpa_id)[0];
// });

// console.log(data)

// const CountConverter = (count) => {
//   var num = Number(count);
//   var final = 0;
//   if (num > 0 && num != "Infinity") {
//     if (num >= 1000 && num < 100000) {
//       final = `${Math.abs(num / 1000).toFixed()}k`;
//     } else if (num >= 100000 && num < 1000000) {
//       if (`${Math.abs(num / 100000).toFixed(1)}`.includes(".0")) {
//         final = `${Math.abs(num / 100000).toFixed()}L`;
//       } else {
//         final = `${Math.abs(num / 100000).toFixed(1)}L`;
//       }
//     } else if (num >= 1000000) {
//       if (`${Math.abs(num / 1000000).toFixed(1)}`.includes(".0")) {
//         final = `${Math.abs(num / 1000000).toFixed()}M`;
//       } else {
//         final = `${Math.abs(num / 1000000).toFixed(1)}M`;
//       }
//     } else final = num;
//   } else {
//     final = 0;
//   }
//   return final;
// };

// console.log(CountConverter(460000));

// const updateMaxValue = (value) => {
//   let max = 10000;
//   if (value < 100000) {
//     max = 600000;
//   } else if (value < 260000) {
//     max = 770000;
//   } else if (value < 550000) {
//     max = 1013900;
//   } else {
//     max = 1000000;
//   }
//   return max;
// };
// console.log(updateMaxValue(120000))

`Problem: Find the maximum difference between any two 
numbers in an array of integers.The larger number must 
occur after the smaller number. Write a JavaScript function
 called "maxDifference" that takes an array of integers as 
 input and returns the maximum difference between any two numbers
  in the array. If no such difference exists, the function should 
  return 0.`;

// maxDifference([2, 3, 10, 6, 4, 8, 1]); // Output: 8 (10 - 2)

// maxDifference([7,9, 5, 6, 3, 2]); // Output: 2 (5 - 3)
// maxDifference([1, 1, 1, 1, 1]); // Output: 0 (no difference exists)
// let input = [2, 3, 12, 6, 4, 15, 1]; // Output: 8 (10 - 2)

// const maxDifference = (arr) => {
//   let minValue = 0;
//   let maxDifference = 0;
//   for (let i = 0; i <= arr.length; ++i) {
//     if (i == 0 || arr[i] < minValue) {
//       minValue = arr[i];
//     }
//     let d = arr[i] - minValue;
//     if (minValue < arr[i]) {
//       if (d > maxDifference) maxDifference = d;
//     }
//   }

//   return `diff : ${maxDifference}, min value : ${minValue}`;
// };

// console.log(maxDifference(input));

// const hanldeClick = () => {
//   alert("Hey ! Are you crazy");
// };

// const input = [10, -2, 3, -4, 5, -6, 7];
// const subArray = [3, -4, 5, -6, 7];

// const getMaximum = (input, sub) => {
//   let res = 0;
//   for (let i = 0; i < input.length; i++) {
//     for (let j = 0; j < sub.length; j++) {
//       if (res < input[i] + sub[j]) {
//         res = input[i] + sub[j];
//       }
//     }
//   }
//   return res;
// };

// console.log(getMaximum(input, subArray));

// let arr = [{ a: "a", b: "b", c: "c", d: "d", e: "e" }];

// function chechTypeOfArray(arr) {
//   return Object.prototype.toString.call(arr) == "[object Array]";
// }

// console.log(chechTypeOfArray(arr));

// Input: nums = [1,2,3,1]
// Output: true

// let nums = [1, 2, 3, 6, 8, 6, 6, 6, 6];
// const findTwice = (arr) => {
//   let count = 0;
//   let copy = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     copy.push(arr[i]);
//     if (copy.includes(arr[i + 1])) {
//       count++;
//     }
//   }
//   if (count > 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(findTwice(nums));

// const containsDuplicate = (arr) => {
//   const frequencyMap = {};

//   for (let i = 0; i < arr.length; i++) {

//     frequencyMap["10"]=10

//     if (frequencyMap[arr[i]]) {
//       return true;
//     } else {
//       // frequencyMap[arr[i]] = true;
//     }
//   }
//   console.log(frequencyMap)
//   return false;
// };

// console.log(containsDuplicate(nums))

// let s = "anagram".split(""),
//   t = "nagaram".split("");
// let count;

// console.log(s,t);
// let nums = [2, 7, 11, 15],
//   target = 9;

// function sum(nums, target) {
//   for (let i = 0; i <= nums.length; i++) {
//     let a = i;
//     let b = i + 1;
//     if (nums[a] + nums[b] == target) {
//       return [a, b];
//     }
//   }
// }
// console.log(sum(nums, target));

// let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
// function findAnagram(strs) {
//   let res = strs.map((el) => {
//     return el.split("").sort().join("");
//   });
//   let grouped = res.reduce((acc, cur, i, arr) => {
//     let cur1 = strs[i];
//     acc[cur] = acc[cur] || [];
//     acc[cur].push(cur1);
//     return acc;
//   }, []);
//   let final = Object.values(grouped).map((el) =>
//     el.sort((a, b) => (a > b ? 1 : -1))
//   );
//   return final.reverse();
// }
// console.log(findAnagram(strs));

let n = 9;
let grid = Array(9)
  .fill(null)
  .map((el) => Array(9).fill(""));
for(let i = 0; i < n; i++){
for(let j = 0 ; j < n ; j++){
grid[i][i+1] = i;
}
}
console.log();
console.log(grid);
