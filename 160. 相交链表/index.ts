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

export function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  let p1 = headA, p2 = headB
  while (p1 !== p2) {
    if (p1 === null) {
      p1 = headB
    } else {
      // p1一直走，遍历完headA后去遍历headB
      p1 = p1.next
    }

    if (p2 === null) {
      p2 = headA
    } else {
      // p2一直走，遍历完headB后去遍历headA
      p2 = p2.next
    }
  }
  return p1
}
