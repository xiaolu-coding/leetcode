// 原理：堆有序：当一棵二叉树的每个节点都大于等于它的子节点时，称它堆有序
//       完全二叉树只用数组而不需要指针，就可以表示。
//       位置为 k 的节点的父结点是 Math.floor(k/2)，子结点是 2k 和 2k + 1
//       二叉堆：用数组储存的堆有序的完全二叉树（不使用a[0]）
// 操作：上浮 swim：因为某个节点变大，大于它的父结点，而被打破了堆的状态时，交换它和它的父结点
//       下沉 sink：因为某个节点变小，小于它的子结点，而被打破了堆的状态时，交换它和它的子结点中较大的一个
//       插入元素：新元素加到末尾，上浮
//       删除最大元素：删除数组第一个元素，将最后一个元素放到第一个，下沉
// 花费：logN

export class MaxPQ<Item> {
  private N = 0
  private pq: Item[] = []

  exch = (a: Item[], i: number, j: number): void => {
    const temp: Item = a[i]
    a[i] = a[j]
    a[j] = temp
  }
  // 上浮
  swim = (k: number) => {
    while (k > 1 && this.pq[k] > this.pq[Math.floor(k / 2)]) {
      this.exch(this.pq, k, Math.floor(k / 2))
      k = Math.floor(k / 2)
    }
  }
  // 下沉
  sink = (k: number) => {
    while (2 * k <= this.N) {
      let i = 2 * k
      if (i < this.N && this.pq[i + 1] > this.pq[i]) i++
      if (this.pq[k] >= this.pq[i]) break
      this.exch(this.pq, k, i)
      k = i
    }
  }

  insert(item: Item): void {
    this.pq[++this.N] = item
    this.swim(this.N)
  }
  delMax(): Item {
    const res = this.pq[1]
    this.pq[1] = this.pq[this.N]
    this.pq[this.N--] = null
    this.sink(1)
    return res
  }

  delMin(): Item {
    const res = this.pq[this.N]
    this.pq[1] = this.pq[this.N]
    this.pq[this.N--] = null
    this.sink(1)
    return res
  }

  isEmpty(): boolean {
    if (this.pq.length === 0) {
      return true
    } else {
      return false
    }
  }
}

const a = [5, 3, 6, 1, 543, 24, 56, 123, 444, 325]
const pq = new MaxPQ()
a.forEach((item) => pq.insert(item))
console.log(pq.delMax(), pq.delMax())
