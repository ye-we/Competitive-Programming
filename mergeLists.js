var mergeTwoLists = function(list1, list2) {
    if (!list1) {
        return list2;
    } else if (!list2) {
        return list1;
    } else {
        let result = new ListNode();
        let itr = result;

        while (list1 && list2) {
            if (list1.val >= list2.val) {
                itr.next = list2;
                list2 = list2.next;
            } else {
                itr.next = list1;
                list1 = list1.next;
            }
            itr = itr.next;
        }

        if (!list1) {
            itr.next = list2;
        } else {
            itr.next = list1;
        }

        return result.next;
    }
};
