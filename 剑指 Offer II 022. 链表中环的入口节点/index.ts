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

export function detectCycle(head: ListNode | null): ListNode | null {
  let fast = head,
    slow = head
  // hasCycle 判断是否有环
  while (fast != null && fast.next != null) {
    slow = slow.next
    fast = fast.next.next
    if (fast == slow) break
  }

  if (fast == null || fast.next == null) return null
  // 有环的话，让slow从头开始，
  slow = head
  // 和fast相同速度走，相遇的点就是入口点
  while (slow != fast) {
    fast = fast.next
    slow = slow.next
  }

  return slow
}
