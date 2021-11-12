function ListNode(val, next) {
    this.val = val || 0;
    this.next = next || null;
}
// 有环链表
// 判断是否有环
// 迭代判断 hash标记是否有重复遍历的节点
var isCircleList = function(head) {
    if(head == null || head.next === null) return false;
    let curr = head;
    while(curr) {
        if(curr.read) {
            return true
        }
        curr.read = 1;
        curr = curr.next;
    }
    return false
}
// 双指针法 判断指针是否相等 相等的时候则有环
var isCircleListByDouble = function(head) {
    if(head == null || head.next == null) return false;
    let newHead = new ListNode(null, head);
    let slowNode = newHead;
    let fastNode = newHead.next;
    let length = 0;
    while(slowNode != fastNode) {
        if(fastNode == null || fastNode.next === null) return false;
        slowNode =  slowNode.next;
        fastNode = fastNode.next.next;
        length ++
    }
    console.log(length)
    return true;
}

// json.stringfy 方法
var isCircleListByJson = function(head) {
    try {
        JSON.stringify(head);
        return false;
    }catch(e) {
        return e.message.indexOf('circle') > -1
    }
}
// 获得倒数第k个元素
var kthNode = function(head, k) {
    if(head == null || k<=0) return false;
    let leftNode = head;
    let rightNode = head;
    for(let i=0;i<k;i++) {
        if(rightNode === null) return false;
        rightNode = rightNode.next
    }
    while(rightNode) {
        rightNode = rightNode.next;
        leftNode = leftNode.next;
    }
    return leftNode;
    
}
// 获取中间元素
var middleNode = function(head) {
    if(head == null) return false;
    let leftNode = head;
    let rightNode = head;
    while(rightNode && rightNode.next) {
        leftNode = leftNode.next;
        rightNode = rightNode.next.next;
    }
    return leftNode;
}
// 判断环的长度


const c = new ListNode(4, null);
const b = new ListNode(3, c);
const a = new ListNode(2, b);
//b.next = a; //环
const list = new ListNode(1, a);
console.log(isCircleList(list))
console.log(isCircleListByJson(list))
console.log(isCircleListByDouble(list));
console.log(kthNode(list, 2))
console.log(middleNode(list))