console.time("end");
// let twoSum = function (nums, target) {
//   let result = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] + nums[i + 1] === target) result.push(i, i + 1);
//   }
//   console.log(result);
// };

let twoSum = function (nums, target) {
  let result = {};
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    let diff = target - current;
    if (result[diff] !== undefined) return [result[diff], i];
    result[current] = i;
    console.log(result);
  }
};
console.log(twoSum([3, 2, 3], 6));
console.timeEnd("end");
