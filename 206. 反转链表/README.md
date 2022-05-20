# 思路

反转链表，使用递归方法，传入参数为head.next 那么翻转过来的链表会遗漏第一个节点，所以要将head.next.next = head这样，最后再head.next = null完成链表反转
