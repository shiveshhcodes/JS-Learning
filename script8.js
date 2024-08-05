// let btn1 = document.querySelector('#btn1');

// btn1.onclick = (e) => {
//     console.log(e)
// }
// let a = 0
// let btn2 = document.querySelector('#btn2')
// btn2.onmouseover = () => {
//     a++;
//     console.log(`btn was clicked twice and total of ${a} times.`)

// }

// btn1.addEventListener("click" , () =>{
//     console.log("button was printed")
// })

// qs

// let modeBtn = document.querySelector("#mode")
// let currMode = "light";
// modeBtn.addEventListener("click" , () =>{
//      if (currMode ==="light") {
//         currMode = "dark"
//         document.querySelector("body").style.backgroundColor = "black";
//      }
//      else {
//         currMode = "light"
//         document.querySelector("body").style.backgroundColor = "white";
//      }
//      console.log(currMode);
// })
let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";
modeBtn.addEventListener("click" , () =>{
     if (currMode === "light") {
        currMode = "dark"
        body.classList.add("dark")
     }
     else {
        currMode = "light"
        body.classList.add("light")
     }
     console.log(currMode);
})

