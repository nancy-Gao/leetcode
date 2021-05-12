/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    const sortedArray = selectionSort(nums1.concat(nums2));
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
    }
}

console.log(findMedianSortedArrays([1,3],[2,5]));