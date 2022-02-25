import axios from 'axios';

console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661

// LESSONS
// Promise. Вариант с resolve
// let promise = new Promise((resolve, reject) => {
//     setTimeout(response => {
//        if (response.code === 200) resolve(response.data.id)
//     }, 500, {data: {id: "34hlb", name: "Anton"}, code: 200})
// })
// promise
//     .then(response => {
//         return new Promise((res, rej) => {
//             setTimeout((resp)=> {
//                 if (resp.code === 200) res(resp.data)
//             }, 500, {data: {email: "antonrozdobudko@gmail.com"}, code: 200})
//         })
//     })
//     .then((response: any) => console.log(response.email))

// Promise. Вариант с reject
// let promise = new Promise((resolve, reject) => {
//     setTimeout((data) => {
//         if (data.code === 401) reject(data.data)
//     }, 1000, {data: 'Unknown', message: '', code: 401})
// })
//
// promise
//     .then(
//         response => console.log("Hello", response),
//         err => console.log(err))

//Async / await

// When resolved
// const f = async () => {
//     const response = await new Promise( resolve => {
//         setTimeout(() => {
//             resolve("Async testing")
//         }, 1000)
//     } )
//     console.log(response)
// }
//
// f().then(() => console.log("Promise"))

// When rejected #1
// const f = async () => {
//     let response = await new Promise( (resolve, reject)=> {
//         setTimeout( ()=> {
//             reject("I was rejected")
//         }, 1000 )
//     })
//     console.log("I shouldn't be called", response)
// }
//
// f()
//     .then(()=>console.log("Resolved"))
//     .catch((err)=>console.log("Rejected - ", err))

// When rejected #2
// const f = async () => {
//     try {
//         let response = await new Promise( (resolve, reject)=> {
//             setTimeout( ()=> {
//                 reject("I was rejected")
//             }, 1000 )
//         })
//         console.log("I shouldn't be called", response)
//     }
//     catch (error) {
//         console.log("Error is right here - ", error)
//     }
// }
//
// f()

// Tasks
// 5) Изучить API по ссылке https://jsonplaceholder.typicode.com/guide/
// 6) в файле lesson_3.ts реализовать методы get, post, put, delete через axios

const getData = () => {
    axios
        .get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => console.log("get", response.data))
}
getData()

const postData = () => {
    axios
        .post('https://jsonplaceholder.typicode.com/posts', {
            id: 101,
            title: "Only this",
            body: "New item",
            userId: 1
        })
        .then(response => console.log("post", response.data))
}
postData()

const deleteData = () => {
    axios
        .delete("https://jsonplaceholder.typicode.com/posts/100")
        .then(response => console.log("delete", response.data))
}
deleteData()

const updateData = () => {
    axios
        .put('https://jsonplaceholder.typicode.com/posts/1', {
            userId: 1,
            id: 1,
            body: "New",
            title: "Updated"
        })
        .then(response => console.log("update", response.data))
}
updateData()

// just a plug
export default () => {};