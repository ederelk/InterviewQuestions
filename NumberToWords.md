### Task

Implement a function `numberToWords` that converts an integer between 0 and 1,000,000 into its word representation. For example, the number 1 should become "one", and the number 2500 should become "two thousand five hundred".

This task can also be broken down into two parts: first, convert an integer between 0 and 1,000, and then extend it to handle numbers between 0 and 1,000,000.

### Implementation Outline (These can be used as hints for the candidate if needed)

Here's a high-level outline of how the function could be implemented:

1. Define arrays for words corresponding to units, teens, tens, and thousands.
2. Handle special cases for 0 and 1,000,000 separately.
3. Break down the number into hundreds, tens, and units, and construct the word representation accordingly.

### Example Implementation

```javascript
function numberToWords(num) {
    if (num < 0 || num > 1000000) {
        return "unsuported";
    }
    if (num === 0) return "zero";
    if (num === 1000000) return "one million";

    const units = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const teens = [
        "",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const thousands = ["", "thousand"];

    let result = "";

    const convertHundreds = (n) => {
        let str = "";
        if (n > 99) {
            str += units[Math.floor(n / 100)] + " hundred ";
            n %= 100;
        }
        if (n > 10 && n < 20) {
            str += teens[n - 10] + " ";
        } else {
            if (n >= 10) {
                str += tens[Math.floor(n / 10)] + " ";
                n %= 10;
            }
            if (n > 0) {
                str += units[n] + " ";
            }
        }
        return str.trim();
    };

    if (num >= 1000) {
        result += convertHundreds(Math.floor(num / 1000)) + " thousand ";
        num %= 1000;
    }

    result += convertHundreds(num);

    return result.trim();
}
```

### Test Cases

1. **Test single-digit numbers:**

    ```javascript
    console.log(numberToWords(1)); // Expected output: "one"
    console.log(numberToWords(9)); // Expected output: "nine"
    ```

2. **Test tens:**

    ```javascript
    console.log(numberToWords(10)); // Expected output: "ten"
    console.log(numberToWords(21)); // Expected output: "twenty one"
    ```

3. **Test hundreds:**

    ```javascript
    console.log(numberToWords(100)); // Expected output: "one hundred"
    console.log(numberToWords(305)); // Expected output: "three hundred five"
    ```

4. **Test thousands:**

    ```javascript
    console.log(numberToWords(1000)); // Expected output: "one thousand"
    console.log(numberToWords(2500)); // Expected output: "two thousand five hundred"
    ```

5. **Test higher numbers:**

    ```javascript
    console.log(numberToWords(123456)); // Expected output: "one hundred twenty three thousand four hundred fifty six"
    console.log(numberToWords(999999)); // Expected output: "nine hundred ninety nine thousand nine hundred ninety nine"
    ```

6. **Test special cases:**

    ```javascript
    console.log(numberToWords(0)); // Expected output: "zero"
    console.log(numberToWords(1000000)); // Expected output: "one million"
    ```

These test cases cover a range of numbers and help verify that the function correctly converts integers to their word representations.

### A different approach. (I prefer this)

```javascript
const words = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
};

function convertLessThanHundred(num) {
    let str = "";

    if (num > 0 && num <= 20) {
        return words[num];
    }
    if (num > 20 && num < 100) {
        const by10 = num - (num % 10);
        str += ` ${words[by10]}`;
        if (num % 10 > 0) {
            str += ` ${words[num % 10]}`;
        }
    }
    return str.trim();
}

function covertLessThanThousand(num) {
    let str = "";
    if (num >= 100 && num < 1000) {
        const by100 = (num - (num % 100)) / 100;
        str += ` ${words[by100]} hundred`;
        if (num % 100 > 0) {
            str += ` ${convertLessThanHundred(num % 100)}`;
        }
        return str.trim();
    } else {
        return convertLessThanHundred(num);
    }
}

function numberToWords2(num) {
    if (num < 0 || num > 1000000) {
        return "unsuported";
    }
    if (num === 0) return "zero";
    if (num === 1000000) return "one million";

    let str = "";
    if (num >= 1000) {
        str += ` ${covertLessThanThousand(
            (num - (num % 1000)) / 1000
        )} thousand`;
    }

    str += ` ${covertLessThanThousand(num % 1000)}`;

    return str.trim();
}
```
