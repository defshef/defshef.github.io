# Functional Programming Problems

Blah blah problems, Haskell clojure blah blah.

In order to get the most from these exercises, I recommend avoiding the helper functions in the core library of your chosen language and using the functional programming primitives I've <tag>tagged</tag> each problem with.

## Warmup

1. Double all the numbers in a list
    ```clojure
    (doubled [ 1 2 3 4 ])
    ;=> [ 2 4 6 8 ]
    ```
    <tag>Map</tag>

2. Extract all the even numbers from a list
    ```clojure
    (evens [ 1 2 3 4 5 6 7 ])
    ;=> [ 1 3 5 7 ]
    ```
    <tag>Filter</tag>

3. Multiply all the numbers in a list together
    ```clojure
    (multiplied [ 1 2 3 4 5 ])
    ;=> 120
    ```
    <tag>Reduce</tag>

4. Reverse a list
    ```clojure
    (reverse-list [ 1 2 3 4 5 ])
    ;=> [ 5 4 3 2 1 ]
    ```
    <tag>Recursion</tag>

5. Get the nth element in a list where the first item is '1'
    ```clojure
    (get-element [ 5 6 7 8 ] 3)
    ;=> 7
    ```
    <tag>Recursion</tag>

## Beginner

1. Calculate the sum of the squares of all odd numbers in a list
    ```clojure
    (odd-square-sum [ 4 5 6 7 8 9 ])
    ;=> 155
    ```
    <tag>Filter</tag> <tag>Map</tag> <tag>Reduce</tag>

2. Extract a slice from a list
    ```clojure
    (slice [ 3 4 5 6 7 8 9 ] 2 4)
    ;=> [ 5 6 7 8 ]
    ```
    <tag>Recursion</tag>

3. Generate the first n items of the fibonacci series.
    ```clojure
    (fibn 9)
    ;=> [ 1 1 2 3 5 8 13 ]
    ```
    <tag>Recursion</tag>

4. Improve the performance of the `fibn` function by adding memoisation.
    ```clojure
    (fibn' 9)
    ; => [ 1 1 2 3 5 8 13 ]
    ; only recurses 7 times
    ```
    <tag>Recursion</tag>

## Experienced

1. Flatten a nested list
    ```clojure
    (flatten [ 1 2 3 [ 4 5 6 [ 7 8 9 ] 10 11 12 ] ])
    ;=> [ 1 2 3 4 5 6 7 8 9 10 11 12 ]
    ```
    ```haskell
    -- Nested List type for haskell
    data Nested a = Item a | List [Nested a] deriving (Show)
    List [Item 1, Item 2, List [Item 1, Item 2]]
    ```
    <tag>Recursion</tag>

2. Replace all occurences of an item with another in a nested list
    ```clojure
    (substitute 2 5 [ 1 2 3 [ 1 2 2 3 ] [ 1 [ 2 ] 3 ] ])
    ;=> [ 1 5 3 [ 1 5 3 ] [ 1 5 5 3] [ 1 [ 5 ] 3 ]]
    ```
    <tag>Recursion</tag>

3. Implement `deep-map`, `deep-filter` and `deep-reduce` which operate on nested
   lists.

   Use them to calculate the sum of all the squares of odd numbers in a
   nested list (see beginner #1)
    ```clojure
    (odd-square-sum-deep [ 4 5 [ 6 7 [ 8 ] 9 ] ])
    ;=> 155
    ```
    <tag>Recursion</tag> <tag>Map</tag> <tag>Filter</tag> <tag>Reduce</tag>

4. Implement `odd-square-sum-deep` using `flatten`. Which version is
   preferrable?
    ```clojure
    (odd-square-sum-deep [ 4 5 [ 6 7 [ 8 ] 9 ] ])
    ;=> 155
    ```
   <tag>Map</tag> <tag>Filter</tag> <tag>Reduce</tag>

## Expert

1. ???
