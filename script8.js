let btn1 = document.querySelector('#btn1');

btn1.onclick = () => {
    console.log("btn1 was click")
}
let a = 0
let btn2 = document.querySelector('#btn2')
btn2.onmouseover = () => {
    a++;
    console.log(`btn was clicked twice and total of ${a} times.`)

}