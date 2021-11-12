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
var reverseMiddle = function(head, left, right) {
    // 建立一个虚拟头节点，避免head也要参与反转
    let newHead = new ListNode(null, head);
    // 获得pre节点 left前一个节点
    let pre = newHead;
    for(let i =0 ;i<left;i++) {
        pre = pre.next;
    }
    // 获得rightNode节点 在pre节点往前走 right-left+1
    const step = right - left+1;
    let rightNode = pre;
    for(let i=0; i < step;i++) {
        rightNode = rightNode.next;
    }
    // 获取LeftNode right+1节点
    let leftNode = pre.next;
    let rightNext = rightNode.next;
    // 切断链接
    pre.next = null
    rightNode.next = null
    // 反转链接
    reverseList(leftNode);
    // 拼接链表
    pre.next = rightNode;
    leftNode.next = rightNext;
    return newHead.next;
}
// 反转链接进阶
const b = new ListNode(3, null);
const a = new ListNode(2, b);
const list = new ListNode(1, a);
console.log(reverseMiddle(list, 1,2))