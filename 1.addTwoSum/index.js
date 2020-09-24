/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// O(n^2)
var twoSum = function(nums, target) {
    for(let i = 0; i<nums.length;i++) {
        let num1 = nums[i];
        for(let j=i + 1; j < nums.length;j++) {
            if(nums[j] + num1 === target) {
                return [i, j]
            }
        }
    }
};

// T = O(n)
// S = O(n)
// 解决map的元素可重复问题
// Map hash表
// 运行时间 	80 ms
// 内存消耗 	40.1 MB
var twoSum = function(nums, target) {
    const tmp = new Map();
    for(const index in nums) {
        const item = nums[index]
        const diff = target - item;
        const index2 = tmp.get(diff);
        if(index2 !==undefined && index2 !== index) {
            if(index2 < index) {
                return [ +index2, index]
            }
            return [index, +index2]
        }
        const index2Next = tmp.get(item);
        if(undefined === index2Next) {
            tmp.set(item, index);
        }
    }
};

// T = O(n)
// S = O(n)
// 解决map的元素可重复问题
// 对象 hash表
// 运行时间 76 ms
// 内存消耗 39.7 MB
var twoSum = function(nums, target) {
    const tmp = {};
    for(const index in nums) {
        const item = nums[index];
        const diff = target - item;
        const index2 = tmp[diff];
        if(index2 !==undefined && index2 !== index) {
            return [index, +index2]
        }
        const index2Next = tmp[item];
        if(undefined === index2Next) {
            tmp[item] = index;
        }

    }
};

// but this is not very better than above
var twoSum = function(nums, target) {
    const prevNums = {};
    for(const index in nums) {
        const curNum = nums[index];
        const targetNum = target - curNum;
        const targetNumIndex = prevNums[targetNum];
        if(targetNumIndex !==undefined && index !== targetNumIndex) {
            return [index, targetNumIndex]
        }
        const index2Next = prevNums[curNum];
        if(undefined === index2Next) {
            prevNums[curNum] = index;
        }
    }
};
// 运行时间 88 ms
// 内存消耗 40.1 MB
// 尾递归方式
"use strict";
var twoSum = function(nums,target, i=0, maps={}) {
    if(maps[target - nums[i]] !== undefined) {
        return [i, maps[target - nums[i]]];
    }
    if(i >= nums.length - 1) {
        return undefined;
    }
    return twoSum(nums, target, i+1, ((maps[nums[i]] = i) || true) && maps);
}
