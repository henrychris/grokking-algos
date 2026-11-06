# Selection Sort

## Memory

- Imagine a computer's memory as a set of drawers, each one with an address used to identify it. Each time you wish to store something, you ask the computer for space & it returns an address to store the item.

## Arrays

- Arrays store data as a contiguous block in memory. All items lie right next to one another.
- Assume you previously stored 3 items in slots A1 - A3, and now wish to add a 4th item. If slot A4 is taken, you'll need to ask the computer for a new block with 4 free contiguous slots, say D1 - D4, then move all items there, freeing up the previous space.
- Relocating to a new spot can be pretty slow. So, a workaround is to hold more space than you need - just in case, however:
  - if you don't use the space, it is wasted as it can't be used by anyone else.
  - if you eventually reach the limit of how much space you held, you'll need to move then.

### Time Complexity

- Reading: O(1)
  - You can instantly access any item in the array because you know the address.
- Inserting: O(N)
  - To insert an item into the middle, you have to shift all items after the index downwards. And if there's not enough memory space, all items will be reallocated.
  - Can fail if there's no space in memory
- Deletion: O(N)
  - Every item after the deleted item must be moved up.

## Linked Lists

- Data can be stored anywhere in memory as each item holds a pointer to the next item in the list, like: A1 -> B2 -> C3.
- To add a new item, simply store its address on the previous item in the list.
- You don't need to find X free blocks to store a group of items, you just need a free slot for each item.

### Time Complexity

- Reading: O(N)
  - You can't just read the last item in the list, you have to view each item to see the next one.
- Insertion: O(1)
  - To insert an item into the middle, you just change what the previous element points to. Insert the new item with a pointer to where the previous item used to point to.
  - Can fail if there's no space in memory
- Deletion: O(1)
  - Instant. Just change what the previous element points to. 
  - Note: The first and last members in a linked list are always tracked.

## Selection Sort

- Remember, O(N) means touching every item in the list **once**.