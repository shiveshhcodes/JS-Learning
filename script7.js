// let id = document.querySelector("div");

// id.style.backgroundColor = "red"; 
// id.style.fontSize = "34px";
// id.innerText = "wow boss";
// id.style.visibility = "hidden";

let newBtn = document.createElement("button")
newBtn.innerText = "Click Me";
console.log(newBtn);

let div = document.querySelector("div");
div.append(newBtn);
