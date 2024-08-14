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

// let promise = new Promise((resolve , reject) =>{
//     console.log("it is a success")
//     // resolve("it's an hit")
//     reject("it's not an hit")
// })

// function getData(dataID){
//     return new Promise ((resolve , reject) => {
//         setTimeout(() =>{
//             console.log("data is" , dataID)
//              resolve("success")
//         } , 5000)
//     })
// }


// const getPromise = () =>{
//     return new Promise((resolve , reject) => {
//         console.log("i am a shivesh's promise");
//         resolve(", therefore it's a HIT");
//         reject(",therefore it's not an HIT")
//     });
// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise got printed" , res)
// })

// promise.catch((err) =>{
//     console.log("promise did not get printed" , err)
// })


// function asyncFunc1() {
//     return new Promise ((resolve , reject) => {
//      setTimeout(() => {
//       console.log("data 1 = 21,23,423,23");
//       resolve("success")
//      }, 4000);
//     });
// }

// function asyncFunc2() {
//     return new Promise ((resolve , reject) => {
//      setTimeout(() => {
//       console.log("data 2 = 621,33,3,63");
//       resolve("success")
//      }, 4000);
//     });
// }

// console.log("fetching data 1.....")
// asyncFunc1().then(() => {
//     console.log("fetching data 2.....");
//      asyncFunc2().then(() => {})
// })

// function getData(dataID) {
//     return new Promise((resolve , reject) =>{
//         // 2s
//         setTimeout(() => {
//             console.log("data is" , dataID)
//             resolve("all data shown successfully")
//         } , 2000);
//     })
// }


// // chain function.
// getData(2).then(() => {
//     return getData(3);
// }).then((res) =>{
//     return getData(4);
// }).then((res) =>{
//     return getData(5)
// }).then((res) =>{
//     setTimeout(() =>{
//         console.log("everything was successfull")
//     }, 3000)
// })


function getData(dataID){
    return new Promise((resolve , reject) => {
        setTimeout(() =>{
            console.log("data" , dataID);
            resolve("successed");
        }, 3200)
    });
}

// async await.,.,

// async function getAllData() {
//     console.log("getting data 1....")
//     await getData(1)
//     console.log("getting data 2....")
//     await getData(2)
//     console.log("getting data 3....")
//     await getData(3)
//     console.log("getting data 4....")
//     await getData(4)
//     console.log("getting data 5....")
//     await getData(5)
//     console.log("getting data 6....")
//     await getData(6)
//     setTimeout(() =>{
//         console.log("all results are printed.")
//     } , 2000)
// }

(async function() {
    console.log("getting data 1....")
    await getData(1)
    console.log("getting data 2....")
    await getData(2)
    console.log("getting data 3....")
    await getData(3)
    console.log("getting data 4....")
    await getData(4)
    console.log("getting data 5....")
    await getData(5)
    console.log("getting data 6....")
    await getData(6)
    setTimeout(() =>{
        console.log("all results are printed.")
    } , 2000)
})()