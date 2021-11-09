/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    const sortedArray = mergeSortedArray(nums1, nums2);
    const len = sortedArray.length
    if(len%2 ==0)  {
        return (sortedArray[len/2 -1] + sortedArray[len/2])/2
    }else {
        return sortedArray[Math.floor(len/2)]
    }
};

var bubleSort = function(arr) {
    for(let i= arr.length -1; i > 0; i--) { // 需要排序的长度
        for(let j=0; j< i; j++) { // 第一个元素到第i个元素
            if(arr[j] > arr[j+1]) {
                const temp = arr[j]
                arr[j]= arr[j+1]
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

var bubbleSortImprove = function(arr) {
    const isStopSwap = true; // 已经是有序数组不需要冒泡
    for(let i= arr.length -1; i > 0; i--) { // 需要排序的长度
        for(let j=0; j< i; j++) { // 第一个元素到第i个元素
            if(arr[j] > arr[j+1]) {
                swapArrElement(arr, j, j+1);
                isStopSwap = false;
            }
        }
        if(isStopSwap) {
            break;
        }
    }
    return arr;
}
var swapArrElement = function(arr, i, j) {
    const temp = arr[j];
    arr[j]= arr[i];
    arr[i] = temp;
}

var selectionSort = function(arr) {
    const resultArr = arr.concat([]);
    for(let i = 0; i< resultArr.length -1; i++) { // 起始位置
        let minIndex = i;
        for(let j=i; j < resultArr.length;j++) { // 在剩余的元素中比较获取最小的值
            if(resultArr[j] < resultArr[minIndex]) {
                minIndex = j;
            }
        }
        if(minIndex > i) { // 需要交换
            swapArrElement(resultArr, i, minIndex);
        }
    }
    return resultArr;
}

var insertionSort = function(arr) {
    const resultArr = arr[0];
    for(let i=1; i < arr.length; i++) { // 未排好序的元素位置
        resultArr.push(arr[i]); // 先推入
        for(let j= resultArr.length - 2;j>=0;j--) {
            if(resultArr[j] > resultArr[j+1]) {
                swapArrElement(resultArr[j], arr[j+1]); // 位置置换
            } else {
                break
            }
        } 

    }
    return resultArr;
}
// 递归方法 && 遍历方法
var mergesort = function(arr) {
    return recursionMergeSort(arr.slice(0, arr.length/2), arr.slice(arr.length/2));
}
var recursionMergeSort = function(leftArr, rightArr) {
    if(leftArr.length > 1 || rightArr.length > 1) {
        // 拆分两个数组
        const arr1 = recursionMergeSort(leftArr.slice(0, leftArr.length/2), leftArr.slice(leftArr.length/2))
        const arr2 = recursionMergeSort(rightArr.slice(0, rightArr.length/2), rightArr.slice(rightArr.length/2))
        // 合并两个数组
        const res = mergeSortedArray(arr1, arr2);
        return res;
    }
    const res = mergeSortedArray(leftArr, rightArr);
    return res;
}
var mergeSortedArray = function(arr1, arr2) {
    let res = [];
    let i=0,j=0;
    for(;i<arr1.length&&j<arr2.length;) {
        if(arr1[i] < arr2[j]) {
            res.push(arr1[i]);
            i++;
        } else {
            res.push(arr2[j]);
            j++;
        }
    }
    if(i >= arr1.length) {
        res = res.concat(arr2.slice(j))
    }
    if(j >= arr2.length) {
        res = res.concat(arr1.slice(i))
    }
    return res;
}
var traversalMergesSort = function(arr) {
    
    
}
// console.log(findMedianSortedArrays([],[2]));
console.log(mergesort([0,2,7,4,56,45,32,5,4]))
