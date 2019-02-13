/* ДЗ 2 - работа с исключениями и отладчиком */

/*
 Задача 1:
 Функция принимает массив и фильтрующую фукнцию и должна вернуть true или false
 Функция должна вернуть true только если fn вернула true для всех элементов массива
 Необходимо выбрасывать исключение в случаях:
 - array не массив или пустой массив (с текстом "empty array")
 - fn не является функцией (с текстом "fn is not a function")
 Запрещено использовать встроенные методы для работы с массивами
 */
function isAllTrue(array, fn) {
    var x = 0; // счетчик наличия переменных в переданом массиве array
    var y = 0; // счетчик переданных false в fn

    // Проверка на array не массив или на пустой массив
    if (!(array instanceof Array) || (array.length == 0)) {
        // Вывод исключения, если переменная array не массив или пустой массив
        throw new Error('empty array');
    } else
    // Проверка fn на то, что она функция
    if (typeof fn != 'function') {
        // Вывод исключения, fn не является функцией
        throw new Error("fn is not a function");
    } else {
        // Перебор всех элементов переданого массива array в цикле
        for (var i = 0; i < array.length; i++) {
            // В переменной z находится функция с i-ым элементом массива
            var z = fn(array[i]);
            // Проверка fn на наличие элемента в массиве array
            if (z == false) {
                // Если i-ый элемент массива не передан в fn, то увеличиваем переменную у на 1
                y++;
            } else
            // Если i-ый элемент массива передан в fn, то увеличиваем переменную х на 1
            if (z == true) {
                x++;
            }
            // Проверяем наличие элементов в массиве array
            if (array.length == x) {
                // Если элементы в массиве array есть, возвращаем true
                return true;
            } else if (y > 0) {
                // При отсутствии элементов в массиве array, возвращаем false
                return false;
            }
        }
    }
}

/*
 Задача 2:
 Функция принимает массив и фильтрующую фукнцию и должна вернуть true или false
 Функция должна вернуть true если fn вернула true хотя бы для одного из элементов массива
 Необходимо выбрасывать исключение в случаях:
 - array не массив или пустой массив (с текстом "empty array")
 - fn не является функцией (с текстом "fn is not a function")
 Зарпещено использовать встроенные методы для работы с массивами
 */
function isSomeTrue(array, fn) {
    var x = 0;
    // Проверка на array не массив или на пустой массив (аналогично задаче 2)
    if (!(array instanceof Array) || (array.length == 0)) {
        // Вывод исключения, если переменная array не массив или пустой массив
        throw new Error('empty array');
    } else
        // Проверка fn на то, что она функция
        if (typeof fn != 'function') {
            // Вывод исключения, fn не является функцией
            throw new Error("fn is not a function");
        } else {
            // Перебор всех элементов переданого массива array в цикле
             for (var i = 0; i < array.length; i++) {
                var y = fn(array[i]);
                if ( y == true ) {
                     x++;
                }
            }
                if ( x < 1 ) {
                     return false;
                 } else if ( x >=1 ) {
                    return true;
                 }
            }
}

/*
 Задача 3:
 Функция принимает заранее неизветсное количество аргументов, первым из которых является функция fn.
 Функция должна поочередно запустить fn для каждого переданного аргумента (кроме самой fn).
 Функция должна вернуть массив аргументов, для которых fn выбросила исключение.
 Необходимо выбрасывать исключение в случаях:
 - fn не является функцией (с текстом "fn is not a function")
 */
function returnBadArguments(fn) {
    var x = new Array();
    var z = '';
    if (typeof fn != 'function') {
        throw new Error("fn is not a function");
    }
    for (var i = 1; i < arguments.length; i++) {
        try {
            z = fn(arguments[i]);
        } catch (e) {
            x.push(arguments[i]);
        }
    }
    return x;
}

/*
 Задача 4:
 Функция имеет параметр number (по умолчанию - 0)
 Функция должна вернуть объект, у которого должно быть несколько методов:
 - sum - складывает number с переданными аргументами
 - dif - вычитает из number переданные аргументы
 - div - делит number на первый аргумент. Результат делится на следующий аргумент (если передан) и так далее.
 - mul - умножает number на первый аргумент. Результат умножается на следующий аргумент (если передан) и так далее.

 Количество передаваемых в методы аргументов заранее неизвестно
 Необходимо выбрасывать исключение в случаях:
 - number не является числом (с текстом "number is not a number")
 - какой-либо из аргументов div является нулем (с текстом "division by 0")
 */
function calculator(number = 0) {
    if (typeof number != 'number') {
        throw new Error("number is not a number");
    }

    var ob = {
        sum: function () {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] === 0) {
                    throw new Error("division by 0");
                }
                number += arguments[i];
            }
            return number;
        },
        dif: function () {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] === 0) {
                    throw new Error("division by 0");
                }
                number -= arguments[i];
            }
            return number;
        },
        div: function () {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] === 0) {
                    throw new Error("division by 0");
                }
                number /= arguments[i];
            }
            return number;
        },
        mul: function () {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] === 0) {
                    throw new Error("division by 0");
                }
                number *= arguments[i];
            }
            return number;
        }
    }
    return ob;
}

export {
    isAllTrue,
    isSomeTrue,
    returnBadArguments,
    calculator
};
