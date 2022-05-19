import { describe, expect, it } from "vitest"
import { mergeKLists, ListNode } from "./index"

describe.skip("测试合并K个有序链表", () => {
  it("测试用例1", () => {
    let l1: ListNode = new ListNode(1, new ListNode(4, new ListNode(5)))
    let l2: ListNode = new ListNode(1, new ListNode(3, new ListNode(4)))
    let l3: ListNode = new ListNode(2, new ListNode(6))
    let l4: ListNode = new ListNode(
      1,
      new ListNode(
        1,
        new ListNode(
          2,
          new ListNode(
            3,
            new ListNode(4, new ListNode(4, new ListNode(5, new ListNode(6))))
          )
        )
      )
    )
    expect(mergeKLists([l1, l2, l3])).toEqual(l4)
  })
})
