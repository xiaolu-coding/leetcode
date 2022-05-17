import { test, expect } from "vitest"
import { addTwoNumbers, ListNode } from "./index"

test("测试addTwoNumbers", () => {
  let l1 = new ListNode(2, new ListNode(4, new ListNode(3)))
  let l2 = new ListNode(5, new ListNode(6, new ListNode(4)))
  let l3 = new ListNode(7, new ListNode(0, new ListNode(8)))
  expect(addTwoNumbers(l1, l2)).toEqual(l3)
})
