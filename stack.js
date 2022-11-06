const isBracketStructureBalanced = (str) => {
    const stack = [];
    const brackets = '[](){}<>';

    for (const char of str) {
        const charIndex = brackets.indexOf(char);

        if (charIndex % 2 === 0) {
            stack.push(charIndex + 1);
        } else {
            if (stack.pop() !== charIndex) {
                return false
            }
        }
    }

    return stack.length === 0;
}

console.log(isBracketStructureBalanced('[()]'));  // true
console.log(isBracketStructureBalanced('[цу(цас)сцы]выс'));  // true
console.log(isBracketStructureBalanced('{<>}}')); // false
console.log(isBracketStructureBalanced('(>'));  // false
console.log(isBracketStructureBalanced('()'));  // true
console.log(isBracketStructureBalanced('([)]')); // false