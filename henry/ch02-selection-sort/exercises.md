Q: Why does it take O(n) time to insert an element into an array? Suppose you wanted to insert an element at the beginning of an array. How would you do it? How long would it take? 

A: I think, because every item in the array has to be moved, it takes N time. Going by how it is stored in memory, you'd need to find space for every item, then move them one at a time.

2.1. A linked list
2.2. A linked list, according to the questions specifics.
2.3. An array makes sense here.
2.4. Downside is searches take longer each time a user is added. And each time a user is added, the array is possibly unsorted & must be resorted.
2.5. Should be faster overall bc assuming it was a single array with every single user inside, it would take a large O(N) for everyone, regardless of name. But, with the hybrid structure, it's possibly a smaller list being searched through when accessing a specific linked list after accessing its alphabet denominated array.