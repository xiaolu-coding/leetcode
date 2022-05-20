/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function reverseList1(a, b): ListNode | null {
  let pre, cur, next
  pre = null
  cur = a
  next = a
  while (cur !== b) {
    next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
}

export function reverseKGroup(
  head: ListNode | null,
  k: number
): ListNode | null {
      if (head == null) return null
    // 区间 [a, b) 包含 k 个待反转元素
    let a, b
    a = b = head
    for (let i = 0; i < k; i++) {
      if (b === null) return head
      b = b.next
    }
    let newHead = reverseList1(a, b)
    a.next = reverseKGroup(b, k)
    return newHead
}
