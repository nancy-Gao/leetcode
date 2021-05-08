/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let result = new ListNode(0);
    let currentNode = result;
    let currentl1 = l1;
    let currentl2 = l2;
    while(currentl1 || currentl2) {
        const nextResult = new ListNode(0);
        const first = (currentl1?.val || 0) + (currentl2?.val || 0) + (currentNode.val || 0);
        currentNode.val = first %10;
        if(first >= 10) {
            nextResult.val = Math.trunc(first / 10);
        }
        currentl1 = currentl1?.next;
        currentl2 = currentl2?.next;
        if(currentl1 || currentl2 || first >= 10) {
            currentNode.next = nextResult;
        }
        currentNode = currentNode.next;
    }
    return result;
};