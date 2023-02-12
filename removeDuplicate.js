var deleteDuplicates = function(head) {
    if (!head) return head;

    let dummy = new ListNode();
    let current = dummy;

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        while (fast.next && slow.val === fast.next.val) {
            fast = fast.next;
        }

        if (fast === slow) {
            dummy.next = fast;
            dummy = dummy.next;
            slow = fast.next;
            fast = fast.next;
            dummy.next = null;
        } else {
            slow = fast.next;
            fast = fast.next;
        }
    }

    dummy.next = fast;

    return current.next;
};
