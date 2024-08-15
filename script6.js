// let header = document.getElementById("para");
// console.dir(header)

// let boss = document.getElementsByClassName("boss")
// console.dir(boss)

// let something = document.getElementsByTagName("p")
// console.dir(something)

// let elements = document.querySelector("p") // it selects all the paragraph elements.
// console.dir(elements)

// let div = document.querySelector("div");
// console.dir(div)

// let h2 = document.querySelector("h2")
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + " from shivesh Richhariya";

let divs = document.querySelectorAll(".box");
// divs[0].innerText = divs[0].innerText + " new unique value of 1 "
// divs[1].innerText = divs[1].innerText + " new unique value of 2 "
// divs[2].innerText = divs[2].innerText + " new unique value of 3 "

let idx = 1;
for( div of divs) {
   div.innerText = div.innerText + ` and new unique value is ${idx}`
    idx++;
}
