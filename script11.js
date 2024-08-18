const URL = "https://cat-fact.herokuapp.com/facts"
const factPara = document.querySelector("#fact")
const button = document.querySelector("#btn")

// const getFacts = async () => {
//     console.log("getting data....")
//     let response = await fetch(URL)
//     console.log(response.status)
//     let data = await response.json();
//     factPara.innerText = data[3].text;
// }

function getFacts() {
    console.log("fetching data....");
    fetch(URL)
    .then((response) => {
      return response.json();
    }).then((data) =>{
     console.log(data);
     factPara.innerText = data[2].text;    
    })
}

button.addEventListener("click" , getFacts)