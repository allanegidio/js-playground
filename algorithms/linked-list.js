class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  // O(n) and O(1) for start & end
  add(value) {
    const node = new Node(value)

    if(this.head === null)
      this.head = node
    else {
      let current = this.head

      while(current.next !== null) {
        current = current.next
      }
        
      current.next = node
    }
  }

  // O(n)
  get(index) {
    if(index > -1) {
      let current = this.head
      let i = 0
      while(current !== null && i < index) {
        current = current.next
        i++
      }

      return current !== null ? current.value : undefined
    } else
      return undefined
  }

  // O(n) and O(1) for start
  delete(index) {
    if(this.head === null || index < 0)
      throw new RangeError('Value does not exist in array or list is empty')
    
    if(index === 0) {
      this.head = this.head.next
      return true
    }
      
    let current = this.head
    let previous = null
    let i = 0

    while(current !== null && i < index) {
      previous = current
      current = current.next
      i++
    }

    if(current !== null) {
      previous.next = current.next
      return true
    }

    throw new RangeError('Value does not exists in list')
  }

  // O(n) 
  getAll() {
    let current = this.head
    let values = []

    while(current !== null) {
      values.push(current.value)
      current = current.next
    }
    
    return values
  }
}

const linkedList = new LinkedList()

linkedList.add(1)
linkedList.add(2)
linkedList.add(3)
linkedList.add(4)
linkedList.add(5)
linkedList.add(6)
linkedList.add(7)
linkedList.add(8)

console.log(linkedList.getAll())

linkedList.delete(6)
linkedList.add(9)

console.log(linkedList.getAll())
console.log(linkedList.get(6))
