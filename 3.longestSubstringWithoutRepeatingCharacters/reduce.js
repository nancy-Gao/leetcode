var lengthOfLongestSubstring = function(s) {
    let a = []; // 目标str
    return s.split('').reduce((acc, cur, index) => {
        index = a.indexOf(cur)
        if(index > -1) {
            a = a.slice(++index) // 减少char
        }
        a.push(cur)
        return Math.max(acc, a.length)
    }, 0)
};