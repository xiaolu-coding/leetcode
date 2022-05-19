/*
 * @lc app=leetcode.cn id=23 lang=typescript
 *
 * [23] 合并K个升序链表
 */

// @lc code=start
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
import { MaxPQ } from "./queue"

export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) return null
  if (lists.length === 1) return lists[0]
  let dummy: ListNode = new ListNode(-1)
  let p = dummy
  let queue: MaxPQ<ListNode> = new MaxPQ<ListNode>()

  for (let i = 0; i < lists.length; i++) {
    if (lists[i].val !== null) {
      queue.insert(lists[i])
    }
  }

  while (!queue.isEmpty()) {
    // 获取最小节点，接到结果链表中
    let node: ListNode = queue.delMin()

    p.next = node
    if (node.next! != null) {
      queue.insert(node.next)
    }
    // p 指针不断前进
    p = p.next
  }
  return dummy.next
}
// @lc code=end
