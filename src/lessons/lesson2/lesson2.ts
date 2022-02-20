console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0

// Область видимости, лексическое окружение
// #1. Examples from the links above
// let clock = "Время глобальное, доступно отовсюду"
//
// function street () {
//     // scope: street
//     // let clock = "Время на улице"
//
//     function building ()  {
//         // scope: building
//         // let clock = "Время в здании"
//
//         function room ()  {
//             // scope: room
//             // let clock = "Время комнате"
//             console.log(clock)
//         }
//         room()
//     }
//     building()
//
// }
// street()


// #2. Examples from the links above
// let name = "John";
//
// function sayHi() {
//     alert("Hi, " + name);
// }
//
// name = "Pete";
//
// sayHi();

// #3. Examples from the links above
// function makeWorker() {
//     let name = "Pete";
//
//     return function() {
//         alert(name);
//     };
// }
//
// let name = "John";
//
// // create a function
// let work = makeWorker();
//
// // call it
// work();

// #4. Examples from the links above
// function makeCounter() {
//     let count = 10;
//
//     return function() {
//         return count++; // есть доступ к внешней переменной "count"
//     };
// }
//
// let counter = makeCounter();
//
// console.log( counter() ); // 0
// console.log( counter() ); // 1
// console.log( counter() ); // 2

// #5. Examples from the links above. To make it work: sum(5)(10) - it needs to return a function!!!
// function sum(first: number) {
//     return function (second: number) {
//         return second + first
//     }
// }
// console.log(sum(5)(20))

// #6. Examples from the links above.
// function inBetween (a: number, b: number) {
//     return function (x: number) {
//         return x>=a && x<=b
//     }
// }
// function inArray (array: number[]) {
//     return function (x: number) {
//         return array.includes(x)
//     }
// }
//
// let arr = [1, 2, 3, 4, 5, 6, 7];
//
// alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6
// alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

//КАРИРОВАНИЕ

// #1. Example of multiply the numbers
// const multi = (a: number) => {
//     return (b: number) => {
//         return (c: number) => {
//             return a*b*c
//         }
//     }
// }
//
// console.log(multi(2)(3)(4))

// #2. Example for discount

// const discount = (discount: number) => {
//     return (amount: number) => {
//         return amount * discount
//     }
// }
//
// let tenPercentDiscount = discount(0.1)
//
// console.log(tenPercentDiscount(500))

// #2. Example for the same volume

// const volume = (h: number) => {
//     return (w: number) => {
//         return (d: number) => {
//             return h * w * d
//         }
//     }
// }
//
// let hCylinderHeight = volume(100)
// console.log(hCylinderHeight(5)(2))

// #3. Example for Сurrying custom-made function
// function curry(fn: any, ...args: any) {
//     return (..._arg: any) => {
//         return fn(...args, ..._arg);
//     }
// }
// const multiply = (a: number, b: number, c: number) => {
//     return a * b * c
// }
// let result = curry(multiply, 10)
// console.log(result(2, 15))


// Recursion
// #1. Example
// let a = 0
// // @ts-ignore
// const rec = () => {
//     a++
//     console.log(a)
//     return a >= 5 ? a : rec()
// }
// rec()


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9
console.log('Task 1')
/*const sum = (a: number) => {
    return (b: number) => {
        return a + b
    }
}
console.log(sum(3)(6))*/

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3
console.log('Task 2')
/*const makeCounter = () => {
    let count = 0
    return () => {
        return ++count
    }
}
const counter = makeCounter()
const counter2 = makeCounter()
console.log(counter())
console.log(counter())
console.log(counter2())
console.log(counter())*/

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;
console.log('Task 3')
/*function Counter (this: any, initial: number) {
    let count = initial
    this.increase = () =>  ++count
    this.decrease = () =>  --count
    this.reset = () => count = 0
    this.set = () => count = initial
}
// @ts-ignore
let counter = new Counter(5)
console.log(counter.increase())
console.log(counter.increase())
console.log(counter.decrease())
console.log(counter.decrease())
console.log(counter.reset())
console.log(counter.increase())
console.log(counter.set())
console.log(counter.decrease())*/

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore
console.log('Task 4')
/*const superSum = (count: number) => {
    if (count <= 0) return 0
    if (count === 1) return (num: number) => num

    let _args: number[] = []
    const helper = (...args: number[]) => {
        _args = [..._args, ...args]
        if (_args.length >= count) {
            _args.length = count
            return _args.reduce( (acc, el) => acc + el, 0 )
        } else {
            return helper
        }
    }
    return helper
}
// @ts-ignore
console.log(superSum(3)(2)(5)(3))
// @ts-ignore
console.log(superSum(5)(2)(1, 4, 2)(5, 6))*/

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion
console.log('Task 5')
// Вычислить сумму чисел до данного
// #1
/*const sumTo = (n: number) => {
    let sum = 0
    for (let i = 1; i <= n; i++) sum += i
    return sum
}
console.log(sumTo(100))*/
// #2
// @ts-ignore
/*const sumTo = (n: number) => {
    return n === 1 ? 1 : n + sumTo(n - 1)
}
console.log(sumTo(100))*/

// Вычислить факториал
// @ts-ignore
/*
const factorial = (n: number) => {
    return n === 1 ? 1 : n * factorial(n -1)
}
console.log(factorial(5))
*/

// Числа Фибоначчи
/*const fib = (n: number) => {
    let result = [1, 1]
    if (n === 1 || n === 2) return result[0]
    if (n > 2) {
        for (let i = 2; i < n; i++) {
            result.push(result[i-1]+result[i-2])
        }
        return result[result.length - 1]
    }
}

console.log(fib(3)) // 2
console.log(fib(7)) // 13
console.log(fib(77)) // 5527939700884757*/

// Вывод односвязного списка
/*let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};*/

/*// @ts-ignore
const printList = (object: any) => {
    return object.next != null ? `${object.value} ${printList(object.next)}` : object.value
}
console.log(printList(list))*/

/*// @ts-ignore
const printList = (object: any) => {
    while (object.next != null)  {
        console.log(object.value)
        object = object.next
    }
    console.log(object.value)
}
printList(list)*/

// Вывод односвязного списка в обратном порядке
/*// @ts-ignore
const printList = (object: any) => {
    if (object.next) {
        printList(object.next)
    }
    console.log(object.value)
}
printList(list)*/

/*// @ts-ignore
const printList = (object: any) => {
    let array = []
    while (object.next) {
        array.unshift(object.value)
        object = object.next
    }
    array.unshift(object.value)
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}
printList(list)*/


// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.



// just a plug

export default () => {
};