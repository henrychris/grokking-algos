# Chapter 1 Exercises

## Binary search steps

### 1.1
Suppose you have a sorted list of 128 names, and you're searching through it using binary search. What's the maximum number of steps it would take?

**Answer:** 7 steps. `log₂ 128 = 7`.

### 1.2
Suppose you double the size of the list. What's the maximum number of steps now?

**Answer:** 8 steps. `log₂ (128 × 2) = 8`.

## Big O run times

Give the run time for each of these scenarios in terms of Big O.

### 1.3
You have a name, and you want to find the person's phone number in the phone book.

**Answer:** `O(log n)`. A number is associated with a name. The phone book is sorted by name, so the name can be binary searched.

### 1.4
You have a phone number, and you want to find the person's name in the phone book. (Hint: You'll have to search through the whole book!)

**Answer:** `O(n)`. Linear search. Phone numbers aren't sorted in the phone book.

### 1.5
You want to read the numbers of every person in the phone book.

**Answer:** `O(n)`. Linear search.

### 1.6
You want to read the numbers of just the As. (This is a tricky one! It involves concepts that are covered more in chapter 4. Read the answer, you may be surprised!)

**Answer:** `O(n)`. Although it's a small subset of the entire phone book, it is still linear.
