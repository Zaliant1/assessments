const perf = require("execution-time")();

function doublerAppend(nums) {
  let new_nums = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2;
    new_nums.push(num);
  }
}

function doublerInsert(nums) {
  let new_nums = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2;
    new_nums.unshift(num);
  }
}

function getSizedArray(size) {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push(i);
  }
  return array;
}

const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);

// How long does it take to double every number in a given
// array?
let runtimes = {
  tinyArray: {
    insert: "28.298 μs",
    append: "75.325 μs",
  },
  smallArray: {
    insert: "35.118 μs",
    append: "82.407 μs",
  },
  mediumArray: {
    insert: "118.96 μs",
    append: "145.477 μs",
  },
  largeArray: {
    insert: "5.089205 ms",
    append: "514.512 μs",
  },
  extraLargeArray: {
    insert: "760.663087 ms",
    append: "3.090004 ms",
  },
};
//insert
// tiny to small array is 1.241x slower
//  small to medium is 3.387x slower
// medium to large  is 42.780x slower
// large to xl is 149.465x slower
//

//append
// tiny to small array is 1.094x slower
//  small to medium is 1.765x slower
// medium to large  is 3.536x slower
// large to xl is 6.005x slower
//
//
//
console.table(runtimes);
// Try it with first function
perf.start(); // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop(); // Stops timer and save time results

// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();

console.log("Results for the extraLargeArray");
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
