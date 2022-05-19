import { describe, it, expect } from "vitest"
import { getIntersectionNode, ListNode } from "./index"

describe("剑指 Offer II 022. 链表中环的入口节点", () => {
  it("测试", () => {
    let l1: ListNode = new ListNode(2, new ListNode(6, new ListNode(4)))
    let l2: ListNode = new ListNode(1, new ListNode(5))
    expect(getIntersectionNode(l1, l2)).toEqual(null)
  })
})
