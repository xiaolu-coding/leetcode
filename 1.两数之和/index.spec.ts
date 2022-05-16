import { test, expect } from 'vitest';
import { twoSum } from './index';

test('准备测试环境', () => {
  expect(1).toBe(1);
})

test('测试twoSum', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
})
