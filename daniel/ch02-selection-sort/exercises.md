# Chapter 2 Exercises

Fill in each answer with the result plus a reason.

## 2.1

Suppose you're building an app to keep track of your finances. Every day, you write down everything you spent money on at the end of the day. At the end of the month, you review your expenses and sum them up. Should you use an array or a linked list?

**Answer:** An Array

## 2.2

Suppose you're building an app for restaurants to take customer orders. Your app needs to store a list of orders. Servers keep adding orders to this list, and chefs take orders off the list and make them. It's an order queue: servers add orders to the back of the queue, and the chef takes the first order off the queue and cooks it. Array or linked list?

**Answer:** an Array

## 2.3

Let's run a thought experiment. Suppose Facebook keeps a list of usernames. When someone tries to log in, a search is done for their username. If their name is in the list of usernames, they can log in. People log in to Facebook pretty often, so there are a lot of searches through this list. Suppose Facebook uses binary search to search the list. Binary search needs random access: you need to be able to get to the middle of the list instantly. Knowing this, would you implement the list as an array or a linked list?

**Answer:** An array because of the random access requirement

## 2.4

People sign up for Facebook pretty often, too. Suppose you decide to use an array to store the list of users. What are the downsides of an array for inserts? In particular, suppose you're using binary search to search for logins. What happens when you add new users to an array?

**Answer:** Assuming there are 100 million facebook users, a list of arrays would be 0(n) operations for start, or middle inserts, and resizing the array; they are worst case scenarios I think.

Add users to an array: Assuming the data is sorted by name, a binary search could determine a suitable insert index. Worst case insertions at the start or in the middle would require O(n) operations to reshuffle the array.

## 2.5

In reality, Facebook doesn't store its usernames in an array or a linked list. Suppose we want a hybrid: an array of linked lists. The array has 26 slots, each pointing to a linked list (all names starting with A in the first, B in the second, and so on). Say "Adit B" signs up: you go to slot A of the array, then to the linked list for A, and add "Adit B" at the end. Now say you want to search for "Zakhir H": you go to slot Z, then search that list. Compare this hybrid to arrays and linked lists for searching and inserting. Is it slower or faster than each for each operation? You don't have to give Big O run times, just whether the new data structure would be faster or slower.

**Answer:**

| Criterion     | vs Array                                                                                             | vs Linked list                                                                                               |
| ------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| **Searching** | **Slower** than a sorted array (binary search beats scanning a list). Faster than an unsorted array. | **Faster.** Jump to the right letter, scan ~1/26 of the names.                                               |
| **Inserting** | **Faster.** No shifting or resizing.                                                                 | **About the same.** Slot lookup is instant; appending at the end needs a walk unless a tail pointer is kept. |

Caveat: the speedup assumes names spread evenly across letters. Crowded letters (S, M) give long lists and erode it.

## Extra: selection sort

### E.1

Why is selection sort `O(n²)` and not `O(n)`, given each pass "only" finds one item?

**Answer:** for each item a comparison has to be made against all other items in the list less that item

### E.2

Selection sort does `n + (n-1) + ... + 1` comparisons. Why does Big O still call that `O(n²)`?

**Answer:** the sum doesn't show its growth rate directly, but it collapses to n(n + 1)/2 = (n² + n)/2.

- Big O drops what doesn't affect growth as `n` gets large:
  - the `½` is a constant factor.
  - the `n` is a lower-order term that `n²` swamps (at n = 1000, n² is 1,000,000 and n is 1,000).
- What remains is `O(n²)`.
