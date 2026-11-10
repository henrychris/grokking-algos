# Chapter 3 Exercises

Fill in each answer with the result plus a reason.

## 3.1

Suppose I show you a call stack (the book's `greet` / `greet2` / `bye` example). What information can you give me, just by looking at the call stack?

**Answer:** greet is a partially completed function and its variable (name) value is maggie, greet2 is invoked from greet with the same variable value.

## 3.2

Suppose you accidentally write a recursive function that runs forever. As you saw, your computer allocates memory on the stack for each function call. What happens to the stack when your function runs forever?

**Answer:** a stack overflow; more data is pushed unto the stack that exceed its boundaries and cause memory corruption such that the operating system has to shut down;
