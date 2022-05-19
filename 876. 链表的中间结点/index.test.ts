import { describe, it, expect } from 'vitest'
import { middleNode, ListNode } from './index'

describe('876.链表的中间节点', () => {
  it('测试', () => {
    let l1: ListNode = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    )
    expect(middleNode(l1)).toEqual(new ListNode(3, new ListNode(4, new ListNode(5))))
  })
})
