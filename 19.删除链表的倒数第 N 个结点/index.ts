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

export function removeNthFromEnd(
  head: ListNode | null,
  n: number
): ListNode | null {
  let dummy: ListNode = new ListNode(-1)

  dummy.next = head
  // 获取到倒数n+1的元素
  let x: ListNode = findFromEnd(dummy, n + 1)
  // 删除倒数n+1的元素
  x.next = x.next.next  
  return dummy.next
}

function findFromEnd(head: ListNode, k: number) {
  let p1: ListNode = head
  // p1先走k步
  for (let i = 0; i < k; i++) {
    p1 = p1.next
  }

  let p2: ListNode = head
  // p2和p1同时走，走到最后n
  while (p1 !== null) {
    p1 = p1.next
    p2 = p2.next
  }
  // 现在p2指向第n-k个节点，也就是倒数第k个元素
  return p2
}
