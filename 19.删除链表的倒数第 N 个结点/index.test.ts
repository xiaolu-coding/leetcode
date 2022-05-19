import { test, expect } from "vitest"
import { removeNthFromEnd, ListNode } from "./index"

test('测试', () => {
  let l1: ListNode = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
  let l2: ListNode = new ListNode(
    1,
    new ListNode(2, new ListNode(3, new ListNode(5)))
  )
  expect(removeNthFromEnd(l1, 2)).toEqual(l2)
})
