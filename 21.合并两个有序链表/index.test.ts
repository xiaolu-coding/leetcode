import { test, expect } from 'vitest'
import { mergeTwoLists, ListNode } from './index'

test('测试合并两个有序链表第一例', () => {
  let l1: ListNode = new ListNode(1, new ListNode(2, new ListNode(4)))
  let l2: ListNode = new ListNode(1, new ListNode(3, new ListNode(4)))
  let l3: ListNode = new ListNode(
    1,
    new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4))))
    )
  )
  expect(mergeTwoLists(l1, l2)).toEqual(l3);
})
