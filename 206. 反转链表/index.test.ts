import { describe, it, expect } from "vitest"
import { reverseList, ListNode, reverseList1 } from "./index"

describe("剑指 Offer II 022. 链表中环的入口节点", () => {
  it("测试", () => {
    let head: ListNode = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    )
    let result: ListNode = new ListNode(
      5,
      new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(1))))
    )
    expect(reverseList(head)).toEqual(result)
  })

  it("测试", () => {
    let head: ListNode = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    )
    let result: ListNode = new ListNode(
      5,
      new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(1))))
    )
    expect(reverseList1(head)).toEqual(result)
  })
})
