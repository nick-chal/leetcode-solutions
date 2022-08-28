var nextGreatestLetter = function (letters, target) {
    for (const char of letters) {
        if (char.localeCompare(target) > 0) return char;
    }

    return letters[0];
};

console.log(nextGreatestLetter(["c", "f", "j"], "d"));