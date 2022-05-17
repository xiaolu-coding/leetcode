/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let dummy: ListNode = new ListNode(-1)
  let p: ListNode = dummy
  let p1: ListNode = list1
  let p2: ListNode = list2
  while (p1 != null && p2 != null) {
    if (p1.val > p2.val) {
      p.next = p2
      p2 = p2.next
    } else {
      p.next = p1
      p1 = p1.next
    }
    p = p.next
  }

  if (p1 != null) {
    p.next = p1
  }

  if (p2 != null) {
    p.next = p2
  }

  return dummy.next
};
// @lc code=end

