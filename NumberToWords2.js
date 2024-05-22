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
