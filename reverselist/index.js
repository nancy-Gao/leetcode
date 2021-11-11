// singly-linked list
function ListNode(val, next) {
    this.val = val || 0;
    this.next = next || null;
}
var reverseList = function(head) {
    return reverseDr(head)
}
// 动态规划/循环
var reverseDp = function(head) {
    let prev = null;
    let curr = head;
    while(curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

// 递归实现
// 因为nk 的next指向nk+1  因此反转之后nk+1的next指向nk
// 所以nk.next.next 需要被赋值nk
var reverseDr = function(head) {
    // 终止条件 最后要获得的head
    if(head == null || head.next == null) return head;
    const newHead = reverseDr(head.next);
    head.next.next = head;
    head.next = null; // 初始化，等待下一个递归赋值
    return newHead; // 终止条件的head
    
}
const b = new ListNode(3, null);
const a = new ListNode(2, b);
const list = new ListNode(1, a);
console.log(reverseList(list))