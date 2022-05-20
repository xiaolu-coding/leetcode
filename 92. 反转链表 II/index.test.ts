import { describe, it, expect } from "vitest"
import { reverseBetween, ListNode } from "./index"

describe("92. 反转链表 II", () => {
  it("测试", () => {
    let head: ListNode = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    )
    let result: ListNode = new ListNode(
      1,
      new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(5))))
    )

    expect(reverseBetween(head, 2, 4)).toEqual(result)
  })
})
