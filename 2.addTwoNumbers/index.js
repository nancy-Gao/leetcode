var addTwoNumbers = function(l1, l2, i = 0, result = [], more=0) {
    const first = l1[i] + l2[i] + more;
    let nextMore = first/10;
    console.log(l1.length - 1 <= i && l2.length-1 <= i, i)
    if(l1.length - 1 <= i && l2.length-1 <= i) {
        result[i] = first%10;
        if(first > 10) {
            result[i+1] = nextMore;
        }
        return result;
    }
    return addTwoNumbers(l1, l2, i+1, result, nextMore);
};
