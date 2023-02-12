var middleNode = function(head) {
    let a = head;
    let b = head;

    while (true) {
        if (!b.next) {
            return a;
        }

        if (!b.next.next) {
            return a.next;
        }

        a = a.next;
        b = b.next.next;
    }
};
