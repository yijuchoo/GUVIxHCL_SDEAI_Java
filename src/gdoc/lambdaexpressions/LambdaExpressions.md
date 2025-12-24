# Lambda Expression: Problem Set
#### Solutions: [Link](url)

### 1. Filename sorter with policy tiers
#### a) You’ve a list of file names, for example: <br>
#### &emsp;[“README.md”, “Main.java”, “notes.txt”, “index.md”, “build.gradle”, “App.java”, “todo.md”]
#### b) Sort them using a single lambda-based Comparator with this policy:
#### &emsp;&emsp;i. &nbsp;&nbsp; Priority by extension: .md first, then .java, then everything else
#### &emsp;&emsp;ii. &nbsp; Within the same extension, shorter names first; eg: App > Main
#### &emsp;&emsp;iii.&nbsp; If still tied, reverse alphabetical
___
### 2. Loop-capture bug hunt: threads and indices
#### a) Start three background threads in a for-loop; each prints its own index exactly once:
#### b) Thread-0 prints “0”, Thread-1 prints “1”, Thread-2 prints “2”.
___
### 3. Score combiner via custom functional interface
#### a) Define a @FunctionalInterface named IntCombiner with int apply(int a, int b).
#### b) You have two partial scores for a player: base and bonus.
#### c) Implement a method calc(int base, int bonus, IntCombiner rule) and call it with three distinct rules:
#### &emsp;&emsp;i. &nbsp;&nbsp; sum rule: base + bonus
#### &emsp;&emsp;ii. &nbsp; cap rule: minimum of the two - 100 or base + 2*bonus
#### &emsp;&emsp;iii.&nbsp; penalty rule: if bonus < 0, return base + bonus*3; else base + bonus

#### d) Call calc method with sample bonus & base values and an instance of IntCombiner
___
### 4. Comparator chaining
#### a) Given a record: record Task(String name, int priority, int durationMins) {}
#### b) Sort a List<Task> by:
#### &emsp;&emsp;i. &nbsp;&nbsp; priority ascending
#### &emsp;&emsp;ii. &nbsp; then durationMins descending
#### &emsp;&emsp;iii.&nbsp; then name case-insensitive ascending
#### c) Do this with method references or lambdas via Comparator.comparing(...) chaining. Show one call site that performs the sort
___
### 5. Username policy with a denylist and mixed rules
#### a) Given:
#### &emsp;&emsp;i. &nbsp;&nbsp; A Set deny = {“root”,“admin”,“system”}
#### &emsp;&emsp;ii. &nbsp; A List candidates = [“root”,“jo”,“jo_1”,“Asha99”,“bob”,“bob_”,“SYSTEM”,“jo1”]
#### b) Write three boolean lambdas (you may use Predicate if you want) that check:
#### &emsp;&emsp;i. &nbsp;&nbsp; length at least 3
#### &emsp;&emsp;ii. &nbsp; contains only letters, digits, underscore
#### &emsp;&emsp;iii.&nbsp; not in denylist, case-insensitive
___
### 6. Leaderboard updates without TreeMap
#### a) Given an initial Map<String,Integer> score and these updates in order:
#### b) +10 “ann”, +5 “bob”, +2 “ann”, +7 “ann”, +6 “bob”, +3 “cara”
#### c) Use Map.merge with a lambda to apply updates. Then print the scoreboard as:
#### &emsp;&emsp;i. &nbsp;&nbsp; 1.	name points
#### &emsp;&emsp;ii. &nbsp; 2.	name points
#### &emsp;&emsp;iii.&nbsp; 3.	name points
#### d) ordered by points descending, ties broken by name ascending.

___
### 7. Retry helper for checked exceptions with lambdas
#### a) Design a tiny retry utility for IO-like actions using a lambda that can throw a checked exception.
#### b) Create @FunctionalInterface CheckedAction { void run() throws IOException; }
#### c) Implement runWithRetry(CheckedAction action, int attempts) that:
#### &emsp;&emsp;i. &nbsp;&nbsp; tries to run the action up to attempts times
#### &emsp;&emsp;ii. &nbsp; if it succeeds, return normally
#### &emsp;&emsp;iii.&nbsp; if it fails every time, throw a RuntimeException wrapping the last IOException
#### d) Show how a caller would use it to “write a file” lambda that sometimes throws
___
### 8. Statefulness trap
#### a) You want to increment an external counter each time a Consumer<String> is called:
#### &emsp;&emsp;i. &nbsp;&nbsp; int hits = 0;
#### &emsp;&emsp;ii. &nbsp; Consumer<String> log = s -> { hits++; System.out.println(s); };
#### b) Explain why this is a problem with lambdas in Java.
#### c) Make it compile, and then rewrite it to avoid external mutation while preserving the behavior contract. Show the safer alternative
