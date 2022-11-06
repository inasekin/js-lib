// Реализуйте и экспортируйте по умолчанию функцию, которая сравнивает
// переданные версии version1 и version2. Если version1 > version2, то
// функция должна вернуть 1, если version1 < version2, то - -1, если же version1 === version2, то - 0.
//
// Версия - это строка, в которой два числа (мажорная и минорные версии) разделены точкой,
// например: 12.11. Важно понимать, что версия - это не число с плавающей точкой, а несколько
// чисел не связанных между собой. Проверка на больше/меньше производится сравнением каждого
// числа независимо. Поэтому версия 0.12 больше версии 0.2.

const compareVersion = (version1, version2) => {
    if (version1 === version2) {
        return 0;
    }

    const version1Components = version1.split('.');
    const version2Components = version2.split('.');

    const lengthVersions = Math.min(version1Components.length, version2Components.length);

    // loop while the components are equal
    for (let i = 0; i < lengthVersions; i += 1) {
        // A bigger than B
        if (parseInt(version1Components[i]) > parseInt(version2Components[i])) {
            return 1;
        }

        // B bigger than A
        if (parseInt(version1Components[i]) < parseInt(version2Components[i])) {
            return -1;
        }
    }

    if (version1Components.length > version2Components.length) {
        return 1;
    }

    if (version1Components.length < version2Components.length) {
        return -1;
    }

    return 0;
};

console.log(compareVersion("1", "2"));
console.log(compareVersion("2", "1"));

console.log(compareVersion("1.0", "1.0"));
console.log(compareVersion("2.0", "1.0"));
console.log(compareVersion("1.0", "2.0"));
console.log(compareVersion("1.0.1", "1.0"));