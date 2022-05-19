import { describe, it, expect } from 'vitest'
import { hasCycle, ListNode } from './index'

describe('141.环形链表', () => {
  it('测试', () => {
    let l1: ListNode = new ListNode(1)
    expect(hasCycle(l1)).toEqual(false)
  })
})
