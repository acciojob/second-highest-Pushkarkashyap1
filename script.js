//your JS code here. If requi
function secondHighest(arr) {
    if (!arr || arr.length < 1) {
        return -Infinity;
    }

    // First pass: find the maximum
    let max = Math.max(...arr);

    // Second pass: find the largest element smaller than max
    let secondMax = -Infinity;

    for (let num of arr) {
        if (num < max && num > secondMax) {
            secondMax = num;
        }
    }

    return secondMax;
}