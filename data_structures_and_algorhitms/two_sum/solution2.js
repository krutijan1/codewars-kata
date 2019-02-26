/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = i;
    }

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map[complement] && map[complement] != i) {
            return [i, map[complement]];
        }
    }

}
