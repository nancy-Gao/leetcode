/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    const sortedArray = [];
    const endIndex1 = 0;
    const endIndex2 = 0;
    nums1.map(num1, index1 => {
        nums2.map(num2, index2 => {
            if(num2 < num1) {
                sortedArray.push(nums2)
            } else {
                sortedArray = sortedArray.concat(nums2.slice(index2));
                end = true;
            }
        });
        if(end) {
            sortedArray = sortedArray.concat(nums1.slice(index1)); 
        }
    })
};