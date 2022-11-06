const getIntersectionOfSortedArrays = (arr1, arr2) => {
    const filteredArray = arr1.filter((n) => {
        return arr2.indexOf(n) !== -1;
    });

    let uniqueChars = [];
    filteredArray.forEach((element) => {
        if (!uniqueChars.includes(element)) {
            uniqueChars.push(element);
        }
    });

    return uniqueChars;
}

console.log(getIntersectionOfSortedArrays([10, 11, 24], [-2, 3, 4])); // []
console.log(getIntersectionOfSortedArrays([10, 11, 24], [10, 13, 14, 18, 24, 30])); // [10, 24]
console.log(getIntersectionOfSortedArrays([], [2])); // []
console.log(getIntersectionOfSortedArrays([3, 5, 10], [10, 12, 19, 21])); // [10]
console.log(getIntersectionOfSortedArrays([10, 13, 14, 18, 24, 30], [10, 11, 24])); // [10, 24]