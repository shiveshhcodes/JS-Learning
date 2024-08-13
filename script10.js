// function sum (a,b) {
//     console.log(a+b)
// }

// setTimeout(() => {
//     sum(21,23)
// } , 2000)

// setTimeout(sum(24,23) , 3000)

// function getData(dataID , getNextData) {
//     // 2s
//     setTimeout(() => {
//         console.log("data is" , dataID)
//         if (dataID < 689) {
//             getData(dataID+4 , getNextData);
//         }
//     } , 1);
// }

// getData(4)
// function getData(dataID , getNextData) {
//     // 2s
//     setTimeout(() => {
//         console.log("data is" , dataID)
//         if (getNextData) {
//             getNextData();
//         }
//     } , 200);
// }
// getData(1,() =>{
//  getData(2,()=>{
//   getData(3,()=>{
//     getData(4,()=>{
//         getData(5)
//     })
//   })
//  })
// })

let promise = new Promise((resolve , reject) =>{
    console.log("it is a success")
    // resolve("it's an hit")
    reject("it's not an hit")
})
