var addTwoNumbers = function(l1, l2) {
    let sumhead = new ListNode();
    let iterator = sumhead;
    let carrier = 0;
    while (l1 !== null && l2 !== null) {
        iterator.next = new ListNode((l1.val + l2.val + carrier) % 10);
        carrier = Math.floor((l1.val + l2.val + carrier) / 10);
        iterator = iterator.next;
        l1 = l1.next;
        l2 = l2.next;
    }
    if (l1 === null) {
        while (l2 !== null) {
            iterator.next = new ListNode((l2.val + carrier) % 10);
            carrier = Math.floor((l2.val + carrier) / 10);
            iterator = iterator.next;
            l2 = l2.next;
        }
    } else if (l2 === null) {
        while (l1 !== null) {
            iterator.next = new ListNode((l1.val + carrier) % 10);
            carrier = Math.floor((l1.val + carrier) / 10);
            iterator = iterator.next;
            l1 = l1.next;
        }
    }
    if (carrier !== 0) {
        iterator.next = new ListNode(carrier);
    }
    return sumhead.next;
};
