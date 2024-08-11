// function sum (a,b) {
//     console.log(a+b)
// }

// setTimeout(() => {
//     sum(21,23)
// } , 2000)

// setTimeout(sum(24,23) , 3000)

function getData(dataID , getNextData) {
    // 2s
    setTimeout(() => {
        console.log("data - " , dataID)
        if (getNextData) {
            getNextData();
        }
    } , 2000);
}

