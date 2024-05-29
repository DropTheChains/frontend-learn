// {
//     var a = 1;
//     let b = 1;
// }
// console.log(a)
// console.log(b)


// var a = 1;
// var a = 2;
// var a = '测试';

// let b = 1;
// let b = 2;

// console.log(a)
// var a = 1;
// console.log(b)
// let b = 1;


// const a = 1;
// a = 2

// let arr = [1,2,3]
// console.log(arr[1])

// let [x,y,z] = [1,2,3]
// console.log(x,y,z)

let person = {
    name: '张三',
    age: 18,
    email: '12345@admin.com'
}
let {name,age} = person;
// console.log(name,age)

// function haha({name,age}){
//     console.log(name)
//     console.log(age)
// }
// haha(person)

// let message = {
//     body: {
//         user: {
//             firstName: 'haha'
//         }
//     }
// }
// console.log(message?.body?.user?.firstName || 'default' )

function add(a,c,b=5){
    return a + b + c;
}
console.log(add(1,2))


function print(arg){
    console.log(arg)
}

let print1 = function(arg){
    console.log(arg)
}

let print2 = (arg) =>{
    return arg;
}

let sum = (a,b) =>{
    return a+b;
}
sum(1,2)


let info = `你好，我的名字是：【${name}】,我的年龄是【${age}】,我的邮箱是【${person.email}】`;
console.log(info)

let url = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";
console.log(1)
let promise = fetch(url);
promise.then( (resp) => {
    resp.json().then( (data) =>{
        console.log(data)
    })
})
console.log(2)