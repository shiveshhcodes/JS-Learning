// let id = document.querySelector("div");

// id.style.backgroundColor = "red"; 
// id.style.fontSize = "34px";
// id.innerText = "wow boss";
// id.style.visibility = "hidden";

let newBtn = document.createElement("button")
newBtn.innerText = "Click MeE";
console.log(newBtn);

let div = document.querySelector("div");
// div.append(newBtn);
div.before(newBtn);
newBtn.remove();



// let newHeading = document.createElement("h2");
// newHeading.innerHTML = "<i> Hello Shivesh </i>";
// console.log(newHeading);

// let p = document.querySelector("body").prepend(newHeading)
// p.prepend(newHeading);
// p.append(newHeading);
// p.before(newHeading)
// p.after(newHeading)

