### Task

Implement a higher-order function `memoize` that takes a function as input and returns a memoized version of that function. The memoized function should cache the results of function calls with specific arguments and return the cached result when the same arguments are passed again.

For this task, in addition to the the `memoize` function, the candidate will need to implement two more functions to be memoized:

1. An addition function called `add` that accepts two numerical arguments and returns their sum.

2. A string concatenation function named `concatStrings` that takes one or more string arguments and returns a single concatenated string.

### Implementation

```javascript
function memoize(fn) {
    const cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            console.log(`From cache`);
            return cache.get(key);
        }
        console.log(`Running function`);
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}
```

### Test Cases

1. **Test memoization with a `add` function:**

    ```javascript
    function add(a, b) {
        return a + b;
    }

    const memoizedAdd = memoize(add);

    console.log(memoizedAdd(1, 2)); // Expected output: "Running function" followed by 3
    console.log(memoizedAdd(1, 2)); // Expected output: "From cache" followed by 3
    console.log(memoizedAdd(3, 3)); // Expected output: "Running function" followed by 6
    console.log(memoizedAdd(3, 3)); // Expected output: "From cache" followed by 6
    ```

2. **Test with `concatStrings` function:**

    ```javascript
    function concatStrings(...strings) {
        return strings.join("");
    }

    const memoizedConcatStrings = memoize(concatStrings);

    console.log(memoizedConcatStrings("hello", " ", "world")); // Expected output: "Running function" followed by "hello world"
    console.log(memoizedConcatStrings("hello", " ", "world")); // Expected output: "From cache" followed by "hello world"
    console.log(memoizedConcatStrings("foo", "bar")); // Expected output: "Running function" followed by "foobar"
    console.log(memoizedConcatStrings("foo", "bar")); // Expected output: "From cache" followed by "foobar"
    ```

These test cases will help ensure that the memoized function is correctly caching results and only recalculating when necessary. The console logs in the implementation provide clear feedback on when the function is being called versus when the result is being fetched from the cache.
