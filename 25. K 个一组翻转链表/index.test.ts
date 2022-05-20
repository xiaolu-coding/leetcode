import { describe, it, expect } from "vitest"
import { reverseKGroup, ListNode } from "./index"

describe("25. K 个一组翻转链表", () => {
  it("测试", () => {
    let head: ListNode = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    )
    let result: ListNode = new ListNode(
      2,
      new ListNode(1, new ListNode(4, new ListNode(3, new ListNode(5))))
    )

    expect(reverseKGroup(head, 2)).toEqual(result)
  })
})
