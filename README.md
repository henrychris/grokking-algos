# Study

Two of us working through _Grokking Algorithms_, one chapter per week. Each of us studies alone, then we meet to compare and discuss.

## Schedule

- Joint discussion: 1 session a week, 5:00–5:30pm
- Pace: 1 chapter per week
- If one person misses a week, we both stay on that chapter. Nobody moves ahead alone.

## Repo layout

```
grokking-study/
├── README.md
├── henry/
│   └── chNN-topic/
├── daniel/
│   └── chNN-topic/
└── discussions/
    └── chNN.md
```

Chapter folders are named `chNN-short-topic`, e.g. `ch01-intro`.

## What goes in a chapter folder

| File                      | Required                                                | Contents                                 |
| ------------------------- | ------------------------------------------------------- | ---------------------------------------- |
| `exercises.md`            | Yes                                                     | Answers to the book's exercises          |
| `notes.md`                | Yes                                                     | Short summary of the chapter             |
| Code (language of choice) | Only if the chapter has an algorithm worth implementing | Your implementation, written from memory |

### `exercises.md`

Each answer gives the result plus a reason.

```md
**1.1** 7 steps. log2(128) = 7.
```

### `notes.md`

Not a fixed format, but keep in mind:

- **Core idea:** 2–3 sentences
- **Big O:** time (and space if relevant)
- **Confusions:** what didn't click
- **Real-world link:** where you've seen this in actual work

### Code

- Write it from memory, not copied from the book.
- Use a language of choice
- Skip it if the chapter has nothing to implement.

## Discussion sessions (30 min)

1. **Teach-back (10 min):** the leader explains the chapter without notes and the other person pokes holes. We alternate who leads each week.
2. **Compare answers and code (10 min):** go through where our answers or approaches differ.
3. **One problem together (10 min):** a NeetCode easy on the topic. Talk through the approach first and only code if there's time.

After the session, the week's leader writes `discussions/chNN.md` with disagreements, mistakes, and any problem attempted.

## Rules

1. Push your `exercises.md` before the joint session.
2. Don't open the other person's files until the session. Comparing is the point.
3. Commit per chapter, e.g. `ch01: exercises + binary search`.
4. Update the progress table when you push.
5. Every 4 weeks, check whether the pace is working and adjust it.

## Progress

| Chapter | Henry | daniel | Discussed |
| ------- | ----- | -------- | --------- |
| ch01    | ⬜    | ⬜       | ⬜        |
| ch02    | ⬜    | ⬜       | ⬜        |
| ch03    | ⬜    | ⬜       | ⬜        |
| ch04    | ⬜    | ⬜       | ⬜        |
| ch05    | ⬜    | ⬜       | ⬜        |
| ch06    | ⬜    | ⬜       | ⬜        |
| ch07    | ⬜    | ⬜       | ⬜        |
| ch08    | ⬜    | ⬜       | ⬜        |
| ch09    | ⬜    | ⬜       | ⬜        |
| ch10    | ⬜    | ⬜       | ⬜        |
| ch11    | ⬜    | ⬜       | ⬜        |
| ch12    | ⬜    | ⬜       | ⬜        |
| ch13    | ⬜    | ⬜       | ⬜        |

Mark ✅ when done. Or replace the box with an X if marking doesn't work.
