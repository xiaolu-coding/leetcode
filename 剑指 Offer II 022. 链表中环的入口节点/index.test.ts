import { describe, it, expect } from "vitest"
import { detectCycle, ListNode } from "./index"

describe("剑指 Offer II 022. 链表中环的入口节点", () => {
  it("测试", () => {
    let l1: ListNode = new ListNode(1)
    expect(detectCycle(l1)).toEqual(null)
  })
})
