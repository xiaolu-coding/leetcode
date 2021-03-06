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

export function reverseList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head
  }

  let last = reverseList(head.next)
  head.next.next = head
  head.next = null
  return last
}

export function reverseList1(head: ListNode | null): ListNode | null {
  let pre, cur, next
  pre = null
  cur = head
  next = head
  while (cur !== null) {
    next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
}
