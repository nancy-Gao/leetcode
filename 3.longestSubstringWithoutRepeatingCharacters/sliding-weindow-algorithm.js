/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let right = 0;
    let max = 0;
    if(s.length <=1) return s.length; // length <= 1
    while(right < s.length) {
        console.log(s,s.substr(left, right- left + 1), s[right+1] )
        if(s[right+1]) {
            if(s.substr(left, right- left + 1).indexOf(s[right+1]) > -1) {
                left ++;
                console.log('left', left, right)
            } else {
                right ++;
                console.log('right', left, right)
            }
        } else {
            // length <= 1 or 字符串结束
            console.log('end', left, right)
            break
        }
        max = Math.max(max, right - left + 1); // 记录最大长度
        console.log('max', max)
    }
    return max;
};